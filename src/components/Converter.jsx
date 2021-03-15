import React, { useState } from 'react'
import Select from './Select'

function Converter () {
    let currencyLS = JSON.parse(localStorage.getItem('currency'))
    
    const [valueInput, setOne] = useState('')
    const [valueOutput, setTwo] = useState('')
    const [valueSelect, setSelect] = useState('')
    

    function changeSelect(inputValue) {
        console.log(valueSelect)
        setSelect(inputValue)       
    }

    function Calc(value) {
        setOne(value)
        // let rate = currencyLS.find(currencyLS => currencyLS.Cur_Name === valueSelect)
        setTwo(value * valueSelect)
    }

    return (
        <div className="main-container">
            <div className="row">
                <h1 className="title">Currency Converter</h1>
                <Select changeSelect={changeSelect} value={currencyLS}/>
            </div>
            <div className="row">
                <div className="col">
                    <p>Rate 1 RUB</p>
                    <input className="currency-input" type="number" value={valueInput} onChange={e => Calc(e.target.value)}/>
                </div>
                <div className="col">
                    <p>Rate {valueSelect}</p>
                    <input className="currency-input" type="number" value={valueOutput} />
                    
                </div>
            </div>
        </div>
    );
}

export default Converter