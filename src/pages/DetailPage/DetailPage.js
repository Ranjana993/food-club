import { useParams } from "react-router-dom"; 
import "./DetailPage.css"
import useResMenuData from "../../hooks/useResMenuData";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, swiggy_menu_api_URL } from "../../contants/data";

const DetailPage = () => {
    const { id } = useParams();
    const [restaurant, menuItems] = useResMenuData(MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, swiggy_menu_api_URL, id)
    
    return !restaurant ? (
        <h1>Loading....</h1>
    ) : (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <div className="res-container">
                    <img
                        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                        alt={restaurant?.name}
                    />
                </div>
                <div>
                    <div className="restaurant-summary-details">
                        <h2 className="restaurant-title">{restaurant?.name}</h2>
                        <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                        <div className="restaurant-details">
                            <div className="restaurant-rating" style={
                                    (restaurant?.avgRating) < 4 ? { backgroundColor: "red", height: '30px' } : (restaurant?.avgRating) === "--" ? { backgroundColor: "white", color: "black" } : { backgroundColor: "green", color: "white", width: '40px', borderRadius: '2px' }
                            }>
                                {/* <i className="fa-solid fa-star"></i> */}
                                <span>{restaurant?.avgRating}</span>
                            </div>
                            <div>{restaurant?.sla?.slaString}</div>
                            <div>{restaurant?.costForTwoMessage}</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <div className="menu-title-wrap">
                        <h3>Recommended</h3>
                        <p>{menuItems.length} ITEMS  </p>
                    </div>
                    <div className="menu-items-list">
                        {menuItems.map((item) => (
                            <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                    <h3 className="item-title">{item?.name}</h3>
                                    <p className="item-cost">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item?.price / 100)
                                            : " "}
                                    </p>
                                    <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                    {item?.imageId && (
                                        <img
                                            className="menu-item-img"
                                            src={ITEM_IMG_CDN_URL + item?.imageId}
                                            alt={item?.name}
                                        />
                                    )}
                                    <button className="add-btn"> ADD +</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;