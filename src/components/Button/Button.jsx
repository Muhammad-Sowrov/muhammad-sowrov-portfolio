

const Button = ({value}) => {
    return (
        <button className="border border-white px-3 lg:px-5 py-1 rounded-lg hover:text-gray-600 duration-500 ">
            {value}
        </button>
    );
};

export default Button;