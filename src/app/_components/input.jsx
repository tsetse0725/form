export const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  name,
  aldaa,
  previewUrl,
  formThree,
  setFormThree,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label} <sup className="text-red-500">*</sup>
      </label>

      {type === "file" ? (
        <>
          {!previewUrl ? (
            <>
              <input
                type="file"
                id={name}
                name={name}
                accept="image/*"
                className="hidden"
                onChange={onChange}
              />
              <label
                htmlFor={name}
                className={`h-[180px] w-full flex justify-center items-center bg-gray-100 border-2 border-dashed rounded-md cursor-pointer ${
                  aldaa ? "border-red-500" : "border-gray-300"
                }`}
              >
                📷 Browse or Drop Image
              </label>
            </>
          ) : (
            <div className="relative h-[180px] w-full rounded-md overflow-hidden border">
              <img
                src={previewUrl}
                alt="Preview"
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                onClick={() =>
                  setFormThree((prev) => ({
                    ...prev,
                    profileImage: null,
                    previewUrl: "",
                  }))
                }
                className="absolute top-2 right-2 bg-white text-black text-sm font-bold px-2 py-1 rounded-full shadow"
              >
                ✕
              </button>
            </div>
          )}
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

      {aldaa && <span className="text-red-500 text-sm">{aldaa}</span>}
    </div>
  );
};
