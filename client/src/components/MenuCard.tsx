import { memo } from "react";
import { Menu } from "../utils/types";

const MenuCard = memo(({ menu }: { menu: Menu }) => {
  return (
    <div
      className="card"
      tabIndex={0}
      aria-label={`${menu.name} priced ${menu.price}`}
    >
      <div className="details">
        <h3>{menu.name || "N/A"}</h3>
        <p>{`$${menu.price.toFixed(2)}` || "N/A"}</p>
      </div>
    </div>
  );
});

export default MenuCard;
