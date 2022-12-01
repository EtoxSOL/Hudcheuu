// Interface type for data

interface InfoCard {
    id: number,
    banner: string;
    img1: string;
    title: string;
    description: string;
    link: string;
}

// Data used in Card.tsx

export const InfoCard : InfoCard[] = [
    {
        id: 1,
        banner: './images/banner.jpg',
        img1: './images/nft-n.png',
        title: 'Side Show',
        description: 'Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.',
        link: 'https://opensea.io/fr/collection/side-show',
    },

    {
        id: 2,
        banner: './images/banner-s.avif',
        img1: './images/nft-s.png',
        title: 'Special Side Show',
        description: 'Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.',
        link: 'https://opensea.io/fr/collection/special-side-show',
    },

    {
        id: 3,
        banner: './images/banner-m.avif',
        img1: './images/nft-m.png',
        title: 'Monster x Hunter',
        description: 'Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur: Praetextatus ex urbi praefecto et ex vicario Venustus et ex consulari Minervius oraturi, ne delictis supplicia sint grandiora, neve senator quisquam inusitato et inlicito more tormentis exponeretur.',
        link: 'https://opensea.io/fr/collection/monster-x-hunter'
    }
]