'use client'
import ReactCompareImage from "react-compare-image"

const ResentWork = () => {
    const work = [
        {
            before: "/work/before-1.png",
            after: "/work/after-1.png"
        },
        {
            before: "/work/before-2.png",
            after: "/work/after-2.png"
        },
        {
            before: "/work/before-3.png",
            after: "/work/after-3.png"
        },
        {
            before: "/work/before-4.png",
            after: "/work/after-4.png"
        },
        {
            before: "/work/before-5.png",
            after: "/work/after-5.png"
        },
        {
            before: "/work/before-6.png",
            after: "/work/after-6.png"
        },
        {
            before: "/work/before-7.png",
            after: "/work/after-7.png"
        },
        {
            before: "/work/before-8.png",
            after: "/work/after-8.png"
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-[#E3E3E3] py-10">
            <h2 className="text-7xl mb-4 text-center">Recent Work</h2>
            <div className="w-full lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {work.map((item, index) => (
                    <div key={index} className=" rounded-3xl overflow-hidden w-64 h-72">
                        <ReactCompareImage
                            leftImage={item.before}
                            rightImage={item.after}
                            hover={true}
                            leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                            rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResentWork
