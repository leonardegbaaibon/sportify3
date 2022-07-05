import { useEffect,useState } from "react";


import axios from "axios";



const Test = () => {

    const [test, setTest] = useState([]);


            const PostData = () => {
              const Option= {
                method: 'GET',
                url: 'https://newsapi.org/v2/everything?' +
                'q=Apple&' +
                'sortBy=publishedAt&' +
                'apiKey=a652e51aa018474c994ed646bf93ca43',
              }
              axios
              .request(Option)
              .then((res) => {
                let call = [];
              for(let i = 0; i < 6; i++){
                console.log(res.data.articles[i])
                call.push(res.data.articles[i])
              }
              console.log(call)
              setTest(call);
              })
              .catch(function (error) {
                console.error(error);
              });
          
            
            }


    return (
         <div>
            <button onClick={PostData}>Post data</button>
          {test.map((data) => {
            return(
              <div>
                {data.author}
              </div>
            )
          })}
        </div>
     );
}
 
export default Test;