const navItems = [
  {
    title: "Home",
    url: "/",
    subMenu: [],
  },
  {
    title: "Collections",
    url: "/collections",
    subMenu: [
      {
        category: "Men",
        links: [
          {
            title: "Formal Shoes",
            url: "/collections/mens-formal-shoes",
          },
          {
            title: "Casual Shoes",
            url: "/collections/mens-casual-shoes",
          },
          {
            title: "Sports Shoes",
            url: "/collections/mens-sports-shoes",
          },
        ],
      },
      {
        category: "Women",
        links: [
          {
            title: "Heels",
            url: "/collections/womens-heels",
          },
          {
            title: "Casual Shoes",
            url: "/collections/womens-casual-shoes",
          },
          {
            title: "Sports Shoes",
            url: "/collections/womens-sports-shoes",
          },
          {
            title: "Boots",
            url: "/collections/womens-boots",
          },
        ],
      },
      {
        category: "Kids",
        links: [
          {
            title: "Sneakers",
            url: "/collections/kids-sneakers",
          },
          {
            title: "Sandals",
            url: "/collections/kids-sandals",
          },
          {
            title: "Formal Shoes",
            url: "/collections/kids-formal-shoes",
          },
          {
            title: "Boots",
            url: "/collections/kids-boots",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    url: "/services",
    subMenu: [
      {
        category: "Customer Support",
        links: [
          {
            title: "Returns & Exchange",
            url: "/services/returns",
          },
          {
            title: "FAQ",
            url: "/services/faq",
          },
        ],
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    subMenu: [],
  },
  {
    title: "Contact",
    url: "/contact",
    subMenu: [],
  },
];

export default navItems;
