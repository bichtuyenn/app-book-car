import {View, Text , StyleSheet, SafeAreaView, FlatList, ScrollView} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import React, { useState, useEffect } from 'react';

const Home = ({ route }) => {
    const [selectedtDate, setSelectedDate] = useState(new Date());
    const [expenses, setExpenses] = useState([]);
    const [income, setIncome] =useState([]);

    useEffect(() => {
      setSelectedDate(new Date());
    }, []);
  
    useEffect(() => {
      if (route.params && route.params.income) {
        setIncome(route.params.income);
      }
    }, [route.params]);

    useEffect(() => {
      if (route.params && route.params.expenses) {
        setExpenses(route.params.expenses);
      }
    }, [route.params]);


    const onDateChange = (date, type) => {
      if (type === 'DATE_NOW') {
        return;
      } else {
        setSelectedDate(date);
      }
    };
  
    const calculateTotalExpense = () => {
      let totalExpense = 0;
      expenses.forEach((expense) => {
        const number = parseFloat(expense.number || 0);
        totalExpense += number;
      });
      return totalExpense;
    };
    
    const calculateTotalIncome = () => {
      let totalIncome = 0;
      income.forEach((income) => {
        const numberIncome = parseFloat(income.numberIncome || 0);
        totalIncome += numberIncome;
      });
      return totalIncome;
    };
    return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>EXPENSE MANAGERMENT</Text>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={false}
            minDate={new Date(2018, 1, 1)}
            maxDate={new Date(2050, 6, 3)}
            weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
            months={[
              'January',
              'Febraury',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            previousTitle="Previous"
            nextTitle="Next"
            todayBackgroundColor="#e6ffe6"
            selectedDayColor="#66ff33"
            selectedDayTextColor="#000000"
            scaleFactor={375}
            textStyle={{
              color: '#000000',
            }}
            selected={selectedtDate}
            onDateChange={(date) => setSelectedDate(date)}
          />

          <View style={styles.horizontalLine} />
          <View style={styles.expenseMangager}>
              <Text>Thu nhập: {calculateTotalIncome()} đ </Text>
              <Text>Chi tiêu: {calculateTotalExpense()} đ</Text>
              <Text>Số dư: {calculateTotalIncome() - calculateTotalExpense()} đ</Text>
          </View>


          <View style={styles.horizontalLine} />
          <View style= {styles.expenseDetail}>
            <Text >Chi tiêu: </Text>
            <View style={styles.expenseDetail}>
            {expenses.length > 0 ? (
              <>
                  {expenses.map((expense, index) => (
                    <View key={index}>
                      <Text>- {parseFloat(expense.number || 0)} </Text>
                      <Text>  {expense.day} </Text>
                      <Text>  {expense.text} </Text>
                    </View>
                  ))}
              </>
            ) : (
              <Text>No expenses</Text>
            )}
          </View>

          <View style= {styles.expenseDetail}>
              <Text >Thu nhập: </Text>
              <View style={styles.expenseDetail}>
                {income.length > 0 ? (
                  <>
                    {income.map((income, index) => (
                      <View key={index}>
                          <Text>+ {parseFloat(income.numberIncome || 0)} </Text>
                          <Text>  {income.day} </Text>
                          <Text>  {income.note} </Text>
                      </View>
                      ))}
                  </>
                ) : (
                  <Text>No income</Text>
                )}
              </View>
          </View>

        </View>
        </View>

      </SafeAreaView>
      </ScrollView>
      
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 16,
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom:20,
    },
    horizontalLine:{
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    expenseMangager:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10, 
    },
    expenseDetail: {
      marginTop: 10,
      backgroundColor: '#B2C8BA',

    }
  });

export default Home;
