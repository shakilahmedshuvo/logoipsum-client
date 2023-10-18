const RightSection = ({ data }) => {
    const { about, name, image } = data;

    return (
        <div
            className="px-4 mb-48">
            <div
                className="flex items-center justify-center">
                <img
                    className="w-full rounded-2xl"
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
                        <p className="my-4 text-lg font-medium">
                            {about?.from}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-gray-400 font-[900]">
                            PARTNER SINCE
                        </h2>
                        <p className="my-4 text-lg font-medium">
                            {about?.partnerSince}
                        </p>
                    </div>
                    <div
                        className="col-span-2">
                        <h2 className="text-gray-400 font-[900]">
                            AVERAGE RESPONSE TIME
                        </h2>
                        <p className="my-4 text-lg font-medium">
                            {about?.averageResponseTime}
                        </p>
                    </div>

                </div>

                <div className="mt-6">
                    <h2 className="text-gray-400 font-[900]">
                        ABOUT
                    </h2>
                    <p className="my-4 text-lg">
                        {about?.description}
                    </p>
                </div>

                <div
                    className="grid grid-cols-3 mt-10">
                    <div
                        className="col-span-2">
                        <h2 className="text-gray-400 font-[900]">
                            SERVICES I OFFER
                        </h2>
                        <div className="my-4 ms-5 text-lg">
                            {/* map section start */}
                            {
                                about?.services.map((service, index) => {
                                    return (
                                        <li
                                            className="py-1"
                                            key={index}>
                                            {service}
                                        </li>
                                    )
                                })
                            }
                            {/* map section end */}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-gray-400 font-[900]">
                            WHY ME?
                        </h2>
                        <div className="my-4 ms-5 text-lg">

                            {
                                about?.benefits.map((data, index) => {
                                    return (
                                        <li
                                            className="py-1"
                                            key={index}>
                                            {data}
                                        </li>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default RightSection;