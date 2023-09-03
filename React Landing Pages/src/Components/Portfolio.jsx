import React from "react";
import FastFoodD from "../portfolio/FastFoodD.png";
import myPortfolio from "../portfolio/myPortfolio.png";
import MetaProjectD from "../portfolio/MetaProjectD.png";
import RealEstateD from "../portfolio/RealEstateD.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: MetaProjectD,
      href: "https://little-lemon-byiamahmadsaboor.netlify.app/",
      GitHubLink: "https://github.com/iamahmadsaboor/Little-Lemon-Website",
    },
    {
      id: 2,
      src: FastFoodD,
      href: "https://tasty-good-website.vercel.app/",
      GitHubLink: "https://github.com/iamahmadsaboor/Tasty-Good-Website",
    },
    {
      id: 3,
      src: myPortfolio,
      href: "https://iamahmadsaboor.vercel.app/",
      GitHubLink: "https://github.com/iamahmadsaboor",
    },
    {
      id: 4,
      src: RealEstateD,
      href: "https://upset-seashore.surge.sh",
      GitHubLink:
        "https://github.com/iamahmadsaboor/Real-Estate-Design/tree/main/real-estate-in-react",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full  max-w-screen-lg p-4 mx-auto">
        <div className="pb-8 pt-[4em] md:pt-[0em]">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            React Landing Pages
          </p>
          <p className="py-6">
            Demo To Visit The Website & code to visit the website
          </p>
        </div>
        <div className="grid gap-8 px-2 sm:grid-cols-2 md:grid-cols-3 md:px-12">
          {portfolios.map(({ id, src, href, GitHubLink }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-md shadow-gray-600"
            >
              <img
                src={src}
                alt=""
                className="duration-500 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl"
                >
                  Demo
                </a>
                <a
                  href={GitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-xl"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
