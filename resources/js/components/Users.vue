<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Simple Vue.js Pagination Example with Laravel - <a href="https://techvblogs.com/?ref=scode" target="_blank">TechvBlogs</a></h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="users && users.data.length > 0">
                                    <tr v-for="(user,index) in users.data" :key="index">
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>
                                        <button class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#viewRecord" @click="get(record.id)"><i class="fa fa-eye"></i></button>

                                        <button class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#editRecord" @click="get(record.id)"><i class="fa fa-edit"></i></button>

                                        <button class="btn btn-outline-danger btn-sm" @click="remove(record.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td align="center" colspan="3">No record found.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination align="center" :data="users" @pagination-change-page="list"></pagination>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal">
            <create @recordAdded="refreshRecord"></create>
            <edit :editRec="editRec" @recordUpdated="refreshRecord"></edit>
            <show :viewRec="editRec"></show>
        </div>
    </div>
</template>

<script>
    import pagination from 'laravel-vue-pagination'
    import Create from './Create'
    import Edit from './Edit'
    import Show from './Show'
    export default {
        name:"users",
        components:{
            pagination, Create, Edit, Show
        },
        data(){
            return {
                users:{
                    type:Object,
                    default:null
                }
            }
        },
        mounted(){
            this.list()
        },
        methods:{
            async list(page=1){
                await axios.get(`/api/users?page=${page}`).then(({data})=>{
                    this.users = data
                }).catch(({ response })=>{
                    console.error(response)
                })
            }
        }
    }
</script>

<style scoped>
    .pagination{
        margin-bottom: 0;
    }
</style>