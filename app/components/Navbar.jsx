export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-purple-800">
        <div className="flex-row text-white">
            <h1 className="text-4xl font-bold">Jane Doe</h1>
            <div className="text-sm">
                
                <p>jdoe931@gmail.com</p>
            </div>
        </div>
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
        </div>
        </nav>
    );
}