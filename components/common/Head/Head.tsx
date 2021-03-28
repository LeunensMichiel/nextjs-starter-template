import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';

const Head = () => (
  <>
    <DefaultSeo
      title="My website | Starter Template"
      titleTemplate="%s | Starter Template"
      defaultTitle="My website | Starter Template"
      description="An opinionated starter project for your Next.js projects"
      openGraph={{
        title: 'My website | Starter Template',
        description: 'An opinionated starter project for your Next.js projects',
        type: 'website',
        url: 'https://mywebsite.com',
        site_name: 'My Website',
        images: [
          {
            url: '/card.jpg',
            width: 1200,
            height: 630,
            alt: 'My Website',
          },
        ],
      }}
      twitter={{
        handle: '@michielleunens',
        site: '@michielleunens',
        cardType: 'summary_large_image',
      }}
    />
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/meta/site.webmanifest" key="site-manifest" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#a989f7"
      />
      <link rel="shortcut icon" href="/meta/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Next.js Template" />
      <meta name="application-name" content="Next.js Template" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta name="msapplication-config" content="/meta/browserconfig.xml" />
      <meta name="theme-color" content="#1a1a1a" />
      {/* ENABLE THIS IF SELF-HOSTING FONTS
      <link
        rel="preload"
        href="/fonts/myFont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}
      {/* Add your google-site-verification id here
      <meta
        content="..."
        name="google-site-verification"
      /> */}
    </NextHead>
  </>
);

export default Head;
