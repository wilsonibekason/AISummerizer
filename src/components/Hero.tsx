import React from "react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleRedirect = () =>
    navigate("/https://github.com/wilsonibekason", { replace: true });
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  mb-10 py-2  w-full">
        <img src={logo} alt="sums_logo" className="w-28 object-contain" />
        <button onClick={handleRedirect} className="black_btn">
          Github
        </button>
      </nav>
      <h2 className="head_text py-4">
        SUMMERIZE ARTICLE WITH <br className="max-md:hidden" />{" "}
        <span className="orange_gradient ">OpenAI GPT</span>
      </h2>
      <div className="desc">
        OpenAI GPT (Generative Pre-trained Transformer) is a state-of-the-art
        language model that uses deep learning algorithms to generate human-like
        text. One of the applications of this technology is to automatically
        summarize long documents or articles.
      </div>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <a
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </a>
            <a
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </main> */}
    </header>
  );
};

export default Hero;
