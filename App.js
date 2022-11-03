import React, { useReducer, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { actionCreators, reducer, initialState } from './posts';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchPosts() {
      dispatch(actionCreators.loading());

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        dispatch(actionCreators.success(posts));
      } catch (error) {
        dispatch(actionCreators.failure());
      }
    fetchPosts();
    }
  }, []);

  const { loading, error, posts } = state;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" animating={true} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(post) => post.id}
      data={posts}
      renderItem={
        ( {item: {id, title, body}}, index ) => (
          <View key={id} style={styles.post}>
            <Text style={styles.title}>{index}. {title}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        )
        }
      />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 14
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
