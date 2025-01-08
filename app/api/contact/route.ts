import { createClient } from "../ClientFactory";
import { Contact } from "../starhive/schema/Contact";
import { NextResponse } from "next/server";

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const client = createClient();
  const body: ContactRequest = await request.json();
  const contact = await client.createObject(
    Contact.builder()
      .name(body.name)
      .email(body.email)
      .message(body.message)
      .build()
  );
  return NextResponse.json(contact);
}
