import React, { FC } from 'react';
import { View } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import PostAvatar from '../../atoms/PostAvatar';
import PostLocation from '../../atoms/PostLocation';
import PostUsername from '../../atoms/PostUsername';

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
        <PostLocation value={location} />
      </View>
    </View>
  )
};

export default PostHeader;
