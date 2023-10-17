import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
    const param = useParams();
    const loader = useLoaderData();
    const [data, setData] = useState([]);

    useEffect(() => {
        const singleData = loader.find(data => data.id == param.id)
        if (singleData) {
            setData(singleData)
            console.log(singleData);
        }
    }, [loader, param.id]);

    return (
        <div
            className="max-w-7xl mx-auto">
            {data.id}
        </div>
    );
};

export default DetailsPage;