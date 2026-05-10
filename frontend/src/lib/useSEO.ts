import { useEffect } from "react";

export const SITE_URL = "https://patientexperienceconsulting.com";

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

function setMeta(selector: string, attr: "name" | "property", attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    const url = `${SITE_URL}${config.path}`;
    const ogImage = config.ogImage || `${SITE_URL}/og-image.jpg`;

    document.title = config.title;
    setMeta('meta[name="description"]', "name", "description", config.description);
    setMeta('meta[name="title"]', "name", "title", config.title);
    if (config.keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", config.keywords);
    }
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      config.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setLink("canonical", url);

    setMeta('meta[property="og:title"]', "property", "og:title", config.title);
    setMeta('meta[property="og:description"]', "property", "og:description", config.description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");

    setMeta('meta[name="twitter:title"]', "name", "twitter:title", config.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", config.description);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    // Per-page JSON-LD
    const existingTags = document.head.querySelectorAll<HTMLScriptElement>(
      'script[data-seo-page="true"]'
    );
    existingTags.forEach((tag) => tag.remove());

    if (config.jsonLd) {
      const items = Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-page", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      const tags = document.head.querySelectorAll<HTMLScriptElement>(
        'script[data-seo-page="true"]'
      );
      tags.forEach((tag) => tag.remove());
    };
  }, [
    config.title,
    config.description,
    config.path,
    config.keywords,
    config.ogImage,
    config.noindex,
    JSON.stringify(config.jsonLd ?? null),
  ]);
}

// Helper builders for common JSON-LD types
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export function howToJsonLd(
  name: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url.startsWith("http") ? s.url : `${SITE_URL}${s.url}` } : {}),
    })),
  };
}
