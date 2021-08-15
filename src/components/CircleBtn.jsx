import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape } from 'prop-types';

import { Feather } from '@expo/vector-icons';

export default function CircleBtn(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleBtn, style]} onPress={onPress}>
      <Feather name={name} size={32} color="#ffffff" />
    </TouchableOpacity>
  );
}

CircleBtn.propTypes = {
  style: shape(),
  name: String.isRequired,
  onPress: func.isRequired,
};

CircleBtn.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBtn: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBtnLbl: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
