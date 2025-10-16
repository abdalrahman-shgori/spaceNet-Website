const fs = require('fs');

// Use native fetch if available (Node 18+), otherwise dynamically import node-fetch
async function getFetch() {
  if (typeof fetch !== 'undefined') return fetch;
  const { default: nodeFetch } = await import('node-fetch');
  return nodeFetch;
}

const API_URL = 'https://admin.spacenetiq.com/api/articles'; 

async function generateSitemap() {
  try {
    const fetchFn = await getFetch();
    const response = await fetchFn(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }
    const blogs = await response.json(); // response may be array or { data: [...] }

    // Normalize to an array of items, supporting Strapi-like shape { data: [{ id, attributes: {...} }] }
    const blogItems = Array.isArray(blogs)
      ? blogs
      : (Array.isArray(blogs?.data) ? blogs.data : []);

    const nowIso = new Date().toISOString();

    const urls = [
      { loc: 'https://spacecraftiq.com/', lastmod: nowIso },
      { loc: 'https://spacecraftiq.com/academics', lastmod: nowIso },
      { loc: 'https://spacecraftiq.com/core-it', lastmod: nowIso },
      { loc: 'https://spacecraftiq.com/software', lastmod: nowIso },
      { loc: 'https://spacecraftiq.com/design-branding', lastmod: nowIso },
      { loc: 'https://spacecraftiq.com/blogs', lastmod: nowIso },
      ...blogItems.map(item => {
        const attributes = item?.attributes || {};
        const slugOrId = attributes.slug || item.slug || item.id;
        const updatedAtRaw =
          item.updatedAt ||
          attributes.updatedAt ||
          item.publishedAt ||
          attributes.publishedAt;

        let lastmod;
        if (updatedAtRaw) {
          const d = new Date(updatedAtRaw);
          lastmod = isNaN(d.getTime()) ? nowIso : d.toISOString();
        } else {
          lastmod = nowIso;
        }

        return {
          loc: `https://spacecraftiq.com/blogs/${slugOrId}`,
          lastmod
        };
      })
    ];

    const outputPath = fs.existsSync('build') ? 'build/sitemap.xml' : 'public/sitemap.xml';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`).join('')}
</urlset>`;

    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated successfully in ${outputPath}!`);
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap();
