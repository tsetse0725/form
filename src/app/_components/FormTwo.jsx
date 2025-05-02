"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";
import { useState } from "react";

export const FormTwo = ({ nextHandler, backHandler, step }) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{8,10}$/;
  const passwordRegex = /^.{6,}$/;

  const [formTwo, setFormTwo] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [aldaa, setAldaa] = useState({});

  const valueChanger = (e) => {
    const { name, value } = e.target;
    const cleaned = name === "phone" ? value.replace(/\D/g, "") : value;
    setFormTwo((prev) => ({ ...prev, [name]: cleaned }));

    if (cleaned.trim() !== "") {
      setAldaa((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleClick = () => {
    const newAldaa = {};

    if (!emailRegex.test(formTwo.email.trim())) {
      newAldaa.email = "enter a valid email address";
    }

    if (!phoneRegex.test(formTwo.phone.trim())) {
      newAldaa.phone = "Enter a valid phone number";
    }

    if (!passwordRegex.test(formTwo.password)) {
      newAldaa.password = "password must be at least 6 characters";
    }

    if (!formTwo.confirmPassword?.trim()) {
      newAldaa.confirmPassword = "Confirm password is required";
    } else if (formTwo.password !== formTwo.confirmPassword) {
      newAldaa.confirmPassword = "Password do not match";
    }

    // if (formTwo.password !== formTwo.confirmPassword) {
    //   newAldaa.confirmPassword = "Password do not match";
    // }

    if (Object.keys(newAldaa).length > 0) {
      setAldaa(newAldaa);
    } else {
      setAldaa({});
      nextHandler();
    }
    console.log("confirmPassword:", formTwo.confirmPassword);
    console.log("aldaa.confirmPassword:", aldaa.confirmPassword);
  };

  return (
    <motion.div
      initial={{ opacity: 0, X: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, X: -150 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col justify-between rounded-md bg-white p-8 h-[655px] w-[480px]">
        <Header />
        <div className="flex flex-col gap-2">
          <Input
            label={"Email"}
            name="email"
            placeholder={"Your email"}
            type="text"
            value={formTwo.email}
            onChange={valueChanger}
            aldaa={aldaa.email}
          />
          <Input
            label={"Phone number"}
            name="phone"
            placeholder={"Your phone number"}
            type="tel"
            inputMode="numeric"
            onChange={valueChanger}
            aldaa={aldaa.phone}
            value={formTwo.phone}
          />
          <Input
            label={"Password"}
            placeholder={"Your password"}
            type="password"
            name="password"
            value={formTwo.password}
            onChange={valueChanger}
            aldaa={aldaa.password}
          />
          <Input
            label={"Confirm Password"}
            placeholder={"Confirm password"}
            type="password"
            name="confirmPassword"
            value={formTwo.confirmPassword}
            onChange={valueChanger}
            aldaa={aldaa.confirmPassword}
          />
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
              clickHandler={handleClick}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
