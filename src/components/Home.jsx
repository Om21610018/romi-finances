import React from "react";
import MiniCard from "./MiniCard";
import MegaCard from "./MegaCard";
import SimpleCard from "./SimpleCard";
import minc1 from "../assets/minc1.svg"
import minc2 from "../assets/minc2.svg"
import minc3 from "../assets/minc3.svg"
import simpc1 from "../assets/simpc1.svg"
import simpc2 from "../assets/simpc2.svg"
import simpc3 from "../assets/simpc3.svg"

function Home() {
  return (
    <div className="mt-8 h-full flex flex-col bg-slate-950 ">
      <div className="lg:w-[40%] w-[80%] min-h-[250px]  flex flex-col justify-around items-start">
        <h1 className=" text-4xl font-bold leading-[40px] ">
          Decentralized Perpetual Exchange
        </h1>
        <p>
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
          leverage directly from your wallet
        </p>
        <button className="btn">Launch Exchange</button>
      </div>
      <div className="mt-14 lg:flex lg:flex-nowrap flex-wrap  lg:w-full gap-x-3 justify-between">
        <MiniCard img={minc1} text={"Total Trading Volume"}></MiniCard>
        <MiniCard img={minc2} text={"Open Interest"}></MiniCard>
        <MiniCard img={minc3} text={"Total Users"}></MiniCard>
      </div>

      <div className=" border-gray-100  border-2 mt-20 mb-20"></div>

      <div className=" gap-x-3 lg:flex lg:flex-nowrap flex-wrap   w-full justify-between">
        <SimpleCard
          
          heading={"Reduce Liquidation Risks"}
          para={
            "An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks."
          }
          img={simpc1}
        ></SimpleCard>
        <SimpleCard
          heading={"Save on Costs"}
          para={
            "Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs."
          }
          img={simpc2}
        ></SimpleCard>
        <SimpleCard
          heading={"Simple Swaps"}
          para={
            "Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice."
          }
          img={simpc3}
        ></SimpleCard>
      </div>
      <p className="mt-[150px] text-4xl font-semibold w-[300px]">
        Two tokens create our ecosystem
      </p>
      <div className=" mt-8 lg:flex  w-full gap-x-4">
        <MegaCard
          img=""
          heading={"$ZOMI"}
          para={
            "$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees."
          }
          text={"Ethereum APR: 0.00%"}
        ></MegaCard>
        <MegaCard
          img=""
          heading={"$ZLP"}
          para={
            "$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees."
          }
          text={"Ethereum APR: 1,643,462,651.95%"}
        ></MegaCard>
      </div>
    </div>
  );
}

export default Home;
