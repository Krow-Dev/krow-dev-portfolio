import { FaPlay } from 'react-icons/fa'; // Only need FaPlay now

const projects = [
    {
        title: "Project 1",
        image: "/path-to-screenshot1.png",
        demoLink: "https://project1.demo.com",
    },
    {
        title: "Project 2",
        image: "/path-to-screenshot2.png",
        demoLink: "https://project2.demo.com",
    },
    {
        title: "Project 3",
        image: "/path-to-screenshot3.png",
        demoLink: "https://project3.demo.com",
    },
    {
        title: "Project 4",
        image: "/path-to-screenshot4.png",
        demoLink: "https://project4.demo.com",
    },
    {
        title: "Project 5",
        image: "/path-to-screenshot5.png",
        demoLink: "https://project5.demo.com",
    },
    {
        title: "Project 6",
        image: "/path-to-screenshot6.png",
        demoLink: "https://project6.demo.com",
    },
];

const Projects = () => {
    return (
        <section className="py-12 mx-6 sm:mx-4 md:mx-10 lg:mx-auto max-w-7xl bg-gray-950">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-black bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-4 flex flex-col transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-lg font-semibold text-white text-center mb-2">{project.title}</h3>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover mb-4 rounded-md"
                        />
                        <div className="flex justify-center mt-auto">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-yellow-500 hover:text-yellow-400"
                            >
                                <FaPlay className="mr-1" /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <a
                    href="/allProjects"
                    className="bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                    View All
                </a>
            </div>
        </section>
    );
};

export default Projects;
