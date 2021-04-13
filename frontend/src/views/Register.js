import React from 'react'; //rfc

const Register = () => {
    return (
<div class="cont">
{/* <div  > <h1 class="text-white"> welcome to our website</h1></div> */}
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true"></input>

            <div class="signup">
                <form >
                    <label for="chk" aria-hidden="true">Sign up Student</label>
                    <input type="text" name="txt"  placeholder="first name" required="" />
                    <input type="text" name="txt" placeholder="last name" required="" />
                    <input type="email" name="email" placeholder="email" required="" />
                    <input type="text" name="text" placeholder=" phone" required="" />
                    <input type="text" name="text" placeholder="adresse" required="" />
                    <input type="password" name="pswd" placeholder="password" required="" />
                    <button>Sign up</button>
                </form>
            </div>

            <div class="signup-admin">
                <form>
                    <label for="chk" aria-hidden="true">Sign up Admin</label>
                    <input type="text" name="text" placeholder="first name" required="" />
                    <input type="text" name="text" placeholder="last name" required="" />
                    <input type="email" name="email" placeholder="email" required="" />
                    <input type="password" name="pswd" placeholder="password" required="" />
                    <button>Sign up</button>
                </form>
            </div>
        </div>


        </div>



    );
}

export default Register;

