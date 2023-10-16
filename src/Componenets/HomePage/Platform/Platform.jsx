import maleImg from "../../../assets/malePhoto.png";
import feamleImg from "../../../assets/femalePhoto.png";
import { useEffect, useState } from "react";
import SinglePlatform from "./SinglePlatform";

const Platform = () => {
    const [data, setData] = useState([]);

    // fetch the from json file
    useEffect(() => {
        fetch('platform.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div
            className="mt-20 max-w-7xl mx-auto">
            <div
                className="grid grid-cols-2">

                {/* right side div start */}
                <div>
                    <h2
                        className="text-6xl font-extrabold">
                        <span className="platform">All-in-One </span>platform
                        <br />
                        That Makes Easier
                    </h2>
                    <p
                        className="mt-8 text-[24px] font-light text-gray-700">
                        We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
                    </p>

                    {/* icons section start */}
                    <div
                        className="grid grid-cols-2 mt-8 mb-10">
                        {
                            data.map(data => <SinglePlatform
                                key={data.id}
                                data={data}
                            ></SinglePlatform>)
                        }
                    </div>
                    {/* icons section end */}

                </div>
                {/* right side div end */}

                {/* left side div start */}
                <div>
                    <div
                        className="grid grid-cols-5">

                        <div
                            className="col-span-3">

                            {/* chat section start */}
                            <div
                                className="mt-14">

                                <div
                                    className="flex items-end justify-end">
                                    <p
                                        className="w-fit bg-[#EFD9F9] font-[100] px-4 py-2 rounded-full rounded-br-3xl text-sm">
                                        Hey, check out loreumipsum services
                                    </p>
                                </div>

                                <div
                                    className="flex items-end justify-end my-3">
                                    <p
                                        className="w-fit bg-[#EFD9F9] font-[100] px-4 py-2 rounded-full rounded-br-3xl text-sm">
                                        I learned from their videos, got my first job.
                                    </p>
                                </div>

                                <div
                                    className="flex items-end justify-end">
                                    <p
                                        className="w-fit bg-[#EFD9F9] font-[100] px-4 py-2 rounded-full rounded-br-3xl text-sm">
                                        You wont be disappointed with their services.
                                    </p>
                                </div>


                                <div
                                    className="flex items-end justify-end mt-14">
                                    <p
                                        className="w-fit bg-[#DDF3FF] font-[100] px-4 py-2 rounded-full rounded-br-3xl text-sm">
                                        I got a perfect analysis report from them too
                                    </p>
                                </div>

                                <div
                                    className="flex items-end justify-end mt-2">
                                    <p
                                        className="w-fit bg-[#DDF3FF] font-[100] px-4 py-2 rounded-full rounded-br-3xl text-sm">
                                        Oh, thats great.
                                    </p>
                                </div>

                            </div>
                            {/* chat section end */}

                        </div>

                        {/* male img */}
                        <div
                            className="col-span-2">
                            <img
                                className="rounded-full"
                                src={maleImg}
                                alt="" />
                        </div>

                        {/* female img */}
                        <div
                            className="col-span-3">
                            <img
                                className="rounded-full ms-10"
                                src={feamleImg}
                                alt="" />
                        </div>

                    </div>
                </div>
                {/* left side div end */}

            </div>
        </div>
    );
};

export default Platform;