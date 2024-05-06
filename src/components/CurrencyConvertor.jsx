import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setamount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCurrencies();
  }, []);
  const handleFavourites = async (currency) => {};
  const currencyConvert = () => {};
  //currencies => https://api.frankfurter.app/currencies
  //latest => https://api.frankfurter.app/latest?from=USD&to=INR
  return (
    <div className="max-w-xl my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5  text-2xl  font-semibold text-gray-700">
        Currency converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end ">
        <Dropdown
          currencies={currencies}
          title="From :"
          handleFavourites={handleFavourites}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="flex justify-center items-center -mb-5 sm:mb-2">
        <button>
          <HiArrowsRightLeft size={24} />
        </button>
        </div>
        <Dropdown
          currencies={currencies}
          title="To :"
          handleFavourites={handleFavourites}
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>
      <div className="mt-4 ">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          onChange={(e) => setamount(e.target.value)}
          type="number"
          className="w-full p-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 ring-black rounded-xl my-1 "
          name=""
          id=""
        />
      </div>
      <div className=" flex justify-end mt-6">
        <button
          onClick={currencyConvert}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-500">
        Converted Amount:69 USD
      </div>
    </div>
  );
};

export default CurrencyConvertor;
