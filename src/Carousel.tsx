import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native'
import { Image } from '@rneui/base'

const Carousel = () => {
    const Screenwidth = Dimensions.get("window").width - 41
    

    const [activeIndex, setActiveIndex] = useState(0)
    const flatlistRef = useRef<any>(null)

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(activeIndex === carouselData.length-1) {
                flatlistRef.current.scrollToIndex({
                    index:0,
                    animation:true
                })
            }else {
                flatlistRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation:true
                })
            }
        },2000)

        return () => clearInterval(interval)
    })    

    const getItemLayout = (data:any,index:number) => ({
        length:Screenwidth,
        offset:Screenwidth * index,
        index: index
    })

    const carouselData = [
        {
            id:'01',
            image: require('./SliderImages/hong.jpg')
        },
        {
            id:'02',
            image: require('./SliderImages/hong2.jpg')
        },
        {
            id:'03',
            image: require('./SliderImages/hong3.jpg')
        },
        {
            id:'04',
            image: require('./SliderImages/hong4.jpg')
        },
        {
            id:'05',
            image: require('./SliderImages/hong5.jpg')
        }
    ]

    const renderItem = ({item,index}:any) => {
        return(
            <View>
                <Image key={index} source={item.image} style={{height:200, width:Screenwidth}}/>
            </View>
        )
    }

    const renderDot = ():any => {
        return (
            carouselData.map((dot,index)=> {
            if(activeIndex === index) {
                return(
                    <View
                    key={index}
                    style={{
                    backgroundColor:'green',
                    height:10,
                    width:10,
                    borderRadius:5,
                    marginHorizontal:6
                }}
                />
                )
            }else {
                return(
                <View
                    key={index}
                    style={{
                    backgroundColor:'red',
                    height:10,
                    width:10,
                    borderRadius:5,
                    marginHorizontal:6
                }}
                />
            )}
            })
        )
    }

    const handleScroll = (event:any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / Screenwidth);
        setActiveIndex(index)
    }


  return (
    <View>
      <FlatList 
        data={carouselData}
        ref ={flatlistRef}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={(item)=>item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View 
        style={{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
      }}>
        {renderDot()}
      </View>
    </View>
  )
}

export default Carousel