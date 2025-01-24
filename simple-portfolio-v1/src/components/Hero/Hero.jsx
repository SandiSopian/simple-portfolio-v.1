import { hero } from "../../services/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const { lastestShots } = hero;

  return (
    <div className="bg-bg-primary rounded-b-[6rem] md:rounded-b-[8rem] flex flex-col items-center justify-center mt-12">
      <div className="flex flex-col items-center justify-center">
        {/* Profile Picture */}
        <div>
          <img src="/src/assets/images/profile-picture.jpg" alt="profile picture" className="w-20 rounded-full border-2 border-white mx-auto" />
        </div>
        {/* Nama Profile */}
        <div className="text-xs py-1 px-4 bg-white -my-12 ml-40 rounded-full transform -rotate-15 origin-top-left">
          <p>Sandi Sopian 💡</p>
        </div>
      </div>

      {/* Deskripsi Hero */}
      <div className="flex flex-col text-center mt-20 text-2xl font-bold">
        <h1>Building digital</h1>
        <h1>product, brands, and</h1>
        <h1>experience</h1>
      </div>

      {/* Lastest Project Button */}
      <div className="flex flex-col items-center mt-6 mb-24 text-xs">
        <a href={lastestShots} className="py-2 px-6 bg-black text-white rounded-full">
          Lastest Project
          <span className="ml-2">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
