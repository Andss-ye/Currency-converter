import React, { useState } from "react";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = async (event: any) => {
    event.preventDefault();
    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/dea230c4868bd8f2e7d70f88/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.conversion_rates[toCurrency];
      const conversionResult = (amount * rate).toFixed(2);
      setResult(
        `${amount} ${fromCurrency} = ${conversionResult} ${toCurrency}`
      );
    } catch (error) {
      console.error("Error fetching exchange rate data:", error);
      alert("Failed to fetch exchange rates. Please try again later.");
    }
  };

  return (
    <>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-20">
          Convertidor de moneda
        </h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
          Convierte monedas con facilidad. Obtenga tarifas en tiempo real y vea
          instantáneamente el monto convertido.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg mt-8 p-6 space-y-4">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleConvert}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="from">
              From
            </label>
            <div className="relative">
              <select
                className="w-full border rounded p-2"
                id="from"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="" disabled>
                  Select currency
                </option>
                <option value="COP">COP - Peso Colombiano</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="KRW">KRW - South Korean Won</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="to">
              To
            </label>
            <div className="relative">
              <select
                className="w-full border rounded p-2"
                id="to"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="" disabled>
                  Select currency
                </option>
                <option value="COP">COP - Peso Colombiano</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="KRW">KRW - South Korean Won</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-sm font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              className="w-full border rounded p-2"
              id="amount"
              placeholder="Enter amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <button
              className="w-full bg-black text-white rounded p-2 hover:bg-zinc-800"
              type="submit"
            >
              Convertir
            </button>
          </div>
        </form>
        <div className="bg-gray-100 rounded-lg p-4 space-y-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Conversion result:
          </p>
          <div className="text-2xl font-bold">
            {result || "Introduce los valores para ver el resultado uwu"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Converter;
