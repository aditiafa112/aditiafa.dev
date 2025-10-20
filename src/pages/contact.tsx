import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import { Helmet } from "react-helmet";

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function Contact() {
  // Test history push with state (for demonstration)
  const testHistoryPush = () => {
    // Push history dengan state data
    history.pushState(
      {
        page: "contact",
        user: "test_user",
        timestamp: Date.now(),
        customData: "test_state_data",
      },
      "Contact Page with State",
      "/contact"
    );

    console.log("History pushed with state:", history.state);
    console.log("Current URL:", window.location.href);
  };

  // Function to track social media clicks
  const trackSocialClick = (platform: string, url: string) => {
    // Track with Google Analytics 4
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "social_click", {
        platform: platform,
        url: url,
        page: "contact",
      });
    }

    // Track with Google Tag Manager
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "social_media_click",
        platform: platform,
        url: url,
        page: "contact",
      });
    }

    console.log(`Tracked click: ${platform}`);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Contact - Aditia Fa</title>
        <meta
          name="description"
          content="Connect with Aditia Fa via email, GitHub, Instagram, LinkedIn, Twitter, and Facebook."
        />
        <meta property="og:title" content="Contact - Aditia Fa" />
        <meta
          property="og:description"
          content="Connect with Aditia Fa via email, GitHub, Instagram, LinkedIn, Twitter, and Facebook."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aditiafa.dev/contact" />

        {/* Google tag (gtag.js) - Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9L8G63EBVG"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9L8G63EBVG');
          `}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W6W9WSF7');
            
            // GTM Blocklist untuk mencegah capture history state di preview mode
            window.dataLayer = window.dataLayer || [];
            
            // Override history.pushState untuk block di preview mode
            const originalPushState = history.pushState;
            history.pushState = function(state, title, url) {
              // Check if in GTM preview mode
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
                console.log('GTM Preview Mode detected - blocking history state capture');
                // Block state data from being captured
                const blockedState = {
                  blocked: true,
                  reason: 'GTM Preview Mode',
                  timestamp: Date.now()
                };
                return originalPushState.call(this, blockedState, title, url);
              }
              
              // Normal behavior for production
              return originalPushState.call(this, state, title, url);
            };
            
            // Override history.replaceState untuk block di preview mode
            const originalReplaceState = history.replaceState;
            history.replaceState = function(state, title, url) {
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
                console.log('GTM Preview Mode detected - blocking history replace state capture');
                const blockedState = {
                  blocked: true,
                  reason: 'GTM Preview Mode',
                  timestamp: Date.now()
                };
                return originalReplaceState.call(this, blockedState, title, url);
              }
              
              return originalReplaceState.call(this, state, title, url);
            };
            
            console.log('GTM Blocklist initialized - history state protection active');
          `}
        </script>
      </Helmet>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6W9WSF7"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <h1 className="mx-auto mb-6 whitespace-nowrap text-xl font-bold sm:text-2xl md:text-4xl">
        Contact
      </h1>

      {/* Test History Push Button */}
      <div className="mx-auto mb-6 text-center">
        <button
          onClick={testHistoryPush}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Test History Push State
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Test GTM Blocklist - Check console for results
        </p>
      </div>

      <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2">
        <a
          href="mailto:aditiafa112@gmail.com"
          target="_blank"
          onClick={() =>
            trackSocialClick("Email", "mailto:aditiafa112@gmail.com")
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/email.svg"
            alt={"Email"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
        <a
          href="https://github.com/aditiafa112"
          target="_blank"
          onClick={() =>
            trackSocialClick("GitHub", "https://github.com/aditiafa112")
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/github.svg"
            alt={"Github"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
        <a
          href="https://www.instagram.com/aditia_flc/"
          target="_blank"
          onClick={() =>
            trackSocialClick(
              "Instagram",
              "https://www.instagram.com/aditia_flc/"
            )
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/instagram.svg"
            alt={"Instagram"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
        <a
          href="https://twitter.com/AditiaArvin"
          target="_blank"
          onClick={() =>
            trackSocialClick("Twitter", "https://twitter.com/AditiaArvin")
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/twitter.svg"
            alt={"Twitter"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aditiafa/"
          target="_blank"
          onClick={() =>
            trackSocialClick(
              "LinkedIn",
              "https://www.linkedin.com/in/aditiafa/"
            )
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/linkedin.svg"
            alt={"Linkedin"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
        <a
          href="https://www.facebook.com/aditiafa112/"
          target="_blank"
          onClick={() =>
            trackSocialClick(
              "Facebook",
              "https://www.facebook.com/aditiafa112/"
            )
          }
          className="group relative cursor-pointer rounded-lg border-4 border-slate-700 py-16  text-center hover:bg-[#f2f2f2]"
        >
          <Image
            src="/icons/social-media/facebook.svg"
            alt={"Facebook"}
            height={0}
            width={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </a>
      </div>
    </MainLayout>
  );
}
