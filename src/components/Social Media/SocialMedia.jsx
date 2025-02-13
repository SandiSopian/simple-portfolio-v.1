import { socialMedia } from "../../services/database";

const SocialMedia = () => {
  return (
    <div className="flex space-x-1 md:mr-8 text-sm">
      {socialMedia.map((item, index) => (
        <div key={index}>
          <a href={item.socialMediaLink} target="_blank" rel="noopener noreferrer">
            <div className="hover-scale">
              {item.socialMediaName}
              {index < socialMedia.length - 1 && <span className="px-2">/</span>}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
