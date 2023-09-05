import React from 'react';
import { styled } from 'styled-components';

const ListItem = styled.li`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid #ccc;
`;

const Input = styled.input``;

const Title = styled.h2``;

const Button = styled.button`
	height: 30px;
`;

const TodoItem = ({ todo }) => {
	const [id, title, done] = todo;
	return (
		<ListItem>
			<Title>{title}</Title>
			<Input type="checkbox" />
			<Button>삭제</Button>
		</ListItem>
	);
};

export default TodoItem;
