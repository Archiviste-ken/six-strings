import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative hidden flex-1 justify-center lg:flex">

      <Image
        src="/six-strings.png"
        alt="Six Strings"
        width={550}
        height={550}
        priority
        className="rounded-3xl border border-zinc-800 shadow-2xl"
      />

    </div>
  );
}