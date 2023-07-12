import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './debtItem.styles.js';
import theme from '../../../../config/theme.js';
import moment from 'moment';

const DebtItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBody}>
        <View style={styles.info}>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.debtor.image,
            }}
          />
          <View style={styles.nameCotainer}>
            <Text style={styles.itemName}>{item.debtor.name}</Text>
            <Text style={styles.isFriendText}>Bạn bè</Text>
          </View>
          <View
            style={[
              styles.moneyContainer,
              { backgroundColor: item.status === 'debt' ? theme.colors.tertiary : theme.colors.light_primary },
            ]}
          >
            <Text style={styles.moneyAmount}>{formatNumber(item.moneySpend ? item.moneySpend / 1000 : 0)}K</Text>
          </View>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>{item.note}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.isFriendText}>{item.location}</Text>
          <Text style={styles.isFriendText}>{moment(item.dateTime).format('YYYY-MM-DD')}</Text>
        </View>
      </View>
    </View>
  );
};

export default DebtItem;
