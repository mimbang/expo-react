import * as React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

export default function App() {
  const windowHeight = Math.round(useWindowDimensions().height);

  // ✅ Nom correct ici
  const heightAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // ✅ Nom correct ici aussi
    Animated.timing(heightAnimation, {
      toValue: windowHeight,
      duration: 10000,
      useNativeDriver: false, // height ne peut pas être animé avec le driver natif
    }).start();
  }, [heightAnimation, windowHeight]);

  return (
    <Animated.View
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: heightAnimation,
      }}
    />
  );
}
