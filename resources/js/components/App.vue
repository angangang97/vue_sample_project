<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Sample Vue Laravel CRUD Shop APP </router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/category" class="nav-item nav-link">Inventory</router-link>
                        <router-link exact-active-class="active" to="/sales-record" class="nav-item nav-link">Sales Record</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>