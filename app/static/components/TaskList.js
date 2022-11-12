app.component('task-list', {
    props: {
        tasks: {
            type: Array,
            required: true
        },
        tasksLoading: {
            type: Boolean,
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
                        <input class="form-check-input me-1" type="checkbox" v-model="task.done" @change="updateTask($event, task.id)">
                        <label>{{task.description}}</label>
                    </div>
                    <div class="col-3 task-btn-div">
                        <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div v-else id="no-task-msg" class="list-group-item">
        <label v-if="tasksLoading">...</label>
        <label v-else>You don't have any tasks</label>
    </div>`,
    methods: {
        deleteTask(id) {
            fetch('/api/task/' + id, {method: 'DELETE'})
            .then(res => {
                if (res.status === 200) {
                    this.$emit('delete-task', id);
                }
            })
        },
        updateTask(e, id) {
            fetch('/api/task/' + id, {
                method: 'PUT',
                body: JSON.stringify({
                    done: e.target.checked
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(task => {
                        this.$emit('update-task', id, task);
                    })
                }
            })
        }
    }
})