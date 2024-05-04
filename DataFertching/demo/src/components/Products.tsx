"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}
const Products = ({ products }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 shadow-md rounded-lg ">
      {products.map((item) => (
        <Link
          href={{ pathname: "/singleproduct", query: { _id: item?._id } }}
          key={item?._id}
        >
          <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
            <Image
              src={item?.image}
              width={500}
              height={500}
              alt="product images"
              className="w-full h-80 object-cover"
            />
            <div className="flex  flex-col px-4 pb-2 text-sm gap-1">
              <p className="text-gray-600">{item?.title}</p>
              <p className="font-semibold">Rs{item?.price}</p>
              <div className="flex items-center justify-between px-2 ">
                <button className="">Buy More</button>
                <button className="uppercase text-sm font-semibold hover:text-blue-600 duration-200">
                  More info
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
