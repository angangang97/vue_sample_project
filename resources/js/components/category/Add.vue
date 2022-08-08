<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Stock</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
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
    name:"add-category",
    data(){
        return {
            category:{
                name:"",
                model:"",
                sku:"",
                price:"",
                quantity:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/category',this.category).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>