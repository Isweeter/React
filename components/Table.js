import React, { Component }  from 'react';
import { render } from 'react-dom';

// import { BrowserRouter, Route, Switch} from 'react-router-dom';

window.React = React;

var bookStore = [
            {
                "name": "Der Steppenwolf",
                "author": "Hesse",
                "rating": 9
            },
            {
                "name": "Doru",
                "author": "Herman K.",
                "rating": 7

            },
            {
                "name": "Ulysse",
                "author": "Joyce",
                "rating": 10

            },
            {
                "name": "Forest",
                "author": "Unknown",
                "rating" : 8

            },

            {
                "name": "Finnegans Wake",
                "author": "Joyce",
                "rating": 8

            },
            {
                "name": "Idiot",
                "author": "Dostoevskiy",
                "rating": 7

            },
            {
                "name": "Some roman",
                "author": "Dontsova",
                "rating": 3

            },

]


class TableRow extends Component{

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

           this.setState({
               books: displayedBooks
           })
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
                                    <td type = "asc" filter="name" onClick = {this.sortTable}>Name</td>
                                    <td type = "asc" filter="author" onClick = {this.sortTable}>Author</td>
                                    <td type = "asc" filter="rating" onClick = {this.sortTable}>rating</td>
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
