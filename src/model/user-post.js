export const addPost = (textPost) => {
  const result = firebase.firestore().collection('post').add({
    post: textPost,
    name: 'Juanita',
  });

  return result;
};
