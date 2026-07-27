import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "standard" | "wide" | "full";
}

export default function Container({
  children,
  className = "",
  size = "standard",
}: ContainerProps) {
  const sizeClassName = {
    narrow: "max-w-[var(--container-narrow)]",
    standard: "max-w-[var(--container-standard)]",
    wide: "max-w-[var(--container-wide)]",
    full: "max-w-none",
  }[size];

  return (
    <div
      className={`mx-auto w-full px-[var(--gutter)] ${sizeClassName} ${className}`}
    >
      {children}
    </div>
  );
}
