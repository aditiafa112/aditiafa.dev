import Head from "next/head";
import React from "react";

export default function Header() {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Aditia Falacha Arvin</title>
      <meta name="title" content="Aditia Falacha Arvin" />
      <meta
        name="description"
        content="This is my personal website, It called ditlab but there is no lab activity here. Just something about me. Before asking me more, you can visit my site "
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aditia.dev/" />
      <meta property="og:title" content="Aditia Falacha Arvin" />
      <meta
        property="og:description"
        content="This is my personal website, It called ditlab but there is no lab activity here. Just something about me. Before asking me more, you can visit my site "
      />
      <meta property="og:image" content="/meta/logo.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aditia.dev/" />
      <meta property="twitter:title" content="Aditia Falacha Arvin" />
      <meta
        property="twitter:description"
        content="This is my personal website, It called ditlab but there is no lab activity here. Just something about me. Before asking me more, you can visit my site "
      />
      <meta property="twitter:image" content="/meta/logo.png" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/meta/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/meta/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/meta/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/meta/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/meta/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/meta/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/meta/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/meta/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/meta/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/meta/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/meta/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff"></meta>

      {/* <!-- Umami Analytics --> */}
      <script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id="ed153552-3935-48cf-8040-7d0d03005e06"
      ></script>
    </Head>
  );
}
