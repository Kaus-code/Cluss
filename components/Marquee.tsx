import React from 'react'

const Marquee = () => {
    const texts = [
        "/ DESIGNS",
        "/ STRATEGIC EXPERIENCES",
        "/ RESULTS DRIVEN SOLUTIONS",
        "/ BUSINESS VALUE",
        "/ CREATIVE INNOVATION",
        "/ DIGITAL TRANSFORMATION"
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap bg-white py-6 flex select-none">
            <div className="flex animate-marquee shrink-0 min-w-full">
                {texts.map((text, index) => (
                    <div key={index} className="flex items-center mx-10">
                        <span className="text-3xl font-mono tracking-tighter uppercase text-black">
                            {text}
                        </span>
                        {/* <span className="ml-20 text-4xl font-light text-gray-300">/</span> */}
                    </div>
                ))}
            </div>
            <div className="flex animate-marquee shrink-0 min-w-full">
                {texts.map((text, index) => (
                    <div key={`dup-${index}`} className="flex items-center mx-10">
                        <span className="text-3xl font-mono tracking-tighter uppercase text-black">
                            {text}
                        </span>
                        {/* <span className="ml-20 text-4xl font-light text-gray-300">/</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee
