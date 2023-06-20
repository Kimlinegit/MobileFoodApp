import React from 'react'
import { View, Text} from 'react-native';
import axiosInstance from '../../../../config/axiosConfig';

export default function ListCategory() {
    const [listCategories, setListCategories] = React.useState()

    React.useEffect(()=>{
        axiosInstance.get("category").then((res)=>{
            if(res.data){
                setListCategories(res.data)
            }
        })
    }, [])

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20
      }}>
        <View  style={{display: "flex", justifyContent:"center",alignItems:"center" }}> 
            <Text style={{fontSize: 20, fontWeight:"800", marginVertical: 20}}>Categories</Text>
        </View>
        <View style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>
        {listCategories && listCategories?.map((categoryItem)=>{
            return <View key={categoryItem._id} style={{padding: 10, borderWidth: 1, borderColor:"#95afc0" , margin: 4, borderRadius: 10}}>  
                <Text style={{fontSize: 18 , fontWeight:"600"}}>{categoryItem.name}</Text>
            </View>
        })}

        </View>
    </View>
  )
}
