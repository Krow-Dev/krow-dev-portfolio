
import proPic from "../assets/images/proPic.png";
import bgPic from "../assets/images/bgPic.jpg";

const About = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bgPic})` }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60">
                {/* Profile Picture */}
                <img
                    src={proPic}
                    alt="Profile"
                    className="w-40 h-40 rounded-full shadow-lg border-4 border-white mb-6"
                />

                {/* About Text */}
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg max-w-md mx-auto leading-relaxed">
                        Hi, I'm Krow Dev, a passionate developer with experience in creating
                        modern, scalable web applications and mobile apps. I love experimenting
                        with new technologies and turning ideas into reality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
