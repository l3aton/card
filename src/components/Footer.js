import '../css/Footer.css'

const Footer = () => {

    return(
        <div className='footer-container'>
            <p>E-Mail: a.shvedenko722@gmail.com</p>
            <div className='p-num'>
                <p>Phone: </p>
                <a href="tel:+380635773383" className='p-link'>+380635773383</a>
            </div>
            <p>Telegram: @l3aton</p>
        </div>
    )
}

export default Footer;