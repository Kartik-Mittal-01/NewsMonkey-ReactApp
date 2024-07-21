import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps={
        country: "in",
        pageSize: 5,
        category: "general"
        
        
    }
    static propsTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles:0


        }
    }
    async componentDidMount() {
        this.setState({
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;

        try {
            let response = await fetch(url);
            let data = await response.json(); // Correctly await the json() method

            this.setState({
                articles: data.articles,  // Assuming articles are under 'articles' key in API response
                totalArticles: data.totalResults,
                loading: false  // Set loading to false after data is fetched
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally, you can handle errors here (e.g., set error state)
        }
    }
    
    // handleNextClick= async ()=>{
    //     if(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)){
    //         return;

    //     }
        

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     try {
    //         this.setState({
    //             loading: true
    //         })
    //         let response = await fetch(url);
    //         let data = await response.json(); // Correctly await the json() method
    
    //         this.setState({
    //             articles: data.articles,  // Assuming articles are under 'articles' key in API response
    //             loading: false,  // Set loading to false after data is fetched
    //             page: this.state.page +1
    //         });
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Optionally, you can handle errors here (e.g., set error state)
    //     }
        
        
        
        
    // }
    
    
    
    
    // handlePrevClick= async ()=>{
    //     if(this.state.page<=1){
    //         return;
    //     }
    //     // console.log("prev");
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        
    //     try {
    //         this.setState({
    //             loading: true
    //         })
    //         let response = await fetch(url);
    //         let data = await response.json(); // Correctly await the json() method
            
    //         this.setState({
    //             articles: data.articles,  // Assuming articles are under 'articles' key in API response
    //             loading: false,  // Set loading to false after data is fetched
    //             page: this.state.page -1
    //         });
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Optionally, you can handle errors here (e.g., set error state)
    //     }
    // }
    
    fetchMoreData = async () => {
    if (this.state.articles.length === this.state.totalArticles) {
        return;
    }

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
        page: this.state.page + 1,
        // loading: true
    });


    try {
        let response = await fetch(url);
        let data = await response.json();

        this.setState((prevState) => ({
            articles: [...prevState.articles, ...data.articles],
            loading: false
        }));
    } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, handle errors here
        // this.setState({
        //     loading: false
        // });
    }
};

        



        

    render() {
        return (
            <>
            <h1 className='heading'>News-Monkey: DAILY NEWS</h1>
            {this.state.loading && <Spinner/>}

            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalArticles}
                loader={<Spinner/>}
            >
            

            <div className="all-news" >
                {this.state.articles.map((element) => (
                    <NewsItem key={element.url} author={element.author} tagText={element.source.name} date={element.publishedAt}  title={element.title && element.title.length>52? element.title.slice(0,50):element.title} description={element.description && element.description.length>122? element.description.slice(0,120): element.description} imageUrl={element.urlToImage} newsUrl={element.url}  />
                ))}
            </div>

            </InfiniteScroll>
            {/* <div className="footer">
            <button className="prev" onClick={this.handlePrevClick} >&#10502; Previous</button>
            <button className="next" onClick={this.handleNextClick}>Next &#10503;</button>
            </div> */}


            </>








        )
    }
}

export default News
