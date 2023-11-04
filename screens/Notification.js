import React ,{useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
const notifications= [
  {
    id: 1,
    avatar: 'https://vuakhuyenmai.vn/wp-content/uploads/Ma-Giam-Gia-Grab-moi-nhat.jpg',
    content: 'Cài đặt app grab và có cơ hội giảm lên đến 50% nhanh tay nào mọi người ơi',
  },
  {
    id: 2,
    avatar: 'https://inkythuatso.com/uploads/images/2021/12/logo-grab-food-inkythuatso-20-15-56-19.jpg',
    content: 'Chuyến đi của bạn đã hoàn thành hay đánh giá và phản hồi dịch vụ! ',
  },
  { 
    id: 3,
    avatar: 'https://o.rada.vn/data/image/2020/01/09/Them-dia-diem-grab-banner-1.jpg',
    content: 'Hiện tại tài xế đang trên đường di chuyển tới, dự kiến 5 phút nữa sẽ tới địa điểm đã định',
  },
  {
    id: 4,
    avatar: 'https://genk.mediacdn.vn/2018/12/31/photo-2-1546229142704771459113.jpg',
    content: 'Đơn hàng đã hủy thành công , bạn có muốn đặt hàng lại',
  },
];

const NotificationList = ({ navigation }) => {
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [isNotificationSelected, setIsNotificationSelected] = useState(true);

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
            navigation.goBack(); // Quay trở lại màn hình trò chuyện
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
          }}
        >
          <Text style={[styles.buttonText, isNotificationSelected ? styles.selectedText : {}]}>Thông Báo</Text>
        </TouchableOpacity>
      </View>
      
      {!isChatSelected ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.notificationContent}>{item.content}</Text>
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
    margin: 10,
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
  notificationItem: {
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
  notificationContent: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16,
  },
});

export default NotificationList;