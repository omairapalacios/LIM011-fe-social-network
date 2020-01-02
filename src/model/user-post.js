export const addPost = (textPost) => {
  const result = firebase.firestore().collection('posts').add({
    post: textPost,
    name: 'Juanita',
  });

  return result;
};
