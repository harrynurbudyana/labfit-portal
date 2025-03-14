"use client";
import Image from "next/image";
import logolab from "@/assets/logolab.png"
import simlab from "@/assets/simlab.png"
import comingsoon from "@/assets/comingsoon.png"
import websiteicon from "@/assets/website-icon.png"
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
// import { useRouter } from "next/router";
// import Shortener from "@/app/shortUrl";
// import { useRouter } from "next/router";

export default function Home() {

  // const [showInput, setShowInput] = useState(false);
  const [originalUrl, setOriginalUrl] = useState("");
  const [customShortUrl, setCustomShortUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(null);
  const handleShorten= async (e: React.FormEvent) => {
        setError(null);
        setShortUrl("");
        const response = await fetch("/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ originalUrl, customShortUrl}),
        });

        const data = await response.json();
        if (data.error) alert(data.error);
        else setShortUrl(`${window.location.origin}/${data.shortUrl}`);
    };

  return (
    <div className="bg-black items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 lg:items-center sm:items-center">
        <div className="grid justify-items-center">
        <Image src={logolab} width={400} height={400} alt="" className=""/> 
        </div>
        <div className="text-center">
        <div className="text-white text-2xl justify-center sm:justify-items-center">Selamat datang di Portal Laboratorium Fakultas Ilmu Terapan</div>
        </div>
        <div>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="bg-slate-600 text-white card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                src={simlab}
                alt="simlab" />
            </figure>
            <div className="text-white card-body">
              <h2 className="text-white card-title">Simlabfit</h2>
              <p>Sistem Manajemen Laboratorium Fakultas Ilmu Terapan</p>
              <div className="card-actions justify-end">
                <Link href="https://sim.labfit.id" target="_blank">
                  <button className="btn btn-primary">Kunjungi</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white bg-slate-600 card card-compact w-96 shadow-xl">
            <figure className="image-full">
              <Image
                width={400}
                height={100}
                src={websiteicon}
                alt="Website" />
            </figure>
            <div className="card-body border-radius-lg">
              <h2 className="card-title">Website Laboratorium FIT</h2>
              <p>Halaman Website Laboratorium FIT yang menyediakan informasi seputar laboratorium FIT.</p>
              <div className="card-actions justify-end">
                <Link href="https://fit.labs.telkomuniversity.ac.id" target="blank">
                  <button className="btn btn-primary">Kunjungi</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 card card-compact bg-base-100 w-96 shadow-xl">
            {/* <figure className="image-full">
              <Image
                src={comingsoon}
                alt="Shortener" />
            </figure> */}
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-white">URL Shortener</h2>
              <div className="card-actions justify-center">
                <div className="text-center justify-center">
                      <input type="grow" className="px-4 py-2.5 text-lg rounded-md mb-5" placeholder="Masukkan URL" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
                      <input type="grow" className="px-4 py-2.5 text-lg rounded-md mb-5" placeholder="Custom Short URL" value={customShortUrl} onChange={(e) => setCustomShortUrl(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={handleShorten}>Shorten</button>
                      {error && <p className="text-red-500">{error}</p>}
                      {shortUrl && (
                        <div className="p-4 flex justify-between items-center w-full bg-gray-100 rounded-md text-black">
                          <span>{shortUrl}</span>
                          <button className="btn btn-primary" onClick={() => navigator.clipboard.writeText(shortUrl)}>Copy</button>
                        </div>
                      )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <div className="text-white flex items-center">Silakan Hubungi Kami!</div>
        <div className="mt-5 grid grid-flow-col justify-items-center gap-3">
          <SocialIcon url="https://www.instagram.com/lab.fit.telu" target="_blank"></SocialIcon>
          <SocialIcon network="whatsapp" url="https://wa.me/6285172088181" target="_blank"></SocialIcon>
          <SocialIcon network="email" url="mailto:lab@tass.telkomuniversity.ac.id" target="_blank"></SocialIcon>
        </div>
      </footer>
    </div>
  );
}
