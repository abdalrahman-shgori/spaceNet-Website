import React, { useEffect, useState } from 'react';
import { getPrivacy } from '../services/websiteApis/services';
import PolicyLayout from '../components/policy/PolicyLayout';
import useLocales from '../locals/useLocales';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const { t,i18n } = useTranslation();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError('');
    const fetchPrivacy = async () => {
      try {
        const lang = i18n.language || 'en';
        const res = await getPrivacy(lang);
        if (!mounted) return;
        const description =i18n.language === 'en' ? res?.data?.description : i18n.language === 'ar' ? res?.data?.description_ar : res?.data?.description_ku ;
        const updated = res?.data?.updated_at || '';
        setContent(description);
        setUpdatedAt(updated ? new Date(updated).toLocaleDateString() : '');
      } catch (e) {
        setError('Failed to load privacy policy.');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchPrivacy();
    return () => {
      mounted = false;
    };
  }, [i18n.language]);

  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy</title>
                <link rel="canonical" href="https://spacenetiq/privacy" />
            </Helmet>
     <PolicyLayout
      title={t("navbar.PrivacyPolicy")}
      loading={loading}
      error={error}
      contentHtml={content}
      updatedAt={updatedAt}
    />
    </>
   
  );
};

export default Privacy; 