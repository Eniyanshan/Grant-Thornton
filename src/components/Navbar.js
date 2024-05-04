import "./Navbar.css"

import logo from "../asscets/GT.png"


function Navbar(){
    return(
        <div>
            <nav class="navbar">
		<div class="navdiv">
			{/* <div class="logo"><a href="#">CodingNinja</a> </div> */}
			<div class="logo"><img src={logo} alt=""  height={70} /> </div>
			{/* <ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
				<button><a href="#">SignIn</a></button>
				<button><a href="#">SignUp</a></button>
			</ul> */}
		</div>
	</nav>
        </div>
    )
}


export default Navbar