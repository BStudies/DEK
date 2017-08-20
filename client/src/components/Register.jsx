import React, { Component } from 'react';



class Register extends Component{

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

      
    handleRegister = (e) => {
        e.preventDefault();
        let keys = Object.keys(this.state);
        // Do axios call here
    } 

    render(){
        
        return(
            <div>
                <form action="/register" method='POST'>
                    <input type="text" name='firstName' placeholder='First Name'
                    onClick={(e)=>this.handleInputChange(e)}/>
                    <input type="text" name='lastName' placeholder='Last Name'
                    onClick={(e)=>this.handleInputChange(e)}/>
                    <input type="text" name='userName' placeholder='User Name'
                    onClick={(e)=>this.handleInputChange(e)}/>
                    <input type="email" name='email' placeholder='Email'
                    onClick={(e)=>this.handleInputChange(e)}/>
                    <input type="password" name='password' placeholder='Password'
                    onClick={(e)=>this.handleInputChange(e)}/>
                    <input onClick={(e)=>this.handleRegister(e)} type="submit" value='Submit'/>
                </form>
            </div>    
        )
    }
}


export default Register;