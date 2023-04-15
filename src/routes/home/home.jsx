import { useState } from "react";
import { data } from "../../data";

const Home = () => {
    const [products] = useState(data);

    return (
        <>
            <h1>{data.length} items</h1>
        </>
    )
}

export default Home;