import { StaticImageData } from "next/image"

interface advert {
    imageUrl: StaticImageData,
    recommended: boolean,
    numOfAds: string,
    price: number,
    features: string[]
}

export default advert