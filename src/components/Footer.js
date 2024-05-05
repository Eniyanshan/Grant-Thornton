import "./Footer.css"


function Footer(){
    return(
        <div>
             <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 square">
                <div class="heading">Our Services</div>
                    <ul class="p-list">
                    <li>Consulting</li>
                        <li>Tax,Regulatory</li>
                        <li>Assurance</li>
                        <li>Deals Consulting</li>
                       
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 square">
                    <div class="heading">Legal</div>
                    <ul class="p-list">
                    <li>Privacy</li>
                        <li>Disclaimer</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 square">
                    <div class="heading">Links</div>
                    <ul class="l-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 square">
                    <div class="heading">Contact</div>
                    <ul class="contact">
                        {/* <li><i class="fa-solid fa-house"></i> Your Address</li> */}
                        <li><i class="fa-solid fa-envelope"></i> EniyanS@hexaware.com</li>
                        <li><i class="fa-solid fa-envelope"></i> +91 9345175613</li>
                    </ul>
                </div>
            </div>
            <ul class="social-media">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
            </ul>
        </div>
        {/* <div class="copy">&copy Copyright </div> */}
    </footer>
        </div>
    )
}


export default Footer