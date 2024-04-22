import Image from "next/image";
import { getDoc, collection, query, where, doc } from "firebase/firestore"
import { db } from "@/firebase/config";
import QuantitySelector from "@/app/components/QuantitySelector";


const getProductById = async (id) => {
  const productosRef = doc(db, "productos", id)
  const querySnapshot = await getDoc(productosRef)
  return querySnapshot.data()
};

export default async function VerProducto({ params }) {
  const { id } = params;
  const productDetail = await getProductById(id);
  return (
    <main className="container m-auto p-5 flex justify-center items-center">
      <div className="p-5 bg-white rounded-lg w-5/6">
        <p className="text-base mb-5">{productDetail.category}</p>
        <p className="text-2xl font-semibold">{productDetail.title}</p>
        <div className="flex justify-center items-center">
          <Image
            src={productDetail.image}
            width={300}
            height={300}
            alt="product image"
            className="mt-5"
          />
        </div>
        <hr className="mt-10 mb-5" />
        <p className="text-4xl mb-5">${productDetail.price}</p>
        <p>{productDetail.description}</p>
        <QuantitySelector item={productDetail} />
      </div>

    </main>
  );
}
