import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-64 lg:h-[600px]">
      <Image
        className="object-cover"
        src="/home/blog.png"
        alt="Blog Banner"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 75vw, 50vw"
      />
    </div>
  );
};

export default HeroBanner;
