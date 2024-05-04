import { getSingleProduct } from "@/helper";
import Image from "next/image";

// "use client";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);
  console.log(product);

  return (
    <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0">
      <Image
        src={product?.image}
        alt="product image"
        width={500}
        height={500}
        className=""
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">{product?.title}</p>
        <p>{product?.description}</p>
        <p>Prcice: Rs{product?.price}</p>
        <p> Category: {product?.category}</p>
        <p>{product?.isNew && "New Item"}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
