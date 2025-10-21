import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9L8G63EBVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-9L8G63EBVG');
             
             // Prevent gtag history logging in preview mode
             (function() {
               // Check if in preview mode
               const isPreviewMode = (
                 window.location.search.includes('gtm_debug') ||
                 window.location.search.includes('gtm_preview') ||
                 window.location.search.includes('gtm_auth') ||
                 window.location.hash.includes('gtm_debug') ||
                 window.location.hash.includes('gtm_preview') ||
                 document.cookie.includes('gtm_debug') ||
                 document.cookie.includes('gtm_preview') ||
                 window.location.hostname.includes('preview') ||
                 window.location.hostname.includes('debug')
               );
               
               if (isPreviewMode) {
                 console.log('Preview mode detected - blocking gtag history events');
                 
                 // Override gtag function to block history events
                 const originalGtag = window.gtag;
                 window.gtag = function() {
                   const args = Array.from(arguments);
                   
                   // Block history related events
                   if (args.length > 1 && args[0] === 'event' && 
                       (args[1] === 'page_view' || 
                        args[1] === 'history_change' ||
                        args[1].includes('history') ||
                        args[1].includes('navigation'))) {
                     console.log('Blocked gtag history event:', args[1]);
                     return;
                   }
                   
                   // Block config with history tracking
                   if (args.length > 1 && args[0] === 'config' && 
                       args[2] && args[2].send_page_view) {
                     console.log('Blocked gtag config with page_view');
                     return;
                   }
                   
                   return originalGtag.apply(this, arguments);
                 };
               }
             })();
           `}
        </Script>
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6W9WSF7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6W9WSF7');

// Prevent GTM history tracking in preview mode
(function() {
  // Check if in preview mode
  const isPreviewMode = (
    window.location.search.includes('gtm_debug') ||
    window.location.search.includes('gtm_preview') ||
    window.location.search.includes('gtm_auth') ||
    window.location.hash.includes('gtm_debug') ||
    window.location.hash.includes('gtm_preview') ||
    document.cookie.includes('gtm_debug') ||
    document.cookie.includes('gtm_preview') ||
    window.location.hostname.includes('preview') ||
    window.location.hostname.includes('debug')
  );
  
  if (isPreviewMode) {
    console.log('Preview mode detected - blocking GTM history tracking');
    
    // Override dataLayer.push to block history events
    const originalDataLayerPush = window.dataLayer.push;
    window.dataLayer.push = function(data) {
      if (data && typeof data === 'object' && data.event) {
        // Block GTM history related events
        if (data.event === 'gtm.historyChange' || 
            data.event === 'gtm.history' ||
            data.event === 'gtm.popstate' ||
            data.event === 'gtm.pushstate' ||
            data.event === 'gtm.replacestate' ||
            data.event === 'gtm.js' ||
            data.event === 'gtm.dom' ||
            (data.event && data.event.includes('history'))) {
          console.log('Blocked GTM history event:', data.event);
          return;
        }
      }
      
      return originalDataLayerPush.call(this, data);
    };
  }
})();`,
          }}
        />
        {/* End Google Tag Manager */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
