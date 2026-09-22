import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/favicon/android-chrome-512x512.png'
}) => {
  const brandName = 'Gargi Engineering Services';
  const pageTitle = title
    ? `${title} | ${brandName}`
    : `${brandName} - PEB Structural Design & Tekla Detailing Consultancy`;

  const metaDescription =
    description ||
    'Gargi Engineering Services provides expert PEB structural design, Tekla 3D detailing, connection design, civil turnkey solutions, and structural engineering consultancy.';

  return (
    <Helmet>
      {/* Document Title */}
      <title>{pageTitle}</title>

      {/* Standard Meta Tags */}
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Gargi Engineering Services" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={brandName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
