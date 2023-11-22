"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/Animation - 1700678777486.lottie"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
