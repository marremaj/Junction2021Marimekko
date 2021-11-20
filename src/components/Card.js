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
              <div
              style={{
                  fontFamily: 'Avenir',
                  fontWeight: 15,
                  fontSize: 16,
                  paddingLeft: 5
              }}
              >{props.title}</div>

              <div
                 style={{
                    fontFamily: 'Avenir',
                    color: 'gray',
                    fontSize: 13,
                    paddingLeft: 5,
                    paddingBottom: 5,
                    justifyContent: "space-between",
                }}
              >{props.category}</div>
              <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: 'Avenir',
                    paddingLeft: 5,
                    fontSize: 16   
                }}>{props.price}
               </div> 
               <div
                style={{
                    display: "flex2",
                    color: 'gray',
                    justifyContent: "space-between",
                    fontFamily: 'Avenir',
                    scrollPaddingRight: 10,
                    fontSize: 9
                }}> {props.value}</div>
              
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
          </div>
        </div>

    )
}

export default Card