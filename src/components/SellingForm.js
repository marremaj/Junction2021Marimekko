const SellingForm = () => {
    return (
        <div>
            <h1>Sell your dress</h1>
            <label className="label">Price</label>
            <br/>
            <input placeholder="Price" className="text-input"/>
            <div>
                <button className="btn">Cancel</button>
                <button className="btn primary">Send</button>
            </div>
        </div>
    )
}

export default SellingForm;