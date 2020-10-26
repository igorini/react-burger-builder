import React, { useEffect, useState } from 'react';
import Modal from 'components/UI/Modal/Modal';

const useConstructor = (initializer) => useState(initializer);

const withErrorHandler = (WrappedComponent, axios) => (props) => {
  const [error, setError] = useState(null);
  let reqInterceptor = 0;
  let resInterceptor = 0;

  useConstructor(() => {
    reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => setError(error)
    );
  });

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => setError(null);

  return (
    <>
      <Modal show={error} modalClosed={errorConfirmedHandler}>
        {error ? error.message : null}
      </Modal>
      <WrappedComponent {...props} />
    </>
  );
};

export default withErrorHandler;
