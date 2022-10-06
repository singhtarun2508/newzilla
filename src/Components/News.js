import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import pic from './globe.png'
import Navbar from './Navbar'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types'



// let location = useLocation().pathname;
// let loc = (location.slice(8));
// console.log(useLocation())
// console.log(loc)
// export const loc=[(useLocation().pathname).slice(8)];





export default function News(props) {
    // location = useLocation();


    const articles = []
    const pageSize = 9;

    let [searchParams, setSearchParams] = useSearchParams();

    // const [Value, setValue] = useState("")
    const [totalResults, settotalResults] = useState(0)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    const [Articles, setArticles] = useState(articles);
    const [country, setCountry] = useState("in");
    const [darkMode, setdarkMode] = useState("Dark Mode");
    const [Col, setCol] = useState("light");
    const [Txt, setTxt] = useState("dark");
    const [progress, setprogress] = useState(0)
    const [location, setlocation] = useState("")


    const mode = () => 
    {
        if (darkMode.includes('Dark')) {

            setdarkMode("Light Mode")
            document.body.style.backgroundColor = "#18191b";
            document.body.style.transition = "0.7s";
            setCol("dark")
            setTxt("light")
        }
        else {
            setdarkMode("Dark Mode");
            document.body.style.backgroundColor = "white";
            setCol("light")
            setTxt("dark")


        }
    }
        // setlocation("b");
        // console.log(location)




    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        fetchMoreData();
    }, [])



    // const search = async (event) => {
    //     await setpage(1);
    //     setSearchParams({ filter: Value })
    //     await getData();
    // }

    // const Change = (event) => {
    //     setValue(event.target.value)
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?q=${(props.value).trim().length === 0 ? "" : props.value}&category=${props.category}&pagesize=${pageSize}&apiKey=d24cc0a7a85b4fd9ad0dd584f9f882fa&page=${page + 1}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(Articles.concat(parsedData.articles))
        setloading(false)
    }

    const getData = async () => {
        setprogress(0);
        const url = `https://newsapi.org/v2/top-headlines?q=${(props.value).trim().length === 0 ? "" : props.value}&category=${props.category}&pagesize=${pageSize}&apiKey=d24cc0a7a85b4fd9ad0dd584f9f882fa&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        setprogress(100);
    }


    const show = (element) => {
        return <div className=" col-10 col-sm-10 col-md-6 col-lg-4 my-2 " key={element.url + element.title}>
            <Card col={Col} badge={`Source:${element.source.id}`} time={element.publishedAt} cardTitle={element.title} desc={element.description} imgUrl={element.urlToImage ? element.urlToImage : pic} url={element.url} />
        </div>
    }

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        fetchMoreData();
    }, [])


    // if(loc.length>0){setValue(loc); search();}

    return (
        <>
            <div>
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setprogress(0)}
                />
            </div>

            {/* {!loading && <Navbar Mode={mode} txt={Txt} col={Col} darkMODE={darkMode} search={search} Change={Change} />} */}

            <div className="position-absolute top-50 start-50 translate-middle">
                {loading && <Spinner />}
            </div>

            <InfiniteScroll
                dataLength={Articles.length}
                next={fetchMoreData}
                hasMore={page <= (totalResults / pageSize) && page * pageSize <= 88}
                loader={<Spinner />}
            >
                <div className="container my-5 ">
    
                    <div className="row d-flex justify-content-center ">
                        {Articles.map(show)}
                    </div>
                </div>
            </InfiniteScroll>
    
        </>
    )
}
// export const loc = [location.slice(8)];
// export const loca=location

News.defaultProps = {
    value: '',
    category: ''
}