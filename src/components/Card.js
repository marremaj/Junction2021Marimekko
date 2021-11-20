import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const images = [
  "/images/new1.jpeg",
  "/images/new3.jpeg",
  "/images/new4.jpeg",
  "/images/new5.jpeg",
];

const Card = (props) => {
  return (
    <div
      style={{
        width: "23%",
        boxSizing: 10,
        paddingBottom: 50,
        margin: 4,
      }}
    >
      {props.image ? (
        <img src={props.image} alt="" width="100%" />
      ) : (
        <div className="image_hover" style={{ overflow: "hidden" }}>
          <img src={props.newImage} alt="" width="100%" />
          <div className="overlay">
            {props.text ?
            <>
            <div className="old_image">
            <img src={props.oldImage} alt="" width="40%" style={{marginTop: "20px",  borderRadius: "3px"}} />
            </div>
           
            <div style={{position: "absolute", bottom: 35, fontFamily: 'Avenir', fontSize: 15, lineHeight: 1.5 }}>"{props.text}"</div>
            <div className="fading" style={{position: "absolute", height: "100px",bottom: 35 , right: 0, left:0}}></div>
            <Link to="/item" className="nav-link" style={{position: "absolute", bottom:20, right:0, fontFamily: 'Avenir', fontSize: 15, lineHeight: 1.5 }}>Read more</Link>
            </>
            : 
            <>
                <img src={props.oldImage} alt="" width="100%"/>
                <div className="fading" style={{position: "absolute", height: "135px",bottom: 0 , right: 0, left:0}}></div>
            </>
        }
            </div>
            </div> 

      )}
      <div>
        <div
          style={{
            fontFamily: "Avenir",
            fontWeight: 15,
            fontSize: 16,
            paddingLeft: 5,
            marginTop: 8,
          }}
        >
          {props.title}
        </div>

        <div
          style={{
            fontFamily: "Avenir",
            color: "gray",
            fontSize: 13,
            paddingLeft: 5,
            paddingBottom: 5,
            justifyContent: "space-between",
          }}
        >
          {props.category}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Avenir",
            paddingLeft: 5,
            fontSize: 16,
          }}
        >
          {props.price}
        </div>
        <div
          style={{
            display: "flex2",
            color: "gray",
            justifyContent: "space-between",
            fontFamily: "Avenir",
            scrollPaddingRight: 10,
            fontSize: 12,
          }}
        >
          {" "}
          {props.value}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

export default Card;
