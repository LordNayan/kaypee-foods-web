import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Import the faReact icon

export const socialMedialIcons = {
    facebook: "/images/common/footer/facebook_logo.png",
    instagram: "/images/common/footer/instagram_logo.png",
    twitter: "/images/common/footer/Youtube_logo.png",
}

export const productsImages = {
    product1: "/images/common/products/Premiumcandy1.jpg",
    product2: "/images/common/products/premiumcfc.jpg",
    product3: "/images/common/products/Heartcentre.jpg",
    product4: "/images/common/products/CentreFilled.jpg",
    product5: "/images/common/products/Deposited.jpg",
    product6: "/images/common/products/candysp.jpg",
    product7: "/images/common/products/premiumjumbo.jpg",
    product8: "/images/common/products/premiumcfc.jpg",
    product9: "/images/common/products/premiumbt.jpg",
    product10: "/images/common/products/premium_bt.jpg",
    product11: "/images/common/products/Premium_T.jpg",
    product12: "/images/common/products/Premium_MT.jpg",
    product13: "/images/common/products/ChewJ.jpg",
    product14: "/images/common/products/Lollip.jpg",
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
        iconAlt: "instagram-icon",
      },
      {
        id: 3,
        iconLink: socialMedialLinks?.twitter,
        iconSrc: faYoutube,
        iconAlt: "youtube-icon",
      },
    ],
    products: [
      {
        id: 1,
        imgSrc: productsImages?.product1,
        imgLink: "/premium-candy",
        imgAlt: "Premium Candy",
      },
      {
        id: 2,
        imgSrc: productsImages?.product2,
        imgLink: "/filled-candy",
        imgAlt: "Premium Center Filled",
      },
      {
        id: 3,
        imgSrc: productsImages?.product3,
        imgLink: "/heart-centre",
        imgAlt: "Heart Filled Candy",
      },
      {
        id: 4,
        imgSrc: productsImages?.product4,
        imgLink: "/center-filled",
        imgAlt: "Center Filled Candy",
      },
      {
        id: 5,
        imgSrc: productsImages?.product5,
        imgLink: "/deposited",
        imgAlt: "Deposited Candy",
      },
      {
        id: 6,
        imgSrc: productsImages?.product6,
        imgLink: "/candy-spicy",
        imgAlt: "Candy + Spicy Candy",
      },
      {
        id: 7,
        imgSrc: productsImages?.product7,
        imgLink: "/premium-jumbo",
        imgAlt: "Premium Jumbo Toffee",
      },
      {
        id: 8,
        imgSrc: productsImages?.product8,
        imgLink: "/premium-centre",
        imgAlt: "Premium Centre Filled Eclairs",
      },
      {
        id: 9,
        imgSrc: productsImages?.product9,
        imgLink: "/premium-bar",
        imgAlt: "Premium Bar Toffee",
      },
      {
        id: 10,
        imgSrc: productsImages?.product10,
        imgLink: "/premium-butter",
        imgAlt: "Premium Butter Toffee",
      },
      {
        id: 11,
        imgSrc: productsImages?.product11,
        imgLink: "/premium-toffee",
        imgAlt: "Premium Toffee",
      },
      {
        id: 12,
        imgSrc: productsImages?.product12,
        imgLink: "/premium-milky",
        imgAlt: "Premium Milky Roll Toffee",
      },
      {
        id: 13,
        imgSrc: productsImages?.product13,
        imgLink: "/jelly-toffee",
        imgAlt: "Chew + Jelly Toffee",
      },
      {
        id: 14,
        imgSrc: productsImages?.product14,
        imgLink: "/lollipops",
        imgAlt: "Lollipops",
      },

      //Premium Butter Toffee
    ],
  },
};

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