"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Button } from "./Button";
import { useState } from "react";

export const FormThree = ({ backHandler, nextHandler, step }) => {
  const [formThree, setFormThree] = useState({
    birthDate: "",
    profileImage: null,
    previewUrl: "",
  });

  const [aldaa, setAldaa] = useState({});

  const removeImage = () => {
    setFormThree((prev) => ({
      ...prev,
      profileImage: null,
      previewUrl: "",
    }));
  };

  const valueChanger = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        const preview = URL.createObjectURL(file);
        setFormThree((prev) => ({
          ...prev,
          profileImage: file,
          previewUrl: preview,
        }));
        setAldaa((prev) => ({ ...prev, profileImage: "" }));
      } else {
        setFormThree((prev) => ({
          ...prev,
          profileImage: null,
          previewUrl: "",
        }));
        setAldaa((prev) => ({
          ...prev,
          profileImage: "Зөвхөн зургийн файл оруулна уу",
        }));
      }
    } else {
      setFormThree((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (value.trim() !== "") {
        setAldaa((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleClick = () => {
    const newAldaa = {};

    if (!formThree.birthDate) {
      newAldaa.birthDate = "Төрсөн огноогоо оруулна уу";
    } else {
      const today = new Date();
      const birthDate = new Date(formThree.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        newAldaa.birthDate = "Та 18-аас дээш настай байх ёстой";
      }
    }

    const file = formThree.profileImage;
    if (!file) {
      newAldaa.profileImage = "Зураг оруулна уу";
    } else if (!file.type.startsWith("image/")) {
      newAldaa.profileImage = "Зөвхөн зурган файл оруулна уу";
    }

    if (Object.keys(newAldaa).length > 0) {
      setAldaa(newAldaa);
    } else {
      setAldaa({});
      nextHandler();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, X: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, X: -150 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col rounded-md bg-white p-8 h-[655px] w-[480px] justify-between">
        <div className="flex flex-col gap-8">
          <Header />
          <div className="flex flex-col gap-2">
            <Input
              label={"date of birth"}
              placeholder={""}
              type="date"
              name="birthDate"
              value={formThree.birthDate}
              onChange={valueChanger}
              aldaa={aldaa.birthDate}
            />
            <Input
              label={"Profile image"}
              placeholder={""}
              type="file"
              name="profileImage"
              onChange={valueChanger}
              aldaa={aldaa.profileImage}
              previewUrl={formThree.previewUrl}
              formThree={formThree}
              setFormThree={setFormThree}
            />
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
              clickHandler={handleClick}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
