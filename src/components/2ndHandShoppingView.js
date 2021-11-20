import Card from "./Card";

const SecondHandShoppingView = () => {
  return (
    <>
      <h1>Marimekko Preloved</h1>
      <div className="center-align">
        <button className="btn primary">Browse</button>
        <button className="btn">Sell an item</button>
      </div>
      <div>
    <h1
    style={{
        fontFamily: 'Avenir',
        fontWeight: 15,
        fontSize: 40,
        paddingLeft: 5
    }}
    >Pre-loved clothes</h1>
    <div style={{display:"flex", flexWrap:"wrap"}}>

      <Card newImage="/images/new2.jpeg" oldImage="/images/old3.jpeg" title="Lyyrinen Pukettimeri" category="Shirt" price="50,00 €" text="I bought this dress before my aunt's birthday last summer in the Turku archipelago. We had a barbecue outside and played some games. It’s a beautiful memory of a great time with family and friends"/>
      <Card newImage="/images/new1.jpeg" oldImage="/images/old2.jpeg" title="Ilma" category="Shirt" price="200,00 €" text="I brought this shirt with me for a trip to Greece. I still have a few memorable pictures of wearing the shirt among the ancient sights. Now it’s looking for a new loving home and hopefully to travel to new places."/>
      <Card newImage="/images/new6.jpeg" oldImage="/images/old4.jpeg" title="Jokapoika 2017" category="Shirt" price="275,00 €" />
      <Card newImage="/images/new5.jpeg" oldImage="/images/old5.jpeg" title="Mari" category="Shirt" price="103,00 €" />
      <Card newImage="/images/new4.jpeg" oldImage="/images/old6.jpeg" title="Mari" category="Shirt" price="103,00 €" text= "This shirt has been worn a couple of times. Still in great shape though due to the great quality. The most memorable of which was the Junction 2021 event at Aalto University. During the event I got to meet a lot of new people"/>
      <Card newImage="/images/new3.jpeg" oldImage="/images/old7.jpeg" title="Mari" category="Shirt" price="103,00 €"/>
      <Card newImage="/images/new7.jpeg" oldImage="/images/old8.jpeg" title="Mari" category="Shirt" price="103,00 €"/>
      </div>
    </div>
    </>
  );
};

export default SecondHandShoppingView;
