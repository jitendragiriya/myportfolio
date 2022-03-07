import Image from "next/image";
import React, { useState } from "react";
import Congrates from "../Alerts/Congrates";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const Contact = () => {
  const [resMsg, setResMsg] = useState("");
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, message } = inputs;

  const saveContact = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    const res = await fetch("/api/contact", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    setResMsg(result.message);
  };
  return (
    <div>
      {resMsg ? <Congrates Message={resMsg} /> : <></>}
      <section
        className="contact flex flex-col max-w-6xl mx-auto items-center mb-12 px-4"
        id="contact"
      >
        <div className="title mb-12 mt-16">
          <h2 className="text-4xl font-medium">Contact</h2>
        </div>

        <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly">
          <div className="relative h-60 w-96 max-w-full">
            <div className="relative h-60 w-full">
              <Image
                loader={myLoader}
                src={"images/contacts.jpeg"}
                alt="contact"
                layout="fill"
              />
            </div>
          </div>
          <form
            method="POST"
            className="relative p-4 flex flex-col w-full sm:w-96"
            onSubmit={saveContact}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onchange}
              value={inputs.name}
              className="border border-black rounded p-2 outline-none w-full mb-4 dark:border-white"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onchange}
              value={inputs.email}
              className="border border-black rounded p-2 outline-none w-full mb-4 dark:border-white"
            />
            <textarea
              placeholder="Message"
              name="message"
              onChange={onchange}
              value={inputs.message}
              className="border border-black rounded p-2 outline-none w-full mb-4 dark:border-white"
            ></textarea>
            <button
              type="submit"
              className="rounded w-full py-2 font-medium bg-green-600 text-white dark:border-white"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
