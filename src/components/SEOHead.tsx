import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: object;
  ogImage?: string;
  keywords?: string;
}

export function SEOHead({ title, description, path, breadcrumbs, schema, ogImage, keywords }: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set or update keywords meta tag
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Set viewport and charset (ensure they're present)
    if (!document.querySelector('meta[charset]')) {
      const charsetMeta = document.createElement('meta');
      charsetMeta.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charsetMeta, document.head.firstChild);
    }

    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewportMeta);
    }

    // Set or update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://www.aiautomationagencyuk.com${path}`);

    // Set or update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: `https://www.aiautomationagencyuk.com${path}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Antek Automation' },
      { property: 'og:locale', content: 'en_GB' },
      ...(ogImage ? [{ property: 'og:image', content: ogImage }] : []),
      ...(ogImage ? [{ property: 'og:image:width', content: '1200' }] : []),
      ...(ogImage ? [{ property: 'og:image:height', content: '630' }] : []),
      ...(ogImage ? [{ property: 'og:image:alt', content: title }] : []),
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Set or update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@antekautomation' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(ogImage ? [{ name: 'twitter:image', content: ogImage }] : []),
      ...(ogImage ? [{ name: 'twitter:image:alt', content: title }] : []),
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `https://www.aiautomationagencyuk.com${item.url}`,
        })),
      };

      let breadcrumbScript = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script') as HTMLScriptElement;
        breadcrumbScript.id = 'breadcrumb-schema';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Add custom schema if provided
    if (schema) {
      let schemaScript = document.getElementById('page-schema') as HTMLScriptElement | null;
      if (!schemaScript) {
        schemaScript = document.createElement('script') as HTMLScriptElement;
        schemaScript.id = 'page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Remove page-specific schema on unmount
      const schemaScript = document.getElementById('page-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
      const breadcrumbScript = document.getElementById('breadcrumb-schema');
      if (breadcrumbScript) {
        breadcrumbScript.remove();
      }
    };
  }, [title, description, path, breadcrumbs, schema, ogImage, keywords]);

  return null;
}
