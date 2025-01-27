import { footer } from "../../services/database.js";
import SocialMedia from "../Social Media/SocialMedia.jsx";

const Footer = () => {
  const { footerDescription } = footer;

  return (
    <footer>
      <div>
        {/* Garis pembatas */}
        <div className="flex-grow border-t border-gray-300 mx-6"></div>
      </div>

      {/* Deskripsi Footer */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:mx-4 mt-4 md:my-4">
        <div>
          <div>{footerDescription}</div>
        </div>

        <div className="mt-4 md:mt-0">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
