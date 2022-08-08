<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Sales Record</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                <button type="submit" class="btn btn-primary">Update</button>
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
    name:"update-sales",
    data(){
        return {
            sale:{
                category_id:"",
                buyer_name:"",
                quantity:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showSales()
    },
    methods:{
        async showSales(){
            await this.axios.get(`/api/sales-record/${this.$route.params.id}`).then(response=>{
                const { category_id, buyer_name, quantity } = response.data
                this.sale.category_id = category_id
                this.sale.buyer_name = buyer_name
                this.sale.quantity = quantity
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/sales-record/${this.$route.params.id}`,this.sale).then(response=>{
                this.$router.push({name:"salesList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>