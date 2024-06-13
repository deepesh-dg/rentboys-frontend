const Button = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-white text-md font-medium rounded-lg px-[16px] py-[5px] ms-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
