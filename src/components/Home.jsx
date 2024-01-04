import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'


const Home = () => {
  const [logo, setlogo] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [noteArray, setNoteArray] = useState([{ title: 'this my note', des: 'this my note this my note' }])
  const [mewArray, setNEwArray] = useState(noteArray)

  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')

  // const changeLogo =()=>{
  //   setlogo(!logo)
  // }

  const formFunction = () => {
    setShowForm(true)
  }

  const addNoteFunction = () => {
    setNoteArray([{ title: title, des: des }, ...noteArray])
    setNEwArray([{ title: title, des: des }, ...mewArray])
    setShowForm(false)

  }

  const searchFunction = (value) => {
    if(value === ''){
      setNEwArray(noteArray)
    }else{
 let data = mewArray.filter((item)=>{
   return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
 })
 setNEwArray(data)
 
    }
    
     setSearchValue(value)
    }

  const ascendingFunction = () => {

    let data = mewArray?.sort((a, b) => a.title > b.title ? 1 : -1)
    console.log("ascendingdata===>", data)
    setNoteArray(data)
    setlogo(!logo)
  }

  const descendingFunction = () => {

    let data = mewArray?.sort((a, b) => b.title < a.title ? -1 : 1)
    console.log("descendingdata===>", data)
    setNoteArray(data)
    setlogo(!logo)
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.NavContainer}>
        <View style={styles.ImageContainer}>
          <Image source={require('../assets/image/dp.jpg')} style={styles.Image} />
        </View>
        <Text style={styles.NavText}>Notes App</Text>
        <View>
          {logo ? <TouchableOpacity style={styles.ImageContainer} onPress={descendingFunction} >
            <Image source={require('../assets/image/up.jpg')} style={styles.downup} />
          </TouchableOpacity> : <TouchableOpacity style={styles.ImageContainer} onPress={ascendingFunction}>
            <Image source={require('../assets/image/down.jpg')} style={styles.downup} />
          </TouchableOpacity>}

        </View>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => { searchFunction(value) }}
          value={searchValue}
          placeholder="Search note..."

        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {mewArray?.map((item) => {
          return <Card item={item}/>
        })}
      </ScrollView>


      <TouchableOpacity style={styles.AddContainer} onPress={formFunction}>
        <Text style={styles.AddText}>+</Text>

      </TouchableOpacity>

      {showForm && <View style={styles.FormContainer}>
        <TextInput
          style={styles.inputNote}
          onChangeText={(value) => { setTitle(value) }}
          value={title}
          placeholder="Title..."

        />
        <TextInput
          style={styles.inputNote}
          onChangeText={(value) => { setDes(value) }}
          value={des}
          placeholder="Note description..."

        />
        <TouchableOpacity style={styles.AddNote} onPress={addNoteFunction}>
          <Text style={styles.AddTextNote}>ADD NOTE</Text>
        </TouchableOpacity>
      </View>}

    </View>
  )
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  NavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderBottomWidth: 4,
    borderColor: '#dcdcdc',
    marginTop: 10,
    paddingBottom: 10
  },
  ImageContainer: {
    borderRadius: 20
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  NavText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#000000',
  },
  downup: {
    height: 25,
    width: 25,
  },
  InputContainer: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
  input: {
    fontSize: 26,
    fontWeight: '500',
    borderRadius: 30,
    borderWidth: 3,
    paddingHorizontal: 25,
    borderColor: '#dcdcdc',
  },


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
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  circuit: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400'
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
  AddContainer: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  AddText: {
    fontSize: 50,

    borderRadius: 10,

  },
  FormContainer: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 300,
    right: 20,
    height: 250,
    width: 350,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputNote: {
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 30,
    borderWidth: 3,
    paddingHorizontal: 25,
    borderColor: '#dcdcdc',
    marginTop: 20,
    width: 300,
  },
  AddNote: {
    marginTop: 20,
    backgroundColor: '#daa520',
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})


export default Home