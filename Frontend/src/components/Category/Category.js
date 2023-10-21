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
    (category) => category.category === "CO-ORD SET"
  );

  const dressCategories = categories.filter(
    (category) => category.category === "Dress"
  );

  const onlyCategories = categories.filter(
    (category) => category.category === "Gown"
  );

  const Categories = categories.filter(
    (category) => category.category === "Saree"
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
                    src="https://previews.dropbox.com/p/thumb/ACC6-wwrhmNIDzB8IDhi436XNd6rgcbfgbYrC-in5_VeeysxXDr4Lv-a7z_pFnEJNFd5bFV_iawbu8DNtGWDvzj1AtrY3vYus6C2RLz14LDT7vqcZcH42Ultf_kFk5wNCoqQvebjvPlZHSe3-v5glZqaBkOgxslWputGZvS1CkqgdjAlE44E5DU7koqaUCVmdIbShmQlbczD-PVP1VwhSo1Z_MAC0FT75TmLlt-b9sBxG_EDNizuyf5C5HP_uSIyYK_MuwyglJIVJDlku4fCclRPw9eMxsN4V0EHrpZAU8YX-5RrxV5SSyADDeISJWC_yPbF6ciUnouzBU9IsRLDymcC/p.jpeg"
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
                      src="https://previews.dropbox.com/p/thumb/ACCtC2ZH5DKLG5RV-ic0FDDc5qzgkIKR9BFYGcQSq_jhNOBquLKxS0NEkd2k4UDvxKQZGVSf2rLUKv79qwFUDZpILMvTzfsR_ZlLrTRq6-6R6wvDAodVlRQWm_DoABzV07zY2wteGdlj6Hhgl1h1rC8P-XgfVNR8oz-IPtc6zKS5vAr9CU20Tz0ej3lpcDs4sGKIw1YJXcIoIovxl9X_8em66U7GR9jZFfq9PQo_8c9vRRH3dr7XjLKyxsf7OzxlXzMQ19768FTwnxtQNpEtcT-_OuM_p1rwWm91gvH0PIQYRAYgbObXUcUM4to9Ps35e9jl09uAnuTSXnGtb0MRI-O3vu4MGdBvAqEp5PWur-37QjQwWlF4LBA49L8f8IoyfJDRzRoxheoiiujePorxorbz/p.jpeg"
                      alt=""
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      {category.category}
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </Link>
                ))}
                {dressCategories.map((category, index) => (
                  <Link
                    to={`/product/${category.category}`}
                    className="relative group flex justify-center items-center
                  h-full w-full"
                  >
                    {" "}
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://previews.dropbox.com/p/thumb/ACAEJYqUY06OymQDeA-bpPCRMtIaCDtxU5XqKFCE97bK21Ogqru8xVpq5DChuCCXSqZoJdjtgroRdFrcLs8PrF4T8fE0O5ldanLBOxcUb6FiJ9gq7KD9UFwX1SATha9BbXv2qM1DD5YmXe6fl70bv66csWflyBeN1H77uk6WSwjH9c-6TzByGExdU84Dgyt94jszuqqXwwm9uVR7t0dkefzJeu8Lj8uRs_D90Sn90T-UODroSSQkuaRVm957kELsL09kiWhaWOWJc5jJlyQ6KHIk7vmaen4Lk-UGH_zsCwNS68EMQytWFOPDnNu00jgySXTe9TCWtBSRSyG7WYNR9LAh/p.jpeg"
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
                    className="relative group flex justify-center items-center h-full w-full"
                  >
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://previews.dropbox.com/p/thumb/ACAHjQXcfZbPEe_QxXpweun62GIo2-FzNU61tYrqMgyOX6L_apIbwJAIj6CsinWD7VhcEODjeknYsjN7AeH9lZoUkvyYW9yToTkJ1ecbOznFAHkmpl9blBBJ0FKCe4xzSqlTd9d7wKAgfPVSZvWhvsjuvUk1jsWHoOZK4Uu4mcKWeUYuPu88OTjDPB4DqSJaBrD9F8xQNbAw9R0OP9VUFnVS02zIribvuCSwNt0ikNTWEXmBKQx6EqqgMXKKVzVCujQJYTp5bPrClWftJpXSgsqc6IVMWLWhN_i7ZunZqBk4IgJhlxYy-nX3fYf-hZKAoGUuiyLLAE-3vfF1JyedSTNw/p.jpeg"
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
