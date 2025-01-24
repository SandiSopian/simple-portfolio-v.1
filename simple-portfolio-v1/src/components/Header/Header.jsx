import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-bg-primary rounded-b-[6rem] md:rounded-b-[10rem] w-full h-svh relative">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
