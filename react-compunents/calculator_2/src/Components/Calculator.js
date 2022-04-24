import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from './Input';
import { Button } from './Button-number';
import '../App.css';

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_input: '',
            result: 0,
            dots: false,
            calculation: ''
        }
        this.inputNumber = this.inputNumber.bind(this)
        this.inputCalculation = this.inputCalculation.bind(this)
        this.inputDots = this.inputDots.bind(this)
        this.getResult = this.getResult.bind(this)
    }

    getResult() {
        if (this.state.calculation) {
            let result = this.getResultOfCalculate()
            if(result || result === 0){
                this.setState({ result, value_input: '', calculation: '', dots: false })
            }
        }
    }

    inputDots() {
        if (!this.state.dots && this.state.value_input) {
            this.setState({ dots: true, value_input: this.state.value_input + '.' })
        }
    }

    inputNumber(value) {
        this.setState({ value_input: this.state.value_input + value })
        if(!this.state.calculation){
            this.setState({result: 0})
        }
    }

    inputCalculation(value) {
        if (!this.state.calculation) {
            this.setState({ value_input: '', calculation: value, result: Number(this.state.value_input) || this.state.result, dots: false })
        } else {
            let result = this.getResultOfCalculate()
            if(result || result === 0){
                this.setState({ result, value_input: '', calculation: value, dots: false })
            }
        }
    }

    getResultOfCalculate() {
        if(!Number(this.state.value_input)){
            return null
        }
        let result;
        switch (this.state.calculation) {
            case '+':
                result = this.state.result + Number(this.state.value_input)
                break;
            case '-':
                result = this.state.result - Number(this.state.value_input)
                break;
            case '*':
                result = this.state.result * Number(this.state.value_input)
                break;
            case '/':
                result = this.state.result / Number(this.state.value_input)
                break;
            default:
                break;
        }
        return result
    }

    render() {
        return <div className='card border-success container' style={{width: "21vw", padding: "2px"}}>
            <Input value={this.state.result} />
            <Input value={this.state.value_input} />
            <div className='d-flex'>
                <Button value={1} callback={this.inputNumber} />
                <Button value={2} callback={this.inputNumber} />
                <Button value={3} callback={this.inputNumber} />
                <Button value={'+'} callback={this.inputCalculation} />
            </div>
            <div className='d-flex'>
                <Button value={4} callback={this.inputNumber} />
                <Button value={5} callback={this.inputNumber} />
                <Button value={6} callback={this.inputNumber} />
                <Button value={'-'} callback={this.inputCalculation} />
            </div>
            <div className='d-flex'>
                <Button value={7} callback={this.inputNumber} />
                <Button value={8} callback={this.inputNumber} />
                <Button value={9} callback={this.inputNumber} />
                <Button value={'*'} callback={this.inputCalculation} />
            </div>
            <div className='d-flex'>
                <Button value={0} callback={this.inputNumber} />
                <Button value={'.'} callback={this.inputDots} />
                <Button value={'='} callback={this.getResult} />
                <Button value={'/'} callback={this.inputCalculation} />
            </div>
        </div>
    }
}