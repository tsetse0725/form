"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";

export const FormOne = ({
  nextHandler,
  step,
  valueChanger,
  formOne,
  aldaa,
  setAldaa,
}) => {
  const handleClick = () => {
    const newAldaa = {};
    const nameRegex = /^[A-Za-zА-Яа-яӨөҮүЁё]+$/;

    if (formOne.firstName.trim().length < 2) {
      newAldaa.firstName = "first name must be at least 2 letters";
    } else if (!nameRegex.test(formOne.firstName.trim())) {
      newAldaa.firstName = "Use only Mongolian or Latin letters";
    }

    if (formOne.firstName.trim().length < 2) {
      newAldaa.lastName = "Last name must be at least 2 letters";
    } else if (!nameRegex.test(formOne.lastName.trim())) {
      newAldaa.lastName = "Use only Mongolian or Latin letters";
    }
    if (formOne.userName.trim().length < 2)
      newAldaa.userName = "User name must be at least 2 letters";

    if (Object.keys(newAldaa).length > 0) {
      setAldaa(newAldaa);
    } else {
      nextHandler();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, X: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, X: -150 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col justify-between rounded-md bg-white p-8 h-[655px] w-[480px]">
        <Header />
        <div className="flex flex-col gap-2 mb-20">
          <Input
            label={"First name"}
            placeholder={"Your first name"}
            type="text"
            name={"firstName"}
            onChange={valueChanger}
            value={formOne.firstName}
            aldaa={aldaa.firstName}
          />
          <Input
            label={"Last name"}
            placeholder={"Your Last name"}
            type="text"
            name={"lastName"}
            onChange={valueChanger}
            value={formOne.lastName}
            aldaa={aldaa.lastName}
            x
          />
          <Input
            label={"User name"}
            placeholder={"Your username"}
            type="text"
            onChange={valueChanger}
            name={"userName"}
            value={formOne.userName}
            aldaa={aldaa.userName}
          />
        </div>
        <Button
          text={`Continue ${step}/3`}
          type={"next"}
          bgColor="bg-black"
          clickHandler={handleClick}
        />
      </div>
    </motion.div>
  );
};
