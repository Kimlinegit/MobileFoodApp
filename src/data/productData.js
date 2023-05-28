import categoryData from "./categoryData";

const ProductData = [
    {
        id: "1",
        name: "Hamburger",
        image: require("../../assets/images/Hamburger/Hamburger1.jpg"),
        description: "Delicious hamburger!",
        category: categoryData.find((category) => category.id === "1"),
        price: "20$",
        quantity: 30,
        rating: 4.5,
        comment: []
    },
    {
        id: "2",
        name: "Hamburger",
        image: require("../../assets/images/Hamburger/Hamburger2.jpg"),
        description: "Delicious hamburger!",
        category: categoryData.find((category) => category.id === "1"),
        price: "25$",
        quantity: 30,
        rating: 5,
        comment: []
    },
    {
        id: "3",
        name: "Noodle",
        image: require("../../assets/images/Noodle/Noodle1.jpg"),
        description: "Delicious Noodle!",
        category: categoryData.find((category) => category.id === "2"),
        price: "15$",
        quantity: 20,
        rating: 5,
        comment: []
    },
    {
        id: "4",
        name: "Noodle",
        image: require("../../assets/images/Noodle/Noodle2.jpg"),
        description: "Delicious Noodle!",
        category: categoryData.find((category) => category.id === "2"),
        price: "25$",
        quantity: 10,
        rating: 4,
        comment: []
    },
    {
        id: "5",
        name: "Noodle",
        image: require("../../assets/images/Noodle/Noodle3.jpg"),
        description: "Delicious Noodle!",
        category: categoryData.find((category) => category.id === "2"),
        price: "15$",
        quantity: 22,
        rating: 3.5,
        comment: []
    }
  // Các sản phẩm khác...
];

export default ProductData;
