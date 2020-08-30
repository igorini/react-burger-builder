import React, {useEffect, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => props => {
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.interceptors.response.use(req => {
      setError(null);
      return req;
    });
    axios.interceptors.response.use(res => res, error => setError(error));
  }, []);

  const errorConfirmedHandler = () => setError(null);

  return (
    <>
      <Modal show={error} modalClosed={errorConfirmedHandler}>
        {error ? error.message : null}
      </Modal>
      <WrappedComponent {...props}/>
    </>
  );
};

export default withErrorHandler;