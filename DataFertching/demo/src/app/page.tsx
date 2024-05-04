import Image from "next/image";
import Products from "../components/Products";
import Title from "@/components/Title";
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data....");
  }
  return res.json();
};

export default async function Home() {
  const products = await getData();
  // console.log(products);

  return (
    <main className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 xl:gap-0">
      <Title title="Buy  Your Favourite Phone" />
      <Products products={products} />
    </main>
  );
}
