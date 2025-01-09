"use client";

import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

export default function ContactForm() {
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  }

  return (
    <div className="w-96 mt-16">
      {hasSentMessage ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h4>Thanks for reaching out!</h4>
          <p>I will get back to you as soon as possible.</p>
          <Link href="/">
            <Button className="bg-slate-600 text-white rounded-md">Back</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="text-2xl font-bold">Contact me</h2>
          <div className="w-full flex flex-col gap-8">
            <Form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2 w-full">
                <Input label="Name" type="text" name="name" />
                <Input label="Email" type="email" name="email" />
                <Input
                  label="Message"
                  type="text"
                  name="message"
                  className="w-full"
                />
              </div>

              <div className="flex gap-2 w-full justify-end">
                <Link href="/">
                  <Button className="bg-slate-200 text-black rounded-md">
                    Back
                  </Button>
                </Link>
                <Button
                  className="bg-slate-600 text-white rounded-md"
                  type="submit"
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
