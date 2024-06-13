

const TextInput = ({ value, placeholder, onChange, className, ...rest }) => {
  return (
    <input
      type={"text"}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`p-[16px]  w-full text-sm text-white bg-black border border-[#303030] ${className}`}
      {...rest}
    />
  );
};

export default TextInput;
