import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";

import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: varr(--color--grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1 load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // 2 if there is no authenticated user, redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3 while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        {" "}
        <Spinner />
      </FullPage>
    );

  // 4 if there is a user , render de app
  if (isAuthenticated) return children;
}
