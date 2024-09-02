// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";

import "../styles/Home.css";

import Illu1 from "../assets/Illu1.png";
import Illu3 from "../assets/Illuu3.svg";
import Illu4 from "../assets/Illu4.svg";
import Illu5 from "../assets/Illu5.svg";

// NPC
import NPC1 from "../assets/npc1.svg";
import NPC2 from "../assets/npc2.svg";
import NPC3 from "../assets/npc3.svg";

import HowWeWave from "../assets/HowWeHelp.svg";
import MessageTutWave from "../assets/MessageTutorWave.svg";

import wavyBgMain from "../assets/BGWaves.svg";

import { ReviewCard } from "../components/ReviewCard";
import { TeamCard } from "../components/TeamCard";

// Team Avatar Images
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import ForwardRef from "../components/WavyBG";
import LottieAnimation from "../components/LottieAnimation";
import { HeroWaves } from "../components/CustomWaves";
import Wave from "react-wavify";

const Home = () => {
  const reviews = [
    {
      name: "John Doe",
      //   Random Avatar from npc1, npc2, npc3
      avatar: NPC1,
      review:
        "Study Bridge has been fantastic for connecting with local students. The direct messaging feature makes scheduling a breeze ...",
    },
    {
      name: "Jane Doe",
      avatar: NPC2,
      review:
        "Study Bridge made it so easy to find a local tutor. Scheduling was a breeze, and the demo class was incredibly helpful!",
    },
    {
      name: "Shyaam",
      avatar: NPC3,
      review:
        "Study Bridge connected me with a fantastic tutor nearby. The process was straightforward, and I got the help I needed right away.",
    },
    {
      name: "Ram",
      avatar: NPC2,
      review:
      "Study Bridge is a great platform for finding local tutors. The direct messaging feature is a big plus, and the app is easy to use. Highly recommended!",
    },
    {
      name: "Ram",
      avatar: NPC1,
      review:
        "Study Bridge connected me with a fantastic tutor nearby. The process was straightforward, and I got the help I needed right away.",
    },
    {
      name: "Ram",
      avatar: NPC3,
      review:
        "Study Bridge made it so easy to find a local tutor. Scheduling was a breeze, and the demo class was incredibly helpful!",
    },
  ];

  const Team = [
    {
      name: "Vishvara",
      avatar: avatar1,
      role: "UX/UI Designer",
      desc: "Vishvara brings creativity and precision to Study Bridge's design. She focuses on crafting intuitive, user-friendly interfaces that make the platform easy and enjoyable to use for everyone.",
    },
    {
      name: "Shyam",
      avatar: avatar2,
      role: "Developer",
      desc: "Shyam is the technical backbone of Study Bridge. With his strong coding skills and problem-solving abilities, he ensures the platform runs smoothly and efficiently, providing a seamless experience for all users.",
    },
    {
      name: "Archit",
      avatar: avatar3,
      role: "Developer",
      desc: "Archit is the technical backbone of Study Bridge. With his strong coding skills and problem-solving abilities, he ensures the platform runs smoothly and efficiently, providing a seamless experience for all users.",
    },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] relative w-screen overflow-x-clip p-0 homeBody">
      <Navbar />
      {/* First Section */}
      <div className="bg-[var(--bg-primary)] flex  flex-row justify-evenly items-center h-full pb-[5%] ">
        <img src={wavyBgMain} className="absolute top-0  w-screen m-0 left-0 overflow-clip z-0 "
        style={{
          transform: "scale(1.5, 1.1)",
        }}
         />
        {/* <HeroWaves /> */}
        <div className=" z-20 flex flex-col justify-center items-center gap-0 p-0 m-0 w-full">
          <span
            className=" text-[150px] text-[var(--text-primary)] p-0 text-center font-[900]"
            style={{
              fontFamily: "Poppins",
            }}
            data-aos="fade-in"
          >
            STUDY
          </span>
          <span
            className=" text-[150px] text-[var(--text-primary)] text-center "
            style={{
              fontFamily: "Poor Story",
            }}
            data-aos="fade-in"
          >
            BRIDGE
          </span>

          <button
            data-aos="fade-in"
            className="bg-[var(--seconday-button)] text-[var(--text-secondary)] text-[40px]  px-8 py-2 gap-2 rounded-lg mt-4 flex justify-center items-center"
          >
            EXPLORE
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_19_186"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                >
                  <rect width="52" height="52" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_19_186)">
                  <path
                    d="M13.8667 39L10.8334 35.9667L31.6334 15.1667H13V10.8333H39V36.8333H34.6667V18.2L13.8667 39Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div className=" flex flex-col gap-0  justify-center items-center">
          <img
            
            src={Illu1}
            alt="Illustration"
            className="w-[75%]"
            id="homeIllu"
          />
          <p
            
            data-aos-delay="250"
            data-aos-anchor="#homeIllu"
            className="mt-0 text-[24px]"
            style={{ fontFamily: "Poppins" }}
          >
            Where Students and Tutors Meet
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="z-20 bg-[var(--bg-secondary)] flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center gap-0 p-0 m-0 w-2/3 rounded-b-3xl bg-[var(--bg-primary)]">
          <h1
            className="relative text-[150px] text-[var(--text-primary)] text-center font-[900]"
            style={{
              fontFamily: "Poppins",
              color: "#5E503F",
            }}
            id="ourMission"
            data-aos="fade-in"
          >
            Our Mission
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-0 m-0 w-2/3 mx-8 my-[10%] ">
          <h1
            className=" text-[64px] text-[var(--text-secondary)] text-center font-medium"
            style={{
              fontFamily: "Poppins",
            }}
          >
            We&nbsp;
            <span className="decoration-wavy underline">help</span> you &nbsp;
            <span className="circle__decor">find</span>
            &nbsp; a tutor or student right in your own locality.
          </h1>
        </div>
      </div>

      {/* Third Section */}
      <div className="rounded-b-[48px] bg-[var(--bg-primary)]">
        <div className="flex flex-col justify-center items-center gap-0 p-0 m-0 w-full mt-[10%]">
          <h1
            className=" text-[150px] text-[var(--bg-secondary)] text-center"
            style={{
              fontFamily: "Patrick Hand",
            }}
            data-aos="fade-in"
            id="howWeHelp"
          >
            We HELP you with
          </h1>
        </div>

        <div className="flex flex-row justify-around items-center h-full mx-[10%] py-10">
          <div className=" flex  gap-0  justify-center items-center my-6">
            <img
              src={Illu3}
              alt="Illustration"
              className=""
              
            />
          </div>

          <div className="flex justify-center items-center gap-0 p-0 m-0 w-full">
            <div >
              <h1 className=" text-[48px] text-[var(--bg-secondary)] text-left font-semibold">
                <span>Nearby</span> &nbsp; Learning
              </h1>
              <h3 className="text-[24px] text-[var(--bg-secondary)] text-left font-medium pb-[12%]">
                Discover the perfect tutor or student right in your
                neighborhood. <br />
                Connect locally and make learning more convenient.
                <br />
                With Study Bridge, education is always within reach!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-[var(--bg-secondary)] flex flex-col justify-center">
        <div className="flex flex-row justify-around items-center h-full mx-[10%] py-10">
          <div className="flex justify-center items-center gap-0 p-0 m-0 w-full my-[15%]">
            <div
              className="flex flex-col gap-6 overflow-clip w-4/5"
              style={{
                fontFamily: "Poppins",
              }}
              
            >
              <h1 className=" text-[48px] text-[var(--text-secondary)] text-left font-semibold">
                Tutors for Every Level
              </h1>
              <h3 className="text-[24px]  text-[var(--text-secondary)] text-left font-medium ">
                No matter your learning stage, we have the perfect tutor right
                in your locality. From beginners to advanced learners, our
                diverse tutors are here to help you excel. With specialized
                expertise across various levels, they provide personalized
                support close to home. At Study Bridge, connect and grow within
                your own neighborhood.
              </h3>
            </div>

            <div
              
              className="w-2/5 mx-5 flex  gap-0  justify-center items-center"
            >
              <img src={Illu4} alt="Illustration" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="relative">
        <Wave 
          fill='#EBE0D5'
          paused={false}
          style={{
            position: 'absolute',
            zIndex: 0,
            bottom: 0,
            left: 0,
          }}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 20
          }}
    />
      </div>
      {/* <img src={MessageTutWave} className="w-full h-auto" alt="How We Wave" /> */}
      <div className="bg-[var(--bg-primary)] flex flex-row justify-evenly items-center ">
        <div
          
          className="w-2/5 flex  gap-0 p-0 m-0  pr-0 items-center my-[10%]"
        >
          <img src={Illu5} alt="Illustration" className="p-0 pl-[15%]" />
        </div>
        <div className="flex flex-row justify-around items-center h-full  w-2/3">
          <div className="flex justify-center items-center gap-0 p-0 m-0 w-full ">
            <div
              className="flex flex-col gap-6 overflow-clip "
              style={{
                fontFamily: "Poppins",
              }}
            >
              <h1 className=" text-[48px] text-[var(--bg-secondary)] text-left font-semibold">
                Message Tutors Directly
              </h1>
              <h3 className="text-[24px]  text-[var(--bg-secondary)] text-left font-medium ">
                Easily connect with tutors for personalized support. You can
                directly inquire about consultation fees, request demo classes,
                or arrange for home tuition to fit your needs. This seamless
                communication ensures that you get the assistance you need
                efficiently, making your learning experience with Study Bridge
                both accessible and tailored to your preferences.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <img src={HowWeWave} className="w-full" ></img> */}

      {/* Sixth Section */}
      <div className="relative">
        <Wave
          fill="#5E503F"
          paused={false}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: 0,
            left: 0,
          }}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 10,
          }}
        />
      </div>
      <div className="bg-[var(--bg-secondary)] relative" id="reviews">
        <h1
          data-aos="fade-in"
          className="text-[96px] py-[2%] text-[var(--text-secondary)] text-center font-semibold"
        >
          How we Helped!
        </h1>

        <div
          
          className="auto-scroll no-scrollbar gap-[5%] flex flex-row justify-around items-center w-full h-full px-5 py-10 overflow-x-auto scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Seventh Section */}
      <div className="team__container bg-[var(--bg-primary)]" id="about">
        <h1
          data-aos="fade-in"
          className="text-[96px] py-[2%] text-[var(--bg-secondary)] text-center font-semibold"
        >
          The Team!
        </h1>

        <div className="no-scrollbar gap-[5%] flex flex-col justify-around items-center w-full h-full px-5 py-10">
          {Team.map((member, index) => (
            <TeamCard key={index} team={member} />
          ))}
        </div>

      </div>
      <div className="relative mt-[10%]">
        <Wave 
          fill='#5E503F'
          paused={false}
          style={{
            position: 'absolute',
            zIndex: 0,
            bottom: 50,
            left: 0,
          }}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.15,
            points: 2
          }}
    />
      </div>
    </div>
  );
};

export default Home;
