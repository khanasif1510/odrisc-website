import Image from "next/image";

type BrandMarkProps = Readonly<{
  variant?: "default" | "light";
}>;

export function BrandMark({ variant = "default" }: BrandMarkProps) {
  const suffix = variant === "light" ? "-light" : "";

  return (
    <span className={`brand-mark brand-mark-${variant}`} role="img" aria-label="ODRISC">
      <Image
        className="brand-logo-image"
        src={`/brand/odrisc-logo${suffix}.png`}
        width={639}
        height={324}
        sizes="(max-width: 650px) 0px, 90px"
        alt=""
        priority
      />
      <Image
        className="brand-mark-image"
        src={`/brand/odrisc-mark${suffix}.png`}
        width={272}
        height={320}
        sizes="(max-width: 650px) 34px, 0px"
        alt=""
        priority
      />
    </span>
  );
}
