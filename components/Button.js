import React from "react";
import style from "../styles/Button.module.css";

const Button = ({children})=>(
<button className={style.btn}>{children}</button>
);

export default Button;