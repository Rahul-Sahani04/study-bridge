// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

import CustomLink from "./CustomLink";

const Navbar = () => {
  const navData = [
    // {
    //   name: "Home",
    //   url: "/",
    // },
    // {
    //   name: "About",
    //   url: "/about",
    // },
    // {
    //   name: "Login",
    //   url: "/login",
    // },
    {
        name: "Services",
        url: "ourMission",
    },
    {
        name: "About Us",
        url: "about",
    },
    {
        name: "Reviews",
        url: "reviews",
    },
    {
        name: "Match",
        url: "/match",
    },
  ];
  return (
    <nav className="bg-[var(--bg-primary)] relative w-screen  p-4 flex justify-between ">
      <div className="mx-4 hover:cursor-pointer z-50" data-aos="fade-in" onClick={() => window.location.replace("/")}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27.9651" cy="27.9651" r="27.9651" fill="#5E503F" />
          <path
            d="M19.8938 40.252C18.1418 40.252 16.5578 39.952 15.1418 39.352C13.7498 38.752 12.6458 37.888 11.8298 36.76C11.0138 35.632 10.5938 34.3 10.5698 32.764H15.9698C16.0418 33.796 16.4018 34.612 17.0498 35.212C17.7218 35.812 18.6338 36.112 19.7858 36.112C20.9618 36.112 21.8858 35.836 22.5578 35.284C23.2298 34.708 23.5658 33.964 23.5658 33.052C23.5658 32.308 23.3378 31.696 22.8818 31.216C22.4258 30.736 21.8498 30.364 21.1538 30.1C20.4818 29.812 19.5458 29.5 18.3458 29.164C16.7138 28.684 15.3818 28.216 14.3498 27.76C13.3418 27.28 12.4658 26.572 11.7218 25.636C11.0018 24.676 10.6418 23.404 10.6418 21.82C10.6418 20.332 11.0138 19.036 11.7578 17.932C12.5018 16.828 13.5458 15.988 14.8898 15.412C16.2338 14.812 17.7698 14.512 19.4978 14.512C22.0898 14.512 24.1898 15.148 25.7978 16.42C27.4298 17.668 28.3298 19.42 28.4978 21.676H22.9538C22.9058 20.812 22.5338 20.104 21.8378 19.552C21.1658 18.976 20.2658 18.688 19.1378 18.688C18.1538 18.688 17.3618 18.94 16.7618 19.444C16.1858 19.948 15.8978 20.68 15.8978 21.64C15.8978 22.312 16.1138 22.876 16.5458 23.332C17.0018 23.764 17.5538 24.124 18.2018 24.412C18.8738 24.676 19.8098 24.988 21.0098 25.348C22.6418 25.828 23.9738 26.308 25.0058 26.788C26.0378 27.268 26.9258 27.988 27.6698 28.948C28.4138 29.908 28.7858 31.168 28.7858 32.728C28.7858 34.072 28.4378 35.32 27.7418 36.472C27.0458 37.624 26.0258 38.548 24.6818 39.244C23.3378 39.916 21.7418 40.252 19.8938 40.252ZM37.7993 39.928L33.1553 39.82C32.8913 38.812 32.7353 34.276 32.6873 26.212V23.656C32.6873 21.616 32.8793 20.068 33.2633 19.012C33.6473 17.932 34.4513 17.068 35.6753 16.42C36.2993 16.108 37.1633 15.952 38.2673 15.952C39.3953 15.952 40.2593 16.024 40.8593 16.168C42.4673 16.504 43.5593 17.128 44.1353 18.04C44.7353 18.952 45.0353 20.176 45.0353 21.712C45.0353 23.848 44.4713 25.42 43.3433 26.428C43.9193 26.5 44.4953 26.788 45.0713 27.292C45.6473 27.796 46.1153 28.312 46.4753 28.84C47.0993 29.8 47.4113 31.108 47.4113 32.764C47.4113 35.356 46.6193 37.204 45.0353 38.308C43.4753 39.388 41.0633 39.928 37.7993 39.928ZM35.5673 22.396L35.6393 26.5C35.6873 26.5 36.0953 26.452 36.8633 26.356C37.6313 26.236 38.2793 26.116 38.8073 25.996C41.2313 25.42 42.4433 24.04 42.4433 21.856C42.4433 20.776 42.1193 19.984 41.4713 19.48C40.8473 18.976 40.0193 18.724 38.9873 18.724C37.6913 18.724 36.8153 18.952 36.3593 19.408C36.1673 19.6 36.0113 19.768 35.8913 19.912C35.7713 20.032 35.6873 20.236 35.6393 20.524C35.5913 20.812 35.5553 21.016 35.5313 21.136C35.5313 21.256 35.5313 21.484 35.5313 21.82C35.5553 22.156 35.5673 22.348 35.5673 22.396ZM43.6673 30.064C43.4273 29.8 43.0553 29.56 42.5513 29.344C42.0473 29.128 41.3153 29.02 40.3553 29.02C39.4193 29.02 37.8113 29.176 35.5313 29.488C35.5313 33.232 35.5913 35.764 35.7113 37.084C38.5193 37.084 40.4873 36.904 41.6153 36.544C42.7433 36.16 43.4993 35.704 43.8833 35.176C44.2913 34.624 44.4953 34.048 44.4953 33.448C44.4953 32.824 44.4833 32.392 44.4593 32.152C44.4593 31.888 44.3873 31.54 44.2433 31.108C44.1233 30.652 43.9313 30.304 43.6673 30.064Z"
            fill="#EAE0D5"
          />
        </svg>
      </div>
      <ul data-aos="fade-in" className="flex space-x-4 flex-row justify-center z-50 gap-x-10 items-center p-4">
        {navData.map((item, index) => (
          <CustomLink key={index} data={item.name} url={item.url} />
        ))}

        <li>
          <Link
            to="/login"
            className="text-[var(--bg-secondary)] hover:text-[var(--text-primary)] font-bold text-2xl hover:underline transition-all delay-100 ease-in-out"
            style={{
              fontFamily: "Poppins",
            }}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
