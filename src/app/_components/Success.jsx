import Image from "next/image";

export const Success = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-8">
      <Image src="/logo.png" alt="logo" width={45} height={45} />

      <p className="font-semibold text-2x1">You're All Set🔥</p>

      <p className="font-normal text-base text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
