import React, {useState} from 'react';

const Register = () => {

    const [formData,setFormData] = useState({
        email:'',
        username:'',
        password:''
    });

    const [confirmPw,setConfirmPw] = useState('');

    const usernameChangeListener = (event) =>{
        setFormData({
            ...formData,
            username: event.target.value
        })
    }
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

    const confirmPasswordChangeListener = (event) => {
        setConfirmPw(event.target.value);
    }
    const formSubmit = async (event) => {

        event.preventDefault();
        if(confirmPw!==formData.password){
            alert('Password not match!');
            return;
        }

        const res = await fetch('http://localhost:5000/register',{
            method:"POST",
            body:JSON.stringify(formData)
        });
        if(res.ok){
            const response = await res.json();
            console.log(response);

            if(response.message !== 'successful'){
                alert(response.message);
            }

        }
    }




    return (
        <div>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="username">username:</label>
                    <input type="text" onChange={usernameChangeListener}/>
                </div>
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
                <div>
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" onChange={confirmPasswordChangeListener}/>
                </div>
                <button type={"submit"}>Register</button>
            </form>
        </div>
    );
};

export default Register;