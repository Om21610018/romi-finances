import React from "react";
import Containerv2 from "./Containerv2";

function Earn() {
  return (
    <div className=" w-full flex flex-col gap-y-10 mt-10">
      <div className="lg:w-[30%] w-[60%]">
        <h1 className=" text-3xl font-bold">
          Earn
          <i></i>
        </h1>
        <p className=" text-gray-400">Stake $ZOMI and $ZLP to earn rewards.</p>
      </div>
      <div className="lg:flex lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-x-6 ">
        <Containerv2
          heading={"$ZOMI"}
          data={{
            Price: "$0.00",
            Wallet: "... $ZOMI ($...)",
            Staked: "... $ZOMI ($...)",
            APR: "...%            ",
            Rewards: "$...",
            "Multiplier Points APR": " 100.00%",
            "Boost Percentage": "...%",
            "Total Staked": "0 $ZOMI ($...)",
            "Total Supply": "10,000 $ZOMI ($10)",
          }}
          btndata={"Buy $ZOMI"}
        ></Containerv2>
        <Containerv2
          heading={"Total Rewards"}
          data={{
            "Total Rewards": "... ($...)",
            $ZOMI: "...($...)",
            "Escrowed $ZOMI": "...($...)",
            "Multiplier Points": "...",
            "Staked Multiplier Points": "...",
            Total: "$...",
          }}
          btndata={"Connect Wallet"}
        ></Containerv2>
      </div>
      <div className="lg:flex lg:flex-nowrap md:flex-wrap  lg:gap-x-6 ">
        <Containerv2
          heading={"$ZOMI"}
          data={{
            Price: "$0.00",
            Wallet: "... $ZOMI ($...)",
            Staked: "... $ZOMI ($...)",
            APR: "...%            ",
            Rewards: "$...",
            "Multiplier Points APR": " 100.00%",
            "Boost Percentage": "...%",
            "Total Staked": "0 $ZOMI ($...)",
            "Total Supply": "10,000 $ZOMI ($10)",
          }}
          btndata={"Buy $ZOMI"}
        ></Containerv2>
        <Containerv2
          heading={"Total Rewards"}
          data={{
            "Total Rewards": "... ($...)",
            $ZOMI: "...($...)",
            "Escrowed $ZOMI": "...($...)",
            "Multiplier Points": "...",
            "Staked Multiplier Points": "...",
            Total: "$...",
          }}
          btndata={"Connect Wallet"}
        ></Containerv2>
      </div>
      <div className="lg:w-[30%] w-[60%]">
        <h1 className=" text-3xl font-bold">
          Vest
          <i></i>
        </h1>
        <p className=" text-gray-400">
          Convert esZOMI tokens to $ZOMI tokens. Please read the{" "}
          <span>
            <a
              href="https://docs.zomi.financehow-it-works/rewards"
              className=" underline text-gray-400"
            >
              visiting details
            </a>
          </span>{" "}
          before using the vaults.
        </p>
      </div>
      <div className="lg:flex lg:flex-nowrap md:flex-wrap  gap-x-6">
        <Containerv2
          heading={"$ZOMI Vault"}
          data={{
            "Staked Tokens": "...",
            "Reserved for Vesting": "0.00 / ...",
            "Vesting Status": "0.0000 / 0.0000",
            Claimable: "0.0000 $ZOMI",
          }}
          btndata={"Connect Wallet"}
        ></Containerv2>
        <Containerv2
          heading={"$ZLP Vault"}
          data={{
            "Staked Tokens": "...",
            "Reserved for Vesting": "0.00 / ...",
            "Vesting Status": "0.0000 / 0.0000",
            Claimable: "0.0000 $ZOMI",
          }}
          btndata={"Connect Wallet"}
        ></Containerv2>
      </div>
    </div>
  );
}

export default Earn;
