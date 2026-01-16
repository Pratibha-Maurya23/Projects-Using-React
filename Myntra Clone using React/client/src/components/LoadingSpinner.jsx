const LoadingSpinner = () => {
  return (
    <>
      <div className="flex">
        <div className="spinner-border text-danger " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default LoadingSpinner;
