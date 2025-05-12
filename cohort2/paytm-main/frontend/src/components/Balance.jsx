import React from "react";

function Balance({ balance }) {
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your Balance is :</div>
      <div className="font-semibold ml-4 text-lg">{balance}</div>
    </div>
  );
}

export default Balance;
