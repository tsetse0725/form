export const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  name,
  aldaa,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label} <sup className="text-red-500">*</sup>
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-md border-2 p-2 outline-none w-full ${
          aldaa ? "border-red-500" : "border-[#CBD5E1]"
        }`}
      />

      {aldaa && <span className="text-red-500 text-sm mt-1">{aldaa}</span>}
    </div>
  );
};
