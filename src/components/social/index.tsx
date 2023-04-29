import React from "react";

export default function Social() {
  return (
    <section>
      <div className="py-8 max-w-screen-lg mx-auto flex flex-col items-center">
        <h1>Let&apos;s get connected on social media.</h1>
        <div className="flex flex-wrap justify-center">
          <button className="mx-3 sm:mx-4 my-1 bg-blue-600 w-20">Github</button>
          <button className="mx-3 sm:mx-4 my-1 bg-yellow-600 w-20">Linkedin</button>
          <button className="mx-3 sm:mx-4 my-1 bg-red-600 w-20">Instagram</button>
          <button className="mx-3 sm:mx-4 my-1 bg-blue-600 w-20">Twitter</button>
          <button className="mx-3 sm:mx-4 my-1 bg-yellow-600 w-20">Facebook</button>
        </div>
      </div>
    </section>
  );
}
