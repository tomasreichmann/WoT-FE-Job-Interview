import { StrictMode, useEffect, useState } from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";

import Assignment1 from "./Assignment1/Assignment1";
import Assignment2 from "./Assignment2/Assignment2";
import Assignment3 from "./Assignment3/Assignment3";
import Assignment4 from "./Assignment4/Assignment4";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const STORAGE_KEY = "WG_JOB_INTERVIEW_CAROUSEL_INITIAL_ASSIGNMENT_INDEX";
const assignments = [Assignment1, Assignment2, Assignment3, Assignment4];

const initialAssignmentIndex = 0;
const App = () => {
  const storedAssignmentIndexString = localStorage.getItem(STORAGE_KEY);
  const [assingmentIndex, setAssignmentIndex] = useState(
    storedAssignmentIndexString
      ? parseInt(storedAssignmentIndexString, 10)
      : initialAssignmentIndex
  );
  const CurrentAssignment = assignments[assingmentIndex];
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, assingmentIndex.toString());
  }, [assingmentIndex]);

  return (
    <CurrentAssignment
      controls={
        <div className="assignment-controls">
          {assingmentIndex > 0 && (
            <button
              onClick={() =>
                setAssignmentIndex(
                  (index) =>
                    (assignments.length + (index - 1)) % assignments.length
                )
              }
            >
              ⬅
            </button>
          )}
          {assingmentIndex < assignments.length - 1 && (
            <button
              onClick={() =>
                setAssignmentIndex(
                  (index) =>
                    (assignments.length + (index + 1)) % assignments.length
                )
              }
            >
              COMPLETE ASSIGNMENT ➡
            </button>
          )}
        </div>
      }
    />
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
