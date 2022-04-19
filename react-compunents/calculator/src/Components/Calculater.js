import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from './Input';
import { Button } from './Button-number';

export class Calculator extends Component {
    render() {
        return <div className='container'>
            <Input value={0}/>
            <div>
                <Button value={1}/>
                <Button value={2}/>
                <Button value={3}/>
                <Button value={'+'}/>
            </div>
            <div>
                <Button value={4}/>
                <Button value={5}/>
                <Button value={6}/>
                <Button value={'-'}/>
            </div>
            <div>
                <Button value={7}/>
                <Button value={8}/>
                <Button value={9}/>
                <Button value={'*'}/>
            </div>
            <div>
                <Button value={0}/>
                <Button value={'.'}/>
                <Button value={'='}/>
                <Button value={'/'}/>
            </div>
        </div>
    }
}