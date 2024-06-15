import React from "react";

const Banner = () => {
  return (
    <div className="w-[80%] mt-5 mx-auto max-w-screen-2xl container flex px-3 py-20 space-x-6 ">
      <div className=" md:w-1/2">
        <div className=" space-y-10">
          <h1 className=" font-bold text-4xl">
            Hello,welcome to my store for purchase{" "}
            <span className=" text-green-500"> our arts </span>
          </h1>
          <p className=" text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img src="https://www.svgheart.com/wp-content/uploads/2023/09/the-book-is-always-better_678-430-min.png" />
      </div>
    </div>
  );
};

export default Banner;
