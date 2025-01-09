export const revalidate = 30;

import {
  createClient,
  starhiveApiToken,
  starhiveWorkspaceId,
} from "@/app/api/ClientFactory";
import { StarhivePage } from "@/app/api/starhive/client/StarhivePage";
import { Owner } from "@/app/api/starhive/schema/Owner";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";

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
    <div className="w-96 flex flex-col gap-4 mt-8">
      <p>{owner.result[0].getBio()}</p>
      <Link href="/contact">
        <Button color="primary">Contact</Button>
      </Link>
    </div>
  );
}
