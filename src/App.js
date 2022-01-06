import './App.css';
import TempInput from './components/TempInput';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props){
    super(props);
    this.setState({
      temperature: '0',
      scale: 'c'
    })
  }
  handleCelsius(temperature){
    this.setState({
      scale: 'c',
      temperature
    })
  }
  handleFahrenheit(temperature){
    this.setState({
      scale: 'f',
      temperature
    })
  }
  toCelsius(input){
    return (input - 32) * 5 / 9;
  }

  toFarhenheit(input){
    return (input * 9 / 5) + 32;
  }
  convert(temperature, convertToFunction){
    const input = parseFloat(temperature);
    if(Number.isNaN()){
      return '';
    }
    const output = convertToFunction(input);
    return output;
  }
  render(){
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale == 'f' ? this.convert(temperature, this.toCelsius) : temperature
    const farhenheit = scale == 'c' ? this.convert(temperature, this.toFarhenheit) : temperature
    return (
      <div className="App">
        <TempInput scale={'c'} temperature={celsius} onTemperatureChange={this.handleCelsius}/>
        <TempInput scale={'f'} temperature={farhenheit} onTemperatureChange={this.handleFahrenheit}/>
      </div>
    );
  }
}

export default App;
