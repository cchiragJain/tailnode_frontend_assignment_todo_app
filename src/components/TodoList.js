import { useDebugValue, useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	// add a new todo
	const addTodo = (todo) => {
		// if does not contain any text don't want to add that
		if (!todo.text) {
			return;
		}

		// add it along the old todos
		// adding it first since recent tasks need to be at top
		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	// complete todo
	const completeTodo = (id) => {
		// this will run on onClick
		// if already completed need to give ability to mark it as false as well
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});

		setTodos(updatedTodos);
	};

	// remove todo with given id
	const removeTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);

		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>What's the plan for Today?</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
			/>
		</div>
	);
};

export default TodoList;
