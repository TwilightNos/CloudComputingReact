import React, {useState} from 'react';




const Login = () => {

    const [formData,setFormData] = useState({
        email:'',
        password:''
    })
    const emailChangeListener = (event) =>{
        setFormData({
            ...formData,
            email:event.target.value
        })
    }
    const passwordChangeListener = (event) => {
        setFormData({
            ...formData,
            password: event.target.value
        })
    }
    const formSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:5000/login',{
            method:"POST",
            body:JSON.stringify(formData)
        });
        if(res.ok){
            const response = await res.json();
            console.log(response);
        }
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="email">email:</label>
                    <input onChange={emailChangeListener}
                        type="text"/>
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input onChange={passwordChangeListener}
                           type="password"/>
                </div>
                <button type={"submit"}>Login</button>


            </form>
        </div>
    );
};

export default Login;