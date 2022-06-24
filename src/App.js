import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FiPlayCircle } from "react-icons/fi";
import Navbar from "./Navbar";

function App() {
  const [image, setImage] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // const getApi = () => {
  const searchHandler = (searchItem) => {
    // console.log(searchItem)
    setSearchItem(searchItem);
    if (searchItem !== "") {
      const newSet = image.filter((data) => {
          return Object.values(data)
            .join(" ")
            .toLowerCase()
            .includes(searchItem.toLowerCase())
        ;
      });
      setSearchResult(newSet)
      // console.log(searchResult)
      // if(searchResult.length === 0){
      //     console.log(searchWarning) 
      //     return searchWarning
      //   }
      }
      else{
        setSearchResult(image)
      }
    };
  const options = {
    method: "GET",
    url: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "453ffc0eafmsh1542f2daf058c31p17d9bejsn164d38e4d815",
      "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        // console.log(res.data);
        setImage(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // }
  // const getApi = () => {
  //   axios.get('	https://api-football-standings.azharimm.site/leagues')
  //   .then(res => {
  //       console.log(res.data.data)
  //       setImage(res.data.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
  return (
    <div className="App">
      <Navbar 
      term={searchItem}
      searchKeyword={searchHandler}
      searchWarn = {searchResult} />
      <header className="App-header">
        {/* <button onClick={getApi}><h3>Get react</h3></button> */}
        {searchResult.length === 0 && searchItem.length > 0 ? <div className="result-warning">No Results found</div>  : console.log()}
        {searchItem.length > 0 ? (
          searchResult.map((data) => {
            return(            
            <div className="arrange-div">
            <div key={data.competition.id} className="key-div">
              <h4 className="title-text">{data.title}</h4>
              <img src={data.thumbnail} alt="" />
              <div className="status">{data.videos[0].title}</div>
              <div className="link-title">
                <a href={data.embed.slice(137, 230)}>
                  <FiPlayCircle />
                </a>
                <div className="date">Date: {data.date.slice(0, 10)}</div>
              </div>
            </div>
          </div>
            )
          })
        ) : (
          image.map((data) => {
            return(            
            <div className="arrange-div">
            <div key={data.competition.id} className="key-div">
              <h4 className="title-text">{data.title}</h4>
              <img src={data.thumbnail} alt="" />
              <div className="status">{data.videos[0].title}</div>
              <div className="link-title">
                <a href={data.embed.slice(137, 230)}>
                  <FiPlayCircle />
                </a>
                <div className="date">Date: {data.date.slice(0, 10)}</div>
              </div>
            </div>
          </div>
            )
          })
        )}
      </header>
    </div>
  );
}

export default App;
