import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const Contact = () => {
  return (
    <div id="contact">
      <div className="pt-20">
        <Title value={"Contact"}></Title>
      </div>
      <div className="min-h-screen flex justify-center items-center mx-5 flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-64">
          <div>
            <h1 className="text-2xl ">Social</h1>
            <div className="container mx-auto mt-8 p-0">
              <div className="max-w-md mx-auto bg-gray-900 p-8 rounded shadow-md"></div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl pl-5">Send Email</h1>
            <div className="container mx-auto mt-8 p-0">
              <form className="max-w-md mx-auto bg-gray-900 p-8 rounded shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-500 text-sm font-bold mb-2"
                  >
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Your Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>
                <Button value={"Send"}></Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
