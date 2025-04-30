"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";

export const FormOne = ({ nextHandler, step }) => {
  return (
    <motion.div>
      <div className="flex flex-col justify-between rounded-md bg-white p-8 h-[655px] w-[480px]">
        <Header />
        <div className="flex flex-col gap-2 mb-20">
          <Input
            label={"First name"}
            placeholder={"Your first name"}
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            label={"Last name"}
            placeholder={"Your Last name"}
            type="text"
          />
          <Input
            label={"User name"}
            placeholder={"Your username"}
            type="text"
          />
        </div>
        <Button
          text={`Continue ${step}/3`}
          type={"next"}
          bgColor="bg-black"
          clickHandler={nextHandler}
        />
      </div>
    </motion.div>
  );
};
