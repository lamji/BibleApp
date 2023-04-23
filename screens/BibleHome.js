
import React from "react";
import moment from "moment/moment";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setIsBack } from "../reducer/header";

const DATA =[{
  "id": 1,
  "date": "2/3/2023",
  "title": "Harms",
  "verse": "gharms0@amazon.co.jp",
  "message": "Removal of Synthetic Substitute from Left Carpal, Open Approach",
  "application": "25.58.62.241"
}, {
  "id": 2,
  "date": "9/11/2022",
  "title": "Da Costa",
  "verse": "cdacosta1@nationalgeographic.com",
  "message": "Dilation of Right Internal Carotid Artery, Bifurcation, with Two Intraluminal Devices, Percutaneous Approach",
  "application": "112.11.65.19"
}, {
  "id": 3,
  "date": "1/2/2023",
  "title": "Lorey",
  "verse": "alorey2@nyu.edu",
  "message": "Measurement of Arterial Flow, Pulmonary, Open Approach",
  "application": "217.195.179.194"
}, {
  "id": 4,
  "date": "6/3/2022",
  "title": "Vieyra",
  "verse": "rvieyra3@walmart.com",
  "message": "Excision of Vagina, Via Natural or Artificial Opening",
  "application": "138.94.29.111"
}, {
  "id": 5,
  "date": "1/28/2023",
  "title": "Tschierse",
  "verse": "ktschierse4@cnet.com",
  "message": "Destruction of Face Subcutaneous Tissue and Fascia, Open Approach",
  "application": "188.72.108.175"
}, {
  "id": 6,
  "date": "6/18/2022",
  "title": "Gaw",
  "verse": "rgaw5@narod.ru",
  "message": "Occlusion of Left Popliteal Artery with Extraluminal Device, Percutaneous Approach",
  "application": "91.68.134.215"
}, {
  "id": 7,
  "date": "2/26/2023",
  "title": "Girault",
  "verse": "ggirault6@eepurl.com",
  "message": "Revision of Nonautologous Tissue Substitute in Right Glenoid Cavity, Percutaneous Approach",
  "application": "5.162.137.166"
}, {
  "id": 8,
  "date": "5/30/2022",
  "title": "De Bellis",
  "verse": "kdebellis7@vistaprint.com",
  "message": "Removal of Internal Fixation Device from Left Acromioclavicular Joint, Open Approach",
  "application": "241.197.43.98"
}, {
  "id": 9,
  "date": "2/22/2023",
  "title": "Swanbourne",
  "verse": "wswanbourne8@soup.io",
  "message": "Transfer Oculomotor Nerve to Optic Nerve, Open Approach",
  "application": "231.223.235.87"
}, {
  "id": 10,
  "date": "4/23/2023",
  "title": "Galego",
  "verse": "John 3:16",
  "message": "Drainage of Right Thyroid Artery, Open Approach",
  "application": "67.53.86.155"
}]

const BibleHome = ({navigation }) => {
  const dispatch = useDispatch();
  const date2day = new Date();
  const date = moment(date2day).format('l')
  const isHaveDevotion = DATA.filter(item => item.date === date)
  console.log("BibleHome ====>",isHaveDevotion, date)
  /**
   * Handle open single devotion
   * @param {*} title 
   * @param {*} id 
   * @param {*} date 
   * @param {*} description 
   */
 const handleOpenDevotion = (data) => {
  navigation.navigate("View")
  dispatch(setIsBack({
    status: true,
    label: "Back",
  }))
 }

 /**
  * flat list items
  * @param {*} param0 
  * @returns 
  */
  const Item = ({title}) => {
    return (
      <View>
      {title?.id === 1 && (
      <View className="status" style={styles.status}>
        <View>
          {isHaveDevotion.length > 0 ? (
            <View>
               <Text>Date: {date}</Text>
               <Text>{isHaveDevotion?.[0]?.verse}</Text>
               <Text style={styles.devoTitle}>{isHaveDevotion?.[0]?.title}</Text>
               <Text style={styles.message}>{isHaveDevotion?.[0]?.message}</Text>
            </View>
          ) : (
            <View>
               <Text>Date: {date}</Text>
               <Text style={styles.devoTitle}>No Devotion for today</Text>
               <Text style={styles.message}>{isHaveDevotion?.[0]?.message}</Text>
            </View>
          )}
        </View>
      </View>
    ) }
    <TouchableOpacity onPress={() => handleOpenDevotion(isHaveDevotion?.[0]) }>
      <View style={styles.item} >
          <Text style={styles.title}>{title?.title}</Text>
          <Text style={styles.itemMessage}>{title?.message}</Text>
          <Text style={styles.itemDate}>{title?.date}</Text>
      </View>
    </TouchableOpacity>
  </View> 
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper} >
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
      </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
   padding: 10,
  },
  wrapper: {
    marginTop: 10,
  },
  item: {
    backgroundColor: '#FDFDFD',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius:10,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderStyle: "solid",
  },
  itemMessage:{
    marginTop: 5
  },
  itemDate: {
    marginTop: 12,
    fontSize: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 700
  },
  status: {
    borderRadius:10,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical:10,
    height: 200,
    paddingHorizontal: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#EADCA6"
  },
  devoTitle: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 700
  },
  message: {
    marginTop: 5
  }
});

export default BibleHome;