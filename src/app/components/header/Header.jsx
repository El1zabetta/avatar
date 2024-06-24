import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./style.css";
import Image from "next/image";
import SearchIcon from "../../../../public/images/searchIcon.svg";
import Dindin from "../../../../public/images/dindin.svg";

export default function Header() {
  return (
    <Box component={"header"}>
      <div className="header">
        <div className="header__links">
          <Link href="">Home</Link>
          <Link href="">Genre</Link>
          <Link href="">Country</Link>
        </div>
        <div className="header__input">
          <input className="header__input2" placeholder="Search movies..." />
          <Image src={SearchIcon} width={20} height={20} alt="JGDj" />
        </div>
        <div className="header__links">
          <Link href="">Movies</Link>
          <Link href="">Series</Link>
          <Link href="">Animation</Link>
        </div>
        <div className="header__button">
          <button>Login/SignUp </button>
          <Image
            className="dindin"
            src={Dindin}
            width={15}
            height={15}
            alt="Dindin"
          />
        </div>
      </div>
    </Box>
  );
}
