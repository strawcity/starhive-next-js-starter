export const revalidate = 30;

import {
  createClient,
  starhiveApiToken,
  starhiveWorkspaceId,
} from "@/app/api/ClientFactory";
import { StarhivePage } from "@/app/api/starhive/client/StarhivePage";
import { Owner } from "@/app/api/starhive/schema/Owner";
import Link from "next/link";

export default async function Home() {
  const workspaceIdSetupCompleted = starhiveWorkspaceId() !== undefined;
  const apiKeySetupCompleted = starhiveApiToken() !== undefined;

  let client;
  if (workspaceIdSetupCompleted && apiKeySetupCompleted) {
    client = createClient();
  } else {
    throw new Error("Client is not properly set up");
  }

  const owner: StarhivePage<Owner> = await client.search(
    Owner.TYPE_ID,
    `Name = "Erik Nilsson"`
  );

  return (
    <div className="w-1/2 flex flex-col gap-2">
      <p>{owner.result[0].getBio()}</p>
      <Link
        href="/contact"
        className="p-2 w-min bg-blue-500 text-white rounded-md"
      >
        Contact
      </Link>
    </div>
  );
}
