import React from "react";

const Card = () => {
  return (
    <div className="mt-4 my-3 py-3">
      <div className="w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <div>
          <img
            src="https://tiimg.tistatic.com/fp/1/007/665/stylish-fashionable-comfortable-blue-men-s-casual-shoes-475.jpg"
            alt="Shoes"
            className="w-full h-auto"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl flex justify-between items-center font-bold mb-2">
            special book
            <div className=" bg-pink-500 text-sm text-white px-2 rounded-full">
              category
            </div>
          </h2>
          <p className=" mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="flex justify-between items-center">
            <div className=" text-center rounded-md border px-2 ">price</div>
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
