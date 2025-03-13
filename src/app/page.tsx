import Image from "next/image";
import logolab from "@/assets/logolab.png"
import simlab from "@/assets/simlab.png"
import comingsoon from "@/assets/comingsoon.png"
import websiteicon from "@/assets/website-icon.png"
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
// import Shortener from "@/app/shortUrl";
// import { useRouter } from "next/router";

export default function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-base-200">
      <main className="flex flex-col gap-8 lg:items-center sm:items-center">
        <div className="grid justify-items-center">
        <Image src={logolab} width={400} height={400} alt="" className=""/> 
        </div>
        <div className="text-center">
        <div className="text-2xl justify-center sm:justify-items-center">Selamat datang di Portal Laboratorium Fakultas Ilmu Terapan</div>
        </div>
        <div>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                src={simlab}
                alt="simlab" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Simlabfit</h2>
              <p>Sistem Manajemen Laboratorium Fakultas Ilmu Terapan</p>
              <div className="card-actions justify-end">
                <Link href="https://sim.labfit.id" target="_blank">
                  <button className="btn btn-primary">Kunjungi</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                width={400}
                height={100}
                src={websiteicon}
                alt="Website" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Website Laboratorium FIT</h2>
              <p>Halaman Website Laboratorium FIT yang menyediakan informasi seputar laboratorium FIT.</p>
              <div className="card-actions justify-end">
                <Link href="https://fit.labs.telkomuniversity.ac.id" target="blank">
                  <button className="btn btn-primary">Kunjungi</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                src={comingsoon}
                alt="Shortener" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coming soon!</h2>
              <p>Lorem Ipsum Dolor Sit Amet!</p>
              <div className="card-actions justify-end">
                <Link href={"/Shortener"}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <div className="flex items-center">Silakan Hubungi Kami!</div>
        <div className="mt-5 grid grid-flow-col justify-items-center gap-3">
          <SocialIcon url="https://www.instagram.com/lab.fit.telu" target="_blank"></SocialIcon>
          <SocialIcon network="whatsapp" url="https://wa.me/6285172088181" target="_blank"></SocialIcon>
          <SocialIcon network="email" url="mailto:lab@tass.telkomuniversity.ac.id" target="_blank"></SocialIcon>
        </div>
      </footer>
    </div>
  );
}
