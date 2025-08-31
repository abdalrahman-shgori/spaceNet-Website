import React, { useEffect, useState } from 'react';
import { getTerms } from '../services/websiteApis/services';
import PolicyLayout from '../components/policy/PolicyLayout';
import { useTranslation } from 'react-i18next';
import useLocales from '../locals/useLocales';

const Terms = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const { t,i18n } = useTranslation();
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError('');
    const fetchTerms = async () => {
      try {
        const lang = i18n.language || 'en';
        const res = await getTerms(lang);
        if (!mounted) return;
        const description =i18n.language === 'en' ? res?.data?.description : i18n.language === 'ar' ? res?.data?.description_ar : res?.data?.description_ku ;
        const updated = res?.data?.updated_at || '';
        setContent(description);
        setUpdatedAt(updated ? new Date(updated).toLocaleDateString() : '');
      } catch (e) {
        setError('Failed to load terms and conditions.');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchTerms();
    return () => {
      mounted = false;
    };
  }, [i18n.language]);

  return (
    <PolicyLayout
      title={t("Footer.terms")}
      loading={loading}
      error={error}
      contentHtml={content}
      updatedAt={updatedAt}
    />
  );
};

export default Terms; 