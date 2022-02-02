import React, { useState, useEffect } from "react";
import Image from "next/image";
import Player from "../components/player";
import { players } from "../shared/players-data";
import { buttons } from "../shared/buttons-data";
import CustomButton from "../components/custom-button";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  // Cannot fetch from API because of retrisction of cross origin access
  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",
  //     { mode: "no-cors" }
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setPlayers(result);
  //     });
  // }, []);

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="container flex justify-center px-[5%]">
        <div className="flex w-full max-w-xl flex-col items-center justify-center space-y-[3%]">
          {/* Logo */}
          <div
            className="w-2/3 sm:w-1/2"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Image
              src="/assets/logo/logo@3x.png"
              width={852}
              height={432}
              quality={100}
              layout="responsive"
              alt="logo"
            />
          </div>
          {/* Card */}
          <div
            className="flex h-full w-full flex-col space-y-[3%] rounded-3xl bg-[#f8f8f8] py-[4%] px-[2%]"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            {/* progress bar */}
            <div className="mx-auto h-auto w-1/2">
              <Image
                src="/assets/icons/progress@3x.png"
                width={861}
                height={114}
                quality={100}
                layout="responsive"
                alt="progress"
              />
            </div>
            {/* heading */}
            <div className="space-y-[1%] text-center">
              <h1 className="xs:text-4xl text-2xl text-[#464646]">
                Your play line is set!
              </h1>
              <h2 className="xs:text-xl text-sm text-[#737373]">
                Come back @ 7:30PM to track it live!
              </h2>
              <hr className="border-1 mx-auto w-3/5" />
              <p className="xs:text-xs font-sans text-[0.6rem] font-light text-[#686868]">
                Pro Tips: You can manage your PlayLines until they go live in
                the Upcoming area
              </p>
            </div>
            {/* players */}
            <div className="mx-auto flex w-full justify-center -space-x-1">
              {players.map((player, idx) => {
                return (
                  <Player
                    key={idx.toString()}
                    name={player.last_name}
                    points={player.points}
                    avatar={player.avatar}
                  />
                );
              })}
            </div>
            {/* Buttons */}
            <div className="mx-auto flex justify-center space-x-[2vw]">
              {buttons.map((button, idx) => {
                return (
                  <CustomButton
                    key={idx.toString()}
                    title={button.title}
                    icon={button.icon}
                    imageAlt={button.imageAlt}
                  />
                );
              })}
            </div>
            <hr className="border-1 mx-auto w-3/5" />
            {/* downloads */}
            <div className="space-y-[2%]">
              <h2 className="xs:text-base text-center font-sans text-xs font-semibold uppercase text-[#737373]">
                Download the app
              </h2>
              <div className="mx-auto flex justify-center space-x-[2vw]">
                <div className="xs:w-32 w-28 cursor-pointer">
                  <Link href="https://apps.apple.com/ca/app/playline/id1265657853">
                    <Image
                      src="/assets/icons/ios-app.svg"
                      width={279}
                      height={102}
                      quality={100}
                      layout="responsive"
                      alt="ios"
                    />
                  </Link>
                </div>
                <div className="xs:w-32 w-28 cursor-pointer">
                  <Link href="https://apps.apple.com/ca/app/playline/id1265657853">
                    <Image
                      src="/assets/icons/google-play.svg"
                      width={279}
                      height={102}
                      quality={100}
                      layout="responsive"
                      alt="ios"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
