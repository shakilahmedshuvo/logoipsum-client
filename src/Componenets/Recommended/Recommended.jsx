import { useLoaderData } from 'react-router-dom';
import SingleRecommended from './SingleRecommended';

const Recommended = () => {
    // use loaderData for load data
    const loader = useLoaderData();

    return (
        <div>
            <div>
                <h2
                    className='text-4xl font-black'>
                    Recommended for you
                </h2>
            </div>

            {/* map section start */}
            <div
                className='grid lg:grid-cols-3'>
                {
                    loader.slice(0, 3).map(data => <SingleRecommended
                        key={data.id}
                        data={data}
                    ></SingleRecommended>)
                }
            </div>
            {/* map section end */}
        </div>
    );
};

export default Recommended;