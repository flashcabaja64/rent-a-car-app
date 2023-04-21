import React from 'react';
import { StyleSheet, Animated } from 'react-native';

type HeaderProps = {
  animHeaderValue: Animated.Value;
  children: JSX.Element | JSX.Element[];
}

const Header_Max_Height = 800;
const Header_Min_Height = 80;

export default function DynamicHeader({ animHeaderValue, children }: HeaderProps) {
  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
      style={[
        styles.header,
        {
          height: animateHeaderHeight
        }
      
      ]}
    >
      {children}       
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',      
    left: 0,
    right: 0,         
  }
});
