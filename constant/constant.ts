import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Import the faReact icon

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
    aboutUs: "./images/home/hero-slider/slide12.jpg",
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
                iconSrc: faYoutube,
                iconAlt: "youtube-icon"
            }
        ],
        products: [
            {
                id: 1,
                imgSrc: productsImages?.product1,
                imgLink: "/truffles",
                imgAlt: "PREMIUM CANDY"
            },
            {
                id: 2,
                imgSrc: productsImages?.product2,
                imgLink: "/bites",
                imgAlt: "PREMIUM Centre-Filled CANDY"
            },
            {
                id: 3,
                imgSrc: productsImages?.product3,
                imgLink: "/squares",
                imgAlt: "Heart Centre-Filled CANDY"
            },
            {
                id: 4,
                imgSrc: productsImages?.product4,
                imgLink: "/wafer-rolls",
                imgAlt: "Center Filled Candy"
            },
            {
                id: 5,
                imgSrc: productsImages?.product5,
                imgLink: "/cocoa-bar",
                imgAlt: "Deposited Candy"
            },
            {
                id: 6,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Candy + Spicy Candy"
            },
            {
                id: 7,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Jumbo Toffee"
            },
            {
                id: 8,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Centre Filled Eclairs"
            },
            {
                id: 9,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Bar Toffee"
            },
            {
                id: 10,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Butter Toffee"
            },
            {
                id: 11,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Toffee"
            },
            {
                id: 12,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Premium Milky Roll Toffee"
            },
            {
                id: 13,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Chew + Jelly Toffee"
            },
            {
                id: 14,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Lollipops"
            },
            {
                id: 15,
                imgSrc: productsImages?.product6,
                imgLink: "/gift-boxes",
                imgAlt: "Jellies"
            }
            //Premium Butter Toffee
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