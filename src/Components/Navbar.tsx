// Navbar at the top of the website

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src="./images/nft-pp.png" className="navbar--pp" />
            <h1 className="navbar--title">Hudcheuu collections</h1>
            <div className="navbar--icon">
                <a href="https://twitter.com/hudcheuu" target="_blank">
                <img src="./images/twitter-bicon.webp"/>
                </a>
                <a href="https://www.instagram.com/hudcheuu/" target="_blank">
                <img src="./images/instagram-bicon.webp"/>
                </a>
                <a href="https://discord.gg/SUesG3xuHq" target="_blank">
                <img src="./images/discord-bicon.webp"/>
                </a>
            </div>
        </nav>
   )
}