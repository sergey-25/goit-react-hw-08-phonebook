import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      duration="5000"
      position="top-right"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: "1px solid black",
          padding: "12px",
          color: "#ca1277",
        },
      }}
    />
  );
}

export default Toast;