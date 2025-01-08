"use client";

import Link from "next/link";

export const revalidate = 30;

export default function Contact() {
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
    });
  }

  return (
    <div className="">
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
            className="p-2 border border-gray-300 rounded-md w-96 h-32"
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
    </div>
  );
}
