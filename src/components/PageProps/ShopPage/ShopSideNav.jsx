import React from "react";
import Brand from "./ShopBy/Brand";
import Category from "./ShopBy/Category";
import Color from "./ShopBy/Color";
import Price from "./ShopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;