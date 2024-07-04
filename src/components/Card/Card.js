import React from "react";

const Card = ({ item }) => {
  return (
    <div className="mt-4 my-3 py-3">
      <div className="w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <div>
          <img
            src={item.image}
            alt="Shoes"
            className="w-full h-auto rounded-md bg-cover"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl flex justify-between items-center font-bold mb-2">
            {item.name}
            <div className=" bg-pink-500 text-sm text-white px-2 rounded-full">
              {item.category}
            </div>
          </h2>
          <p className=" mb-2">{item.title}</p>
          <div className="flex justify-between items-center">
            <div className=" text-center rounded-md border px-2 ">
              {item.price}
            </div>
            <div className="cursor-pointer text-center px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
