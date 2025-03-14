import {
  Facebook,
  Linkedin,
  PointerIcon,
  StickyNote,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// data for my icons
const icons = [ 
  {icon: <Facebook />},
  {icon: <Twitter />},
  {icon: <Linkedin />},
  {icon: <PointerIcon />},
  {icon: <Youtube />},
];

export const Header = () => {
  return (
    <nav>
      {/* first header part  */}
      <div>
        <div>
          {icons.map((icon, index) => {
            return (
              <Link href={"#"} key={index}>
                {icon?.icon}
              </Link>
            );
          })}
        </div>
        <div>
          <StickyNote />
          Contact@gmail.com
        </div>
      </div>

      {/* second header part  */}
      <div></div>
    </nav>
  );
};
