import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { trackMarkStyles, sliderStyles as styles } from '../styles/filterModal.styles';
import { Slider } from '@miblanchard/react-native-slider';

const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
}) => {
  const {caption, sliderValue, trackMarks} = props;
  const [value, setValue] = useState(sliderValue);
  let renderTrackMarkComponent:  (index: number) => JSX.Element;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const style = currentMarkValue > Math.max(value[0])
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }
      return child;
      },
    );
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderTitleContainer}>
        <Text style={styles.sliderText}>{caption}</Text>
        <Text style={styles.sliderText}>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};

export default SliderContainer;