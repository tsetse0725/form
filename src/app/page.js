"use client";

import { useState } from "react";
import { FormOne } from "./_components/FormOne";
import { FormTwo } from "./_components/FormTwo";
import { FormThree } from "./_components/FormThree";
import { Success } from "./_components/Success";
import { AnimatePresence } from "framer-motion";

const FormPage = () => {
  const components = [FormOne, FormTwo, FormThree, Success];
  const [step, setStep] = useState(0);
  const Stepper = components[step];

  const nextHandler = () => setStep((prev) => prev + 1);
  const backHandler = () => setStep((prev) => prev - 1);

  const [formOne, setFormOne] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [aldaa, setAldaa] = useState({});

  const valueChanger = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setAldaa((prev) => ({ ...prev, [name]: "" }));
    }
    setFormOne((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="flex w-screen h-screen justify-center items-center bg-[#F4F4F4]">
      <AnimatePresence mode="wait">
        <Stepper
          key={step}
          nextHandler={nextHandler}
          backHandler={backHandler}
          valueChanger={valueChanger}
          step={step + 1}
          formOne={formOne}
          aldaa={aldaa}
          setAldaa={setAldaa}
        />
      </AnimatePresence>
    </div>
  );
};

export default FormPage;
