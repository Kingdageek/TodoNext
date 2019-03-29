class TodoTasks extends React.Component
{
    render () {
        const todos = this.props.todos
        const todosList = todos.map(
            (todo, position) => <li key={ todo+'_'+position }>{ todo }</li>
        )
        return (
            <ul>
                { todosList }
            </ul>
        )
    }
}
export default TodoTasks