import Link from "next/link";
import Image from "next/image";
import { gsap,Back,Bounce } from "gsap";
import { useEffect, useState } from 'react';
type Props = {
    children?: React.ReactNode;
    home?: boolean;
}
const Navbar = ({ children }: Props) => {
    const [text, setText] = useState("Menu");
    const menu_click = () => {
        if (text.toLowerCase() == "menu") {
            setText("Close");
            gsap.timeline({repeat: 0,}).to("#menu-area",{
                duration: 1,
                ease: Bounce.easeOut, 
                top: 0 
              });
        }
        else {
            setText("Menu");
            gsap.timeline({ repeat: 0, })
                .to("#menu-area", {
                    duration: 0.8,
                    ease: Back.easeIn.config(3),
                    top: "-100%"
                });
        }
    }
    return (
        <>
            <div id="menu-icon">
                <div id="menu-open" onClick={menu_click}>
                    {text}
                </div>
            </div>
            <div id="menu-area">

            </div>
        </>
    );
}

export default Navbar;