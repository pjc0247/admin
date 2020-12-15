import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
  display: contents;

  color: unset;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;


type LinkToProps = {
	to: (string | ((x: any) => any));
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
