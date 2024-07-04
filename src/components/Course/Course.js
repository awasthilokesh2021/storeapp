import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [dataitem, setdataitem] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8085/productdetails", { withCredentials: true });
      setdataitem(res.data);
      setIsAuthenticated(true);
      
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">You need to log in to see the courses.</h1>
          <NavLink to="/signin">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
        <NavLink to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </NavLink>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 justify-around mx-auto">
        {dataitem.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;

