import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
