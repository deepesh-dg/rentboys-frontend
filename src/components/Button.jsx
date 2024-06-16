const Button = ({ label, onClick, className }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-md ms-2 rounded-lg px-[16px] py-[5px] font-medium text-white md:font-medium ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
