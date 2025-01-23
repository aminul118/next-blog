import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-312px)] container mx-auto px-2">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
