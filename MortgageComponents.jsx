import React from "react";
import InputGroup from "./InputGroup";
import { createContext, useState, useContext } from "react";

const MortageContext = createContext({
  monthlyPayment: 0,
  setMonthlyPayment: (monthlyPayment) => {},
});

export function MortgageForm() {
  const { setMonthlyPayment } = useContext(MortageContext);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { amount, term, interest } = data;

    const monthlyInterest = interest / 100 / 12;

    const months = term * 12;

    setMonthlyPayment(amount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -months));

    const totalPayment = monthlyPayment * months;

    const totalInterest = totalPayment - amount;
  }
  return (
    <div>
      <form className="flex flex-col gap-6 rounded-l-md">
        <InputGroup
          type="text"
          label="Mortgage Amount"
          placeholder="Amount in GBP"
          name="amount"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputGroup
            type="number"
            label="Mortgage Term"
            placeholder="1 year"
            name="term"
          />
          <InputGroup
            type="text"
            label="Interest Rate"
            placeholder="5%"
            name="interest"
          />
        </div>
        <button className="bg-[#dada33] px-3 py-2 font-semi-bold rounded-full">
          Calculate
        </button>
      </form>
    </div>
  );
}

function MortageResults() {
  const { monthlyPayment } = useContext(MortageContext);
  return (
    <div className="bg-[#133040] w-full h-full rounded-bl-4xl rounded-r-xl">
      {monthlyPayment}
    </div>
  );
}

export default function MortgageComponents() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  return (
    <MortageContext.Provider value={{ monthlyPayment, setMonthlyPayment }}>
      <div className="grid grid-cols-2 items-center max-w-2xl mx-auto ">
        <MortgageComponents.Form />
        <MortgageComponents.Results />
      </div>
    </MortageContext.Provider>
  );
}
MortgageComponents.Form = MortgageForm;
MortgageComponents.Results = MortageResults;
