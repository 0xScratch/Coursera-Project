import Image from "next/image";

export const Hero = () => {
    return (
        <div className="flex m-32 gap-28">
            {/* Profile Pic */}
            <Image 
                src="/profile-pic.jpg" 
                alt="Profile_Pic"
                width={300}
                height={300}
                className="rounded-full"
            />

            {/* Description */}
            <div className="my-auto">
                <h1 className="text-purple-700 font-bold text-4xl mb-3">Hi, I&apos;m Aryan Malik!👋</h1>
                <p>
                    I am a Full Stack Web Developer with a passion for learning and teaching. I have experience working with a variety of different languages and frameworks and love working on projects that challenge me to learn new skills. I am a quick learner and have a strong understanding of core programming principles. I am a strong team player and am always looking for ways to help my team succeed.
                </p>
            </div>
        </div>
    )
}