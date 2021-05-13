const allProducts = [
  {
    id: 1,
    name: "Bigman cloths",
    slug: "bigman-cloths",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-2955375.jpeg",
    currency_sign: {
      naira: "&#8358",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Shakky",
    slug: "shakky",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-3310694.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Kins quatty wears",
    slug: "kins-quatty-wears",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2728263.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Broad arms",
    slug: "broad-arms",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-3193731.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 1,
    name: "White glide",
    slug: "white-glide",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-1719641.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Plane Polo Top",
    slug: "plane-polo-top",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-2726161.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Net knit",
    slug: "net-knit",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2922301.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Cover arms",
    slug: "cover-arms",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-4890733.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },
  {
    id: 1,
    name: "Armless ",
    slug: "armless",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-6112012.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Red native",
    slug: "red-native",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-3907595.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Neck rolls",
    slug: "neck-rolls",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2466756(1).jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Suit brandy",
    slug: "suit-brandy",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-952214.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },
];

const manStuffProducts = [
  {
    id: 1,
    name: "Bigman cloths",
    slug: "bigman-cloths",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-2955375.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Shakky",
    slug: "shakky",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-3310694.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Kins quatty wears",
    slug: "kins-quatty-wears",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2728263.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Broad arms",
    slug: "broad-arms",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-3193731.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },
];

const skirtProducts = [
  {
    id: 1,
    name: "White glide",
    slug: "white-glide",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-1719641.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Plane Polo Top",
    slug: "plane-polo-top",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-2726161.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Net knit",
    slug: "net-knit",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2922301.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Cover arms",
    slug: "cover-arms",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-4890733.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },
];

const kidProducts = [
  {
    id: 1,
    name: "Armless ",
    slug: "armless",
    recent_price: 40,
    discount_price: 60,
    main_price: 40,
    image: "pexels-photo-6112012.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 2,
    name: "Red native",
    slug: "red-native",
    recent_price: 70,
    discount_price: 90,
    main_price: 70,
    image: "pexels-photo-3907595.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 3,
    name: "Neck rolls",
    slug: "neck-rolls",
    recent_price: 100,
    discount_price: 140,
    main_price: 100,
    image: "pexels-photo-2466756(1).jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },

  {
    id: 4,
    name: "Suit brandy",
    slug: "suit-brandy",
    recent_price: 80,
    discount_price: 90,
    main_price: 80,
    image: "pexels-photo-952214.jpeg",
    currency_sign: {
      naira: "N",
      dollar: "$",
    },

    getDiscount() {
      const getDiscount = (this.recent_price / 100) * this.discount_price;

      this.main_price = Math.floor(this.recent_price - getDiscount);
    },
  },
];

export { manStuffProducts, skirtProducts, kidProducts, allProducts };
