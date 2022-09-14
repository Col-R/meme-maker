import React, {useState} from 'react'
import './Test.css'

const Test = () => {
    const [state, setState] = useState(0)
    /*
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
    */
    const addOne = () => setState(prev => prev + 1)
    const subtractOne = () => setState(prev => prev - 1)

    const [isGoingOut, setIsGoingOut] = useState(true)
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    const [stateArray, setStateArray] = useState(["Thing 1"]);
    const addItem = () => setStateArray(prev => {
            return [...prev, `Thing ${stateArray.length + 1}`]
        })
    const thingsElements = stateArray.map(thing => <p key = "{thing}"> {thing} </p>)


    
    
    return (
        <>
        <div className="counter">
            <button className="counter--minus" onClick = {subtractOne}>–</button>
            <div className="counter--count">
                <h1>{state}</h1>
            </div>
            <button className="counter--plus" onClick = {addOne}>+</button>
        </div>
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>

        <div>
            <button onClick = {addItem}>Add Item</button>
            {thingsElements}
        </div>

        </>
    )
}

export default Test