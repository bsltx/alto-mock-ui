const LoadingIndicator = () => {
  return (
    <div className='loading-indicator'>
      <div className='spinner'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>Retrieving your trip details...</p>
    </div>
  );
};

export default LoadingIndicator;
