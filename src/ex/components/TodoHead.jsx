import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border: 1px solid ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;

const Title = styled.h2`
	margin-left: 30px;
`;

const Datetime = styled.p`
	margin: 0 auto;
	text-align: right;
`;

const Time = styled.time`
	font-size: 24px;
	color: #fff;
`;

const Day = styled.span`
	display: block;
	color: #fff;
`;

const TodoHead = ({ children }) => {
	return (
		<Header bgc={`#232370`}>
			<Title>{children}</Title>
			<Datetime>
				<Time>2023년 08월 29일</Time>
				<Day>월요일</Day>
			</Datetime>
		</Header>
	);
};

export default TodoHead;
