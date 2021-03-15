import React, { useState } from 'react'

function Option(props) {
    return (
        <option id={props.key} value={props.value}>{props.name}</option>
    );
}

export default Option