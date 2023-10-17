const RightSection = ({ data }) => {
    const { about, name, image } = data;

    return (
        <div
            className="px-4">
            <div
                className="flex items-center justify-center">
                <img
                    className="rounded-2xl"
                    src={image}
                    alt="" />
            </div>

            <div
                className="lg:ms-2">
                <h2
                    className="text-4xl font-extrabold mt-10">
                    About {name}
                </h2>

                <div
                    className="grid grid-cols-4 mt-6">
                    <div>
                        <h2 className="text-gray-400 font-[900]">
                            FROM
                        </h2>
                        <p>
                            {about?.from}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-gray-400 font-[900]">
                            PARTNER SINCE
                        </h2>
                        <p>
                            {about?.partnerSince}
                        </p>
                    </div>
                    <div
                        className="col-span-2">
                        <h2 className="text-gray-400 font-[900]">
                            AVERAGE RESPONSE TIME
                        </h2>
                        <p>
                            {about?.averageResponseTime}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default RightSection;