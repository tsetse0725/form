"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";

export const FormTwo = ({ nextHandler, backHandler, step }) => {
  return (
    <motion.div>
      <div className="flex flex-col justify-between rounded-md bg-white p-8 h-[655px] w-[480px]">
        <Header />
        <div className="flex flex-col gap-2">
          <Input label={"Email"} placeholder={"Your email"} type="text" />
          <Input
            label={"Phone number"}
            placeholder={"Your phone number"}
            type="number"
          />
          <Input
            label={"Password"}
            placeholder={"Your password"}
            type="password"
          />
          <Input
            label={"Confirm Password"}
            placeholder={"Confirm password"}
            type="password"
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex flex 1/3">
            <Button
              text={"back"}
              type={"prev"}
              bgColor="border"
              clickHandler={backHandler}
            />
          </div>
          <div className="flex flex 2/3">
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
