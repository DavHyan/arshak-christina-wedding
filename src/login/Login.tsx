import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/admin', { replace: true });
    }
  }, [navigate]);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    const BASE_URL = 'https://hraviratoms-server.onrender.com';

    try {
      const res = await fetch(
        `${BASE_URL}/api/arshak-qristine-wedding/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (data.isAdmin) {
        localStorage.setItem('authToken', data.token);
        navigate('/admin');
      } else {
        navigate('/admin');
        alert(data.message || 'Login failed');
      }
    } catch (error) {
       navigate('/admin');
      console.error('Login error:', error);
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <Form className="login-form">
              <div className="form-group">
                <label>Username</label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
