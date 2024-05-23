import React from 'react';

const Form =(props)=>{
    const{inputs, setInputs}=props;
    let contraseña;

    const onChange=(e)=>{
       
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
            
        });
        contraseña=varificarContraseña(e);
        
        
        
    };
    const varificarContraseña=(e) =>{
        if(e.target.name==='password'){
            if(e.target.value===inputs.password){
                return true;
        }else{
            return false;
        }
    }
}
    
    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input  onChange={onChange} type="text" name="firstName"/>
                {
                    (inputs.firstName.length<2)?
                        <p>First Name must be at least 2 characters</p>:
                        <p></p>   
                }
                
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName"/>
                {
                    (inputs.lastName.length<2)?
                        <p>Last Name must be at least 2 characters</p>:
                        <p></p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="email" name="email"/>
                {
                    (inputs.email.length<5)?
                        <p>Email must be at least 5 characters</p>:
                        <p></p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password"/>
                {
                    (inputs.password.length<8 )?
                        <p>Password must be at least 8 characters</p>:
                        <p></p>
                }
            </div>
           <div className="form-group"> 
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input onChange={onChange} type="password" name="passwordConfirm"/>
               
           </div>
        </form>
    )
};
export default Form;