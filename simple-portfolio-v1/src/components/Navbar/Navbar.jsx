import { header } from "../../services/database";

const Navbar = () => {
  const { email, cv } = header;
  if (!header.email) return null;

  return (
    <header className="flex gap-10 py-4 px-8 bg-gray-800 text-white">
      <div>
        <a href={`mailto:${email}`} alt="Email Address">
          <span className="py-2 px-7 text-white bg-gray-300 rounded-full">{header.email}</span>
        </a>
      </div>

      <div>
        <a href={cv} alt="CV">
          <span className="py-2 px-7 rounded-2xl bg-gray-300">CV</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
