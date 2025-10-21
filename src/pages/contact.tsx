import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  // Function to navigate to about page with state
  const navigateToAbout = () => {
    const stateData = {
      from: "contact",
      timestamp: Date.now(),
      user: "visitor",
      navigationType: "button_click",
      previousPage: "contact",
      data: {
        message: "Navigated from Contact page",
        source: "contact_navigation_button",
      },
    };

    // Push state and navigate using Next.js Router
    history.pushState(stateData, "About Page", "/about");

    // Navigate to about page using Next.js Router
    router.push("/about");
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

        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W6W9WSF7');
          `}
        </script>

        {/* GTM Blocklist */}
        <script>
          {`
            // GTM Blocklist - Block certain events from being tracked
            window.dataLayer = window.dataLayer || [];
            
            // Check if blocklist is already initialized to prevent redeclaration
            if (!window.gtmBlocklistInitialized) {
              // Override dataLayer.push to implement blocklist
              const originalDataLayerPush = window.dataLayer.push;
              window.dataLayer.push = function(data) {
                // Check if event should be blocked
                if (data && typeof data === 'object' && data.event) {
                  // Block list of events to prevent tracking
                  console.log('GTM Blocklist: Blocked event:', data.event);
                  const blockedEvents = [
                    'gtm.historyChange',
                    'gtm.history',
                    'gtm.gtm.historyChange-v2',
                  ];
                  console.log('Blocked events:', blockedEvents);
                  
                  // Check if event is in blocklist
                  if (blockedEvents.includes(data.event)) {
                    console.log('GTM Blocklist: Blocked event:', data.event);
                    return;
                  }
                  
                  // Block events containing certain keywords
                  const blockedKeywords = ['debug', 'test', 'preview', 'development'];
                  if (blockedKeywords.some(keyword => 
                    data.event.toLowerCase().includes(keyword) ||
                    (data.page_title && data.page_title.toLowerCase().includes(keyword)) ||
                    (data.page_location && data.page_location.toLowerCase().includes(keyword))
                  )) {
                    console.log('GTM Blocklist: Blocked event with blocked keyword:', data.event);
                    return;
                  }
                }
                
                // Allow event to proceed
                return originalDataLayerPush.call(this, data);
              };
              
              // Mark as initialized
              window.gtmBlocklistInitialized = true;
              console.log('GTM Blocklist initialized - blocking configured events');
            } else {
              console.log('GTM Blocklist already initialized - skipping');
            }
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

      {/* Navigation Button */}
      <div className="mx-auto mb-6 text-center">
        <button
          onClick={navigateToAbout}
          className="rounded bg-blue-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Go to About Page
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Click to navigate to About page with state data
        </p>
      </div>

      <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2">
        <a
          href="mailto:aditiafa112@gmail.com"
          target="_blank"
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
