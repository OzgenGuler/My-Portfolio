export default function Portfolio() {
  const projects = [
    {
      title: "Green-Harvest",
      description:
        "In this project, we aimed to emphasise the importance of healthy eating and to facilitate the purchase of healthy fruit and vegetables through this website. Our project is a group project created using HTML+CSS.",
      image: "https://via.placeholder.com/300x200",
      demo: "https://code-brotherhood.github.io/Green-Harvest-New/",
      github: "https://github.com/Code-Brotherhood/Green-Harvest-New",
    },
    {
      title: "Cinemania",
      description:
        " In this project, we aimed to make it easier for you, film enthusiasts, to search for and list films that are about to be released. Our project is a group project created using HTML+CSS+JAVASCRIPT+API.",
      image: "https://via.placeholder.com/300x200",
      demo: "https://cinemania-js-team-d-project.github.io/Cinemania-JS-Team-D/",
      github:
        "https://github.com/CINEMANIA-JS-TEAM-D-PROJECT/Cinemania-JS-Team-D",
    },
    {
      title: "Money Guard",
      description:
        "In this project, we aimed to make it easier for you to view your income and expenditure table and your expenses. Our project is a group project created using React+API.",
      image: "https://via.placeholder.com/300x200",
      demo: "https://guardiansofmoney-react-project-sden.vercel.app",
      github:
        "https://github.com/GUARDIANSOFMONEYS/GUARDIANSOFMONEY-ReactProject",
    },
    {
      title: "Cv-Create",
      description:
        "For this project, I have created a website for you in the form of a mini CV example. You can download this template format to your own computer and edit it with VSCode.",
      image: "https://via.placeholder.com/300x200",
      demo: "https://ozgenguler.github.io/Cv-Create/",
      github: "https://github.com/OzgenGuler/Cv-Create",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-1 border border-blue-600 hover:bg-blue-600 hover:text-white rounded text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
