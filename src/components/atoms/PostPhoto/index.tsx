import React, { FC } from 'react';
import { Image, ImageProps, View } from 'react-native';
import { styles } from '../../../pages/Feed/styles';
// import { Wrapper } from './styles'; 


export function PostPhoto ({...rest}: ImageProps) {
  return <Image {...rest} style={styles.cover} />

};

