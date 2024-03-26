import React from "react";

const Button = ({children})=>(
    <>
 
<button>
<style>
        {`
            button {
                background-color: green;
                border: none;
                outline: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                color: white;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: bold;
                transition-property: all;
                transition-duration: 0.6s;
                transition-timing-function: ease;
            }
            
            button:hover{
                color: green;
                background-color: white;
                border: 2px solid green;
            }
        `}
    </style>
    {children}
    
</button>
</>
);

export default Button;