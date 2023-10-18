import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const JoinUs = () => {

    const [data, setData] = useState([]);

    // fetch the from json file
    useEffect(() => {
        fetch('joinSixData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div
            className="mt-72">
            <div
                className="z-10 relative">
                <h2
                    className="text-[60px] font-[900] text-center">
                    Want to <span className="join">Join</span> Us?
                </h2>
                <p
                    className="text-center font-[24px] text-[400]">
                    To remain with us, it is essential that you diligently follow the steps provided
                </p>
            </div>

            {/* wave section start */}
            <svg
                className="absolute hidden lg:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1536 757"
                fill="none">
                <path
                    d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z"
                    fill="#DDF3FF" />
            </svg>
            {/* wave section end */}

            <div
                className="max-w-7xl mx-auto">
                <div
                    // className="absolute top-[1020px] grid grid-cols-3 gap-8 mx-28">
                    className="grid grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {
                        data.map(data => <SingleCard
                            key={data.id}
                            data={data}
                        ></SingleCard>)
                    }
                </div>
            </div>
            <div
                className="my-32 max-w-7xl mx-auto text-gray-600 relative font-medium text-base">
                * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you dont file the form for a year, you will owe ₹73,000 per form
            </div>
        </div>
    );
};

export default JoinUs;