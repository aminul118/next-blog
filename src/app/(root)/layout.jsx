import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default layout;
