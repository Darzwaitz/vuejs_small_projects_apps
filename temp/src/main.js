
const app = Vue.createApp({
    data() {
        return {
            title: "test title"
        };
    },
    template: `
    <h1>{{title}}</h1> 
    `
});
app.mount("#vue-app");