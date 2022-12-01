// At the bottom of the site, I indicate the rights and links of Hudcheuu social networks

export default function Footer () {
    return (
        <footer className="footer">
            <p className="footer--rights">©2022 eto. All rights reserved</p>
            <div className="footer--icon">
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
        </footer>
    )
}