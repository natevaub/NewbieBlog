"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        setQuote(x.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <footer className="flex flex-col py-4 bg-gray-300 text-center mt-auto">
      <div className="flex py-6 bg-gray-300 text-center">
        <div className="w-2/6">Join Me</div>

        <div className="w-2/6">
          <div className="flex flex-col items-center">
            <div>Socials</div>
            <span>
              <a
                href="https://github.com/natevaub"
                target="_blank"
                className="mr-4"
              >
                <i className="fa fa-github fa"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-vaubien/"
                target="_blank"
                className="mr-4"
              >
                <i className="fa fa-linkedin fa"></i>
              </a>
              <a
                href="https://www.instagram.com/n8te.98/"
                target="_blank"
                className="mr-4"
              >
                <i className="fa fa-instagram fa"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="w-2/6">
          <p>Quote of the day</p>
          {quote.length > 0 && <p className="">"{quote}"</p>}
        </div>
      </div>

      <div>
        <p className="py-1 text-sm mt-auto text-center bg-gray-300">
          Copyright &#169; 2023 - by natevaub 🥷🏼
        </p>
      </div>
    </footer>
  );
}
