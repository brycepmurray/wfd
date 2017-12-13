<template>
    <div class="container">
        <div v-for="recipe in cookBook">
            <p>Recipe Here: {{recipe.label}}</p>

        </div>
    </div>
</template>


<script>
export default {
    name: 'cookBook',
    data(){
        return {}
    },
    mounted() {
        this.$store.dispatch('getMyRecipes', this.$route.params.id)

    },
    computed:{
        cookBook(){
            return this.$store.cookBook
        }
    },
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>