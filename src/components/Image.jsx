const Image = ({ src, className, alt = "" }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-full object-cover transition ${className}`}
        />
    );
};

export default Image;
