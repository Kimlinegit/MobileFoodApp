import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
      {/* Banner giới thiệu */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/images/Banner/foodApp_banner.jpg')}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Welcome to FoodApp</Text>
      </View>
      {/* Slider món ăn */}
      <View style={styles.container}>
        <ScrollView horizontal 
          style={styles.sliderContainer}
        >
            <Image
              source={require('../../../assets/images/Hamburger/Hamburger1.jpg')}
              style={styles.sliderImage}
            />
            <Image
              source={require('../../../assets/images/Noodle/Noodle1.jpg')}
              style={styles.sliderImage}
            />
            <Image
              source={require('../../../assets/images/Hamburger/Hamburger2.jpg')}
              style={styles.sliderImage}
            />
            <Image
              source={require('../../../assets/images/Noodle/Noodle2.jpg')}
              style={styles.sliderImage}
            />
        </ScrollView>
      </View>
        {/* Banner top sales */}
        <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Top Sales</Text>
          <Image
            source={require('../../../assets/images/Hamburger/Hamburger1.jpg')}
            style={styles.bannerImage}
          />
        </View>

        {/* Banner category */}
        <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Categories</Text>
          <Image
            source={require('../../../assets/images/Hamburger/Hamburger1.jpg')}
            style={styles.bannerImage}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>FoodApp - All rights reserved</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sliderContainer: {
    height: 200,
  },
  sliderImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginRight: 10,
  },
  footer: {
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  separator: {
    height: 10, // Chiều cao của khoảng cách
    backgroundColor: '#fff', // Màu sắc của khoảng cách (màu nền của container)
  },
});

export default HomeScreen;

