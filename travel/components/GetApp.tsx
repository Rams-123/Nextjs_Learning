import React from "react";
import Image from "next/image";
import Button from "./Button";
const GetApp = () => {
  return (
    <section className="flex w-full flex-col flexCenter pb-[100px]">
      <div className="get-app">
        <div className="w-full z-20 flex flex-col flex-1 items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 lg:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
