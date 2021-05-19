const app = new Vue({
    el: "#root",
    data: {
        task: '',
        logo: 'https://www.boolean.careers/images/misc/logo.png',
        tasks: [
            'Fare Benzina',
            'Fare la spesa',
            'Comprare un regalo'
        ],
        doneTasks: [
            'Fare Benzina',
        ],
        removedTasks: [
            'Fare Benzina',
        ]
    },
    methods: {
        newTask() {
            this.tasks.push(this.task);
            this.task= ''
        },
        removeTask(index) {
            this.removedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        doneTask(index) {
            console.log(this.tasks[index]);
            this.doneTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1)
        },
        restoreDoneTasks(index) {
            this.tasks.push(this.doneTasks[index]);
            this.doneTasks.splice(index, 1);
        },
        restoreRemovedTasks(index) {
            this.tasks.push(this.removedTasks[index]);
            this.removedTasks.splice(index, 1);
        },
        emptyBin() {
            let empty = prompt('This will delete all tasks forever! confirm [Y/N]');
            console.log(empty);
            if (empty.toLowerCase() === 'y') {
                this.removedTasks = [];
            }
        }
    },
    mounted() {
        document.getElementById('new_task_text').addEventListener('keyup', (e) => {
            console.log(e.key);
             if (e.key === 'Enter') {
                if (this.task.length > 3) {
                    this.newTask();
                } else {
                    alert('Attenzione, inserire almento 4 caratteri per poter aggiungere una nuova task')
                }
            }
        })
    }
})