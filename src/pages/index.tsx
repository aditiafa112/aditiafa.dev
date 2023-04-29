import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <section className="relative">
        <div className="w-full h-[400px] lg:h-[100vh] relative">
          <Image
            src={"/desk-setup.jpg"}
            alt={"Desk Setup"}
            fill
            priority
            className="h-[400px] lg:h-[100vh] object-cover object-center"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-white">
            It called ditlab, but there is no lab activity here{" "}
          </h1>
          <h1 className="text-white">Just something about me 👋 😁</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[800px] m-auto px-8">
          <p>Hola Adit here!</p>
          <p>Software Engineer from Surabaya, Indonesia</p>
          <p>
            I&apos;m currently working full-time remotely at Sicepat Ekspres.
          </p>
          <p>
            I enjoy learning and exploring new mobile and web technologies,
            staying up-to-date with the latest tech trends and news. Currently,
            I am focused on learning Next.js and Tailwind CSS.
          </p>
          <p>
            Honestly, I was inspired by Sutan Gading Nasution in creating this
            website. You might want to visit his site. I&apos;d also like to
            thank Zuhad Achmad Fachrian for helping me fill the content on my
            site.
          </p>
          <p>
            This is my first personal website, which I have created and will
            continue to add new content and features to in the future.
          </p>
          <p>
            Well, if you want to learn more about me, you&apos;ve come to the
            right place.
          </p>
          <br />
          <div>
            <button>About me</button>
            <button className="mx-4">Carrer</button>
            <button>Portofolio</button>
          </div>
          <br />
          <p>Thanks for curious about me</p>
        </div>
      </section>
    </MainLayout>
  );
}
