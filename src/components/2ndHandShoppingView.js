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
    >All clothing</h1>
    <div style={{display:"flex", flexWrap:"wrap"}}>
      <Card image="/images/old1.jpeg" title="Lyhythiha" category="Shirt" price="50,00 €"/>
      <Card image="/images/old2.jpeg" title="Ilma" category="Shirt" price="200,00 €"/>
      <Card image="/images/old3.jpeg" title="Jokapoika 2017" category="Shirt" price="275,00 €" />
      <Card image="/images/old4.jpeg" title="Mari" category="Shirt" price="103,00 €" />
      <Card image="/images/old5.jpeg" title="Mari" category="Shirt" price="103,00 €" />
      <Card image="/images/old6.jpeg" title="Mari" category="Shirt" price="103,00 €"/>
      <Card image="/images/old7.jpeg" title="Mari" category="Shirt" price="103,00 €"/>
      <Card image="/images/old8.jpeg" title="Mari" category="Shirt" price="103,00 €" />
      </div>
    </div>
    </>
  );
};

export default SecondHandShoppingView;
