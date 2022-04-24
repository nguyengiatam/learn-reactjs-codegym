import { Component } from 'react';
import { Work } from './work';
export class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log(nextProps, preState);
        return { list: nextProps.list }
    }

    render() {
        return (
            <div>
                {this.state.list.map(val => <Work value={val} />)}
            </div>
        )
    }
}