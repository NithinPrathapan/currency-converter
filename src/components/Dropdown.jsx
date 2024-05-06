import React from "react";
import { FaStar } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favourite,
  handleFavourites,
  title = "",
}) => {
  const isFavorite = (curr) => favourite.includes(curr);

  return (
    <div className="">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <hr />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-indigo-500"
          name=""
          id=""
        >
          {favourite.map((currency) => (
            <option className="bg-gray-200" value={currency} key={currency}>
              {currency}
            </option>
          ))}
          {/* render favorites */}
          {currencies
            ?.filter((c) => !favourite.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>
        <button
          onClick={() => handleFavourites(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          {isFavorite(currency) ? <FaStar color="yellow" /> : <HiStar />}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
