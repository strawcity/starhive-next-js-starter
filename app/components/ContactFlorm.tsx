"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function ContactForm() {
  const [hasSentMessage, setHasSentMessage] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email as string)) {
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setHasSentMessage(true);
      } else {
        setHasSentMessage(false);
      }
    });
  }

  return (
    <div className="w-1/2 mt-16">
      {hasSentMessage ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h4>Thanks for reaching out!</h4>
          <p>I will get back to you as soon as possible.</p>
          <Link href="/" className="p-2 bg-gray-400 text-white rounded-md">
            Back
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Contact me</h2>
          <form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="p-2 border border-gray-300 rounded-md"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 border border-gray-300 rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <input
                className="p-2 border border-gray-300 rounded-md"
                type="text"
                name="message"
              />
            </div>
            <div className="flex gap-2 w-full justify-end">
              <Link href="/" className="p-2 bg-gray-400 text-white rounded-md">
                Back
              </Link>
              <button
                className="p-2 bg-blue-500 text-white rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
