import HeroBanner from "@/components/banner/HeroBanner";
import Pagegap from "@/components/shared/Pagegap";
import BlogPost from "@/components/BlogPost";

const HomePage = () => {
  return (
    <Pagegap>
      <HeroBanner />
      <BlogPost/>

    </Pagegap>
  );
};

export default HomePage;
