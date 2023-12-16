export const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "80%",
          padding: "5px",
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
//   export default ErrorMessage;