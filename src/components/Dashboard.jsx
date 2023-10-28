import React from "react";
import Container from "./Container";
import ModifiedContainer from "./ModifiedContainer";
import t1 from "../assets/t1.svg";
import t2 from "../assets/t2.svg";
import t3 from "../assets/t3.svg";
import t4 from "../assets/t4.svg";
import "../App.css"

function Dashboard() {
  return (
    <div className=" w-full flex flex-col gap-y-10 mt-10">
      <div className="lg:w-[30%] w-[60%]">
        <h1 className=" text-3xl font-bold">
          Stats<i></i>
        </h1>
        <p className=" text-gray-400">
          Ethereum Total Stats start from 06 Jan 2022. For detailed stats:
        </p>
      </div>
      <div className="lg:flex lg:flex-nowrap flex-wrap gap-x-6">
        <Container
          heading={"Overview"}
          data={{
            AUM: "$34",
            "$ZLP Pool": "$34",
            "24h Volume": "$0",
            "Long Positions": "$0",
            "Short Positions": "$0",
          }}
        ></Container>
        <Container
          heading={"Total Stats"}
          data={{
            "Total Fees": "$0",
            "Total Volume": "$0",
            "Floor Price Fund": "$628,604",
          }}
        ></Container>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Tokens<i></i>
        </h1>
        <p className=" text-gray-400">Platform and $ZLP index tokens.</p>
      </div>
      <div className="min-h-[200px] lg:flex lg:flex-nowrap flex-wrap gap-x-6">
        <ModifiedContainer
          content={"Distribution"}
          heading={"$ZOMI"}
          subheading={"$ZOMI"}
          data={{
            Price: "$0.00",
            Supply: "10,000 $ZOMI",
            "Total Staked": "$0",
            "Market Cap": "$10",
          }}
          percentage={90}
        ></ModifiedContainer>

        <ModifiedContainer
          content={"$ZLP Pool"}
          heading={"$ZOMI"}
          subheading={"$ZOMI"}
          data={{
            Price: " $1.140",
            Supply: "29 $ZLP",
            "Total Staked": "$34",
            "Market Cap": "$34",
            "Stablecoin Percentage": "49.50%",
          }}
          percentage={50}
        ></ModifiedContainer>
      </div>
      <div className="border-[1px] w-full border-gray-500 items-center">
        <h2 className=" text-xl font-semibold text-center py-3">$ZLP Index Composition</h2>

        <div>
          <table className="w-full">
            <thead className="">
              <th className=" py-1">Token</th>
              <th className=" ">Price</th>
              <th className=" ">Pool</th>
              <th className=" t">Weight</th>
            </thead>
            <tbody className="">
              <tr className="">
                <td className=" flex justify-center ">
                  <img src={t1} alt=""  />
                </td>
                <td className=" py-3">
                  <p>{"$1,790.39"}</p>
                </td>
                <td>
                  {" "}
                  <p>{"$19"}</p>
                </td>
                <td>
                  <p>{"50.49% / 25.00%"}</p>
                </td>
              </tr>
              <tr>
                <td className=" py-3 flex justify-center" >
                  <img src={t2} alt="" />
                </td>
                <td>
                  <p>{"$1,790.39"}</p>
                </td>
                <td>
                  {" "}
                  <p>{"$19"}</p>
                </td>
                <td>
                  <p>{"50.49% / 25.00%"}</p>
                </td>
              </tr>
              <tr>
                <td className="flex justify-center py-3">
                  <img src={t3} alt="" />
                </td>
                <td>
                  <p>{"$1,790.39"}</p>
                </td>
                <td>
                  {" "}
                  <p>{"$19"}</p>
                </td>
                <td>
                  <p>{"50.49% / 25.00%"}</p>
                </td>
              </tr>
              <tr>
                <td className="flex justify-center">
                  <img src={t4} alt="" />
                </td>
                <td>
                  <p>{"$1,790.39"}</p>
                </td>
                <td>
                  {" "}
                  <p>{"$19"}</p>
                </td>
                <td>
                  <p>{"50.49% / 25.00%"}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
