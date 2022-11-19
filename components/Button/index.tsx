import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { ButtonStyled } from "./styled"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  status: string
}

const Button: FC<ButtonProps> = ({ children, status, ...props }) => {
  
  // const theme = {
  //   brown: "#44281D",
  //   orange: "#E4A788",
  //   yellow: "#EFE04B",
  //   green: "#98CD4D",
  //   pink: "#E899C7",
  // }

  return (
    <ButtonStyled {...props} status={status}>
      <span className='dot'></span>
      {children}
    </ButtonStyled>
  )
}

export default Button
