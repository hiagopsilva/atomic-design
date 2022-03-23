import React, { FC } from 'react';
import { Image, ImageProps, Text, View } from 'react-native';
import { styles } from '../../../pages/Feed/styles';
import PostLiked from '../../atoms/PostLiked';
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar';

type Props = {
  avatar: ImageProps;
  likes: string;
}

const PostAbout: FC<Props> = ({avatar, likes}) => {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLiked value={likes} />
    </View>
  )
};

export default PostAbout;
