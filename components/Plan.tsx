import React from "react";
import PlanCard from "./sub/PlanCard";
import { advanceObj, bacirObj, standerObj } from "./../lib/data";

export default function Plan() {
  return (
    <div className="card">
      <div className="text-center">
        <p className="text-xl text-gray-600">Pricing</p>
        <h1 className="text-3xl font-semibold text-gray-800">
          Flexible Pricing Plan
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 py-6">
        <PlanCard planInfo={bacirObj} />
        <PlanCard planInfo={standerObj} />
        <PlanCard planInfo={advanceObj} />
      </div>
    </div>
  );
}
