import React from 'react'

const images = [
    "/images/new1.jpeg",
    "/images/new3.jpeg",
    "/images/new4.jpeg",
    "/images/new5.jpeg",
  ];

const Card = (props) => {

    return(
        <div
          style={{
            margin: "5px",
            width: "24%",
            width: "25%",
            flex: "1 1 0px",
          }}
        >
          <img
            src={props.image}
            width="100%"
          />
          <div>
              <b>Price: {props.price}</b> 
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="btn">Show</button>
          </div>
        </div>

    )
}

export default Card