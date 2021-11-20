const SecondHandItemView = () => {
  return (
    <>
      <h1>Mekko 100€</h1>
      <p style={{
        fontFamily: 'Avenir',
        fontWeight: 15,
        fontSize: 20,
        paddingLeft: 5,
        color: "gray"
    }}>"Last summer my aunt Bekky was turning 50. It was also right after everyone got vaccinated for Corona. It was the first time we were going to meet the whole family again after over a year of awful isolation. I knew I needed a new dress for this occasion.
The celebration was going to take place in the summery archipelago so right when I saw the dress in the store I was certain this was the right dress for the occasion. The dress came with me on the boat over the sea to the island.
We had a barbeque, played some games and enjoyed each other's company. I was happy to see everyone again. I even got some compliments on the dress. I will cherish this memory for a long time to come.""
</p>
    <div style={{minHeight:40}}>
      <label
      style={{
          fontFamily: 'Avenir',
          fontSize: 15,
          padding: 10,
          backgroundColor: "black",
          color: "white"
      }}>38</label>
    </div>
    <div>
      <button className="btn primary">Contact seller</button>
      </div>
      <div>
        <span className="productnav">INFO</span>
        <span className="productnav">SIZE & FIT</span>
        <span className="productnav">MATERIALS & CARE</span>
        <span className="productnav">DETAILS</span>
      </div>
    </>
  );
}

export default SecondHandItemView;
