'use client'
import ReactCompareImage from "react-compare-image"

const ResentWork = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-[#E3E3E3] py-10">
            <h2 className="text-5xl mb-2 text-center">Recent Work</h2>
            <div className="max-w-7xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white rounded-3xl overflow-hidden w-3xs h-3xs">
                    <ReactCompareImage
                        leftImage="/before.jpg"
                        rightImage="/after.jpg"
                        hover={true}
                        leftImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                        rightImageCss={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>

            </div>
        </div>
    )
}
export default ResentWork
