import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class MyAlert extends Component {
    render() {
        return (
            <div className="alert alert-success container w-25 clearfix">
                <div className="alert-heading text-center h4">Xin chào</div>
                <p>Đây là một alert</p>
                <button className="btn btn-success float-end">Xác nhận</button>
            </div>
        )
    }
}