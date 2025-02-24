import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"; 
export const socialMedialIcons = {
    facebook: "/images/common/footer/facebook_logo.png",
    instagram: "/images/common/footer/instagram_logo.png",
    twitter: "/images/common/footer/Youtube_logo.png",
}

export const productsImages = {
    product1: "/images/common/products/Truffles.jpg",
    product2: "/images/common/products/Bites.jpg",
    product3: "/images/common/products/Squares.jpg",
    product4: "/images/common/products/Wafer-Rolls.jpg",
    product5: "/images/common/products/Cocoa-Bar.jpg",
    product6: "/images/common/products/gifting-range.jpg",
}

export const heroSectionBgImages = {
    aboutUs: "./images/home/hero-slider/slide9.jpg",
    products: "./images/home/hero-slider/slide10.jpg",
    distributors: "./images/home/hero-slider/slide11.jpg",
    contactUs: "/images/common/bg-img/int-hero-contact-us.jpg",
}

export const socialMedialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61550347615260",
    instagram: "https://www.instagram.com/kaypee_food?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    twitter: "https://www.youtube.com/@KAYPEEGROUP",
}

export const getCommonAssets = {
    common: {
        socialMedia: [
            {
                id: 1,
                iconLink: socialMedialLinks?.facebook,
                iconSrc: faFacebook,
                iconAlt: "facebook-icon",
            },
            {
                id: 2,
                iconLink: socialMedialLinks?.instagram,
                iconSrc: faInstagram,
                iconAlt: "instagram-icon"
            },
            {
                id: 3,
                iconLink: socialMedialLinks?.twitter,
                iconSrc: faTwitter,
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

export const customHeaderSectionDetails = {
    "aboutUs": {
        title: "About Us",
        heroImg: heroSectionBgImages?.aboutUs
    },
    "products": {
        title: "Products",
        heroImg: heroSectionBgImages?.products
    },
    "distributors": {
        title: "Distributors",
        heroImg: heroSectionBgImages?.distributors
    },
    "contactUs": {
        title: "Contact Us",
        heroImg: heroSectionBgImages?.contactUs
    }
}