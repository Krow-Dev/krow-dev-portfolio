const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 w-10 h-screen flex flex-col z-[100] items-center pt-8"
             style={{ color: '#ffb408' }}>
            <ul className="flex flex-col justify-around h-4/5 w-full space-y-6 my-6">
                <li className="w-full flex justify-center">
                    <a href="#home" className="transform -rotate-90 flip text-white hover:text-red-500">Home</a>
                </li>
                <li className="w-full flex justify-center">
                    <a href="#about" className="transform -rotate-90 text-white hover:text-red-500">About</a>
                </li>
                <li className="w-full flex justify-center">
                    <a href="#bibliography"
                       className="transform -rotate-90 text-white hover:text-red-500">Bibliography</a>
                </li>
                <li className="w-full flex justify-center">
                    <a href="#contact" className="transform -rotate-90 text-white hover:text-red-500">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
