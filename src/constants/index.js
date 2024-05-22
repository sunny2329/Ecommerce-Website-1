import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  imprimante1,
  imprimante2,
  imprimante4,
  imprimante5,
  imprimante6,
  imprimante7,
  imprimante8,
  imprimante9,
  encre1,
  encre2,
  encre3,
  encre4,
  ruban1,
  ruban2,
  ruban3,
  ruban4,
  bac1,
  bac2,
  bac3,
  bac4,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_M6609N,
  IMPRIMANTE_PANTUM_P3300DN,
  IMPRIMANTE_PANTUM_P3300DW,
  IMPRIMANTE_PANTUM_P2509W,
  IMPRIMANTE_PANTUM_BP5100DN,
  IMPRIMANTE_PANTUM_M6559N,
  IMPRIMANTE_PANTUM_P2509,
  hp1,
  hp2,
  hp3,
  ricoh1,
  ricoh2,
  ricoh3,
  ricoh4,
  ricoh5,
  espson1,
  espson2,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];
// =================== NavBarList End here ======================      

let proDetails = [];

async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    let b = [];
    proDetails = await data;
    b = await data;
    return b;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
fetchData();
console.log(proDetails);
export {proDetails, fetchData}





