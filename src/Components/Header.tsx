// this component presents the author of the collections

export default function Header () {
    return (
        <header className='header'>
            <div className='header--main'>
            <div className='header--text'>
            <h1 className='header--title'>Who is Hudcheuu ?</h1>
            <p className='header--description'>Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.</p>
            </div>
            <div className='header--card'>
            <img src='./images/nft-artist.jpeg' className='header--image' />
            <p className='header--artist'>ARTIST</p>
            <p className='header--name'>Hudcheuu</p>
            </div>
            </div>
            <div className='header--bottom'>NFT collections</div>
        </header>
    )
}