import TodoForm from '../components/TodoForm';
import TodoTasks from '../components/TodoTasks';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component
{
    constructor () {
        super()
        this.state = {
            currentTodo: '',
            todos: []
        }
    }

    // React lifecycle method that'd be called after component is mounted
    componentDidMount () {
        this.setState({
            todos: [...this.props.todos]
        })
    }

    changeTodo = (event) => {
        this.setState({currentTodo: event.target.value})
    }

    // Adds this.state.currentTodo if it's not empty to this.state.todos
    addTodo = (event) => {
        // To prevent default reload on Submit
        event.preventDefault()
        const currentTodo = this.state.currentTodo.trim()
        if (currentTodo !== "") {
            this.setState({
                currentTodo: '',
                todos: [...this.state.todos, currentTodo] // ES6 Spread Operator
            })
        }
    }

    removeTodo = (position) => {
        const todos = [...this.state.todos]
        todos.splice(position, 1)
        this.setState({
            todos: todos
        })
    }

    render () {
        return (
            <div>
                <TodoForm 
                    changeTodo={this.changeTodo}
                    addTodo={this.addTodo}
                    currentTodo={this.state.currentTodo}
                />
                <TodoTasks 
                    todos={this.state.todos} 
                    removeTodo={this.removeTodo}
                />
            </div>
        )
    }
}

Index.getInitialProps = async function () {
    try {
        const response = await fetch('http://localhost:3000/api/todos')
        const data = await response.json()
        const todos = await data.todos

        return {
            todos: todos
        }
    } catch { (err) => console.log( 'An error occurred '+ err ) }
}

export default Index