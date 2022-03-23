import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { ProfileIcon } from '../../../global/styles/icons';
import { styles } from '../../../pages/Feed/styles';
import PostAvatar from '../../atoms/PostAvatar';
import PostUsername from '../../atoms/PostUsername';
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
        <PostUsername value={username} />
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  )
};

export default PostHeader;
