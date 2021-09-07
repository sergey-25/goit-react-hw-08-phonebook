import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { getCurrentUser, getIsFetchCurrentUser } from "redux/auth";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Spinner from "./components/Spinner/Spinner";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Toast from "./components/Toast/Toast";

const HomePage = lazy(() =>
  import("pages/HomePage/HomePage" )
);

const RegisterPage = lazy(() =>
  import("pages/RegisterPage/RegisterPage")
);

const LoginPage = lazy(() =>
  import("pages/LoginPage/LoginPage")
);

const ContactsPage = lazy(() =>
  import("pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <Toast />
        </Container>
      </>
    )
  );
}

export default App;