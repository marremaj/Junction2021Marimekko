import Card from "./Card";

const NormalShoppingView = () => {
    return (
    <div>
    <h1>Marimekko</h1>
    <div style={{display:"flex", flexWrap:"wrap"}}>
      <Card image="/images/new1.jpeg" price="50€"/>
      <Card image="/images/new3.jpeg" price="200€"/>
      <Card image="/images/new4.jpeg" price="272€"/>
      <Card image="/images/new5.jpeg" price="103€"/>
      </div>
    </div>)
}

export default NormalShoppingView;