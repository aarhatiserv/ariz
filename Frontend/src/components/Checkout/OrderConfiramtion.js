import React from "react";

function OrderConfirmationEmail({
  userDetails,
  cartProducts,
  totalPrice,
  orderID,
}) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h2 style={{ color: "#333", textAlign: "center" }}>Order Confirmation</h2>
      <p>Dear {userDetails.name},</p>
      <p>
        Thank you for placing your order with us. Here are the details of your
        order:
      </p>

      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Product
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {product.productName}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {product.quantity}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Rs. {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "20px" }}>
        Total Price: Rs. {totalPrice.toFixed(2)}
      </p>
      <p>Order ID: {orderID}</p>

      <p style={{ marginTop: "30px" }}>
        We are excited to have you as our customer and look forward to serving
        you again in the future.
      </p>

      <p>Best regards,</p>
      <p>Your Store Team</p>
    </div>
  );
}

export default OrderConfirmationEmail;
