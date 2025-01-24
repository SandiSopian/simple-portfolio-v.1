import { brand } from "../../services/database";

const Brand = () => {
  return (
    <div className="bg-bg-secondary flex items-center justify-center -mt-36">
      <div className="mt-36 py-12 flex flex-wrap items-center justify-center gap-12 md:gap-0 md:justify-between md:w-11/12">
        {brand.map((item, index) => (
          <div key={index}>
            <img src={item.brandImg} alt="brand logo" className="w-20 filter grayscale brightness-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
