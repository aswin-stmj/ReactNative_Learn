import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'


export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
    <Button
      title="Click"
      onPress={() => setOpen(true)}
      color="#F2CB00" // You can customize the color
    />
    <DatePicker
      modal
      open={open}
      date={date}
      mode='date'
      onConfirm={(selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
    <Text style={styles.dateText}>{date.toDateString()}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    dateText: {
      marginTop: 20,
      fontSize: 38,
      fontWeight:'500',
      color: '#333',
    },
  });