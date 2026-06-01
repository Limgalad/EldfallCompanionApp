import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'factcheck' | 'howto';
  structuredData?: Record<string, unknown>;
  canonicalPath?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200&h=630",
  type = "website",
  structuredData,
  canonicalPath
}: MetaTagsProps) {
  const location = useLocation();
  const baseUrl = "https://eldfallcompanion.tabletophub.nl";
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  const fullTitle = title 
    ? `${title} | Eldfall Chronicles Companion` 
    : "Eldfall Chronicles Companion | Quest Overview & Rules Wiki";
  
  const fullDescription = description || "The ultimate companion app for Eldfall Chronicles tabletop game. Explore Season 1 missions, tactical maps, and a complete searchable rules wiki.";
  
  const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : currentUrl;

  // Generate structured data
  const baseJsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": (type === 'article' || type === 'howto' || type === 'factcheck') ? "Article" : "WebSite",
    "name": fullTitle,
    "headline": title || "Eldfall Chronicles Companion",
    "description": fullDescription,
    "url": currentUrl,
    "image": image,
    "author": {
      "@type": "Person",
      "name": "Eldfall Community"
    }
  };

  const jsonLd = (!structuredData && type === 'website') ? {
    ...baseJsonLd,
    potentialAction: {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/rules?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  } : baseJsonLd;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
