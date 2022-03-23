import React, { FC } from 'react';
import { Image } from 'react-native';

import { ProfileIcon } from '../../../global/styles/icons';
import { styles } from '../../../pages/Feed/styles';

type Props = {}

const PostAvatar: FC<Props> = () => {
  return  <Image source={ProfileIcon} style={styles.postAvatar} />
 
};

export default PostAvatar;
