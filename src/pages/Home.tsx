import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bgVideo from '../assets/videos/bgVideo.mp4';



const Home = () => {
    return (
        <section className="relative h-screen w-full">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={bgVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <div className="relative z-20 flex justify-center items-center h-full w-full">
                <div className="text-center text-white">
                    {/* Main Heading */}
                    <h1
                        className="text-6xl md:text-8xl font-bold mb-4 mx-6 md:mx-10"
                        style={{ color: '#ffb408' }}
                    >I'm a
                        Web Developer

                    </h1>

                    {/* Subheading */}
                    <h2 className="text-3xl md:text-5xl font-medium mb-6">Krow Dev</h2>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mb-6">
                        <a
                            href="#"
                            className="border border-white bg-transparent text-white py-2 px-6 rounded-lg text-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
                        >
                            HIRE ME
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6">
                        <FaGithub
                            size={40}
                            className="cursor-pointer text-gray-300 hover:text-gray-400 transition duration-300 transform hover:scale-110"
                        />
                        <FaLinkedin
                            size={40}
                            className="cursor-pointer text-blue-500 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
