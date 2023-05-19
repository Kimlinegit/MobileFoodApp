const orderData = [
    {
      id: 1,
      date: '2022-01-15',
      items: [
        {
          id: 1,
          name: 'Pizza',
          price: 9.99,
          quantity: 2,
        },
        {
          id: 2,
          name: 'Burger',
          price: 6.99,
          quantity: 1,
        },
      ],
      total: 26.97,
      status: 'completed',
    },
    {
      id: 2,
      date: '2022-02-05',
      items: [
        {
          id: 3,
          name: 'Salad',
          price: 5.99,
          quantity: 1,
        },
      ],
      total: 5.99,
      status: 'pending',
    },
    // ...
  ];
  
  export default orderData;
  