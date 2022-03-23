import React, { FC } from 'react';
import { Text, TextProps, View } from 'react-native';
import { styles } from '../../../pages/Feed/styles';
// import { Wrapper } from './styles'; 

type Props = TextProps & {
  value: string
}

const PostLocation: FC<Props> = ({value}) => {
  return <Text style={styles.postLocation}>{value}</Text>
 
};

export default PostLocation
;
