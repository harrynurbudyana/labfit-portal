import Image from "next/image";
import logolab from "@/assets/logolab.png"
import simlab from "@/assets/simlab.png"
import comingsoon from "@/assets/comingsoon.png"

export default function Home() {
  return (
    <div className="sm:items-center lg:items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-base-200">
      <main className="flex sm:flex-col gap-8 lg:items-center sm:items-center">
        <Image src={logolab} width={200} height={200} alt=""/>
        <div className="text-2xl justify-center sm:justify-items-center">Selamat datang di Portal Laboratorium Fakultas Ilmu Terapan</div>
        <div className="flex sm:flex-col gap-8 lg:flex-row items-center">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                src={simlab}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Simlabfit</h2>
              <p>Sistem Manajemen Laboratorium Fakultas Ilmu Terapan</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a href="https://sim.labfit.id" target="_blank">Kunjungi</a>
                  </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={comingsoon}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure className="image-full">
              <Image
                src={comingsoon}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
