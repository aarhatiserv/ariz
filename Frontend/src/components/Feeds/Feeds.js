import React, { useState } from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

function Feeds() {
  const [articles] = usePrismicDocumentsByType("article");
  return (
    <div className="py-16 -mt-24">
      <section
        class="text-gray-400 py-10 body-font"
        style={{ background: "#F3F6F9" }}
      >
        <div class="py-10">
          <h2 class="mb-4 text-center text-2xl   text-gray-800 md:mb-6 lg:text-5xl">
            Shops Insights and Feeds
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {articles?.results?.map((article, index) => (
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <Link to={`/article/${article.uid}`}>
                  <img
                    src={article?.data.banner.url}
                    className="object-cover w-full h-64"
                    alt=""
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                      >
                        traveling
                      </a>
                      <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a
                      href="/"
                      aria-label="Category"
                      title="Visit the East"
                      className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      <PrismicRichText field={article.data.heading} />
                    </a>
                    <p className="mb-2 text-gray-700">
                      <PrismicRichText field={article.data.description} />
                    </p>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Learn more
                    </a>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="justify-center text-center py-10">
          <Link
            to="/blog"
            class="inline-block rounded-lg border justify-center text-center bg-indigo-200 px-6 py-2  text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            View More Articles
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Feeds;
