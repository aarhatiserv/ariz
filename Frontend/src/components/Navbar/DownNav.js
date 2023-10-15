import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import "../../App.css";
import axios from "axios";

function DownNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [carts, setCarts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  var username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

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

  const handleAddtoCart = async (cartProduct) => {
    console.log(cartProduct);
    const cart = {
      productName: cartProduct.productName,

      price: cartProduct.price,

      imageUrl: cartProduct.imageUrl,
      quantity: 1,
    };
    var id = localStorage.getItem("id");
    await axios
      .post(`https://ariz.onrender.com/api/cart/cart/${id}`, cart)
      .then((res) => {
        setCarts(res.data);
        setCartCount((prevCount) => {
          const newCount = prevCount + 1;
          console.log("New Cart Count:", newCount);
          return newCount;
        });
        console.log(res.data);
        alert("Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sticky-container bg-white opacity-90">
      <div class="px-4 py-7  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-11">
        <div class="relative flex items-center justify-between">
          <img
            src="/logo (2) 1.png"
            alt=""
            className="ml-1 h-10 w-16 sm:h-auto sm:w-24"
          />
          <ul
            class="flex items-center hidden font-mono text-[23px] font-heading  space-x-12 lg:flex"
            style={{ color: "#AD5C5C" }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>

            <li>
              <div
                className="relative cursor-pointer"
                // ref={dropdownRef}
              >
                <a onClick={toggleDropdown}>Product ⮟</a>
                {isMenuOpen && (
                  <div className="absolute mt-2 -ml-6 bg-white z-50 border rounded shadow-md">
                    <ul className="py-2 w-40 text-center">
                      {categories.map((category, index) => (
                        <React.Fragment key={index}>
                          <li>
                            <Link to={`/product/${category.category}`}>
                              {category.category}
                            </Link>
                          </li>
                          <hr className="w-full border-gray-100" />
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li>
              <Link to="/career">Career</Link>{" "}
            </li>

            <li>
              <Link to="/blog">Blog</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <div class=" flex font-bold items-center space-x-4 text-black ">
              {/* <a class="" href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                </svg>
              </a> */}
              <Link to="/checkout" href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/fav" class="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                </svg>
              </Link>
              <Link to="/register">
                {/* <ul class="flex items-center hidden space-x-4 lg:flex">
                  <div className="relative flex items-center flex-shrink-0">
                    <img
                      alt="profile-pic"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      {username}
                    </p>
                  </div>

                  <li>
                    {username ? (
                      <span
                        onClick={handleLogout}
                        class="inline-flex items-center cursor-pointer justify-center px-3 py-2  font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Logout
                      </span>
                    ) : (
                      <Link to="/register" aria-label="Sign up" title="Sign up">
                        <span
                          class="inline-flex items-center justify-center px-3 py-2 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                        >
                          Sign up
                        </span>
                      </Link>
                    )}
                  </li>
                </ul> */}
                <div className="relative -mt-2">
                  <Link
                    ref={trigger}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-4"
                    to="#"
                  >
                    <span className="hidden text-right lg:block">
                      <span className="text-lg font-medium tracking-wide text-black ">
                        {username}
                      </span>
                    </span>

                    <span className="h-8 w-8 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                        alt="User"
                      />
                    </span>

                    <svg
                      className={`hidden fill-current sm:block ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                        fill=""
                      />
                    </svg>
                  </Link>

                  <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                    className={`absolute right-0 mt-4 flex  flex-col rounded-sm border  bg-white shadow-default  ${
                      dropdownOpen === true ? "block" : "hidden"
                    }`}
                  >
                    <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7 w-48 text-center dark:border-strokedark">
                      <li>
                        <Link
                          to="/order"
                          className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C17.2218 21.4156 18.4937 20.1437 18.5281 18.5969V3.47187C18.4937 2.68124 18.2187 1.95937 17.6687 1.44374ZM16.9469 18.5625C16.9469 19.2844 16.3625 19.8344 15.6406 19.8344H7.3906C7.04685 19.8344 6.77185 19.5594 6.77185 19.2156V17.875H8.6281C9.0406 17.875 9.41873 17.5312 9.41873 17.0844C9.41873 16.6375 9.07498 16.2937 8.6281 16.2937H6.77185V11.7906H8.6281C9.0406 11.7906 9.41873 11.4469 9.41873 11C9.41873 10.5875 9.07498 10.2094 8.6281 10.2094H6.77185V5.63749H8.6281C9.0406 5.63749 9.41873 5.29374 9.41873 4.84687C9.41873 4.39999 9.07498 4.05624 8.6281 4.05624H6.77185V2.74999C6.77185 2.40624 7.04685 2.13124 7.3906 2.13124H15.6406C15.9844 2.13124 16.2937 2.26874 16.5687 2.50937C16.8094 2.74999 16.9469 3.09374 16.9469 3.43749V18.5625Z"
                              fill=""
                            />
                          </svg>
                          My Orders
                        </Link>
                      </li>
                    </ul>

                    {username ? (
                      <Link to="/register" aria-label="Sign up" title="Sign up">
                        <button
                          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                          onClick={handleLogout}
                        >
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                              fill=""
                            />
                            <path
                              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                              fill=""
                            />
                          </svg>
                          Log Out
                        </button>
                      </Link>
                    ) : (
                      <Link to="/register" aria-label="Sign up" title="Sign up">
                        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                              fill=""
                            />
                            <path
                              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                              fill=""
                            />
                          </svg>
                          SignIn
                        </button>
                      </Link>
                    )}
                  </div>
                  {/* <!-- Dropdown End --> */}
                </div>
              </Link>
            </div>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white  border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4 ">
                    <div className="">
                      <img
                        src="/logo (2) 1.png"
                        alt=""
                        className="ml-1 h-10 w-16 sm:h-auto sm:w-24"
                      />
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <div className="relative cursor-pointer">
                          <a onClick={toggleDropdown}>Product ⮟</a>
                          {isMenuOpen && (
                            <div className="absolute mt-2 -ml-6 bg-white z-50 border rounded shadow-md">
                              <ul className="py-2 w-40 text-center">
                                {categories.map((category, index) => (
                                  <React.Fragment key={index}>
                                    <li>
                                      <Link
                                        to={`/product/${category.category}`}
                                      >
                                        {category.category}
                                      </Link>
                                    </li>
                                    <hr className="w-full border-gray-100" />
                                  </React.Fragment>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>

                      <li>
                        <a class="" to="/collection">
                          <a class="" href="#!">
                            Career
                          </a>
                        </a>
                      </li>

                      <li>
                        <a class="" to="/collection">
                          <a class="" href="#!">
                            Blog
                          </a>
                        </a>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownNav;
