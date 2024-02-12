import { ChevronLeft, ChevronRight } from "react-feather";
import { notice } from "../../../../data/home.js";
import { useState } from "react";

const newsData = notice;

export const NoticeBoard = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedNews = newsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <div className="mt-24 h-full w-full rounded-xl bg-green-light pb-5 xs:w-[90%] md:mx-0 md:w-1/2">
      <div className="m-3 w-full rounded-lg p-3">
        {/* <h2 className="mb-4 text-center text-2xl font-semibold underline">
          Notice Board
        </h2> */}
        <div className="group relative col-span-1 mx-auto mb-5 mt-3 flex h-12 w-fit overflow-hidden rounded-md text-black ">
          <h3 className="text-xl font-semibold">
            Notice Board
            <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
          </h3>
        </div>
        <div className="h-full bg-green-light">
          <ul className="mt-5">
            {displayedNews.map((news) => (
              <li
                key={news.id}
                className="group mr-5 flex cursor-pointer gap-3 rounded py-2 text-base hover:bg-green-yellow"
                onClick={() => {
                  window.open(news.url, "_blank");
                }}
              >
                <p className="px-2 font-bold text-green-deep group-hover:text-white">
                  {news.date}
                </p>
                <p className="font-semibold group-hover:text-white">
                  {news.headline.substring(0, 65) + "..."}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handlePrevClick}
            className="NB-button mr-2 rounded px-2 py-2"
            disabled={page === 0}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="NB-button rounded px-2 py-2"
            disabled={(page + 1) * itemsPerPage >= newsData.length}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
