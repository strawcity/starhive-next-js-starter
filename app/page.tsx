export const revalidate = 1;

import Image from "next/image";
import {
  createClient,
  starhiveApiToken,
  starhiveWorkspaceId,
} from "@/app/api/ClientFactory";
import { StarhivePage } from "@/app/api/starhive/client/StarhivePage";
import { Owner } from "@/app/api/starhive/schema/Owner";

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
  console.log(owner.result[0].getAvatar());
  return (
    <div className="w-96 flex flex-col gap-4 mt-8">
      <h2 className="text-2xl font-bold">About me</h2>
      <Image
        src={owner.result[0].getAvatar() || ""}
        alt="Erik Nilsson"
        width={100}
        height={100}
      />
      <p>{owner.result[0].getBio()}</p>
    </div>
  );
}
