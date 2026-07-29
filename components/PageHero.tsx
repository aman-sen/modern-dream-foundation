import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[46vh] min-h-[320px] items-center justify-center overflow-hidden pt-16">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0B1F14]" />
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-3xl font-bold text-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
