<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>  
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "Myanmar Links"
                }
            ]
        }
    }
}
</script>

<style>

</style>
