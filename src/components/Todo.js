import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo }) => {
	return todos.map((todo) => (
		<div key={todo.id}>
			<div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className="delete-icon"
				/>
			</div>
		</div>
	));
};

export default Todo;
