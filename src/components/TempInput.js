import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';
const scaleName ={
    c: 'Celsius',
    f: 'Fahrenheit'
}
export default class TempInput extends Component {
    handleChange(e){
        this.props.onTemperatureChange(e.taget.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <div>
                <fieldset>
                    <legend>Temperature ({scaleName[scale]}) </legend>
                    <input placeholder='0' value={temperature} onChange={this.handleChange}/>
                    <BoilingVerdict temperature={parseFloat(temperature)}/>
                </fieldset>
                </div>
            </div>
        )
    }
}
