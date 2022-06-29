app.component('task-list', {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    data(){
        return {}
    },
    template:
    /*html*/
    `<ul v-if="tasks.length > 0" class="list-group">
        <li v-for="task in tasks" :key="task.id" class="list-group-item list-group-item-action">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <input class="form-check-input me-1" type="checkbox" v-model="task.done">
                        <label>{{task.description}}</label>
                    </div>
                    <div class="col-3 task-btn-div">
                        <button class="btn btn-danger" @click="$emit('delete-task', task.id)">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div v-else id="no-task-msg" class="list-group-item">
        You don't have any tasks
    </div>`,
    methods: {}
})