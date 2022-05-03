import React from "react";
import { MobileData } from "./MobileData";

function MobileOperator() {
  let MobileCustomer = MobileData.map((Item) => (
    <tr key={Item.rank}>
      <td>{Item.rank}</td>
      <td>{Item.operator}</td>
      <td>{Item.subscriber}</td>
      <td>{Item.market_share}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Operator</th>
            <th>Subscribers</th>
            <th>Market share</th>
          </tr>
        </thead>
        <tbody>{MobileCustomer}</tbody>
      </table>
    </>
  );
}

export default MobileOperator;
