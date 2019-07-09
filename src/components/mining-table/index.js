import React from "react";
import TableRaw from "../table-raw";

import "./mining-table.scss";

function MiningTable() {
  return (
    <div className="table-wrapper">
      <ul className="table">
        <li className="header table-raw">
          <p className="regular-text">Name</p>
          <p className="regular-text">Price</p>
          <p className="regular-text">Total Hashrate</p>
          <p className="regular-text">Tokens</p>
          <p className="regular-text">Token Hashrate</p>
          <p className="regular-text">Action</p>
        </li>
        <TableRaw
          imgName="home/table-icons/icon2"
          title="Bitcoin"
          shtitle="BTC"
          price="8,237.93"
          difference="5.73"
          totalHash="11,973"
          tokens="23,799"
          svgPath="M1 43C1 43 11.4016 28 16.4508 27.5C21.5 27 26 42.5 30.5 40.5C35 38.5 37 14 41.5 12C46 10 50.5 20 56.5 27.5C62.5 35 68.5 37.5 75 30C81.5 22.5 82.5 20.5 91.5 10C100.5 -0.5 101.5 14 109 12C116.5 10 124.5 1.5 124.5 1.5"
        />
        <TableRaw
          imgName="home/table-icons/icon3"
          title="Litecoin"
          shtitle="LTC"
          price="86.07"
          difference="3.03"
          totalHash="7,047"
          tokens="2,934"
          svgPath="M1 42C1 42 9 31.5 14.5 31.5C20 31.5 25.5 44 30.5 39.5C35.5 35 50 40.5 55.5 35C61 29.5 58.5312 11.564 61 11C63.4688 10.436 76.5 39.5 78.5 38C80.5 36.5 79.5 4.50001 85 1.50002C90.5 -1.49997 99.5 26 104.5 24C109.5 22 108.5 13.5 112.5 11C116.5 8.5 121.5 3.00002 121.5 3.00002"
        />
        <TableRaw
          imgName="home/table-icons/icon4"
          title="Bitcoin Cash"
          shtitle="BCH"
          price="474.03"
          difference="4.23"
          totalHash="4,393"
          tokens="11,573"
          svgPath="M1 43C1 43 10 36.5 15.5 36C21 35.5 25 41.4167 30.5 40.5C36 39.5833 32.5 30 39.5 24C46.5 18 46.5 28 52 24C57.5 20 60 27 67 24C74 21 73.5 11.3571 79 9C84.5 6.64286 90 21 99 20C108 19 124.5 1.5 124.5 1.5"
        />
        <TableRaw
          imgName="home/table-icons/icon5"
          title="Ethereum"
          shtitle="ETH"
          price="230.00"
          difference="-0.21"
          totalHash="2,981"
          tokens="5,987"
          svgPath="M1 42C1 42 3.5 30.5 13.5 30.5C23.5 30.5 16 30.5 23.5 30.5C31 30.5 32 11 35.5 11C39 11 40 26.5 44 26.5C48 26.5 61 26.5 71 26.5C81 26.5 76.5 -3.5 87.5 2C98.5 7.5 98.5 11.5 109 11C119.5 10.5 124.5 0.5 124.5 0.5"
        />
        <TableRaw
          imgName="home/table-icons/icon6"
          title="Monero"
          shtitle="XMR"
          price="84.03"
          difference="1.09"
          totalHash="1,737"
          tokens="371"
          svgPath="M1 42C1 42 5 21.8 10.5 18.5C16 15.2 15.5 32 20.5 32C25.5 32 22.5 11.5 27.5 7.5C32.5 3.5 36 26.5 42.5 26.5C49 26.5 51 11.4167 56.5 10.5C62 9.58333 63 19 70.5 19C78 19 75 9.16667 80.5 5.5C86 1.83333 97.5 18.5 108.5 18.5C119.5 18.5 124.5 0.5 124.5 0.5"
        />
      </ul>
    </div>
  );
}

export default MiningTable;
