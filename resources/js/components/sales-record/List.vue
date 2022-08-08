<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"salesAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Sales Record</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category ID</th>
                                    <th>Buyer Name</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="sales.length > 0">
                                <tr v-for="(sale,key) in sales" :key="key">
                                    <td>{{ sale.id }}</td>
                                    <td>{{ sale.category_id }}</td>
                                    <td>{{ sale.buyer_name }}</td>
                                    <td>{{ sale.quantity }}</td>
                                    <td>
                                        <router-link :to='{name:"salesEdit",params:{id:sale.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteSale(sale.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Sales records Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"sales",
    data(){
        return {
            sales:[]
        }
    },
    mounted(){
        this.getSales()
    },
    methods:{
        async getSales(){
            await this.axios.get('/api/sales-record').then(response=>{
                this.sales = response.data
            }).catch(error=>{
                console.log(error)
                this.sales = []
            })
        },
        deleteSale(id){
            if(confirm("Are you sure to delete this sales record ?")){
                this.axios.delete(`/api/sales-record/${id}`).then(response=>{
                    this.getSales()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>