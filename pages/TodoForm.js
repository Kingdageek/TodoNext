class TodoForm extends React.Component 
{
     render () {
         return (
             <div>
                 <h2>Simple Todo List App</h2>
                 <form onSubmit={this.props.addTodo}>
                     <input type="text" placeholder="Your task here" onChange={this.props.changeTodo} value={this.props.currentTodo}/>
                     <input type="submit" value="Add Task"/>
                 </form>
             </div>
         )
     }
}

export default TodoForm;