import { useState } from "react";
import Switch from "react-switch";
import ReactTooltip from "react-tooltip";

const marimekkoItems = [
  "Lakka Unikko - Hat",
  "Lapinkuusip - Coat",
  "Lyhythiha - Shirt",
  "Lasten Lyhythiha - T-shirt",
  "Lokki - Bathrobe"
]

const SellingForm = () => {
  const [hiddenSuggestions, setHiddenSuggestions] = useState(true);
  const [hiddenInfo, setHiddenInfo] = useState(true);
  const [images, setImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState(marimekkoItems);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(false)

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const onImageChange = (event) => {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      console.log(typeof Array.from(event.target.files));
      const image_list = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImage(image_list);
      setHiddenSuggestions(false);
      setSuggestions(true)
    }
  };

  const filterItems = (newquery) => {
    console.log(marimekkoItems.filter((item) => item.toLowerCase().includes(query.toLowerCase())))
    setQuery(newquery)
    setItems(marimekkoItems.filter((item) => item.toLowerCase().includes(query.toLowerCase())))
  }

  const closeImages = () => {
    setImage(null);
    setHiddenInfo(true);
    setHiddenSuggestions(true);
    

  };
  return (
    <div>
      <h1>Sell your dress</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          {images === null ? (
            <>
            
              <span className="label">Upload photos</span>
              <br />
              <label className="file-input">
                <input type="file" multiple onChange={onImageChange} />
                Upload photos
              </label>
              <br />
              <input type="text" value={query} onChange={(e) => filterItems(e.target.value)}/>
              <div hidden={query.length === 0} style={{position: "relative"}}>
                <div className="autocomplete-container">
                { items.map((item) => (
                  <div className="autocomplete" onClick={() => {
                    setHiddenSuggestions(false)
                    setSuggestions(false)
                    setHiddenInfo(false)
                    setQuery("")
                  }}>{item}</div>
                ))

                }
                </div>
              </div>
            </>
          ) : (
            images.map((img) => (
                <img src={img} key={img} alt="" height="100px" />
                

            ))
            
          )}
          <span style={{ cursor: "pointer" }} onClick={closeImages}>
                  x
                </span>
          <div>
            <label className="label">Condition</label>
            <br />
            <select className="text-input" placeholder="condition">
              <option disabled selected>
                Condition
              </option>
              <option>Like New</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div>
            <label className="label">
              Price <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input placeholder="Price" className="text-input" /> €
            <span className="label"> (Suggestion: 50 €)</span>
          </div>
          <div>
            <label className="label">Size (if applicable)</label>
            <br />
            <input placeholder="Size" className="text-input" />
          </div>
          <div>
            <label className="label">Additional Notes</label>
            <br />
            <textarea
              placeholder="Size"
              className="text-input"
              rows="4"
              cols="60"
            />
          </div>
          <div>
            <label className="label">Share your story </label>
            <a className="tooltip" data-tip="<b>Share your story with this item</b><br />Best stories get published on our social medias<br />and are rewarded with a gift card for your next<br />purchase from Marimekko!">?</a>
            <ReactTooltip place="top" type="dark" effect="solid" html={true}/>
            <br />
            <textarea
              placeholder="Size"
              className="text-input"
              rows="4"
              cols="60"
            />
          </div>
          <span className="label">Consent to having your story published on Instagram</span>
          <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
          <div>
            <button className="btn">Cancel</button>
            <button className="btn primary">Send</button>
          </div>
        </div>
        {hiddenSuggestions ? (
          <div />
        ) : (
          <div style={{ flex: "1" }}>
            <>
            {suggestions ? 
              <>
            Suggested items:
            <div style={{ border: "1px solid #cccccc" }}>
              <div
                className="suggestion-card"
                onClick={() => {
                  
                  setHiddenInfo(false)}}
              >
                <img src="/images/new1.jpeg" alt="item1" height="100px" />
                <div>
                  <div>Mikko's Dress</div>
                  <div>Dress</div>
                  <div>Original price: 150 €</div>
                </div>
              </div>
              <div className="suggestion-card">
                <img src="/images/new3.jpeg" alt="item2" height="100px" />
                <div>
                  <div>Paavo's Tunika</div>
                  <div>Tunika</div>
                  <div>Original price: 230 €</div>
                </div>
              </div>
            </div>
              </> : <img src="/images/new1.jpeg" alt="item1" height="200px" />
            }
            </>
            {hiddenInfo ? (
              <div />
            ) : (
              <>
                <h1>Pituus Kivet</h1>
                <h2 style={{ marginBottom: "0" }}>INFO</h2>
                <span className="label">(This will be shown in posting)</span>
                <p>
                  The Pituus tunic is made of viscose crepe in the Kivet
                  pattern. The tunic has a straight loose cut and a concealed
                  zipper in the back seam. The elbow-length sleeves are loose
                  and dropped at the shoulders. <br /> The Kivet (stones) design
                  builds on circles cut with scissors. The pattern was most
                  likely inspired by the big rough-edged stones that were
                  manually cleared from the designer’s atelier home’s grounds.
                </p>
                <h2>Category</h2>
                <p>Dress</p>
                <h2>Pattern & designer</h2>
                <p>Kivet by Maija Isola</p>
                <h2>Material</h2>
                <p>100% Viscose</p>
                <h2>Prize as new</h2>
                <p>245 €</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellingForm;
