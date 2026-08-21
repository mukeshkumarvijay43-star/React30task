import React from "react";
import "./App.css";

// Task 1: Heading Component
function Heading() {
  return <h2>Welcome to React Learning</h2>;
}

// Task 2: Paragraph Component
function Paragraph() {
  return (
    <p>
      I am learning React to build modern and interactive web applications.
      I am learning components, JSX, props, and events step by step.
    </p>
  );
}

// Task 3: Button Component
function Button() {
  return <button onClick={() => alert("Button Clicked!")}>Click Here</button>;
}

// Task 4: Three Components
function Header() {
  return <header>My React Website</header>;
}

function Content() {
  return <main>This is the content section.</main>;
}

function Footer() {
  return <footer>© 2026 My React Website</footer>;
}

// Task 5: Hello React
function HelloReact() {
  return <h2>Hello React!</h2>;
}

// Task 6: Simple Heading
function SimpleHeading() {
  return <h2>My First React Heading</h2>;
}

// Task 7: Button
function SimpleButton() {
  return <button onClick={() => alert("Hello from React Button!")}>Click Me</button>;
}

// Task 8: Paragraph
function SimpleParagraph() {
  return <p>React makes it easy to create reusable user interface components.</p>;
}

// Task 9: Combine 3 Components
function Task9() {
  return (
    <div className="task9">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// Task 10: Profile Page
function Profile() {
  return (
    <div className="profile">
      <h2>Mukesh Kumar</h2>
      <p><strong>Age:</strong> 23</p>
      <p><strong>City:</strong> Madurai</p>
      <p><strong>Course:</strong> Python Full Stack Developer</p>
      <p>
        I am learning Python, Django, JavaScript, React and MySQL
        to become a full stack developer.
      </p>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="container">

      <h1>React Learning Tasks</h1>

      {/* Task 1 */}
      <section>
        <h3>Task 1: Create a Simple Heading Component</h3>
        <Heading />
      </section>

      {/* Task 2 */}
      <section>
        <h3>Task 2: Create a Paragraph Component</h3>
        <Paragraph />
      </section>

      {/* Task 3 */}
      <section>
        <h3>Task 3: Create a Button Component</h3>
        <Button />
      </section>

      {/* Task 4 */}
      <section>
        <h3>Task 4: Combine Multiple Components</h3>
        <Header />
        <Content />
        <Footer />
      </section>

      {/* Task 5 */}
      <section>
        <h3>Task 5: First Hello React Program</h3>
        <HelloReact />
      </section>

      {/* Task 6 */}
      <section>
        <h3>Task 6: Simple Heading Component</h3>
        <SimpleHeading />
      </section>

      {/* Task 7 */}
      <section>
        <h3>Task 7: Create Button Component</h3>
        <SimpleButton />
      </section>

      {/* Task 8 */}
      <section>
        <h3>Task 8: Create Paragraph Component</h3>
        <SimpleParagraph />
      </section>

      {/* Task 9 */}
      <section>
        <h3>Task 9: Combine 3 Components</h3>
        <Task9 />
      </section>

      {/* Task 10 */}
      <section>
        <h3>Task 10: Simple Profile Page</h3>
        <Profile />
      </section>

    </div>
  );
}

export default App;