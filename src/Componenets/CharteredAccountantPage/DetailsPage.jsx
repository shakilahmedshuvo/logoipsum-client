import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Recommended from "../Recommended/Recommended";

const DetailsPage = () => {
    const param = useParams();
    const loader = useLoaderData();
    const [data, setData] = useState([]);

    useEffect(() => {
        const singleData = loader.find(data => data.id == param.id)
        if (singleData) {
            setData(singleData)
            // console.log(singleData);
        }
    }, [loader, param.id]);

    return (
        <div
            className="max-w-7xl mx-auto">
            <div
                className="grid grid-cols-12 mt-12">

                {/* left side 5 cols div start */}
                {/* left side 5 cols div end */}
                <div
                    className="col-span-5">
                    <LeftSection
                        data={data}
                        key={data.id}>
                    </LeftSection>
                </div>

                {/* left side 5 cols div start */}
                <div
                    className="col-span-7">
                    <RightSection
                        data={data}
                        key={data.id}>
                    </RightSection>
                </div>

            </div>


            {/* Recommended section start */}

            <Recommended />

            {/* Recommended section end */}
        </div>
    );
};

export default DetailsPage;