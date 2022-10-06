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





export default function News(props) {

    const articles = []
    const pageSize = 9;

    let [searchParams, setSearchParams] = useSearchParams();

    const [Value, setValue] = useState("")
    const [totalResults, settotalResults] = useState(0)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    const [Articles, setArticles] = useState(articles);
    const [country, setCountry] = useState("in");
    const [darkMode, setdarkMode] = useState("Dark Mode");
    const [Col, setCol] = useState("light");
    const [Txt, setTxt] = useState("dark");
    const [progress, setprogress] = useState(0)



    const mode = () => {
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

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        fetchMoreData();
    }, [])


    // synchronousPromises = async () => {

    //     try {
    //         const handleGuestLoginResult = await this.handleGuestLogin();
    //         const handleAddressResult = await this.handleAddress();
    //         const handlePayLaterResult = await this.handlePayLater();
    //     }

    const search = async (event) => {
        await setpage(1);
        setSearchParams({ filter: Value })
        await getData();
    }

    const Change = (event) => {
        setValue(event.target.value)
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?q=${Value.trim().length === 0 ? "" : Value}&category=${props.category}&pagesize=${pageSize}&apiKey=be0eb6e725884d3488de66818aed1087&page=${page + 1}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(Articles.concat(parsedData.articles))
        setloading(false)
    }

    const getData = async () => {
        setprogress(0);
        const url = `https://newsapi.org/v2/top-headlines?q=${Value.trim().length === 0 ? "" : Value}&category=${props.category}&pagesize=${pageSize}&apiKey=be0eb6e725884d3488de66818aed1087&page=${page}`;
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

    let location = useLocation().search;
    let loc = (location.slice(8));
    console.log(useLocation())
    console.log(loc)
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

            {!loading && <Navbar Mode={mode} txt={Txt} col={Col} darkMODE={darkMode} search={search} Change={Change} />}

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
