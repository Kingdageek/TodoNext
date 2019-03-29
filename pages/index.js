import TodoForm from './TodoForm';

class Index extends React.Component
{
    constructor () {
        super()
        this.state = {
            currentTodo: '',
            todos: []
        }
    }

    addTodo (event) {

    }

    render () {
        return (
            <div>
                <TodoForm />
                <p>Hello Next.js</p>
            </div>
        )
    }
}

export default Index