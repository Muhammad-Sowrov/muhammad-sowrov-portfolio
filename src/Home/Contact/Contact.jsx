import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { CiLinkedin } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import config from "../../../config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { serviceId, templateId, publicKey } = config.emailjs;

    const templateData = {
      from_name: name,
      from_email: email,
      to_name: "Muhammad Sowrov",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateData, publicKey)
      .then((res) => {
        console.log("sent", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="contact">
      <div className="pt-20">
        <Title value={"Contact"}></Title>
      </div>
      <div className="min-h-screen flex justify-center items-center mx-5 flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-64">
          <div>
            <div className="mx-auto text-center m:text-start mt-5 md:mt-0">
              <h1 className="text-2xl font-bold ">Social</h1>
            </div>
            <div className="container mx-auto mt-8 p-0">
              <div className="max-w-md mx-auto md:min-h-[432px] bg-gray-900 p-8 rounded shadow-md">
                <div className="grid grid-cols-2 items-center md:mb-10">
                  <div className="flex items-center w-30 text-xl md:text-xl">
                    <CiLinkedin />
                    <h1>Linkdin</h1>
                  </div>
                  <Link
                    className="pl-20"
                    to="https://www.linkedin.com/in/muhammad-sowrov"
                  >
                    <FaExternalLinkAlt />
                  </Link>
                </div>
                <div className="grid grid-cols-2 items-center md:mb-10">
                  <div className="flex items-center w-30 text-xl md:text-xl">
                    <RiFacebookBoxFill />
                    <h1>Facebook</h1>
                  </div>
                  <Link
                    className="pl-20"
                    to="https://www.facebook.com/muhammadsowrov53"
                  >
                    <FaExternalLinkAlt />
                  </Link>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="flex items-center text-start w-30 text-xl md:text-xl">
                    <FaSquareTwitter />
                    <h1>Twitter</h1>
                  </div>
                  <Link className="pl-20" to="https://twitter.com/__Sowrov">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto text-center">
              <h1 className="text-2xl md:pl- font-bold">Send Email</h1>
            </div>

            <div className="container mx-auto mt-8 p-0">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-gray-900 p-8 rounded shadow-md"
              >
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>
                <Button type="submit" value={"Send"}></Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;