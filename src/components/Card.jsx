import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({item}) => {
  return (
    <View style={styles.NoteMainContainer}>
            <View style={styles.NoteContainer}>
              <View style={styles.Date}>
                <Text style={styles.circuit}>circuit</Text>
                <Text style={styles.DateText}>9 Nov</Text>
              </View>
              <View style={styles.TitleDes}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.des}>{item.des}</Text>
              </View>
            </View>
          </View>
  )
}

export default Card

const styles = StyleSheet.create({
  NoteMainContainer: {
    padding: 8,

  },
  NoteContainer: {
    backgroundColor: '#daa520',
    borderRadius: 10,
    height: 200,
    width: 180,
    padding: 10,
  },
  DateText: {
    color: '#ffffff',
    marginLeft: 130,
    fontSize: 11,
    fontWeight: '200',
  },
  TitleDes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  des: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  circuit: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400'
  },



})