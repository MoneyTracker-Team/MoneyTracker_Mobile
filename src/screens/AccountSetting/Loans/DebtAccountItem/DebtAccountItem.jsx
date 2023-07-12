import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './debtAccountItem.styles.js';
import theme from '../../../../config/theme.js';

const DebtAccountItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBody}>
        <View style={styles.info}>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.debtor[0].image,
            }}
          />
          <View style={styles.nameCotainer}>
            <Text style={styles.itemName}>{item.debtor[0].name}</Text>
            <Text style={styles.isFriendText}>Bạn bè</Text>
          </View>
          <View style={[styles.moneyContainer, { backgroundColor: theme.colors.tertiary }]}>
            <Text style={styles.moneyAmount}>{item.totalDebt / 1000}k</Text>
          </View>
          <View style={[styles.moneyContainer, { backgroundColor: theme.colors.light_primary }]}>
            <Text style={styles.moneyAmount}>{item.totalLoan / 1000}k</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DebtAccountItem;
