<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Sales Record</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Category ID</label>
                                    <input type="number" class="form-control" v-model="sale.category_id">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Buyer Name</label>
                                    <input type="text" class="form-control" v-model="sale.buyer_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="number" class="form-control" v-model="sale.quantity">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-sales",
    data(){
        return {
            sale:{
                category_id:"",
                buyer_name:"",
                quantity:"",
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/sales-record',this.sale).then(response=>{
                this.$router.push({name:"salesList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>