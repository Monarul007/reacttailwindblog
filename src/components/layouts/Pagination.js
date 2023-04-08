import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-12 px-8 flex flex-col items-center">
        {/* <!-- Help text --> */}
        <span className="text-sm text-gray-700 mb-2 dark:text-gray-400">
            Showing 
            <span className="font-semibold text-gray-900 dark:text-white">
                {" "} {currentPage * postsPerPage - 15}{" "}
            </span> to 
            <span className="font-semibold text-gray-900 dark:text-white">{" "} {currentPage * postsPerPage} {" "}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalPosts}</span> Entries
        </span>
        {/* <!-- Buttons --> */}
        <div className="inline-flex mt-2 xs:mt-0">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <button href="/" onClick={() => { paginateBack(); }} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            {currentPage === number ? 
                                <button className="px-3 py-2 leading-tight text-white bg-sky-600/80 border border-gray-300 hover:bg-sky-600/80 hover:text-white dark:bg-sky-600/80 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-sky-600/80 dark:hover:text-white" >
                                        {number}
                                </button> :
                                <button onClick={() => { paginate(number); }} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
                                    {number}
                                </button>
                            }
                        </li>
                    ))}
                    <li>
                    <button href="/" onClick={() => { paginateFront(); }} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}