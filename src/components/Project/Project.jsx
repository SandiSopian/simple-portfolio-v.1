import { project } from "../../services/database";
const Project = () => {
  // const { projectTitle, projectDescription } = project;

  return (
    <div className="py-24 px-4 md:px-0">
      <div className="text-center">
        <h1 className="font-bold text-lg">
          Collaborate with brands and agencies
          <span className="block">to create impactful results</span>
        </h1>
      </div>

      <div className="relative flex items-center my-8 container mx-auto">
        {/* Garis kiri */}
        <div className="-mr-6 flex-grow border-t border-gray-300"></div>

        {/* Teks dengan rotasi */}
        <h3 className=" text-center mx-4 transform -rotate-15">
          <span className="text-xs py-1 px-4 bg-white rounded-full">service</span>
        </h3>

        {/* Garis kanan */}
        <div className="-ml-6 flex-grow border-t border-gray-300"></div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8 lg:mx-48 items-center justify-center">
          {project.map((project, index) => (
            <div key={index}>
              <img src={project.images} alt="project" className="w-10" />
              <h3 className="text-lg font-semibold my-2">{project.projectTitle}</h3>
              <p>{project.projectDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
