import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="rounded-b-[6rem] md:rounded-b-[8rem] w-full relative">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
