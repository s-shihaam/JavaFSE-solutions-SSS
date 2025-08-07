import React, { useState } from "react";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  const [view, setView] = useState("course");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setView("course")}>Course</button>
        <button onClick={() => setView("book")}>Book</button>
        <button onClick={() => setView("blog")}>Blog</button>
      </div>
      <hr />

      {/* Conditional Rendering Methods */}
      {/* 1. Using if-else */}
      {(() => {
        if (view === "course") return <CourseDetails />;
        else if (view === "book") return <BookDetails />;
        else if (view === "blog") return <BlogDetails />;
        else return <p>No View Selected</p>;
      })()}

      {/* 2. Using Ternary Operator */}
      {/* {view === "course" ? <CourseDetails /> : view === "book" ? <BookDetails /> : <BlogDetails />} */}

      {/* 3. Using Logical && Operator */}
      {/* {view === "course" && <CourseDetails />} */}
      {/* {view === "book" && <BookDetails />} */}
      {/* {view === "blog" && <BlogDetails />} */}
    </div>
  );
}

export default App;
