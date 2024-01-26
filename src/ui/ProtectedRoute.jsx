/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useCurrentUser } from '../features/authentication/useCurrentUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useCurrentUser();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if(isAuthenticated) return children;
};

export default ProtectedRoute;
