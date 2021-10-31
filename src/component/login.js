import React, { useState, useContext } from 'react';
import axios from '../axios';
import { GlobalContext } from '../context/GlobalContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const router = useHistory();
  const { setAuth, addTransactions } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: '',
  });
  const [user, setUser] = useState({
    email: {
      value: '',
      error: false,
      errorMessage: '',
    },
    password: {
      value: '',
      error: false,
      errorMessage: '',
    },
  });

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setError({
      status: false,
      message: '',
    });
    if (user.email.value === '') {
      setUser({
        ...user,
        email: {
          value: user.email.value,
          error: true,
          errorMessage: 'Email cannot be empty',
        },
      });
      return;
    }
    if (
      !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
        user.email.value
      )
    ) {
      setUser({
        ...user,
        email: {
          value: user.email.value,
          error: true,
          errorMessage: 'Invalid Email',
        },
      });
      return;
    }
    if (user.password.value === '') {
      setUser({
        ...user,
        password: {
          value: user.password.value,
          error: true,
          errorMessage: 'Password cannot be empty',
        },
      });
      return;
    }
    try {
      setLoading(true);
      const result = await axios.post('/users/login', {
        email: user.email.value,
        password: user.password.value,
      });

      if (result.status === 'success') {
        localStorage.setItem('jwt', result.token);
        setAuth({ ...result.data.user, token: result.token });
        addTransactions(result.data.transactions);
        router.push('/');
      } else {
        setError({
          status: true,
          message: result.message,
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError({
        status: true,
        message: err.message,
      });
    }
  };
  return (
    <div
      className="w-100"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        className="col-md-6 col-6 p-5 border rounded"
        style={{ backgroundColor: '#F1F2F4' }}
      >
        <h3 className="text-center">Login</h3>
        <hr style={{ width: '90%' }} />
        <form onSubmit={SubmitHandler}>
          <div className="form-group">
            <label htmlFor="email" className="control-label font-weight-bolder">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${
                user.email.error ? 'is-invalid' : ''
              } `}
              id="email"
              value={user.email.value}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: {
                    value: e.target.value,
                    error: false,
                    errorMessage: '',
                  },
                })
              }
              placeholder="Email"
            />
            {user.email.error && (
              <div className="invalid-feedback">{user.email.errorMessage}</div>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="control-label font-weight-bolder"
            >
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                user.password.error ? 'is-invalid' : ''
              } `}
              id="password"
              value={user.password.value}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: {
                    value: e.target.value,
                    error: false,
                    errorMessage: '',
                  },
                })
              }
              placeholder="Password"
            />
            {user.password.error && (
              <div className="invalid-feedback">{user.email.errorMessage}</div>
            )}
          </div>
          <div className="form-group">
            {error.status && (
              <div className="invalid-feedback"> {error.message}</div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-block btn-primary`}
          >
            {loading ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
          <div className="d-flex justify-content-center mt-2">
            Don't have account
            <Link
              to="/register"
              className="ml-1"
              style={{ textAlign: 'center' }}
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
