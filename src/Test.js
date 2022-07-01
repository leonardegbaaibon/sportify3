import { useEffect } from "react";


import axios from "axios";



const Test = () => {

    // const [test, setTest] = useState([]);
    // const [email, setEmail] = useState('');
    // const [userName, setUname] = useState('')
    // const [check, setCheck] = useState('')

// const getData = () => {


    // }
    
    // console.log(email)
    // const option = {
      //   method: 'GET',
      //   url: 'https://extract-news.p.rapidapi.com/v0/article',
        //   params: {
        //     url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
        //   },
        //   headers: {
        //     'X-RapidAPI-Key': '453ffc0eafmsh1542f2daf058c31p17d9bejsn164d38e4d815',
        //     'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
        //   }
        // };
        // const option = {
          //     method: 'GET',
        //     url: 'https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyAnSjd8IgQGSIEk0PbtyhluHDCpAsfXk7k',
        // params: {url: 'https://thenextweb.com/news/pixel-6-teaser', js_timeout: '30'},
            // headers: {
              //   'X-RapidAPI-Key': '453ffc0eafmsh1542f2daf058c31p17d9bejsn164d38e4d815',
            //   'X-RapidAPI-Host': 'lexper.p.rapidapi.com'
            // }
          // };
          
          
          // useEffect(() => {
            // }, [])
            
            const PostData = () => {
            axios
            .request("https://newsapi.org/v2/everything?q=tesla&from=2022-05-30&sortBy=publishedAt&apiKey=a652e51aa018474c994ed646bf93ca43")
            .then((res) => {
              console.log(res)
                    // setTest(res.data);
              })
              .catch(function (error) {
                  console.error(error);
              });
          
            
            // axios
            // .post("https://signup-api1.herokuapp.com/userSignUp", {
            //     email,
            //     userName
            // })
            // .then((res) => {
            //     console.log(res);
            // })
            // .catch(function (error) {
            //     console.error(error);
            // });
            
            // if(email !== res.data.email){
            //   console.log("Gotcha")
            // }
    }
    // const deleteData = () => {
        
    //     // const options = {
    //         //   method: 'POST',
    //         //   url: 'https://reqres.in/api/users',
    //         // };
            
    //         axios
    //         .delete(`https://signup-api1.herokuapp.com/userSignUp/${id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             // for(let i = 0; i < res.data.length; i++){
    //             //     console.log(res.data[i])
    //             // }
    //         setTest(res.data);
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    // }


    return (
         <div>
            <button onClick={PostData}>Post data</button>
            {/* <button onClick={getData}>Get data</button> */}
            {/* <p>{test.id}</p> */}
            
            {/* <p>{test.userName}</p> */}
            {/* <p>{test.email}</p> */}
            {/* <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email"/> */}
            {/* <input type="text" onChange={(e) => setUname(e.target.value)} placeholder="username"/> */}
            {/* <button onClick={deleteData}>delete</button> */}
            {/* {test} */}
        </div>
     );
}
 
export default Test;