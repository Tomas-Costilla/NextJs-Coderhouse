import ProductItem from "./components/ProductItem";

export const metadata = {
  title: "Inicio",
  description: "Inicio de la pagina",
};

const getAllProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  return response.json();
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
