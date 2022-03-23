import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { ProfileIcon } from '../../../global/styles/icons';
import { styles } from '../../../pages/Feed/styles';
import PostAvatar from '../../atoms/PostAvatar';
import { PostProps } from '../../organisms/Post';

type Props = {
  username: string;
  location: string;
}

const PostHeader: FC<Props> = ({username, location}) => {
  return (
    <View style={styles.postHeader}>
      <PostAvatar />
      <View>
        <Text style={styles.postUsername}>{username}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  )
};

export default PostHeader;
