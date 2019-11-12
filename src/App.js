import React from "react";
import "typeface-roboto";
import { SnackbarProvider } from "notistack";
import Routes from "./routes";
import Upload from "./components/upload/Upload";
import "./App.css";
function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Routes />
      </SnackbarProvider>
      >
    </div>
  );
}

export default App;
