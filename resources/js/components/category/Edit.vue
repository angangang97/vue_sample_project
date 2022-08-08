<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Stock</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="category.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Model</label>
                                    <input type="text" class="form-control" v-model="category.model">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>SKU</label>
                                    <input type="text" class="form-control" v-model="category.sku">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" v-model="category.price">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="number" class="form-control" v-model="category.quantity">
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
    name:"update-category",
    data(){
        return {
            category:{
                name:"",
                model:"",
                sku:"",
                price:"",
                quantity:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showCategory()
    },
    methods:{
        async showCategory(){
            await this.axios.get(`/api/category/${this.$route.params.id}`).then(response=>{
                const { name , model , sku , price , quantity } = response.data
                this.category.name = name
                this.category.model = model
                this.category.sku = sku
                this.category.price = price
                this.category.quantity = quantity
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/category/${this.$route.params.id}`,this.category).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>