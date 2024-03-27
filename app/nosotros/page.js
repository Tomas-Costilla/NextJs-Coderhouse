import Image from "next/image";
import {} from "react";

export default function Nosotros({}) {
  return (
    <main className="container m-auto flex justify-center p-5">
      <div className="bg-white w-full p-3 rounded-sm flex flex-col gap-3 sm">
        <div className="sm:flex sm:justify-start sm:items-center sm:flex-row flex justify-start flex-col items-center gap-5">
          <Image
            alt="coderhouse logo"
            src={"/coderhouse.png"}
            width={150}
            height={150}
          />
          <h1 className="text-xl font-semibold">Ecommerce NextJs</h1>
        </div>
        <hr />
        <p>Bienvenido al proyecto final del curso NextJS de CoderHouse</p>
      </div>
    </main>
  );
}
