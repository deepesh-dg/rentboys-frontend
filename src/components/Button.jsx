const Button = ({ label, onClick, className }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-md rounded-lg text-white ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;

