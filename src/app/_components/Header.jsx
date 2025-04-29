import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image src="/logo.png" alt="logo" width={45} height={45} />
      <p className="font-semibold text-2x1"> Join Us!😎</p>
      <p className="font-normal text-base tex-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
