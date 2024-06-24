import React from 'react'
import { Link } from 'react-router-dom'
import Image from "@/components/Image";


const escortsData = [
    {
        name: 'TeddyGBT',
        location: 'Luanda, Angola',
        image: Modelimage,
        isFeatured: true, // Example property
    },
    // Add more data objects as needed
];

const FeaturedEscorts = () => (
    <div className="featuredEscorts py-8 md:py-12">
        <div className="container mx-auto">
            <h1 className="text-2xl text-white mb-6 md:text-3xl">Featured Male Escorts & Gay Massage Near Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {escortsData.map((escort, index) => (
                    <EscortCard key={index} {...escort} />
                ))}
            </div>
        </div>
    </div>
);


const EscortCard = ({ name, location, image, isFeatured }) => {
    return (
        <div>
            <Link href="#" className="relative h-[242px] overflow-hidden group">
                <Image
                    src={image}
                    className="h-full w-10 object-cover transition transform group-hover:scale-[1.1]"
                    alt={`Image of ${name}`}
                    layout="fill"
                />
                <div className="afterOverlay absolute bottom-0 left-0 px-4 pb-4">
                    <h3 className="text-md font-bold text-white">
                        {name} {isFeatured && <span className="inline-block h-3 w-3 rounded-full bg-[#07B40E] ml-1"></span>}
                    </h3>
                    <p className="text-md text-white">{location}</p>
                </div>
            </Link>
        </div>
    )
}


export default EscortCard

