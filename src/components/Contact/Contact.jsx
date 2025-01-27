import { contact } from "../../services/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { contactLogo, contactEmail, contactWhatsapp } = contact;

  return (
    <div className="flex flex-col items-center">
      {/* Logo */}
      <div>
        <img src={contactLogo} alt="logo handshake" className="w-20 p-4 rounded-full bg-slate-200" />
      </div>

      {/* Description */}
      <div className="text-center font-bold text-2xl mt-4">
        <p>
          Tell me about your project
          <span className="block">and lets work together</span>
        </p>
      </div>

      <div className="flex gap-3 mt-6 mb-24">
        {/* Direct Email */}
        <a href={`mailto:${contactEmail}`} className="py-2 px-6 rounded-full bg-black text-white text-xs hover-scale">
          <span className="mr-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          Email Me
        </a>

        {/* Direct WhatsApp */}
        <a href={`https://wa.me/${contactWhatsapp.replace(/[^\d]/g, "")}`} className="py-2 px-6 rounded-full bg-white text-xs hover-scale" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
