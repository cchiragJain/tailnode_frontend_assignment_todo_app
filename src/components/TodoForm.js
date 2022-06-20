import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onSubmit, edit }) => {
	const [input, setInput] = useState(edit ? edit.value : "");

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({
			id: uuidv4(),
			text: input,
			isComplete: false,
		});

		// for the new task to be added
		setInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			{edit ? (
				<>
					<input
						placeholder="Update your task"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button onClick={handleSubmit}>Update Task</button>
				</>
			) : (
				<>
					<input
						placeholder="Add a new task"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button onClick={handleSubmit}>Add New Task</button>
				</>
			)}
		</form>
	);
};

export default TodoForm;
