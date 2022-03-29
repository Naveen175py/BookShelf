import React, { Component } from 'react'
// component for each cards
export default class Cards extends Component {
    render() {
        let { bookTitle, descrption, imageUrl, selfLink , author , publisher } = this.props
        return (
            <div className="card " style={{height:"800px", width:"350px"}} >
                <img src={imageUrl} className="card-img-top" alt="..."  style={{height:"60%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{bookTitle}</h5>
                    <h6> by {author}</h6>
                    <h6>originally published by {publisher}</h6>
                    <p className="card-text">{descrption}</p>
                    <a target="_blank" rel="noreferrer" href={selfLink} className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
