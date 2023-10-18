import { useEffect, useState } from "react";
import AccountantCard from "./AccountantCard";

const Card = () => {

    const [data, setData] = useState([]);

    // fetch the card data
    useEffect(() => {
        fetch("allData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div
            className="max-w-7xl mx-auto pt-16 relative">

            {/* heading section start */}
            <div>
                <h2
                    className="text-3xl lg:text-6xl font-extrabold text-center">
                    Discover Your Perfect Match
                    <br />
                    Certified <span className="platform">Accountant</span>
                </h2>
                <p
                    className="text-center font-[24px] text-[400]">
                    Explore our pool of certified accountants and uncover your perfect match
                </p>
            </div>
            {/* heading section end */}

            {/* card map section start */}
            <div
                className="grid lg:grid-cols-3 mb-20">
                {
                    data.slice(0, 9).map(data => <AccountantCard
                        key={data.id}
                        data={data}
                    ></AccountantCard>)
                }
            </div>
            {/* card map section end */}

        </div>
    );
};

export default Card;