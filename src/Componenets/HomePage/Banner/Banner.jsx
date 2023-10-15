import imageOne from "../../../assets/Picture.png";
import imageTwo from "../../../assets/Picture (1).png";
import imageThere from "../../../assets/Picture (2).png";

const Banner = () => {
    return (
        <>
            <div
                className="banner">

            </div>
            <div
                className="container mx-auto">
                <div
                    className="grid grid-cols-2 pt-28 pb-28 ps-32 absolute top-24 w-full container z-10">
                    <div>
                        {/* banner main text start */}
                        <h2
                            className="text-[60px] font-[900]">
                            Find  <span className="Partners">Partners</span> (CAs)
                            <br />
                            available online
                        </h2>
                        <p
                            className="text-[#616161] font-extralight mt-[16px]">
                            <span
                                className="text-lg font-bold">CONNECT</span> with us where your services are listed and visible to a myriad
                            <br />
                            of businesses seeking CA’s for compliance support
                        </p>
                        {/* banner main text end */}

                        {/* banner input field start */}
                        <div>
                            <input
                                className="pl-4 pe-52 py-4 rounded-md me-1 mt-[60px] border-2"
                                type="text"
                                placeholder="Search by Name"
                            />
                            <button
                                className="bg-[#0076CE] text-white text-sm py-4 px-9 rounded-md">
                                Search
                            </button>
                        </div>
                        {/* banner input field end */}
                    </div>

                    {/* banner image grid section start */}
                    <div
                        className="grid grid-cols-3">
                        <img
                            className="pt-20"
                            src={imageOne}
                            alt="" />
                        <img
                            src={imageTwo}
                            alt="" />
                        <img
                            className="pt-12"
                            src={imageThere}
                            alt="" />
                    </div>
                    {/* banner image grid section end */}
                </div>
            </div>
            <svg
                className="w-full absolute top-[550px] max-w-7xl mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1536 210"
                fill="none">
                <path
                    d="M0 210H1536V80.0669V0L0 192.622V210Z"
                    fill="#FAFBFC" />
            </svg>
        </>
    );
};

export default Banner;