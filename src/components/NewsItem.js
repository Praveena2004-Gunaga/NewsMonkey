import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl,newsUrl,author,date,source}= this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://images.hindustantimes.com/img/2024/07/17/550x309/India_squad_announcement_updates_1721190170628_1721190171285.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source} 
    <span class="visually-hidden">unread messages</span>
  </span></h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
