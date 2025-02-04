const navItems = [
  { title: "Home", url: "/", submenu: [] },
  { title: "Collections", url: "/collections", submenu: [] },
  {
    title: "Men",
    submenu: [
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
    title: "Women",
    submenu: [
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
    title: "Kids",
    submenu: [
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
];

export default navItems;
