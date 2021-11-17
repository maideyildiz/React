import axios from "axios";

async function getData(number){
    const {data}= await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const {data:post}= await axios("https://jsonplaceholder.typicode.com/posts/"+number);
    console.log(data, post);
}

export default getData;