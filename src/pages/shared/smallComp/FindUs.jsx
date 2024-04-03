import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const FindUs = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Find Us</h2>
      <div className="space-y-3">
        <button className="btn w-full">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn w-full">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn w-full">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
