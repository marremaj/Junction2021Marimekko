const SecondHandItemView = () => {
  return (
    <>
    <div style={{ display: "flex" }}>
      <div style={{flex:"1", width: "50%", display: "flex"}}>
        <div style={{margin: "4px"}}>
          <img src="/images/old3.jpeg" alt="" style={{ width: "100px",}} />
          <br/>
          <img src="/images/new2.jpeg" alt="" style={{ width: "100px",}} />
          <br/>
          <img src="/images/old1.jpeg" alt="" style={{ width: "100px",}} />
        </div>
        <img src="/images/old3.jpeg" alt="" style={{flex:"1", width: "20%", margin:"12px" }} />
      </div>
      <div style={{flex:"1", padding:"10px", margin: "12px 60px",}}>
        <h1>Mekko 100€</h1>
        <p
          style={{
            fontFamily: "Avenir",
            fontWeight: 15,
            fontSize: 20,
            paddingLeft: 5,
            color: "gray",
          }}
        >
          "Last summer my aunt Bekky was turning 50. It was also right after
          everyone got vaccinated for Corona. It was the first time we were
          going to meet the whole family again after over a year of awful
          isolation. I knew I needed a new dress for this occasion. The
          celebration was going to take place in the summery archipelago so
          right when I saw the dress in the store I was certain this was the
          right dress for the occasion. The dress came with me on the boat over
          the sea to the island. We had a barbeque, played some games and
          enjoyed each other's company. I was happy to see everyone again. I
          even got some compliments on the dress. I will cherish this memory for
          a long time to come."
        </p>
        <div style={{ minHeight: 40 }}>
          <label
            style={{
              fontFamily: "Avenir",
              fontSize: 15,
              padding: 10,
              backgroundColor: "black",
              color: "white",
            }}
          >
            38
          </label>
        </div>
        <div>
          <button className="btn primary" style={{width: "100%", marginLeft: "0"}}>Contact seller</button>
        </div>
        <div>
          <span className="productnav" style={{paddingLeft:"0"}}>INFO</span>
          <span className="productnav">SIZE & FIT</span>
          <span className="productnav">MATERIALS & CARE</span>
          <span className="productnav">DETAILS</span>
          <p style={{fontFamily: "Avenir",}}>
          Marimekko’s famous poppy pattern Unikko was born in 1964 in a time when the design house’s collections featured mostly abstract prints. Designer Maija Isola wanted to create something interesting from this organic theme and designed an entire range of floral prints. Today, the iconic flower represents creativity.

          </p>
        </div>
      </div>
    </div>
    <div style={{margin:"40px", padding: "40px", border: "1px solid #aaaaaa", marginBottom: "0"}}>
    "Last summer my aunt Bekky was turning 50. It was also right after
          everyone got vaccinated for Corona. It was the first time we were
          going to meet the whole family again after over a year of awful
          isolation. I knew I needed a new dress for this occasion. The
          celebration was going to take place in the summery archipelago so
          right when I saw the dress in the store I was certain this was the
          right dress for the occasion. The dress came with me on the boat over
          the sea to the island. We had a barbeque, played some games and
          enjoyed each other's company. I was happy to see everyone again. I
          even got some compliments on the dress. I will cherish this memory for
          a long time to come."
    </div>
    <div style={{margin:"0 40px", padding: "40px", border: "1px solid #aaaaaa", borderTop: "none"}}>
      <p style={{margin:"0", fontWeight:"bold"}}>Mari Mekko</p>
            "Wow! What a beatiful story! So inspiring"
    </div>
    <div style={{margin:"0 40px", padding: "40px", border: "1px solid #aaaaaa", borderTop: "none",}}>
      <p style={{margin:"0", fontWeight:"bold"}}>Henry Hacker</p>
            "Congratulations to aunt Bekky! Sounds like a good time 	&#60;3"
    </div>
    <div style={{textAlign:"right"}}>
      <button style={{margin: "4px 40px"}} className="btn primary">Comment</button>
    </div>
    </>
  );
};

export default SecondHandItemView;
