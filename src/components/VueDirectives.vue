<template>
    <div class="row justify-content-md-center">
        <div class="col-6">
            <br>
            <br>
            <h1>Vue Directives Test Area</h1>
            <input class="form-control" type="text" v-model="name">
            <h1>{{ name }}</h1>
            <input type="checkbox" v-model="checked"><span>     Am I checked? {{ checked ? 'Yes' : 'No' }}</span>
            <br>
            <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" v-bind:key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.name }}</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <h1 v-bind:class="{ 'blue': blue, 'strike-through': strikeThrough }">Vue Bindings</h1>
            <input type="checkbox" v-model="blue"><span>     Blue</span>
            <input type="checkbox" v-model="strikeThrough"><span>     Strike Through</span>
            <br>
            <br>
            <br>
            <h1 v-bind:style="[headerStyle, anotherStyle]">Vue Style Bindings</h1>
            <br>
            <br>
            <label for="id">ID: </label>
            <input name="id" type="text" v-model="blankCustomer.id" />
            <label for="name">Name: </label>
            <input name="name" type="text" v-model="blankCustomer.name" />
            <button v-on:click="addCustomer" class="btn btn-primary">Add Customer</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "hi",
            blue: false,
            strikeThrough: false,
            checked: false,
            headerStyle: {
                color: 'red',
                fontSize: '60px'
            },
            blankCustomer: {
                id: "",
                name: ""
            },
            anotherStyle: {
                textAlign: 'center',
                padding: '10px',
            },
            customers: [
                { id: 1, name: "Hla Hla" },
                { id: 2, name: "Mya Mya" },
                { id: 3, name: "Ba Ba" },
                { id: 4, name: "Da Da" },
                { id: 5, name: "Ya Ya" },
            ]
        };
    },
    methods: {
    addCustomer() {
        this.customers = this.customers.concat(this.blankCustomer);
        this.blankCustomer = {id: "", name: ""};
        }
    },
}

</script>

<style>
.blue {
    color: blue;
}
.strike-through {
    text-decoration: line-through;
}
</style>
