import Vuex from 'vuex';
import axios from 'axios';

const createStore = () =>{
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;

      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-dbf09-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .then(res => {
          const postArray = []
          for (const key in res.data) {
            postArray.push({...res.data[key], id: key})
          }
          vuexContext.commit('setPosts', postArray)
        })
        .catch(err => context.error(err));
      },
      addPost(vuexContext, post) {
        const createPost = {
          ...post, updatedDate: new Date() 
        }
        return axios
        .post(
          "https://nuxt-blog-dbf09-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
          createPost
        )
        .then(result => {
          vuexContext.commit('addPost', {...createPost, id: result.data.name})
        })
        .catch(error => console.log(error));
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          `https://nuxt-blog-dbf09-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${editedPost.id}.json`,
          editedPost
        )
        .then(result => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(error => console.log(error));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore