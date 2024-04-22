import ProductItem from "@/app/components/ProductItem";
import React from "react";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "@/firebase/config";


const getAllProductByCategory = async (category) => {
  const productosRef = collection(db, "productos")
  const q = category !== "" && query(productosRef, where('category', '==', category))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(item => {
    const productData = item.data()
    const productId = item.id
    return { productId, ...productData }
  })


};

export default async function Categoria({ params }) {
  const { categoria } = params;

  const products = await getAllProductByCategory(categoria);

  return (
    <main className="container m-auto">
      <h1>Muestra los productos por categoria {params.categoria}</h1>
      <div className="flex justify-center flex-row gap-5 flex-wrap items-center">
        {products.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
}
