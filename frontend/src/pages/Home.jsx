import React from "react";
import { CiLink } from "react-icons/ci";
import { Link } from "react-router-dom";
import Category from "../Components/Category";
import categoryItem from "../asset/catergory";

const Home = () => {
  
  return (
    <>
      {/*//////////////////// Category Sections ////////////////////////*/}
      
      <h1 className="font-bold p-3 ml-32 border rounded-md w-64 mt-2 border-blue-500 bg-cyan-200 text-gray">
        Browse Item By Category
      </h1>
      <div className="grid grid-cols-3 max-w-4xl mx-auto bg-cyan-200 p-4 m-4 gap-16">
        {categoryItem.map((category, index) => (
          <Category {...category} key={index} />
        ))}
      </div>

      {/*//////////////////// Quick Links Section ////////////////////////*/}

      <div className="quickLinks max-w-5xl mx-auto bg-lime-100 h-64">
        <div className="flex p-4 gap-3">
          <CiLink className=" text-3xl text-blue-600" />
          <h1 className=" text-blue-600">Quick Links</h1>
        </div>

        <div className="qLinksContainer max-w-2xl flex mx-auto">
          <div className="grid grid-cols-4 gap-14 mx-auto">
            <div className="border rounded-md border-cyan-600">
              <ul className="m-4 flex flex-col gap-5">
                <Link>Mobile</Link>
                <Link>Computer</Link>
                <Link>Sports</Link>
              </ul>
            </div>
            <div className="border rounded-md border-cyan-600">
              <ul className="m-4 flex flex-col gap-5">
                <Link>Mens</Link>
                <Link>Womens</Link>
                <Link>Home</Link>
              </ul>
            </div>
            <div className="border rounded-md border-cyan-600">
              <ul className="m-4 flex flex-col gap-5">
                <Link>About</Link>
                <Link>Accounts</Link>
                <Link>Education</Link>
              </ul>
            </div>
            <div className="border rounded-md border-cyan-600">
              <ul className="m-4 flex flex-col gap-5">
                <Link>About</Link>
                <Link>Accounts</Link>
                <Link>Education</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
