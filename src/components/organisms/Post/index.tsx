import React, { FC } from 'react';
import { Image, ImageProps, Text, View } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import { PostPhoto } from '../../atoms/PostPhoto';
import PostHeader from '../../molecules/PostHeader';
import PostOptions from '../../molecules/PostOptions';

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps
}

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile
}

type Props = {
  data: PostProps;
}

const Post: FC<Props> = ({data}) => {
  return <View style={styles.post}>
  <PostHeader username={data.username} location={data.location} />

  <PostPhoto source={data.cover}/>

  <View style={styles.postFooter}>
    
    <PostOptions />

    <View style={styles.postAbout}>
      <Image source={data.lastLiked.avatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{data.likes}</Text>
    </View>
    <Text style={styles.description}>{data.description}</Text>
  </View>
</View>
};

export default Post;
