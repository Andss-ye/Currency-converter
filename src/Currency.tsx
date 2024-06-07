import { useState, useEffect } from "react";
import "./Currency.css";

const Currency = () => {
  const [pairs, setPairs] = useState([]);
  const comparisons = [
    { baseCurrency: "USD", targetCurrency: "EUR", color: 'bg-blue-400' },
    { baseCurrency: "USD", targetCurrency: "GBP", color: 'bg-pink-400' },
    { baseCurrency: "EUR", targetCurrency: "JPY", color: 'bg-yellow-400' },
    { baseCurrency: "EUR", targetCurrency: "AUD", color: 'bg-red-400'},
    { baseCurrency: "GBP", targetCurrency: "CAD", color: 'bg-orange-400'},
    { baseCurrency: "GBP", targetCurrency: "CHF", color: 'bg-lime-800'},
    { baseCurrency: "JPY", targetCurrency: "CNY", color: 'bg-green-500'},
    { baseCurrency: "JPY", targetCurrency: "INR", color: 'bg-cyan-600'},
    { baseCurrency: "AUD", targetCurrency: "NZD", color: 'bg-purple-500'},
  ];

  useEffect(() => {
    const fetchPairs = async () => {
      let APIKEY = 'dea230c4868bd8f2e7d70f88';
      const fetchedPairs = [];

      try {
        for (const { baseCurrency, targetCurrency } of comparisons) {
          const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${baseCurrency}/${targetCurrency}`
          );
          const data = await response.json();
          const pair = {
            baseCurrency,
            targetCurrency,
            rate: data.conversion_rate,
            color: comparisons.find(c => c.baseCurrency === baseCurrency && c.targetCurrency === targetCurrency).color
          };
          fetchedPairs.push(pair);
        }
        setPairs(fetchedPairs);
      } catch (error) {
        console.error("Error fetching currency pairs:", error);
      }
    };
    fetchPairs();
  }, []);

  return (
    <div>
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Comparación de divisas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
          {pairs.map((pair, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg py-4 pl-6 pr-8 flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 ${pair.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {pair.baseCurrency}
                </div>
                <div>{`${pair.baseCurrency}/${pair.targetCurrency}`}</div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                {pair.rate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;