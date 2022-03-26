import React, { Component } from 'react'
import Cards from "./cards"
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    async componentDidMount() {
            // fetching books data from google books api
            let urlValue = "https://www.googleapis.com/books/v1/volumes?q={games}"
            let data = await fetch(urlValue)
            let parsedData = await data.json()
            this.setState({ books: parsedData.items }) // storing data in state
            console.log("hello")
    }

    render() {
        return (
            <div>

                <div className="container my-3" >
                    <h1 className="text-center" style={{ margin: "30px", marginTop: "90px" }}>Books</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* {mapping each element of books array} */}
                        {this.state.books.map((element) => {
                            return <div className="col" key={element.url}>
                                <Cards bookTitle={element.volumeInfo.title ? element.volumeInfo.title.slice(0, 50) : " "} author = {element.volumeInfo.authors} publisher={element.volumeInfo.publisher} descrption={element.volumeInfo.description ? element.volumeInfo.description.slice(0, 88) : " "} imageUrl={element.volumeInfo.imageLinks.thumbnail ? element.volumeInfo.imageLinks.thumbnail : "https://i.dailymail.co.uk/1s/2021/12/15/09/51817569-0-image-a-8_1639559726968.jpg"} selfLink={`https://books.google.com/ebooks?id=${element.id}`} />
                            </div>
                        }
                        )}
                        {console.log(this.state.books)}
                    </div>

                </div>

            </div>
        )
    }
}