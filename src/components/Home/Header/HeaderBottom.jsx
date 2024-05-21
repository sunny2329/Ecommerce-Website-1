import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../DesignLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems,proDetails } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";

const HeaderBottom = () => {
  const products = useSelector((state) => state.ecommReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = proDetails.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 z-50 bg-gray-200 w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <Link to={"category/Electronics"}>
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Electronics
                  </li>
                </Link>

                <Link to={"category/Jewelery"}>
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Jewelery
                  </li>
                </Link>
                <Link to={"category/Mens"}>
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Men's Clothing
                  </li>
                </Link>
                <Link to={"category/Womens"}>
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Women's Clothing
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.title
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item.id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.image} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="text-xs">
                          {item.description.length > 100
                            ? `${item.description.slice(0, 100)}...`
                            : item.description}
                        </p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex text-3xl">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-gray-200 w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                  Profile
                </li>
                <li className="text-black px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-[darkblue] duration-300 cursor-pointer">
                  Others
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative text-3xl">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-8 -right-2  w-4 h-4 flex items-center text-2xl justify-center rounded-full bg-primeColor text-black">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
            
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;