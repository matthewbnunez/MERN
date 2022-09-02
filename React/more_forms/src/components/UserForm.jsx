import React, { useState } from 'react'; 
import Display from './Display'; 


const UserForm = (props) => { 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setconfirmPassword] = useState(""); 

    const createUser = (e) => { e.preventDefault(); 
        const newUser = { firstName, lastName, email, password, confirmPassword }; 
        console.log("Welcome", newUser); 
    }; 
        
    return( 
    <div>
        <form onSubmit={ createUser }> 
            <div> 
                <label>First name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } /> 
            </div> 
            <div> 
                <label>Last name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } /> 
            </div> 
            <div> 
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } /> 
            </div> 
            <div> 
                <label>Password: </label> 
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } /> 
            </div> 
            <div> 
                <label>Confirm Password: </label> 
                <input type="password" name="confirmPassword" onChange={ (e) => setconfirmPassword(e.target.value) } /> 
            </div> 
            <input type="submit" value="Create User" /> 
        </form> 
        <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} />
    </div>
    ); 
}; 

export default UserForm;