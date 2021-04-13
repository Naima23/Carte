import React from 'react';

const Login = () => {
    return (
        <div class="login-form">
           <div class="login">
			<form class="main">
				<label for="chk" aria-hidden="true">Sign in</label>
				<input type="email" name="email" placeholder="email" required="" />
				<input type="password" name="pswd" placeholder="password" required="" />
				<button>Login</button>
            </form>
            </div>
            </div>
	
    );
}

export default Login;
