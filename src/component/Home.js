import React, { Component } from 'react'
import Cards from "./cards"
import Navbar from "./Navbar";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            gener:"All Books",
            bool : "true",
            searchData : "Action"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
            // fetching books data from google books api
            let urlValue = `https://www.googleapis.com/books/v1/volumes?q=${this.state.gener}&&maxResults=40`
            // let urlValue = "https://www.googleapis.com/books/v1/volumes?q={Action}"
            let data = await fetch(urlValue)
            let parsedData = await data.json()
            this.setState({ books: parsedData.items , bool:"true" }) // storing data in state
            console.log("hello")
    }
    async componentDidUpdate() {
        if(this.state.bool == "false"){
            let urlValue = `https://www.googleapis.com/books/v1/volumes?q=${this.state.gener}&&maxResults=20`
            // let urlValue = "https://www.googleapis.com/books/v1/volumes?q={Action}"
            let data = await fetch(urlValue)
            let parsedData = await data.json()
            this.setState({ books: parsedData.items , bool:"true" }) // storing data in state
     
       }   }
    
    async handleSubmit() {
        let urlValue = `https://www.googleapis.com/books/v1/volumes?q=${this.stsearchData}&&maxResults=20`
            // let urlValue = "https://www.googleapis.com/books/v1/volumes?q={Action}"
            let data = await fetch(urlValue)
            let parsedData = await data.json()
            this.setState({ books: parsedData.items})
      }

    render() {
        return (
            <>
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <h3 className="navbar-brand my-2" >My Book Shelf</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" href="/">All Books</a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Book Gener
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><button className = "dropdown-item" onClick={() => this.setState({ gener: "Books on Thrill" , bool:"false" })}>Action</button></li>
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Novels", bool:"false" })}>Novel</button></li>
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Books on Mystery" , bool:"false" })}>Mystery</button></li> 
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Fiction based books" , bool:"false" })}>Fiction</button></li>
            <li><button className = "dropdown-item"  onClick={() =>this.setState({ gener: "Science & Technology" , bool:"false" })}>Science</button></li>
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Books on Ghosts" , bool:"false" })}>Horror</button></li>
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Books on Romance" , bool:"false" })}>Romance</button></li>
            <li><button className = "dropdown-item" onClick={() =>this.setState({ gener: "Biographies & AutoBiographies" , bool:"false" })}>Biography</button></li>
            <li><button className = "dropdown-item"  onClick={() =>this.setState({ gener: "Sports & Games" , bool:"false" })}>Games</button></li>
          </ul>
        </li>
        </ul>
        {/* <form className="d-flex">
            <input className="form-control me-2" onChange={() => this.inputHandler()} type="search" placeholder="Search Books" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        
        </div>
    </div>
    </nav>
    </div>
            <div>

                <div className="container my-3" >
                    <h1 className="text-center" style={{ margin: "60px", marginTop: "60px" }}>{this.state.gener}</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* {mapping each element of books array} */}
                        {this.state.books.map((element) => {
                            return <div className="col" key={element.url}>
                                <Cards bookTitle={element.volumeInfo.title ? element.volumeInfo.title.slice(0, 50) : " "} author = {element.volumeInfo.authors} publisher={element.volumeInfo.publisher} descrption={element.volumeInfo.description ? element.volumeInfo.description.slice(0, 88) : " "} imageUrl={element.volumeInfo.imageLinks.thumbnail ? element.volumeInfo.imageLinks.thumbnail : "https://i.dailymail.co.uk/1s/2021/12/15/09/51817569-0-image-a-8_1639559726968.jpg"} selfLink={`https://books.google.com/ebooks?id=${element.id}`} />
                            </div>
                        }
                        )}
                        {console.log(this.state.books)}
                        {console.log(this.state.gener)}
                    </div>

                </div>

            </div>
            </>
            
        )
    }
}