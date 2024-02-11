import Image from "next/image"

export const Card = ({url, name, exp, height = 30, width = 30}) => {
    return (
        <div className="card">
            {/* Image */}
            <Image 
                src={url} 
                alt={name}
                width={width}
                height={height}
                className="mx-auto mb-6"
            />

            {/* Name */}
            <h1 className="font-bold text-center mb-6">{name}</h1>

            {/* Experience */}
            <p className="font-bold">{exp} years experience</p>
        </div>
    )
}