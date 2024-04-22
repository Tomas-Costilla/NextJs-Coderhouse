import { db } from "@/firebase/config";
import ProductItem from "./components/ProductItem";
import { collection, getDocs } from "firebase/firestore"


export const metadata = {
  title: "Inicio",
  description: "Inicio de la pagina",
};

const getAllProducts = async () => {
  const productosRef = collection(db, "productos")
  const querySnapshot = await getDocs(productosRef)
  return querySnapshot.docs.map(doc => {
    const data = doc.data()
    const id = doc.id
    return { id, ...data }
  })
};

export default async function Home() {
  const allProducts = await getAllProducts();

  return (
    <main className="container m-auto pb-5 mt-5">
      {/*  <h1>Inicio</h1> */}
      <div className="flex justify-center flex-row gap-5 flex-wrap items-center">
        {allProducts.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
}
