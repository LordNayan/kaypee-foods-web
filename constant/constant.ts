export const socialMedialIcons = {
    facebook: "/images/common/footer/facebook_logo.png",
    instagram: "/images/common/footer/instagram_logo.png",
    twitter: "/images/common/footer/twitter_logo.png",
}

export const productsImages = {
    product1: "/images/common/products/Truffles.jpg",
    product2: "/images/common/products/Bites.jpg",
    product3: "/images/common/products/Squares.jpg",
    product4: "/images/common/products/Wafer-Rolls.jpg",
    product5: "/images/common/products/Cocoa-Bar.jpg",
    product6: "/images/common/products/gifting-range.jpg",
}

export const socialMedialLinks = {
    facebook: "https://www.facebook.com/Chocozaymrn",
    instagram: "https://www.instagram.com/chocozayin/",
    twitter: "https://twitter.com/ChocozayIN",
}

export const getCommonAssets = {
    common: {
        socialMedia: [
            {
                id: 1,
                iconLink: socialMedialLinks?.facebook,
                iconSrc: socialMedialIcons?.facebook,
                iconAlt: "facebook-icon"
            },
            {
                id: 2,
                iconLink: socialMedialLinks?.instagram,
                iconSrc: socialMedialIcons?.instagram,
                iconAlt: "instagram-icon"
            },
            {
                id: 3,
                iconLink: socialMedialLinks?.twitter,
                iconSrc: socialMedialIcons?.twitter,
                iconAlt: "twitter-icon"
            }
        ],
        products: [
            {
                id: 1,
                imgSrc: productsImages?.product1,
                imgLink: "/truffles",
                imgAlt: "Truffles"
            },
            {
                id: 2,
                imgSrc: productsImages?.product2,
                imgLink: "/bites",
                imgAlt: "Bites"
            },
            {
                id: 3,
                imgSrc: productsImages?.product3,
                imgLink: "/squares",
                imgAlt: "Squares"
            },
            {
                id: 4,
                imgSrc: productsImages?.product4,
                imgLink: "/wafer-rolls",
                imgAlt: "Wafer Rolls"
            },
            {
                id: 5,
                imgSrc: productsImages?.product5,
                imgLink: "/cocoa-bar",
                imgAlt: "Bars"
            },
            {
                id: 6,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Gifting Range"
            }
        ]
    }
}