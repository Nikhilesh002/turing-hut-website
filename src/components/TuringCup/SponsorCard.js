import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { GatsbyImage } from "gatsby-plugin-image";
import { Typography, Button } from "@mui/material";

export default function SponsorCard({ name, img, desc, link }) {
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      //   ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      //   style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: "#101820FF",
          color: "white",
          
        }}>
        <GatsbyImage
          alt={name}
          image={img}
          style={{
            maxWidth: "65%",
            // maxHeight: "50%",
            borderRadius: "15px 30px",
            border: "2px solid #F2AA4CFF",
            padding : "5px"
          }}
        />
      </FrontSide>
      <BackSide style={{ backgroundColor: "#101820FF", color: "white",border: "2px solid #F2AA4CFF"}}>
        <p>
          {desc}
        </p>
        <Button sx={{ 
          backgroundColor: '#fff', 
          color: '#F2AA4CFF',
          '&:hover': {
              backgroundColor: '#F2AA4CFF',
              color: '#fff'
            },
          }} 
          variant='contained' 
          href={link}
          target='__blank'>
          Know more!
        </Button>
      </BackSide>
    </Flippy>
  );
}