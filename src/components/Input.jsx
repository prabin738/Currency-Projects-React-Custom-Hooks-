import React, { useEffect, useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

// Currencies -> https://api.frankfurter.app/currencies

// Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const Input = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  //usestate to and from currency convert
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [ToCurrency, setToCurrency] = useState("INR");

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      //convert object into array so that we can use map function
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };
  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(currencies);

  const convertCurrency = () => {
    //conversion logic
  };

  return (
    <div className="w-lg mx-auto my-10 p-5 bg-white  rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>
      <div>
        <CurrencyDropdown currencies={currencies} title="From:" />
        {/* Swap Currency Button */}
        <CurrencyDropdown currencies={currencies} title="To:" />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-2xl font-semibold mb-5 text-gray-700"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full  p-2 border border-gray-300 rounded-md shadow-sm
           focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
        focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer
        "
        >
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-600 ">
        Converted Amount: 69 USD
      </div>
    </div>
  );
};

export default Input;
