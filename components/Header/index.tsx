import React from "react"
import Image from "next/image"
import {HeaderStyled } from "./styled"
const Header = () => {
  const myLoader = () => {
    return `https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg`
  }
  return (
    <HeaderStyled>
      <Image
        loader={myLoader}
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
        alt='Picture of the author'
        width={210}
        height={68}
      />
    </HeaderStyled>
  )
}

export default Header
