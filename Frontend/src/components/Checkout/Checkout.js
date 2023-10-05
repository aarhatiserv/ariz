import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import shortid from "shortid";
import OrderConfirmationEmail from "./OrderConfiramtion";

function Checkout({ cart }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showBirthdayCelebration, setShowBirthdayCelebration] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [orderID, setOrderID] = useState("");
  const [orderId, setOrderId] = useState("");
  const [showOrderReceivedMessage, setShowOrderReceivedMessage] =
    useState(false);
  const [carts, setCarts] = useState([]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    zip: "",
  });

  const handleUserDetailsChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    var total = 0;
    var id = localStorage.getItem("id");
    axios
      .get(`https://ariz.onrender.com/api/cart/cart/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setCartProducts(res.data.cart);
        for (let i = 0; i < res.data.cart.length; i++) {
          total += parseInt(res.data.cart[i].price);
        }
        setProductPrice(total); // Set the initial product price
        setTotalPrice(total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[index].quantity = newQuantity;

    const newProductPrice = updatedCartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    const newTotalPrice = newProductPrice - couponDiscount;

    setTotalPrice(newTotalPrice);
    setProductPrice(newProductPrice); // Update productPrice
    setCartProducts(updatedCartProducts);
  };

  useEffect(() => {
    const newTotalPrice = carts.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [carts]);
  // for delete

  const handleDelete = async (itemId) => {
    try {
      const id = localStorage.getItem("id");
      await axios.delete(
        `https://ariz.onrender.com/api/cart/cart/${id}/${itemId}`
      );
      fetchData(); // Fetch updated cart data after successful deletion

      Swal.fire({
        title: "Success!",
        text: "Item removed from the cart",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      alert("Error deleting item from the cart");
    }
  };

  //   for coupon

  function handleCouponCodeInput(event) {
    setCouponCode(event.target.value);
  }

  // Update the handleCouponCode function
  const handleCouponCode = async () => {
    try {
      const response = await axios.get(
        `https://ariz.onrender.com/api/coupon/coupon/${couponCode}`
      );

      if (response.data.discount) {
        setCouponDiscount(response.data.discount);
        const discountedTotal =
          (productPrice * (100 - response.data.discount)) / 100;
        setTotalPrice(discountedTotal);
        Swal.fire({
          title: "Success!",
          text: "Wohoo ! Coupon Applied",
          icon: "success",
          confirmButtonText: "OK",
        });
        setShowBirthdayCelebration(true);

        setTimeout(() => {
          setShowBirthdayCelebration(false);
        }, 5000);
      } else {
        Swal.fire({
          title: "Invalid!",
          text: "Coupon Not found",
          icon: "danger",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Invalid!",
        text: "Coupon Not found",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const handleCheckout = async (amount) => {
    if (amount === null || amount === 0) {
      // Handle empty amount error
      return Swal.fire({
        title: "Amount Empty",
        text: "Please Enter amount you want to add to One24Wallet",
        icon: "error",
        button: "OK",
      });
    } else {
      try {
        const response = await axios.post(
          `https://ariz.onrender.com/api/razorpay/create-order`,
          {
            amount: amount * 100,
            receipt: shortid.generate(),
          }
        );

        const orderID = response.data.id;

        var options = {
          key: "rzp_test_ms99YcEe3TbTKB", // Replace with your Razorpay key ID
          amount: amount * 100,
          currency: "INR",
          name: "Checkout",
          description: "Checkout",
          image: "",
          order_id: orderID,
          prefill: {
            email: "shashankranjan970832@gmail.com",
            contact: "9667022458", // Replace with the phone number
            upi: "9667022458@paytm", // Replace with the UPI ID
          },
          handler: async function (response) {
            try {
              // const id = localStorage.getItem("id");
              // await axios.delete(`http://localhost:5000/api/cart/cart/${id}`);
              try {
                // Create the order on the server
                const response = await axios.post(
                  "https://ariz.onrender.com/api/order/orders",
                  {
                    userDetails,
                    totalPrice,
                    orderId,
                    orderItems: cartProducts.map((product) => ({
                      productId: product._id,
                      quantity: product.quantity,
                    })),
                    cartProducts: cartProducts.map((product) => ({
                      ...product,
                      imageUrl: product.imageUrl,
                      quantity: product.quantity,
                    })),
                  }
                );

                console.log("Order created:", response.data);

                // ... handle other parts of your checkout process ...
              } catch (error) {
                console.error("Error creating order:", error);
              }
              Swal.fire({
                icon: "success",
                title:
                  "Your payment was successful. Thank you for shopping with us!",
                text:
                  "₹ " +
                  amount +
                  " Payment Success. Payment ID: " +
                  response.razorpay_payment_id,
                button: "OK",
              }).then(function () {
                setCartProducts([]); // Clear the cart products state
                setTotalPrice(0); // Reset the total price
                setShowOrderReceivedMessage(true);
                setShowBirthdayCelebration(true);

                setTimeout(() => {
                  setShowBirthdayCelebration(false);
                }, 5000);

                // window.location.reload();
              });
            } catch (error) {
              Swal.fire({
                title: "Error",
                text: "An error occurred while clearing the cart",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          },
          theme: {
            color: "#FF0000",
          },
        };

        const rzp1 = new window.Razorpay(options);
        await rzp1.open();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "An error occurred while processing your payment",
          icon: "error",
          button: "OK",
        });
      }
    }

    // try {
    //   // Send email
    //   const emailResponse = await axios.post(
    //     "http://localhost:5000/api/mail/send-email",
    //     {
    //       userEmail: userDetails.email,
    //       userDetails: userDetails,
    //       cartProducts: cartProducts.map((product) => ({
    //         ...product,
    //         imageUrl: product.imageUrl,
    //         quantity: product.quantity,
    //       })),
    //       totalPrice: totalPrice,
    //       orderID: orderID,
    //     }
    //   );

    //   console.log("Email response:", emailResponse.data);
    // } catch (emailError) {
    //   console.error("Email sending error:", emailError);
    // }

    // OrderConfirmationEmail(
    //   userDetails.email,
    //   userDetails,
    //   cartProducts,
    //   totalPrice,
    //   orderID
    // );
  };

  return (
    <div>
      {showOrderReceivedMessage && (
        <div className="bg-green-100 text-green-700 py-2 px-4 text-center rounded-lg mt-4">
          Thank you! Your order has been received.
        </div>
      )}
      <div
        class="grid sm:px-10 lg:grid-cols-2 py-12 lg:px-20 xl:px-32"
        style={{ background: "#FEFCFB" }}
      >
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <p class="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((cartProduct, index) => (
              <div
                key={index}
                class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 flex justify-between "
              >
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    class="m-2 h-24 w-28 rounded-md border  object-center"
                    src={cartProduct.imageUrl}
                    alt=""
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{cartProduct.productName}</span>
                    <span class="float-right text-sm font-meduim text-gray-400">
                      Product Sku : {cartProduct.productSku}
                    </span>
                    <p class="text-lg font-bold">Rs. {cartProduct.price}</p>
                  </div>
                </div>
                <div className="px-1  items-center">
                  <button
                    type="button"
                    onClick={() => handleDelete(cartProduct._id)}
                    className=" inline-flex items-center px-3 py-2  bg-red-500 hover:bg-red-700 text-white text-sm rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove
                  </button>
                  <div className="mt-3 flex items-center border border-gray-200 ">
                    <button
                      onClick={() =>
                        handleQuantityChange(index, cartProduct.quantity - 1)
                      }
                      disabled={cartProduct.quantity <= 1}
                      className="px-2  bg-gray-200 text-gray-700 "
                    >
                      -
                    </button>
                    <span className="px-5 bg-gray-100">
                      {cartProduct.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(index, cartProduct.quantity + 1)
                      }
                      className="px-2  bg-gray-200 text-gray-700 "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p class="mt-4 text-gray-400">Your cart is empty.</p>
          )}

          <p class="mt-8 text-lg font-medium">Shipping Methods</p>
          <form class="mt-5 grid gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FDTDC.Official%2Fposts%2Fworrying-about-timely-delivery-we-got-your-back-expose-yourself-to-unbelievably-%2F5229180033864665%2F&psig=AOvVaw1mXauftE4h6XSM3Nr_hNfe&ust=1691652081999000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiA-52Fz4ADFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Delivery</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 5-7 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="mt-10 bg-pink-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div class="">
            <div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <div class="relative">
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleUserDetailsChange}
                  class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>

            <div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserDetailsChange}
                  class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Your mail"
                />
              </div>
            </div>

            <div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Coupon code
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="coupon-code"
                  name="coupon-code"
                  onChange={handleCouponCodeInput}
                  value={couponCode}
                  class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Your Code"
                />
              </div>
              <button
                onClick={handleCouponCode}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Apply
              </button>
              {showBirthdayCelebration && <Confetti />}
            </div>

            <label
              for="billing-address"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  name="address"
                  value={userDetails.address}
                  onChange={handleUserDetailsChange}
                  class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
              </div>
              <select
                type="text"
                name="state"
                value={userDetails.state}
                onChange={handleUserDetailsChange}
                class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>

                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>

              <input
                type="text"
                name="zip"
                value={userDetails.zip}
                onChange={handleUserDetailsChange}
                class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">
                  Rs. {productPrice.toFixed(2)}
                </p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">$8.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Coupon Discount</p>
                <p class="font-semibold text-gray-900">
                  - Rs. {(productPrice - totalPrice).toFixed(2)}
                </p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">
                Rs. {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleCheckout(totalPrice)}
            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
          {showBirthdayCelebration && <Confetti />}
        </div>
      </div>

      <div className="py-4"></div>
    </div>
  );
}

export default Checkout;
