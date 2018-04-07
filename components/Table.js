import React, { Component }  from 'react';
import { render } from 'react-dom';
import TableRow from './TableRow';

import data from './books'
let bookStore = data.bookStore;

window.React = React;



class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: bookStore
        }

        this.sortTable = this.sortTable.bind(this);
        this.searchBooks = this.searchBooks.bind(this);

    }


    searchBooks(e){

        var searchingItem = e.target.value.toLowerCase();
        var searchLength = searchingItem.length;
        var displayedBooks = bookStore.filter(function(el){
            var searchValue = el.name.toLowerCase();
            return searchingItem === searchValue.substring(0, searchLength);
        })
           if(displayedBooks.length >0){
               this.setState({
                   books: displayedBooks
               })
           }

    }


    sortTable(e){

        var sortedBooks = this.state.books;
        var filter = e.target.getAttribute("filter");
        var type = e.target.getAttribute("type");
        if(type === "asc"){
            sortedBooks.sort( (a,b) => {
                return a[filter] > b[filter]
            });
            e.target.setAttribute("type","desc")

        }else{
            sortedBooks.sort( (a,b) => {
                return a[filter] < b[filter]
            });
            e.target.setAttribute("type","asc")
        }

        this.setState({
            books: sortedBooks
        })

    }

    render(){
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h1 id ="library">Books library</h1>

                        <input className = "form-control"  type="text" placeholder="Поиск книги" onChange={this.searchBooks} />
                        <table>
                            <thead>
                                <tr>
                                {
                                    Object.keys(this.state.books[0]).map( (key,index) => {
                                        return <td onClick = {this.sortTable} key = {index} filter={key.toLowerCase()}> {key} </td>
                                    })
                                }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.books.map((el,index) =>{
                                        return (<TableRow key = {index}
                                                  name = {el.name}
                                                  author = {el.author}
                                                  rating = {el.rating}
                                                  /> )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


render( <Table />,
    document.getElementById('RoutesPrac')
)
