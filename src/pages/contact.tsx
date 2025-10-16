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

        {/* Google Analytics 4 */}
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

        {/* Google Tag Manager - Active for Contact Page Only */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W6W9WSF7');
            
            // Custom configuration for contact page
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'page_type': 'contact',
              'custom_page': true
            });
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
      <p className="mb-12 text-center">
        Let&apos;s connect! I would be happy to be friends with you.
        <br />
        Here&apos;s the best way to reach me:
      </p>
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
