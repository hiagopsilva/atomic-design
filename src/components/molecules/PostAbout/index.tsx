import React, { FC } from 'react';
import { Image, ImageProps, Text, View } from 'react-native';
import { styles } from '../../../pages/Feed/styles';

type Props = {
  avatar: ImageProps;
  likes: string;
}

const PostAbout: FC<Props> = ({avatar, likes}) => {
  return (
    <View style={styles.postAbout}>
      <Image source={avatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{likes}</Text>
    </View>
  )
};

export default PostAbout;
