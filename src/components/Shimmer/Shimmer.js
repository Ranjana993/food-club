import React from 'react'
import "./Shimmer.css"
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
    return (
        <>
            {/* <div className="shimmer">
                {
                    Array(15).fill("").map((x, i) =>
                        <div key={i}> */}
            <ShimmerPostList postStyle="STYLE_FIVE" col={5} row={2} gap={30} />;
                        {/* </div>
                    )
                }
            </div> */}
        </>
    )
}

export default Shimmer