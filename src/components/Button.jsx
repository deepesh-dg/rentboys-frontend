const Button = ({ label, onClick, className, ...props }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-md rounded-lg text-white ${className}`}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
