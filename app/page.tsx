"use client";
import Image from "next/image";

export default function Home() {
  const products = [
    { id: 1, name: "GitHub", brand: "https://github.com/Riztech23" },
    { id: 2, name: "LinkedIn", brand: "https://www.linkedin.com/in/rizieq-fazari-616140343/" },
  ];

  const instagramUrl = "https://www.instagram.com/faazaari_/"; 

  return (
    <>
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        body, html, #__next, main {
          height: 100%; margin: 0; padding: 0;
        }
        main {
          background: linear-gradient(270deg, #6ee7b7, #3b82f6, #9333ea, #f472b6);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      <main className="min-h-screen flex items-center justify-center p-6 font-serif">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl px-6 py-12 text-center relative overflow-y-auto max-h-[90vh]">
          <header className="flex justify-center">
            <div className="relative w-28 h-28">
              <Image
                src="/2.jpeg"
                alt="Profile"
                fill
                className="rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
          </header>

          <h2 className="mt-6 text-xs tracking-widest text-gray-400">RIZTECH</h2>
          <h1 className="text-3xl font-extrabold mt-4 mb-4 text-gray-900">
            Welcome <span className="inline-block">👋</span>
          </h1>
          <p className="text-base text-gray-700 mb-8 px-4">
            Hi... Everyone! This is the landing page..for that information I made this page to attach all my information.
          </p>

          <section id="product-list" className="mt-8 px-4 flex justify-center space-x-8">
            {products.map((item, index) => (
              <a
                key={item.id}
                href={item.brand}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-800 underline italic hover:text-gray-600 transition"
              >
                {String(index + 1).padStart(2, "0")}. {item.name}
              </a>
            ))}
          </section>

          {/* Suggestions and Feedback Section */}
          <section className="mt-12 flex flex-col items-center space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Suggestions and Feedback</h3>
            <p className="text-gray-700 text-center max-w-xs px-4">
              I welcome any suggestions and feedback you may have! Feel free to message me on Instagram.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="text-blue-500 hover:text-pink-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324zm5.25-.3a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
              </svg>
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
