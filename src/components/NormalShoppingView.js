import Card from "./Card";

const NormalShoppingView = () => {
    return (
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
      <Card image="/images/new1.jpeg" title="Lyhythiha" category="Shirt" price="50,00 €" value="Estimated re-sell value: 20,00 €"/>
      <Card image="/images/new3.jpeg" title="Ilma" category="Shirt" price="200,00 €" value="Estimated re-sell value: 100,00 €"/>
      <Card image="/images/new4.jpeg" title="Jokapoika 2017" category="Shirt" price="275,00 €" value="Estimated re-sell value: 135,80 €" />
      <Card image="/images/new5.jpeg" title="Mari" category="Shirt" price="103,00 €" value="Estimated re-sell value: 64,50 €"/>
      </div>
    </div>)
}

export default NormalShoppingView;