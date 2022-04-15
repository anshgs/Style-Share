import 'normalize.css';
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditPage } from "./pages/EditPage";
import { StylePage } from "./pages/StylePage";
import { HomePage } from "./pages/HomePage";
import { UploadPage } from "./pages/UploadPage";
import "./index.css";
// import reportWebVitals from './reportWebVitals';
import { theme } from "./GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="style" element={<StylePage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
