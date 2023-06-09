// import React from 'react';
// import { View, Text } from 'react-native';
// import orderData from '../../data/orderData';

// const OrderHistoryScreen = () => {
//   return (
//     <View>
//       {orderData.map((order) => (
//         <View key={order.id}>
//           <Text>Date: {order.date}</Text>
//           <Text>Total: ${order.total}</Text>
//           <Text>Status: {order.status}</Text>
//           {/* Hiển thị thông tin chi tiết về các món hàng trong đơn đặt hàng */}
//           {order.items.map((item) => (
//             <View key={item.id}>
//               <Text>Name: {item.name}</Text>
//               <Text>Price: ${item.price}</Text>
//               <Text>Quantity: {item.quantity}</Text>
//             </View>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// export default OrderHistoryScreen;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import orderData from '../../data/orderData';

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      {orderData.map((order) => (
        <View key={order.id} style={styles.orderContainer}>
          <Text style={styles.date}>Date: {order.date}</Text>
          <Text style={styles.total}>Total: ${order.total}</Text>
          <Text style={styles.status}>Status: {order.status}</Text>
          {/* Hiển thị thông tin chi tiết về các món hàng trong đơn đặt hàng */}
          {order.items.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  orderContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  total: {
    fontSize: 14,
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  itemContainer: {
    marginTop: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    marginBottom: 2,
  },
  quantity: {
    fontSize: 12,
    color: 'gray',
  },
});

export default OrderHistoryScreen;

