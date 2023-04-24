import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import useFetch from '../services/useFetch';
import { ActivityIndicator, Appbar, Button } from 'react-native-paper';
import { CarDetailsProps } from '../types/navigation';
import { RouteProp } from '@react-navigation/native'
import { colors, sizes } from '../styles/theme';
import { Cars, CarsState } from '../types/reduxTypes';
import { useSelector } from 'react-redux';
import ErrorContainer from '../components/ErrorContainer';

type CarDetailProp = {
  navigation: CarDetailsProps,
  route: RouteProp<{params: { carID: number }}, 'params'>
  car: Cars[]
}

type FeaturesObject = {
  Value: string | number,
  ValueId: string | number,
  Variable: string,
  VariableId: number
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    flex: 1
  },
  carImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  bookButton: {
    width: 170,
    borderRadius: 10,
  },
  priceText: {
    fontSize: sizes.h3,
    fontWeight: "500"
  },
  boldText: { 
    fontWeight: "600"
  },
  footerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footer: {
    backgroundColor: "white",
    padding: 25,
    borderTopColor: colors.semiGray,
    borderTopWidth: 0.3
  },
  detailsContainer: {
    padding: 10,
    paddingTop: 30,
    height: sizes.height
  },
  detailsHeaderText: {
    textTransform: 'uppercase',
    fontSize: sizes.radius,
    fontWeight: "500",
    color: colors.gray
  },
  detailsText: {
    fontSize: sizes.radius,
    paddingBottom: 10
  },
  itemSeperator: { 
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#C8C8C8' 
  },
  itemSeperatorPadding: {
    paddingBottom: 15,
    paddingTop: 5
  }
});

const CarDetails = ({ navigation }: CarDetailProp) => {
  const currentCar = useSelector((state: CarsState) => state.carsData.car)
  const [features, setFeatures] = useState<any>()
  const { data, loading, error } = useFetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${currentCar[0].car_vin}?format=json&modelyear=${currentCar[0].car_model_year}`, 'Results');

  useEffect(() => {
    let conditions = [39,14,9,24,5,38,109,25,21,107,65,5];
    let featureData:any = [];
    if (!data) return;

    data[0].forEach((item: FeaturesObject) => {
      if(conditions.includes(item.VariableId) && (item.Value !== (null && 'Not Applicable'))) {
        featureData.push(item)
      }
    })
    setFeatures(featureData);
  }, [loading])

  const Details = ({ features }:any) => {
    return (
      <>
        <Text style={styles.detailsHeaderText}>Other Features</Text>
        <View style={styles.itemSeperatorPadding}>
          <View style={styles.itemSeperator} />
        </View>
        <View>
          {features && features.map((item:FeaturesObject) => (
            <Text key={item.VariableId} style={styles.detailsText}>
              {item.Variable}: <Text style={styles.boldText}>{item.Value}</Text>
            </Text>
          ))}
        </View>
      </>
    )
  } 

  return (
    <>
      {(loading && data) || (error) ? (
          <>
            {error && <ErrorContainer />}
            <ActivityIndicator style={{ flex: 1 }} animating={loading} size="large" />
          </>
        ) : (
          <React.Fragment>
            <Appbar.Header statusBarHeight={25} mode='center-aligned'>
              <Appbar.BackAction onPress={() => navigation.goBack()}/>
              <Appbar.Content title={`${currentCar[0].car} ${currentCar[0].car_model}`} />
            </Appbar.Header>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.content}>
                  <Image 
                    style={styles.carImage}
                    source={{uri: 'https://picsum.photos/300/250' }}
                  />
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsHeaderText}>Car Details</Text>
                  <View style={styles.itemSeperatorPadding}>
                    <View style={styles.itemSeperator} />
                  </View>
                  <View style={styles.itemSeperatorPadding}>
                    <Text style={styles.detailsText}>
                      Color: <Text style={styles.boldText}>{currentCar[0].car_color}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                      VIN: <Text style={styles.boldText}>{currentCar[0].car_vin}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                      Model: <Text style={styles.boldText}>{currentCar[0].car_model}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                      Year: <Text style={styles.boldText}>{currentCar[0].car_model_year}</Text>
                    </Text>
                  </View>
                  <Details features={features} />
                </View>
                
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <View style={styles.footerContainer}>
                <Text style={styles.priceText}>{currentCar[0].price} / Day</Text>  
                <Button 
                  mode='contained' 
                  labelStyle={{fontSize: 18}}
                  style={styles.bookButton}
                  buttonColor={colors.primary}
                  disabled={currentCar[0].availability ? false : true}
                  onPress={() => console.log('Car is now booked!')}
                >
                  {currentCar[0].availability ? 'Book Now!' :  'Unavailable'}
                </Button>
              </View>
            </View>
          </React.Fragment>

        )
      }
    </>
  )
}

export default CarDetails;