import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-64 lg:h-[600px]">
      <Image
        className="object-cover"
        src="/home/blog.png"
        alt="Blog Banner"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </div>
  );
};

export default HeroBanner;
