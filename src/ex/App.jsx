import React, { useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import TodoBody from './components/TodoBody';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
}
ul,ol,li{
	list-style: none;
}	

`;

const TodoContainer = styled.div`
	width: 400px;
	margin: 0 auto;
	border: 1px solid blak;
`;

const intialData = [
	{ id: 1, title: '물주기', done: true },
	{ id: 2, title: '밥주기', done: false },
	{ id: 3, title: '공주기', done: false },
];

const App = () => {
	const [todos, setTodos] = useState(intialData);
	return (
		<>
			<GlobalStyle />
			<TodoContainer>
				<TodoHead>오늘할일</TodoHead>
				<TodoBody>
					<TodoList todos={todos} />
				</TodoBody>
			</TodoContainer>
		</>
	);
};

export default App;
