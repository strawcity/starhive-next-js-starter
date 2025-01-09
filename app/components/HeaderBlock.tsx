"use client";

import { Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function HeaderBlock({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  const pathname = usePathname();
  return (
    <div className="flex gap-1 justify-center items-center w-full p-4 border-b border-gray-200">
      <div
        style={{ maxWidth: "100rem" }}
        className="flex gap-2 justify-between  items-center w-full"
      >
        <div>
          <h2>{name}</h2>
          <h5>{title}</h5>
        </div>
        <div className="flex gap-2">
          <Link href={pathname === "/" ? "/contact" : "/"}>
            <Button className="text-white rounded-md bg-slate-600">
              {pathname === "/" ? "Contact" : "Bio"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
