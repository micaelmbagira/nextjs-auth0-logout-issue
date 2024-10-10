const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <a href="/api/auth/logout">
                <button className="bg-fuchsia-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 focus:ring-offset-2">
                    Logout
                </button>
            </a>
        </nav>
    );
};

export default Navbar;
