import React from "react";
import logo from "../assets/romilogo.png";
import { useState } from "react";
import {
  FaTwitter,
  FaMedium,
  FaGithub,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

function Footer() {
  let [navbar, setNavbar] = useState();
  return (
    <div className="w-full py-10 bg-black flex flex-col justify-center items-center gap-y-3">
      <div className="flex items-center">
        <img src={logo} alt="" className=" w-[50px]" />
        <p>Romi Finance</p>
      </div>
      <div className="flex gap-x-8">
        <FaTwitter /> {/* Twitter Icon */}
        <FaMedium /> {/* Medium Icon */}
        <FaGithub /> {/* GitHub Icon */}
        <FaTelegram /> {/* Telegram Icon */}
        <FaDiscord /> {/* Discord Icon */}
      </div>
      <div className="flex gap-x-3 text-xs text-opacity-60">
        <p>Terms and Conditions</p>
        <p>Referral Terms</p>
        <p>Media Kit</p>
      </div>
    </div>
  );
}

export default Footer;
