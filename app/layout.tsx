import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Owner } from "./api/starhive/schema/Owner";
import { StarhivePage } from "./api/starhive/client/StarhivePage";
import {
  createClient,
  starhiveApiToken,
  starhiveWorkspaceId,
} from "./api/ClientFactory";
import HeaderBlock from "./components/HeaderBlock";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Erik Nilsson",
  description: "Developer for hire",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const workspaceIdSetupCompleted = starhiveWorkspaceId() !== undefined;
  const apiKeySetupCompleted = starhiveApiToken() !== undefined;

  let client;
  if (workspaceIdSetupCompleted && apiKeySetupCompleted) {
    client = createClient();
  }

  const owner: StarhivePage<Owner> = await client!.search(
    Owner.TYPE_ID,
    `Name = "Erik Nilsson"`
  );

  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderBlock
            name={owner.result[0].getName() || ""}
            title={owner.result[0].getTitle() || ""}
          />
          <div className="flex flex-col items-center justify-center w-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
