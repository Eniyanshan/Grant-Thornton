import "./Footer.css"


function Footer(){
    return(
        <div>
             <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 square">
                    <div class="brand">Company</div>
                    <p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nemo, vel qui
                        veritatis earum aperiam officiis. Vero voluptatibus architecto, rerum porro est molestias harum.
                    </p>
                </div>
                <div class="col-lg-2 col-md-6 square">
                    <div class="heading">Product</div>
                    <ul class="p-list">
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                        <li>Product 4</li>
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
                        <li><i class="fa-solid fa-house"></i> Your Address</li>
                        <li><i class="fa-solid fa-envelope"></i> Email@gmail.com</li>
                        <li><i class="fa-solid fa-envelope"></i> +4545 4544545</li>
                    </ul>
                </div>
            </div>
            <ul class="social-media">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
            </ul>
        </div>
        <div class="copy">&copy Copyright & Reserved 2023. <a href="https://www.youtube.com/@taruncode_">Tarun Code</a></div>
    </footer>
        </div>
    )
}


export default Footer