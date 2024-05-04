import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("Failed to fetch the data....");
  }
  return res.json();
};
const PhoneCase = async () => {
  const product = await getData();

  return (
    <div className="w-full  mx-auto flex flex-col items-center justify-center gap-10 xl:gap-0">
      <Title title="Make your phone looks with beautiful Phones Case" />
      <Products products={product} />
    </div>
  );
};

export default PhoneCase;
