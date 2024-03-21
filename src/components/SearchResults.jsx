import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchResults = ({ data }) => {
  return (
    <div className="search-result z-10 absolute top-14 left-0 w-[90vw] md:w-[40vw] bg-white rounded-b-lg">
      <p className="text-lg font-bold text-[#363636] py-5 px-5">
        Found {data?.length} results
      </p>
      <div className="search-result-container flex flex-col gap-5 px-5 pb-5">
        {data &&
          data?.map((item) => (
            <Link href={`/equipments/${item?.id}`} key={item?.id}>
              <div className="search-result-card cursor-pointer w-full flex items-center justify-start h-[100px] bg-[#F5F5F5] px-4 rounded-lg">
                <div className="result-image-container w-[80px] h-[80px] relative">
                  {item?.thumbnail && (
                    <Image
                      src={item?.thumbnail}
                      alt={item?.name}
                      fill
                      className="object-contain rounded-xl"
                    />
                  )}
                </div>
                <div className="flex w-full px-4 items-center justify-between">
                  <div className="result-text-container w-full h-full flex flex-col justify-center items-start gap-1">
                    <h1 className="text-lg font-bold text-[#363636]">
                      {item?.manufacturer}
                    </h1>
                    <p className="text-[#363636]">{item?.name}</p>
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <h2 className="text-lg flex justify-between items-baseline w-fit font-bold text-[#363636]">
                      ₦{item?.rate}{" "}
                      <span className="text-[#363636 text-xs">/ day</span>
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
