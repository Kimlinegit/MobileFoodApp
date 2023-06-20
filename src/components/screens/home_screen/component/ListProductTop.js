import React from 'react'
import axiosInstance from '../../../../config/axiosConfig'
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListProductTop() {
    const [productTop, setProductTop] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const navigation = useNavigation();

    const handleClickItem = (id)=>{
        navigation.navigate('ProductDetailScreen', { id });
    }
    React.useEffect(()=>{
    setLoading(true)
      axiosInstance.get("product/top").then((res)=>{
        if(res){
          setProductTop(res.data)
        }else{
            setLoading(false)
        }
      })
    }, [])

    React.useEffect(()=>{
        setLoading(false)
    }, [productTop])

    if(loading){
    return <ActivityIndicator size="large" />
    }

  return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20
      }}>
        <View style={{display: "flex", justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize: 20, fontWeight:"800", marginVertical: 20}}>Top Rating</Text>
        </View>
        <ScrollView horizontal
        >
            {productTop && productTop?.map((productItem)=>{
                return <TouchableOpacity key={productItem._id} onPress={()=>handleClickItem(productItem._id)}>
                        <View >
                            <Image
                                source={{uri: productItem.image_url}}
                                style={{
                                    width: 300,
                                    height: 200,
                                    resizeMode: 'cover',
                                    marginRight: 10,
                                }}
                                />
                    </View>
                </TouchableOpacity>
                 
                })}
        </ScrollView>
      </View>
  )
}
