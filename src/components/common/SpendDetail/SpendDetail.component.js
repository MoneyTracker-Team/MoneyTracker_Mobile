import React from 'react';
import { View, Text } from 'react-native';
import styles from './SpendDetail.style';

const SpendDetail = (props) => {
  const {
    value1,
    desc1,
    backgroundColor1,
    textColor1,
    value2,
    desc2,
    backgroundColor2,
    textColor2,
    value3,
    desc3,
    backgroundColor3,
    textColor3,
    value4,
    desc4,
    backgroundColor4,
    textColor4,
  } = props;
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: backgroundColor1 }]}>
        <Text style={[styles.value, { color: textColor1 }]}>{value1}</Text>
        <Text style={[styles.desc, { color: textColor1 }]}>{desc1}</Text>
      </View>
      <View style={[styles.container, { backgroundColor: backgroundColor2 }]}>
        <Text style={[styles.value, { color: textColor2 }]}>{value2}</Text>
        <Text style={[styles.desc, { color: textColor2 }]}>{desc2}</Text>
      </View>
      <View style={[styles.container, { backgroundColor: backgroundColor3 }]}>
        <Text style={[styles.value, { color: textColor3 }]}>{value3}</Text>
        <Text style={[styles.desc, { color: textColor3 }]}>{desc3}</Text>
      </View>
      <View style={[styles.container, { backgroundColor: backgroundColor4 }]}>
        <Text style={[styles.value, { color: textColor4 }]}>{value4}</Text>
        <Text style={[styles.desc, { color: textColor4 }]}>{desc4}</Text>
      </View>
    </View>
  );
};

export default SpendDetail;
