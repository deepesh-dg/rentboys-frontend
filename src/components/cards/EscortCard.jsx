import React from "react";
import { Link } from "react-router-dom";
import Image from "@/components/Image";

const escortsData = [
    {
        name: "TeddyGBT",
        location: "Luanda, Angola",
        image: Modelimage,
        isFeatured: true, // Example property
    },
    // Add more data objects as needed
];

const FeaturedEscorts = () => (
    <div className="featuredEscorts py-8 md:py-12">
        <div className="container mx-auto">
            <h1 className="mb-6 text-2xl text-white md:text-3xl">
                Featured Male Escorts & Gay Massage Near Me
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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
            <Link href="#" className="group relative h-[242px] overflow-hidden">
                <Image
                    src={image}
                    className="h-full w-10 transform object-cover transition group-hover:scale-[1.1]"
                    alt={`Image of ${name}`}
                    layout="fill"
                />
                <div className="afterOverlay absolute bottom-0 left-0 px-4 pb-4">
                    <h3 className="text-md font-bold text-white">
                        {name}{" "}
                        {isFeatured && (
                            <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#07B40E]"></span>
                        )}
                    </h3>
                    <p className="text-md text-white">{location}</p>
                </div>
            </Link>
        </div>
    );
};

export default EscortCard;
