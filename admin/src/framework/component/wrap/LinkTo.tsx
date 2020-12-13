import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;


type LinkToProps = {
	to: string;
	children: React.ReactNode;
};
export const LinkTo = ({
	to,
	children,
	...props
}: LinkToProps) => {
  return (
		<SLink
			to={to}
		>
			{children}
		</SLink>
	);
};
