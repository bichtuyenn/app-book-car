import React,{useState} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
const conversations = [
    {
      id: 1,
      name: 'Nam',
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
      lastMessage: 'Xin chào!',
    },
    {
      id: 2,
      name: 'Phong',
      avatar: 'https://proship.vn/wp-content/uploads/2022/05/nghia-tu-shipper-la-gi.jpg',
      lastMessage: 'Chào bạn, bạn thế nào?',
    },
    {
        id: 3,
        name: 'Hung',
        avatar: 'https://static.kinhtedothi.vn/images/upload/2021/12/25/b02c6ccd-18a2-4ce9-b07b-8426a3ac3ec7.jpg',
        lastMessage: 'Bạn có cần giúp đỡ gì?',
      },
      {
        id: 4,
        name: 'Thuan',
        avatar: 'https://airportcargo.vn/wp-content/uploads/2018/06/dich-vu-ship-chuyen-nghiep.jpg',
        lastMessage: 'Mình đang tới nhé',
      },
      {
        id: 5,
        name: 'Tuan',
        avatar: 'https://static1.cafeland.vn/cafeauto/hinh-anh/2021/07/09/158/image-20210709134457-1.png',
        lastMessage: 'Bạn ra tới chưa?',
      },
      {
        id: 6,
        name: 'Chau',
        avatar: 'https://nhanvietluanvan.com/wp-content/uploads/2023/05/Hinh-meo-con-cute.jpg',
        lastMessage: 'ok chờ mình tí nhé!',
      },
    
  ];
  const MessageList = ({ navigation }) => {
    const [isChatSelected, setIsChatSelected] = useState(true);
    const [isNotificationSelected, setIsNotificationSelected] = useState(false);
   
 
    const nav = useNavigation();

    useFocusEffect(() => {
        setIsChatSelected(true);
        setIsNotificationSelected(false);
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tin nhắn</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              isChatSelected ? styles.selectedButton : {},
            ]}
            onPress={() => {
              setIsChatSelected(true);
              setIsNotificationSelected(false);
            }}
          >
            <Text style={[styles.buttonText, isChatSelected ? styles.selectedText : {}]}>Trò Chuyện</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isNotificationSelected ? styles.selectedButton : {},
            ]}
            onPress={() => {
              setIsChatSelected(false);
              setIsNotificationSelected(true);
              navigation.navigate('NotificationList');
            }}
          >
            <Text style={[styles.buttonText, isNotificationSelected ? styles.selectedText : {}]}>Thông Báo</Text>
          </TouchableOpacity>
        </View>
        {isChatSelected ? (
          <FlatList
            data={conversations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.chatItem}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                </View>
              </View>
            )}
          />
        ) : null}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginLeft: 16,
      marginTop: 50,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    button: {
      flex: 1,
      borderRadius: 20,
      padding: 10,
      marginRight: 10,
      marginTop: 20,
    },
    selectedButton: {
      backgroundColor: '#007ACC',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 18,
    },
    selectedText: {
      color: 'white',
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    textContainer: {
      marginLeft: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    lastMessage: {
      fontSize: 16,
    },
  });
  
  export default MessageList;