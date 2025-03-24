import React from "react";
import { createContext, useState, useContext } from "react";
import InputGroup from "./InputGroup";

const TipContext = createContext({
  totalAmount: 0,
  setTotalAmount: (totalAmount: number) => {},
});

export function TipForm() {
  const { setTotalAmount } = useContext(TipContext);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const billAmount = parseFloat(e.target.amount.value);
    const tipPercentage = parseFloat(e.target.tip.value);
    const numberOfPeople = parseInt(e.target.people.value) || 1;
    const totalBill = billAmount + (billAmount * tipPercentage) / 100;
    setTotalBill(totalBill);
    setTipAmount(tipPercentage);
    const totalAmount = totalBill + (totalBill * tipPercentage) / 100;
    setTotalAmount(totalAmount);
    setAmountPerPerson(totalAmount / totalBill);
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Tip Calculator</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-l-md"
      >
        <InputGroup
          type="number"
          label="Bill Amount"
          placeholder="Amount in GBP"
          name="amount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputGroup
            type="number"
            label="Select Tip %"
            placeholder="%"
            name="tip"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
          <InputGroup
            type="number"
            label="Number of People"
            placeholder="Number of People"
            name="people"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-[#dada33] px-3 py-2 font-semibold rounded-full"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

function TipResults() {
  const { totalAmount } = useContext(TipContext);
  return (
    <div className="bg-[#133040] w-full h-full rounded-bl-4xl rounded-r-xl">
      {totalAmount}
    </div>
  );
}

export default function TipComponents() {
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <TipContext.Provider value={{ totalAmount, setTotalAmount }}>
      <div className="grid grid-cols-2 items-center max-w-2xl mx-auto ">
        <TipComponents.Form />
        <TipComponents.Results />
      </div>
    </TipContext.Provider>
  );
}
TipComponents.Form = TipForm;
TipComponents.Results = TipResults;
