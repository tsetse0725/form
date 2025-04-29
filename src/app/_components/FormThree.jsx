"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";

export const FormThree = ({ backHandler, nextHandler, step }) => {
  return (
    <motion.div>
      <div className="flex flex-col rounded-md bg-white p-8 h-[655px] w-[480px] justify-between">
        <div className="flex flex-col gap-8">
          <Header />
          <div className="flex flex-col gap-2">
            <Input label={"date of birth"} placeholder={""} type="date" />
            <Input label={"Profile image"} placeholder={""} type="file" />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex flex-1/3">
            <Button
              text={"back"}
              type={"prev"}
              bgColor="border"
              clickHandler={backHandler}
            />
          </div>
          <div className="flex flex-2/3">
            <Button
              text={`Continue ${step}/3`}
              type={"next"}
              bgColor="bg-black"
              clickHandler={nextHandler}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
