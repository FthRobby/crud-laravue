<template>
    <div class="container flex justify-center items-center">
      <div class="card rounded-none">
          
        <div class="overflow-x-auto">
          <!-- <router-link :to="{name: 'post.create'}" class="rounded-t-sm btn btn-sm btn-success">TAMBAH POST</router-link> -->
          <table class="table table-zebra w-full mt-8">
            <!-- head -->
            <thead>
              <tr>
                <th>TITLE</th>
                <th>CONTENT</th>
                <th class="text-center">OPTIONS</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(post, index) in posts" :key="index">
                <td>{{post.title}}</td>
                <td>{{post.content}}</td>
                <td class="text-center">
                  <router-link :to="{name: 'post.edit', params:{id: post.id}}" class=" btn-sm btn btn-warning">EDIT</router-link>
                  <button @click.prevent="postDelete(post.id)" class="btn btn-sm btn-error ml-1">DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <router-link :to="{name: 'post.create'}" class="rounded-md btn-sm btn static flex-initial w-36 h-10 btn-success mb-5 mt-4">Buat Data Baru</router-link>
        
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';  // vue-router

export default {
 
    setup() {

        //reactive state
        let posts = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/post')
            .then(response => {
              
              //assign state posts with response data
              posts.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })
        })

        //method delete
        function postDelete(id) {
          axios.delete(`http://localhost:8000/api/post/${id}`)
          .then(() => {

            //splice posts
            posts.value.splice(posts.value.indexOf(id), 1);

          }).catch(error  => {
            console.log(error.response.data)
          })
        }

        //return
        return {
            posts,
            postDelete
        }

    }
}
</script>