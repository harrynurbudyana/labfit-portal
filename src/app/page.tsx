import Image from "next/image";
import logolab from "@/assets/logolab.png"

export default function Home() {
  return (
    <div className="lg:items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 lg:items-center sm:items-center">
        <Image src={logolab} width={200} height={200} alt=""/>
        <div className="flex sm:flex-col gap-8 lg:flex-row items-center">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                width={200}
                height={200}
                src={logolab}
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
            <figure>
              <Image
                width={200}
                height={200}
                src={logolab}
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
            <figure>
              <Image
                width={200}
                height={200}
                src={logolab}
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
