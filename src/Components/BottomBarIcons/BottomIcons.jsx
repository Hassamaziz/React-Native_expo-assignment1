import React from 'react';
import {Image} from 'react-native';

const BottomIcons = ({imageSource, focused}) => (
  <Image
    source={imageSource}
    style={{
      width: 20,
      height: 20,
      tintColor: focused ? '#007AFF' : '#A9A9A9',
    }}
  />
);

export default BottomIcons;