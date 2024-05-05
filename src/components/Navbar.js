import "./Navbar.css"

import logo from "../asscets/GT.png"


function Navbar(){
    return(
        <div>
            <nav class="navbar">
		<div class="navdiv">
			{/* <div class="logo"><a href="#">CodingNinja</a> </div> */}
			<div class="logo"><img src={logo} alt=""  height={55} style={{marginTop:"5px"}}/> </div>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				
				{/* <button><a href="#">SignIn</a></button>
				<button><a href="#">SignUp</a></button> */}
			</ul>
		</div>
	</nav>
        </div>
    )
}


export default Navbar