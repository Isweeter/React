import { Component } from 'react';

export default class TableRow extends Component{
    render(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.author}</td>
                <td>{this.props.rating}</td>
            </tr>
        )
    }
}
