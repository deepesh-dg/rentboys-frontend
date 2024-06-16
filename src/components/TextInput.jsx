const TextInput = ({ value, placeholder, onChange, className, ...rest }) => {
    return (
        <input
            type={"text"}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            className={`w-full border border-[#303030] bg-black p-[16px] text-sm text-white ${className}`}
            {...rest}
        />
    );
};

export default TextInput;
