import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteApp from "./components/NoteApp";

// import style
import "./styles/App.css";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
