import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access the id from the URL
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
    const { id } = useParams(); // Get blog ID from URL
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://admin.spacenetiq.com/api/articles/${id}`);
                if (!response.ok) throw new Error('Failed to fetch blog details');
                const data = await response.json();
                setBlog(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBlogDetails();
    }, [id]); // Fetch when the id changes

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h5" color="error">{t('Error:')} {error}</Typography>
            </Container>
        );
    }

    if (!blog) {
        return (
            <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h5">{t('Blog not found')}</Typography>
            </Container>
        );
    }

    const formatDate = (date, lang) => {
        return new Date(date).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <Container sx={{ padding: '20px',marginTop:"80px" }}>
            <Typography
             
                sx={{ 
                     fontFamily: 'var(--font-family)',
                     fontSize:{
                        lg:"48px",
                        md:"48px",
                        sm:"26px",
                        xs:"26px"
                     },
                     textAlign:"center"
                     }}
            >
                {lang === 'ar' ? blog?.title_ar : lang === 'ku' ? blog?.title_ku : blog?.title}
            </Typography>

          

            <Box
                component="img"
                sx={{ width: '100%', borderRadius:{lg:"46px",md:"46px",sm:"18px",xs:"18px"}, marginBottom: '10px' }}
                src={`https://admin.spacenetiq.com/uploads/article/${blog?.image_path}`}
                alt={blog?.title}
            />
  <Typography
                variant="body1"
                sx={{ color: '#051A2F', fontSize: '14px', marginBottom: '20px' }}
            >
                {blog?.updated_at && formatDate(blog.updated_at, lang)}
            </Typography>
            <Typography
                variant="body1"
                sx={{ color: '#051A2F', fontSize:{lg:"21px",md:"21px",sm:"12px",xs:"12px"}, fontFamily: 'var(--font-family)' }}
            >
         <div dangerouslySetInnerHTML={{ __html:lang === 'ar' ? blog?.description_ar : lang === 'ku' ? blog?.description_ku : blog?.description}}/>

              
            </Typography>
        </Container>
    );
};

export default BlogDetails;
