import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import JobApplicationForm from "./JobApplicationForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobApplicationForm />
  </StrictMode>
);
