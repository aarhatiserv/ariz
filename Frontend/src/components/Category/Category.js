import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ariz.onrender.com/api/category/category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredCategories = categories.filter(
    (category) => category.category === "Saree" || category.category === "Top"
  );

  const onlyCategories = categories.filter(
    (category) => category.category === "Suit" || category.category === "Jeans"
  );

  const Categories = categories.filter(
    (category) => category.category === "Lehenga"
  );
  return (
    <div className="">
      <div className="flex  justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ml-auto 2xl:ml-40   md:gap-x-6  w-full">
              {Categories.map((category, index) => (
                <Link
                  to={`/product/${category.category}`}
                  className="relative group flex justify-center items-center h-full w-full"
                >
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                    alt=""
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    {category.category}
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </Link>
              ))}

              <div className="flex flex-col items-center sm:items-start space-y-4 md:space-y-8 mt-4 md:mt-0">
                {filteredCategories.map((category, index) => (
                  <Link
                    to={`/product/${category.category}`}
                    className="relative group flex justify-center items-center
                  h-full w-full"
                  >
                    {" "}
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                      alt=""
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      {category.category}
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-4 items-center sm:items-start md:space-y-8 mt-4 md:mt-0">
                {onlyCategories.map((category, index) => (
                  <Link
                    to={`/product/${category.category}`}
                    className="relative group flex justify-center items-center h-full w-full sm:w-80 sm:-ml-0"
                  >
                    <img
                      className="object-center object-cover  h-full w-full sm:w-80"
                      src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                      alt=""
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      {category.category}
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
