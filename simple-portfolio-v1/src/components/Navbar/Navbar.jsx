import { header } from "../../services/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../Social Media/SocialMedia";

const Navbar = () => {
  const { email, cv } = header;
  if (!header.email) return null;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email berhasil disalin ke clipboard!");
      })
      .catch((err) => {
        console.error("Gagal menyalin email:", err);
      });
  };

  return (
    <>
      {/* Navbar for tab or desktop  */}
      <div className="hidden md:block">
        <div className="flex flex-row mx-auto justify-between py-2 px-2">
          <div className="flex flex-row mt-auto justify-between py-2 px-2 gap-2 text-sm">
            <div className="text-sm">
              <p>{email}</p>
            </div>

            <div>
              <span className="py-2 px-10 bg-white rounded-full cursor-pointer" onClick={handleCopy}>
                Copy
              </span>
            </div>

            <div>
              <a href={cv} alt="CV">
                <span className="py-2 px-10 rounded-2xl bg-white">CV</span>
              </a>
            </div>
          </div>

          <div>
            <SocialMedia />
          </div>
        </div>
      </div>

      {/* Navbar for mobile */}
      <div className="block md:hidden">
        <div className="flex flex-row mx-auto py-4 px-4 gap-3">
          <div className="py-2 px-4 bg-white rounded-lg shadow-lg text-sm cursor-pointer" onClick={handleCopy}>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Copy Email</span>
            </span>
          </div>

          <div className="py-2 px-4 bg-white rounded-lg shadow-lg text-sm">
            <a href={cv}>CV</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
