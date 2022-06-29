app.component('task-form', {
    props: {
        formStatus: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            taskDescription: ''
        }
    },
    template:
    /*html*/
    `<form action="#" id="new-task"
        @submit.prevent="
        $emit('addTask', {
            description: taskDescription,
            done: false})">
        <div class="mb-3">
            <label for="taskDescription" class="form-label">New Task</label>
            <input type="text" class="form-control" id="taskDescription" v-model="taskDescription">
        </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
    </form>`,
    methods: {},
    watch: {
        formStatus(newValue, _oldValue) {
            if(newValue == 'Ok'){
                this.taskDescription = ''
                this.$emit('formInit')
            } else if (newValue == 'Error') {}
        }
    },
})