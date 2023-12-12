const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-4xl text-red-500 font-bold mb-4">Error 404</h1>
        <p className="text-red-500 mb-4">
          Oops! The page you're looking for could not be found.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
