import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/romilogo.png";
import "../App.css";
import { useState } from "react";

function Header() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="  flex items-center justify-between   bg-slate-900 text-white px-3">
      <div className="flex items-center">
        <img src={logo} alt="" className=" w-[50px]" />
        <p className=" text-xl font-semibold">Romi Finance</p>
      </div>
      <button className="btn2 lg:hidden" onClick={toggleDrawer}>
        Menu
      </button>
      <div
        className={`absolute left-0 top-0 w-64 h-full bg-slate-900 transition-transform transform ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          className="btn2 absolute top-0 right-0 m-3"
          onClick={toggleDrawer}
        >
          Close
        </button>
        {/* You can add any content you want here */}
        <div className=" lg:hidden flex flex-col gap-x-3 gap-y-3 mt-10 px-6 text-gray-400 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/nft">NFT</NavLink>
          <NavLink to="/earn">Earn</NavLink>
          <NavLink to="/buy">Buy</NavLink>
          <NavLink to="/referral">Referrals</NavLink>
          <NavLink to="/ecosystem">Ecosystem</NavLink>
          <a href="https://docs.zomi.finance/">About</a>
          <button className="lg:hidden visible  btn text-white">
            <span></span>Connect Wallet
          </button>
        </div>
      </div>
      <div className=" hidden lg:flex  gap-x-3 text-gray-400 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/nft">NFT</NavLink>
        <NavLink to="/earn">Earn</NavLink>
        <NavLink to="/buy">Buy</NavLink>
        <NavLink to="/referral">Referrals</NavLink>
        <NavLink to="/ecosystem">Ecosystem</NavLink>
        <a href="https://docs.zomi.finance/">About</a>
      </div>
      <div className="flex gap-x-3 ">
        <button className="btn">Trade</button>
        <button className="lg:flex hidden  btn2">
          <span></span>Connect Wallet
        </button>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
