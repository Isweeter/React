import { Component } from 'react';

export default class TableRow extends Component{
    render(){
        return (
            <tr>
            {
                Object.values(this.props).map((el,index) => {
                    return <td key = {index} >{el}</td>
                })
            }
            </tr>
        )
    }
}
