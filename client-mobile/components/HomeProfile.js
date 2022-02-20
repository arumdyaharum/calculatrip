import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/logo.png'

export default function HomeProfile() {
  return (
    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginVertical: 5, marginHorizontal: 10, padding: 15, borderRadius: 10, backgroundColor: '#0378a6'}}>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <Image source={logo} style={{height: 70, width: 70, backgroundColor: "#fff", borderRadius: 30}} />
        <View style={{ marginLeft: 15 }}>
          <Text style={{fontSize: 21, fontWeight: "bold", color: "#fff" }}>dyahachwatiningrum</Text>
          <Text style={{paddingBottom: 10, color: "#fff"}}>dyahachwatiningrum@gmail.com</Text>
          <TouchableOpacity style={{padding: 10, alignSelf: 'flex-start', backgroundColor: "#fff", borderRadius: 10}}>
            <Text style={{color: '#0378a6', fontWeight: 'bold'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: "column", alignItems:"center"}}>
        <Ionicons name="star-outline" size={32} color="white" />
        <Text style={{paddingTop: 10, color: "#fff", fontWeight: "bold"}}>Regular</Text>
      </View>
    </View>
  )
}