// const router = require("express").Router();
// const nodemailer = require("nodemailer");
// const shortid = require("shortid");

// router.use((req, res, next) => {
//   // Middleware logic here
//   next(); // Call next to pass control to the next middleware or route handler
// });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "infocrossangleinterior@gmail.com",
//     pass: "jllgzovojhzbexkn",
//   },
// });

// router.post("/send-email", (req, res) => {
//   const { userDetails, cartProducts, totalPrice } = req.body;
//   const orderID = shortid.generate();
//   const emailContent = `
//   Order ID: ${orderID}

//     User Details:
//     Name: ${userDetails.name}
//     Email: ${userDetails.email}
//     Address: ${userDetails.address}
//     State: ${userDetails.state}
//     Zip: ${userDetails.zip}

//     Items in Cart:
//     ${cartProducts
//       .map(
//         (product) => `
//       Product Name: ${product.productName}
//       Price: Rs. ${product.price}
//       Quantity: ${product.quantity}
//       <img src="data:image/jpeg;base64,${product.imageBase64}" alt="${product.productName}" style="max-width: 100px; margin-top: 10px;">

//     `
//       )
//       .join("\n\n")}

//     Total Price: Rs. ${totalPrice}
//   `;

//   const mailOptions = {
//     from: "shashankranjan970832@gmail.com",
//     to: "shashankranjan970832@gmail.com",
//     subject: "Order Details",
//     text: emailContent,
//     html: ` <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//     <div style="background-color: #f5f5f5; padding: 20px; border-bottom: 2px solid #ddd;">
//       <h2 style="font-size: 24px; margin-bottom: 10px;">Order Received 👋</h2>
//       <p style="font-size: 16px;">Dear Seller,</p>
//       <p style="font-size: 16px;">Order ID: <strong>${orderID}</strong> has been received.</p>

//       <p class="text-lg">From:</p>
//       <ul class="list-none p-0">
//         <li><strong>Name:</strong> ${userDetails.name}</li>
//         <li><strong>Email:</strong> ${userDetails.email}</li>
//         <li><strong>Address:</strong> ${userDetails.address}</li>
//         <li><strong>State:</strong> ${userDetails.state}</li>
//         <li><strong>Zip:</strong> ${userDetails.zip}</li>
//       </ul>
//     <div style="padding: 20px; border-bottom: 2px solid #ddd;">
//       <h3 style="font-size: 20px; margin-bottom: 20px;">Order Details</h3>
//       <table style="width: 100%; border-collapse: collapse;">
//         <thead>
//           <tr>
//             <th style="text-align: left; padding: 8px;">Product Name</th>
//             <th style="text-align: right; padding: 8px;">Price</th>
//             <th style="text-align: right; padding: 8px;">Quantity</th>
//             <th style="text-align: right; padding: 8px;">Subtotal</th>
//             <th style="text-align: right; padding: 8px;">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${cartProducts
//             .map(
//               (product) => `
//               <tr>
//                 <td style="text-align: left; padding: 8px;">${
//                   product.productName
//                 }</td>
//                 <td style="text-align: right; padding: 8px;">Rs. ${
//                   product.price
//                 }</td>
//                 <td style="text-align: right; padding: 8px;">${
//                   product.quantity
//                 }</td>
//                 <td style="text-align: right; padding: 8px;">Rs. ${
//                   product.price * product.quantity
//                 }</td>
//                 <td style="text-align: right; padding: 8px;"><img src="data:image/jpeg;base64,${
//                   product.imageBase64
//                 }" alt="${product.productName}" style="max-width: 100px;"></td>
//               </tr>
//             `
//             )
//             .join("")}
//         </tbody>
//       </table>
//       <div style="display: flex; justify-content: end; margin-top: 20px;">
//         <strong style="font-size: 15px;">Total Amount: Rs. ${totalPrice.toFixed(
//           2
//         )}</strong>
//       </div>
//     </div>
//     <div style="padding: 20px;">

//       <p style="font-size: 16px;">Thank You,</p>

//     </div>
//   </div>
//   `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.status(200).send("Email sent successfully");
//     }
//   });
// });

// module.exports = router;
