import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleBtn from '../components/CircleBtn';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年8月1日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoTxt}>ここに本文が入る。。。</Text>
      </ScrollView>
      <CircleBtn style={{ top: 160, bottom: 'auto' }} name="edit-2">+</CircleBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 27,
    paddingHorizontal: 27,
  },
  memoTxt: {
    fontSize: 16,
    lineHeight: 24,
  },
});
