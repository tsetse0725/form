import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  name,
  aldaa,
}) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label} <sup className="text-red-500">*</sup>
      </label>

      {type === "file" ? (
        <>
          <input
            type="file"
            id={name}
            name={name}
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor={name}
            className={`h-[180px] w-full flex justify-center items-center bg-gray-100 border-2 border-dashed rounded-md cursor-pointer ${
              aldaa ? "border-red-500" : "border-gray-300"
            }`}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="h-full w-full object-contain rounded-md"
              />
            ) : (
              <span>📷 Browse or Drop Image</span>
            )}
          </label>
        </>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          className={`rounded-md border-2 p-2 outline-none w-full ${
            aldaa ? "border-red-500" : "border-[#CBD5E1]"
          }`}
        />
      )}

      {aldaa && <span className="text-red-500 text-sm mt-1">{aldaa}</span>}
    </div>
  );
};
