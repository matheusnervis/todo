app.component('navbar', {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data(){
        return {}
    },
    template:
    /*html*/
    `<nav id="navbar" class="navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand mb-0 h1" href="#">
                <img src="/app/static/favicon.ico" alt="" width="32" height="32" class="d-inline-block align-text-top">
                {{title}}
            </a>
        </div>
    </nav>`
})