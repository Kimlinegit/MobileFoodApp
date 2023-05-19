const menuData = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious pizza with a variety of toppings',
      price: 9.99,
      image: "pizza",
      rating: 4.5,
      comments: [
        {
          id: 1,
          text: 'Great pizza, highly recommended!',
          author: 'John Doe',
        },
        {
          id: 2,
          text: 'The best pizza I have ever had!',
          author: 'Jane Smith',
        },
      ],
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Juicy burger with all the fixings',
      price: 6.99,
      image: "image",
    //   image: require('./assets/burger.jpg'),
      rating: 4.2,
      comments: [
        {
          id: 1,
          text: 'Amazing burger, loved every bite!',
          author: 'John Doe',
        },
        {
          id: 2,
          text: 'Delicious burger, great value for money!',
          author: 'Jane Smith',
        },
      ],
    },
    // ...
  ];
  
  export default menuData;
  