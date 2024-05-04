import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/watch");
  if (!res.ok) {
    throw new Error("Failed to fetch data....");
  }
  return res.json();
};

const Watches = async () => {
  const watches = await getData();
  console.log(watches);

  return (
    <div className="w-full mx-auto flex flex-col items-center gap-10 xl:gap-0">
      <Title title="" />
      <Products products={watches} />
    </div>
  );
};

export default Watches;
