'use client'
import Image from 'next/image'
import ReactCompareImage from 'react-compare-image'

const WhyChosen = () => {

    const data = [
        {
            title: "185+",
            description: "Graves Maintained",
            icon: "/icons/heart.png"
        }, {
            title: "50+",
            description: "Happy Families",
            icon: "/icons/user.png"
        }, {
            title: "5+ Years",
            description: "Experience",
            icon: "/icons/clock-w.png"
        }, {
            title: "100%",
            description: "Satisfaction",
            icon: "/icons/badge.svg"
        }
    ]

    const commitment = [
        {
            title: "Professional Cleaning",
            description: "We use soft brushes and plastic scrappers that are gentle on the stone, avoiding any damage or scratches. No abrasive tools or pressure washers are employed.",
            icon: "/icons/sparkle.png"
        }, {
            title: "Advanced Cleaning Solutions",
            description: "We use the same professional solutions used on national monuments to deeply and safely clean and protect the stone. No household cleaners.",
            icon: "/icons/drops.png"
        }, {
            title: "Lasting Protection",
            description: "Our industry leading cleaning solution protects the stone and prevents biological growth such as mold, mildew, and water stains from forming.",
            icon: "/icons/shield.png"
        }
    ]

    const reasons = [
        {
            title: "No Household Cleaners",
            icon: "/icons/ban.png"
        }, {
            title: "No Abrasive Tools",
            icon: "/icons/hammer.png"
        }, {
            title: "Eco-Friendly Solutions",
            icon: "/icons/leaf.png"
        }
    ]
    return (
        <div className='bg-primary text-white py-12'>
            <div className="lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto">
                <h2 className='text-5xl font-bold mb-2 text-center'>Why Choose Us</h2>
                <p className='max-w-lg mx-auto font-bold text-xl text-center'>Our commitment to honoring the memory of your loved ones
                    through compassionate care and dedicated service</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {data.map((item) => (
                        <div key={item.title} className='flex flex-col text-center items-center justify-center'>
                            <div className="bg-[#89A5B2] size-14 rounded-full flex items-center justify-center">
                                <Image src={item.icon} alt={item.title} width={30} height={30} />
                            </div>
                            <h3 className='text-3xl font-bold'>{item.title}</h3>
                            <p className='text-2xl font-bold'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='bg-white p-16 rounded-4xl mt-10 flex justify-center items-center gap-10 text-primary'>
                    <div className='rounded-4xl overflow-hidden w-1/2 max-h-133.5'>
                        <ReactCompareImage
                            leftImage="/work/before-1.png"
                            rightImage="/work/after-1.png"
                            hover={true}
                            leftImageCss={{ width: "100%", height: "100%", objectFit: "contain" }}
                            rightImageCss={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        {commitment.map((item) => (
                            <div key={item.title} className='flex gap-4 bg-[#D9D9D9] border-primary border-2 rounded-3xl p-4'>
                                <div className="bg-primary p-3 h-fit rounded-2xl flex items-center justify-center">
                                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold'>{item.title}</h3>
                                    <p className='text-xl font-medium'>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <div className='flex gap-4 mt-10 items-center justify-around'>
                    {reasons.map((item) => (
                        <div key={item.title} className='flex gap-4 mt-10 items-center justify-center'>
                            <div className="bg-white p-1 size-12 rounded-xl flex items-center justify-center">
                                <Image src={item.icon} alt={item.title} width={30} height={30} />
                            </div>
                            <h3 className='text-2xl font-semibold'>{item.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyChosen