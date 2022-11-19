import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";

// const fetchData = async (url,method = 'GET',data = {})=>{
//     let res;
//     if(method === 'GET'){
//         res = await fetch(`${url}`);
//     }else{
//         res = await fetch(`${url}`,{
//             method:method,
//             body:JSON.stringify(data)
//         });
//     }
//     let response = '';
//     if(res.ok){
//         response = await res.json();
//     }
//     return response
// }



const App = ()=> {

    // const [data,setData] = useState({
    //     name:'',
    //     age:0,
    //     date:'',
    //     language:''
    // });
    //
    // useEffect(() => {
    //     const fetchd = async ()=>{
    //         const time = await fetchData('http://127.0.0.1:5000/data');
    //         setData({
    //             name : time.name,
    //             age:time.age,
    //             date:time.date,
    //             language: time.language
    //
    //     })};
    //     fetchd();
    // },[])
    //
    // const clickButtonHandler = async () => {
    //     const response = await fetchData('http://127.0.0.1:5000/hello', 'POST', {message: 'message', title: 'title'});
    //     console.log(response.message);
    // }

    return (
        <div className="App">
            <Menu/>
            <Routes>
                <Route path = '/' element={<Home/>}></Route>
                <Route path={'/login'} element={<Login/>}></Route>
                <Route path={'/register'} element={<Register/>}></Route>
            </Routes>
            {/*<button onClick={clickButtonHandler}>Button</button>*/}

            {/*<p>{data.name}</p>*/}
            {/*<p>{data.age}</p>*/}
            {/*<p>{data.date}</p>*/}
            {/*<p>{data.language}</p>*/}
        </div>
    );
}

export default App;
