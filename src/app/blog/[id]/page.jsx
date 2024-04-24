import Footer from "@/Components/Layout/Footer/Footer";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import BlogId from "@/Components/Routes/BlogId/BlogId";

const page = () => {
  return (
    <>
      <Navbar />
      <BlogId />
      <Footer />
    </>
  );
};

export default page;
