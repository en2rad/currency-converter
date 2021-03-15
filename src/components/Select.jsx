import React, { useState } from 'react'
import Option from './Option'

function Select(props) {
    const { changeSelect } = props

    const onChange = (ev) => {
        if(ev.type === "change") {
            changeSelect(ev.target.value)
        }
    }

    return (
        <div>
            <select onChange={onChange} className="select-country">
                {props.value.map(value => {
                    return <Option id={value.Cur_ID} value={value.Cur_OfficialRate} name={value.Cur_Name}/> 
                })}
            </select>
        </div>
    );
}

export default Select