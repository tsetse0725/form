"use client";

import { useState } from "react";
import { FormOne } from "./_components/FormOne";
import { FormTwo } from "./_components/FormTwo";
import { FormThree } from "./_components/FormThree";
import { Success } from "./_components/Success";

const FormPage = () => {
  const components = [FormOne, FormTwo, FormThree, Success];
  const [step, setStep] = useState(0);
  const Stepper = components[step];

  const nextHandler = () => setStep((prev) => prev + 1);
  const backHandler = () => setStep((prev) => prev - 1);

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-[#F4F4F4]">
      <Stepper
        nextHandler={nextHandler}
        backHandler={backHandler}
        step={step + 1}
      />
    </div>
  );
};

export default FormPage;
