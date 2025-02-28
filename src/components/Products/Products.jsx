import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <div className="product">
        <div className="product-description-container">
          <h2>Pack of 4 Premium Kodak Polaroids</h2>
          <p>
            Capture your favorite memories in a timeless vintage style! This
            custom pack of 4 high-quality Kodak Polaroids ensures rich colors,
            crisp details, and a classic aesthetic that never fades. Perfect for
            decorating your space, gifting, or cherishing special moments
            forever.
          </p>
          <p className="product-price">Price: ₹50</p>
          <div className="button-group">
            <button>Buy Now</button>
            <br />
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-image-container">
          <img
            src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740736451/zks3dt2x3zzdowtnqbjs.webp"
            alt="Kodak Polaroids"
            className="product-image"
          />
        </div>
      </div>
      <div className="iphone-mockup">
        <img
          src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740740239/jv9wgnfm06dvigize24v.webp"
          alt=""
        />
      </div>

      <div className="product">
        <div className="product-description-container">
          <h2>Custom Bookmark</h2>
          <p>
            Create a unique keepsake with our custom Photo Strip Bookmarks! Each
            set includes two 6-inch strips, printed on high-quality Kodak
            Polaroid paper for rich colors and crisp details. Perfect for
            marking your favorite reads or gifting a personal touch.
          </p>
          <p className="product-price">Price: ₹50</p>
          <div className="button-group">
            <button>Buy Now</button>
            <br />
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-image-container">
          <img
            src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740744611/feyekgblguumd3prlgst.webp"
            alt="Kodak Polaroids"
            className="product-image"
          />
        </div>
      </div>
      <div className="bookmark-mockup">
        <img
          src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740770007/qxxwapm2uhzgyh1lekwd.webp"
          alt=""
          className="bookmark-image"
        />
      </div>
    </div>
  );
};

export default Products;
