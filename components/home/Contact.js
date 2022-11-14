import Image from "next/image";
import React, { useState } from "react";
import RightLeftAlert from "../Alerts/RightLeftAlert";
import formValidate from "./validation/ContactForm";
import FormLoading from "../loader/FormLoading";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const Contact = () => {
  const [resMsg, setResMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, message } = inputs;

  const saveContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResMsg("");
    setErr(formValidate(inputs));
    const formData = {
      name,
      email,
      message,
    };
    const res = await fetch("http://localhost:8000/api", {
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    setResMsg(result.message);
    setLoading(false);
  };

  return (
    <div>
      {resMsg ? <RightLeftAlert Message={resMsg} /> : <></>}
      <section
        className="contact flex flex-col max-w-6xl mx-auto items-center mb-12 md:px-4"
        id="contact"
      >
        <div className="title mb-12 mt-16">
          <h2 className="text-4xl font-medium">Contact</h2>
        </div>

        <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly">
          <div className="relative h-[50vw] w-full max-w-full p-4 md:w-[50%] md:h-[35vw] lg:h-80">
            <div className="relative h-full w-full">
              <Image
                loader={myLoader}
                src={"images/contacts.jpeg"}
                alt="contact"
                layout="fill"
              />
            </div>
          </div>
          <div className="relative flex w-full p-4 md:w-[50%]">
            <form
              method="POST"
              className="relative flex flex-col w-full"
              onSubmit={saveContact}
            >
              <div className="w-full mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onchange}
                  value={inputs.name}
                  className="border border-black rounded p-2 outline-none w-full dark:border-white"
                />
                <p className="text-sm text-red-500">{err && err.name}</p>
              </div>
              <div className="w-full mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={onchange}
                  value={inputs.email}
                  className="border border-black rounded p-2 outline-none w-full dark:border-white"
                />
                <p className="text-sm text-red-500">{err && err.email}</p>
              </div>
              <div className="w-full mb-4">
                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={onchange}
                  value={inputs.message}
                  className="border border-black rounded p-2 outline-none w-full dark:border-white"
                ></textarea>
                <p className="text-sm text-red-500">{err && err.message}</p>
              </div>
              <button
                type="submit"
                className="rounded w-full h-10 font-medium bg-green-600 text-white dark:border-white"
              >
                {loading ? <FormLoading /> : "submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
