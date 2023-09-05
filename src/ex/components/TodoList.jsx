import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
	width: 100%;
`;

const TodoList = ({ todos }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<TodoItem />
			))}
			{/* {todos.map((todo) => (
				<TodoItem todo={todo} />
			))} */}
		</ListContainer>
	);
};

export default TodoList;
