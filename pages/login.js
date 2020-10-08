import LOGIN_MUTATION from '../mutations/login-user';
import LoginForm from '../components/login-form';
import { AppContext } from "../components/context/AppContext";
import { useMutation } from "@apollo/react-hooks";
import { v4 } from 'uuid';
import clientConfig from '../client-config';
import { useContext } from 'react';

const Login = () => {
  const loginInput = {
    clientMutationId: v4(),
    username: clientConfig.clientUser,
    password: clientConfig.clientPass
  };

  const [setHasToken, setToken] = useContext(AppContext);
  const [login, {loading, error}] = useMutation(LOGIN_MUTATION, {
    variables: {
      input: loginInput
    },
    onCompleted({login}) {
      localStorage.setItem('token', login.user.jwtAuthToken);
      setToken(login.user.jwtAuthToken);
      setHasToken(true);
    }
  });
  if (loading) return <div className="loading">Loading</div>;
  if (error) {
    console.error(error);
    return <p>An error occurred</p>;
  }
    

  return (
    <LoginForm login={login} />
  );
}

export default Login;