import bgPic from "../assets/images/bgContactUs.jpeg"; // Your background image

const ContactUs = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${bgPic})` }}
            />
            {/* Dark Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Form Container */}
            <div className="relative z-10 p-8 shadow-lg rounded-md w-full max-w-md">
                <form className="space-y-6">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 bg-transparent border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md shadow-md"
                    />
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 bg-transparent border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md shadow-md"
                    />
                    {/* Subject Input */}
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-3 bg-transparent border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md shadow-md"
                    />
                    {/* Message Textarea */}
                    <textarea
                        placeholder="Message"
                        className="w-full p-3 h-32 bg-transparent border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md shadow-md resize-none"
                    />
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-600 text-black font-semibold rounded-md shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
