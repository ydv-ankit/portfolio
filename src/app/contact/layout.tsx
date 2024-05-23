import React from "react";

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className="bg-[#21263d] h-fit overflow-hidden">{children}</div>;
}
