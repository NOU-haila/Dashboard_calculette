import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import "./Login.scss";

function Login() {
    const [logins, setLogins] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8086/login', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ logins: logins, motDePasse: motDePasse })
        });

        const json = await response.json();
        if (!response.ok) {
            setLoginStatus("Erreur lors de la connexion.");
        } else {
            navigate("/"); 
        }
    };

    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <h3>Welcome Back!</h3>
                    </div>
                    <h1 className="msgRegister">{loginStatus}</h1>    
                    <form className='form grid' onSubmit={login}>
                        <span className='showMessage'>Login status will go here</span>
                        <div className='inputDiv'>
                            <label htmlFor="email"><span>Login</span></label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input 
                                    type="email" 
                                    placeholder='Enter your login'  
                                    onChange={(e) => setLogins(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className='inputDiv'>
                            <label htmlFor="password"><span>Password</span></label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    onChange={(e) => setMotDePasse(e.target.value)}                   
                                    required
                                />
                            </div>
                        </div>

                        <button className='btn flex' type="submit">                            
                            Login
                            <AiOutlineSwapRight className='icon'/>
                        </button>
                    </form>
                </div>
            </div>
        </div>    
    );
}

export default Login;
