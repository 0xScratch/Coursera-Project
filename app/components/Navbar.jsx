import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-purple-800">

            {/* Name Block */}
            <div className="flex-row text-white">
                
                {/* Name */}
                <h1 className="text-4xl font-bold">John Doe</h1>

                {/* Email */}
                <div className="flex text-sm gap-3">
                    <Image 
                        src="/email-icon.png" 
                        alt="Email_Icon"
                        width={24}
                        height={24}
                    />
                    <p>john.doe@gmail.com</p>
                </div>

                {/* Phone Number */}
                <div className="flex text-sm pl-1 gap-3">
                    <Image 
                        src="/phone-icon.png" 
                        alt="Phone_Icon"
                        width={15}
                        height={15}
                    />
                    <p>+123-456-7890</p>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-14 text-gray-300">
                <a href="/" className="hover:underline hover:font-bold">About Me</a>
                <a href="/" className="hover:underline hover:font-bold">Skills</a>
                <a href="/" className="hover:underline hover:font-bold">Projects</a>
                <a href="/" className="hover:underline hover:font-bold">Recommendations</a>
            </div>
        </nav>
    );
}