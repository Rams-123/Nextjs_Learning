import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!res.ok) {
    throw new Error("Failed to fetch data....");
  }
  return res.json();
};

const Asscesories = async () => {
  const acess = await getData();
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 xl:gap-0">
      <Title title="Buy  Your Favourite Accessories" />
      <Products products={acess} />
    </div>
  );
};

export default Asscesories;
