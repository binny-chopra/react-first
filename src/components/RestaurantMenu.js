import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info?.id}>
            {item.card.info?.name} - Rs {item.card.info?.price / 100 || 500}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
