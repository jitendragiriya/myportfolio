import Image from "next/image";
import React from "react";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const Contact = () => {
  return (
    <section
      className="contact flex flex-col max-w-6xl mx-auto items-center mb-12"
      id="contact"
    >
      <div className="title my-12">
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
        >
          <input
            type="text"
            placeholder="Name"
            name="username"
            className="border border-black rounded p-2 outline-none w-full mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border border-black rounded p-2 outline-none w-full mb-4"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="border border-black rounded p-2 outline-none w-full mb-4"
          ></textarea>
          <button
            type="submit"
            className="rounded w-full py-2 font-medium bg-green-600 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
