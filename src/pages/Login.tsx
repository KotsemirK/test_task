import { useLogin } from '../shared/hooks/useLogin';
import Input from '../shared/ui/Input';
import { Button } from '../shared/ui/Button';

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    successMessage,
    handleSubmit,
  } = useLogin();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      {successMessage ? (
        <p className="text-green-500 text-sm mt-1">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="username"
            label="Username"
            value={username}
            onChange={setUsername}
            errorMessage={usernameError}
            placeholder="Enter your username"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            errorMessage={passwordError}
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default Login;
