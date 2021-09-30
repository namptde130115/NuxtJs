<template>
  <form @submit.prevent="onSave">
    <label>Author Name</label>
    <input type="text" v-model="editPost.author" />
    <label>Title</label>
    <input type="text" v-model="editPost.title" />
    <label>Thumbnail link</label>
    <input type="text" v-model="editPost.thumbnail" />
    <label>Content</label>
    <textarea v-model="editPost.content" />
    <label>Preview Text</label>
    <textarea v-model="editPost.previewText" />
    <div>
      <button type="submit">Save</button>
      <button class="cancel" @click="$router.push('/admin')">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AdminPostForm",
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit("submit", this.editPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
form {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  width: 100%;
  text-align: center;
  padding: 0.5em 0;
}

input {
  display: block;
  width: 100%;
}

textarea {
  display: block;
  width: 100%;
}

button {
  margin: 1em 0;
  font: inherit;
  background-color: black;
  color: white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
}

button:hover,
button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
