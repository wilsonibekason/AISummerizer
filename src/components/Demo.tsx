import React, { useState, useEffect } from "react";
import { copy, linkIcon } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = () => {
    alert("Submitted");
  };
  return (
    <section className="mt-16 w-full max-w-full">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          action=" "
          className="relative flex justify-center items-center"
          method="get"
          id="search"
          name="search"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Paste the article link"
            required
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            className="url_input peer" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          {Array(10)
            .fill(0)
            .map((__, index) => (
              <div key={`link-${index}`} className="link_card">
                <div className="copy_btn" onClick={() => console.log("")}>
                  <img
                    src={copy}
                    alt={"copy_icon"}
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  Example URL for Browser History
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;
