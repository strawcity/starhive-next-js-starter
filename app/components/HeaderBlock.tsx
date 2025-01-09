"use client";

export default function HeaderBlock({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <div className="flex gap-1 flex-col items-center justify-center">
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  );
}
