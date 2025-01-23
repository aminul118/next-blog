import Image from "next/image";

const HeroBanner = () => {
  return (
    <Image
      className="h-[600px] object-cover"
      src="/home/blog.png"
      width={1920}
      height={200}
      alt="Blog Banner"
    />
  );
};

export default HeroBanner;
