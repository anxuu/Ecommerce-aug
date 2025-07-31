import './Footer.css'


function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="column1">
                    <ul>
                        <h2>Categories</h2>
                        <li><a href="">Watches</a></li>
                        <li><a href="#article">Mobiles</a></li>
                        <li><a href="#article">Tablets</a></li>
                        <li><a href="#article">Audio</a></li>
                        <li><a href="#article">Drone</a></li>
                    </ul>

                </div>

                <div className="column2" >

                    <ul>
                        <h2>Useful Links</h2>
                        <li><a href="#article">Terms</a></li>
                        <li><a href="#article">Privacy</a></li>
                        <li><a href="#article">About us</a></li>
                        <li><a href="#article">Mission</a></li>
                    </ul>
                </div>


                <div className="column3" >

                    <h2>Get Updates</h2>

                    <form className="input-btn">
                        <input type="email" className="input2" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </form>

                    <aside className="aside">

                        <a href="https://www.facebook.com/" className="bi bi-facebook" aria-label="Facebook"></a>
                        <a href="https://www.instagram.com/" className="bi bi-instagram" aria-label="Instagram"></a>
                        <a href="https://www.twitter.com/" className="bi bi-twitter" aria-label="Twitter"></a>
                        <a href="https://www.whatsapp.com/" className="bi bi-whatsapp" aria-label="WhatsApp"></a>

                    </aside>



                </div>

            </footer>


        </>


    )
}

export default Footer;