import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfPayments = loanTerm * 12;

    const emi =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, numberOfPayments)) /
      (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - principal;

  
    const  progressPercentage= loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 : ((totalInterest / totalAmount) * 100);



   
    

  const pieData = [
    { name: "Principal", value: loanAmount, color: "#4f46e5" },
    { name: "Interest", value: totalInterest, color: "#e11d48" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50/30 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg">
      {/* Header */}
      <div className="border-b bg-white/50 p-6 rounded-t-xl">
        <h1 className="text-2xl font-bold text-gray-800">EMI Calculator</h1>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Inputs */}
          <div className="space-y-8">
            {/* Input Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-6 border border-gray-100">
              {/* Loan Amount Input */}
              <div className="space-y-3">
                <div className="flex justify-between flex-col">
                  <div className=" flex justify-between mb-2">
                    <label htmlFor="loan-amount" className="text-sm font-medium text-gray-700">
                      Loan Amount
                    </label>
                    <span className="text-sm font-medium text-gray-500">
                      ₹{loanAmount?.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <input
                    type="text"
                    id="loan-amount"
                    className="border-2 rounded-md p-1"
                    value={loanAmount}
                    onChange={(e) => {
                      // Ensure numeric input and update state
                      const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                      setLoanAmount(Number(value));
                    }}
                  />
                </div>
                <input
                  type="range"
                  max="10000000"
                  step="100"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Interest Rate Input */}
              <div className="space-y-3">
                <div className="flex flex-col">
                <div className=" flex justify-between mb-2">
                <label htmlFor="Interest-rate" className="text-sm font-medium text-gray-700">
                    Interest Rate
                  </label>
                  <span className="text-sm font-medium text-gray-500">
                    {interestRate}%
                  </span>
                </div>

                 
                  
                  <input
                    type="text"
                    id="Interest-rate"
                    className="border-2 rounded-md p-1"
                    value={interestRate}
                    onChange={(e) => {
                      // Ensure numeric input and update state
                      const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                      setInterestRate(Number(value));
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col">
                <div className=" flex justify-between mb-2">
                <label htmlFor="loan-term" className="text-sm font-medium text-gray-700">
                Loan Term (Years)
                  </label>
                  <span className="text-sm font-medium text-gray-500">
                    {loanTerm}
                  </span>
                </div>

                 
                  
                  <input
                    type="text"
                    id="loan-term"
                    className="border-2 rounded-md p-1"
                    value={loanTerm}
                    onChange={(e) => {
                      // Ensure numeric input and update state
                      const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                      setLoanTerm(Number(value));
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

           

        
            </div>
            <div className=" p-6 shadow-md flex flex-col gap-5 rounded-md">

<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium text-gray-600">
      Principal
    </span>
    <span className="text-sm font-medium text-gray-900">
      {loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 :(100 - progressPercentage).toFixed(1)}%
    </span>
  </div>
  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
    <div
      className="h-full bg-indigo-600 rounded-full transition-all duration-300"
      style={{ width: `${loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 :100 - progressPercentage}%` }}
    />
  </div>
</div>

{/* Interest Progress */}
<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium text-gray-600">
      Interest
    </span>
    <span className="text-sm font-medium text-gray-900">
      {progressPercentage.toFixed(1)}%
    </span>
  </div>
  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
    <div
      className="h-full bg-rose-600 rounded-full transition-all duration-300"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>
</div>
</div>

    
          </div>

          {/* Right Column - Visualizations */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-8 border border-gray-100">
            {/* Progress Bars */}
            <div className="space-y-6">
              {/* Principal Progress */}
              <div className="grid grid-cols-1 gap-4">
              {/* Monthly EMI */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-600">Monthly EMI</p>
                <p className="text-xl font-bold text-indigo-600 mt-1">
                  ₹
                  {loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 :emi.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>

              {/* Total Payment */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-600">
                  Total Payment
                </p>
                <p className="text-xl font-bold text-gray-900 mt-1">
                  {loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 : totalAmount.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                  
                </p>
              </div>

              {/* Total Interest */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-600">
                  Total Interest
                </p>
                <p className="text-xl font-bold text-gray-900 mt-1">
                  ₹
                 { loanAmount === 0 || interestRate === 0 || loanTerm === 0 ? 0 :totalInterest.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>
  
            </div>

            {/* Pie Chart */}
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
