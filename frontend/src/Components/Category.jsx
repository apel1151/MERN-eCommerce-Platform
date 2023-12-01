import React from "react";
import { Link } from "react-router-dom";

const Category = ({ img, name, available }) => {
  return (
    <div className="">
      <div className="flex gap-3">
        <div>
          <img src={img} alt={name} className="h-12 w-9" />
        </div>
        <div>
          <Link>
            <h3 className="category-name font-bold">{name}</h3>
          </Link>
          <p className="category-available text-sm">{`Available: ${available}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
