import React from 'react'
import "./Shimmer.css"

const BannerShimmer = () => {
    return (
        <>
            <div className="Banner_shimmer">
                {
                    Array(15).fill("").map((x, i) =>
                        <div key={i}>
                            <div className="banner_shimmer">
                                <div className="imag"></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default BannerShimmer