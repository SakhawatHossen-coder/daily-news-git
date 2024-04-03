import React from "react";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
const LoginComp = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn w-full">
          <FaTwitter />
          Login With Twitter
        </button>
        <button className="btn w-full">
          <FaInstagram />
          Login With Instagram
        </button>
      </div>
    </div>
  );
};

export default LoginComp;
