import ProductItem from "@/app/components/ProductItem";
import React from "react";

const getAllProductByCategory = async (category) => {
  let response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.json();
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
