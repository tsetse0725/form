export const Input = ({ label, placeholder, type, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label} <sup className="text-red-500">*</sup>
      </label>
      <div className="rounded-[8px] border-[2px] border-[#CBD5E1] p-2">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none w-full h-full"
        />
      </div>
    </div>
  );
};
