import React from 'react'

export default function BoilingVerdict(props) {
    if(props.temperature >= 100){
        return <h3>Water would boil</h3>
    }
    else{
        return <h3>Water would not boil</h3>
    }
}
