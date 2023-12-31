import React, { useEffect, useRef, useState } from 'react';
import { createGlobalStyle, css, styled } from 'styled-components';

import TodoHead from './components/TodoHead';
import TodoBody from './components/TodoBody';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`
    *{margin: 0;padding: 0;}
    ul,ol,li{list-style: none;}
    .sr-only{position: absolute;left:-9999px;}
    button{cursor: pointer;}
    body{font-size: 12px;}
`;

const TodoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
	border: 1px solid #ccc;
`;

const TodoPlus = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 48px;
	height: 48px;
	font-size: 32px;
	color: #fff;
	background-color: #1f589f;
	border: none;
	border-radius: 50%;
	transform: translate(-50%, 50%);
	transition: all 0.2s;
	${(props) =>
		props.active === 'true' &&
		css`
			background-color: #2e5d97;
			transform: translate(-50%, 50%) rotate(45deg);
		`};
`;

const initialData = [
	{ id: 1, title: '리액트 복습 완전정복', done: false },
	{ id: 2, title: '방청소 - 물걸레질 포함', done: false },
	{ id: 3, title: '포트폴리오 계획서 작성', done: true },
];

const defaultState = JSON.parse(localStorage['styled-todo'] || JSON.stringify(initialData));

const App = () => {
	const [todos, setTodos] = useState(defaultState);

	useEffect(() => {
		localStorage['styled-todo'] = JSON.stringify(todos);
	}, [todos]);

	const nextId = useRef(4);

	//추가함수
	const fnAdd = (plan) => {
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: nextId.current,
					title: plan,
					done: false,
				},
			];
		});
		nextId.current++;
	};

	//삭제함수
	const fnDel = (id) => {
		// alert('id = ' + id);
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크함수
	const fnChk = (id) => {
		// alert('id = ' + id);
		setTodos((prevTodos) => {
			return prevTodos.map((todo) =>
				todo.id !== id
					? todo
					: {
							...todo,
							done: !todo.done,
					  }
			);
		});
	};

	const [active, setActive] = useState('true');
	const $plan = useRef(null);

	return (
		<>
			<GlobalStyle />
			<TodoContainer>
				<TodoHead>오늘할일</TodoHead>
				<TodoBody>
					<TodoList todos={todos} fnDel={fnDel} fnChk={fnChk} />
				</TodoBody>
				<TodoInsert fnAdd={fnAdd} active={active} $plan={$plan} />
				<TodoPlus
					active={`${active}`}
					onClick={() => {
						setActive((prev) => !prev);
						$plan.current.focus();
					}}
				>
					+
				</TodoPlus>
			</TodoContainer>
		</>
	);
};

export default App;
