
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const SalesList = () => import('./components/sales-record/List.vue' /* webpackChunkName: "resource/js/components/sales-record/list" */)
const SalesCreate = () => import('./components/sales-record/Add.vue' /* webpackChunkName: "resource/js/components/sales-record/add" */)
const SalesEdit = () => import('./components/sales-record/Edit.vue' /* webpackChunkName: "resource/js/components/sales-record/edit" */)

export const routes = [
	{
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
	{
        name: 'salesList',
        path: '/sales-record',
        component: SalesList
    },
    {
        name: 'salesEdit',
        path: '/sales-record/:id/edit',
        component: SalesEdit
    },
    {
        name: 'salesAdd',
        path: '/sales-record/add',
        component: SalesCreate
    }
]