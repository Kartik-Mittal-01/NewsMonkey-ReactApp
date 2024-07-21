import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {key ,title , description , imageUrl, newsUrl, author, date, tagText} = this.props
        const defaultImage = "https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2024/01/Best-time-to-post-on-Facebook.png"
        imageUrl = imageUrl==null ?defaultImage: imageUrl;
        return (
            <div>
                <div className="card">
                    
                    <div className="tag">{tagText}</div>
                    <div className="image" ><img src={imageUrl} /></div>
                    <div className="desc">
                        <div className="title"><h3>{title}</h3></div>
                        <div className="about">{description}</div>
                    </div>
                    <div className="bottom">

                    <a href={newsUrl} target="_blank"className="btn">GET MORE</a>
                    <div className="date">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</div>
                    </div>

                </div>


            </div>
        )
    }
}
