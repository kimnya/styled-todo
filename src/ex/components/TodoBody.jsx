import React from 'react';
import { styled } from 'styled-components';
import TodoList from './TodoList';

const Section = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 600px;
	border: 1px solid #1f589f;
	box-sizing: border-box;
`;

const TodoBody = () => {
	return (
		<Section>
			<TodoList></TodoList>
		</Section>
	);
};

export default TodoBody;
