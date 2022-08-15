<template>
    <div class="container flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl mt-8">
        
        <form @submit.prevent="store">
          <div class="card-body m-1">
          <h2 class="card-title">Buat Data Baru</h2>
          <br/>
          <p>TITLE :</p>
          <input v-model="post.title" type="text" placeholder="Title" class="input input-bordered w-full max-w-xs" />
          <!-- validation -->
          <div v-if="validation.title" class="alert alert-error shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {{validation.title[0]}}
          </div>
          
          <p>CONTENT :</p>
          <textarea v-model="post.content" type="text" placeholder="Content" class="input input-bordered w-full max-w-xs p-3 h-36" />
          <!-- validation -->
          <div v-if="validation.content" class="alert alert-warning shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {{validation.content[0]}}
          </div>

          <div class="card-actions ">
            <button type="submit" class="btn btn-success btn-sm mt-5">SIMPAN</button>
            <router-link :to="{name: 'post.index'}" class="btn btn-warning btn-sm mt-5">BATAL</router-link>
          </div>
        </div>
        </form>

      </div>
    </div>
</template>

<script>
import {reactive, ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
     //state posts
        const post = reactive({
            title: '',
            content: ''
        })

         //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {
           let title   = post.title
            let content = post.content

            axios.post('http://localhost:8000/api/post', {
                title: title,
                content: content
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'post.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })
        }
        //return
        return {
            post,
            validation,
            router,
            store
        }
  },
}
</script>