import Heading from "./components/Task1Heading";
import Paragraph from "./components/Task2Paragraph";
import Button from "./components/Task3Button";
import Task4 from "./components/Task4Components";
import Student from "./components/Task5Student";
import Product from "./components/Task6Product";
import Employee from "./components/Task7Employee";
import Course from "./components/Task8Course";
import Navbar from "./components/Task9Navbar";
import Profile from "./components/Task10Profile";

function App() {
  return (
    <div className="container">

      {/* TASK 1 */}
      <section className="task">
        <h2>Task 1: Heading Component</h2>
        <Heading />
      </section>

      {/* TASK 2 */}
      <section className="task">
        <h2>Task 2: Paragraph Component</h2>
        <Paragraph />
      </section>

      {/* TASK 3 */}
      <section className="task">
        <h2>Task 3: Button Component</h2>
        <Button />
      </section>

      {/* TASK 4 */}
      <section className="task">
        <h2>Task 4: Multiple Components</h2>
        <Task4 />
      </section>

      {/* TASK 5 */}
      <section className="task">
        <h2>Task 5: Student Information</h2>
        <Student />
      </section>

      {/* TASK 6 */}
      <section className="task">
        <h2>Task 6: Product Card</h2>
        <Product />
      </section>

      {/* TASK 7 */}
      <section className="task">
        <h2>Task 7: Employee Card</h2>
        <Employee />
      </section>

      {/* TASK 8 */}
      <section className="task">
        <h2>Task 8: Course Card</h2>
        <Course />
      </section>

      {/* TASK 9 */}
      <section className="task">
        <h2>Task 9: Navbar</h2>
        <Navbar />
      </section>

      {/* TASK 10 */}
      <section className="task">
        <h2>Task 10: Mini Profile Page</h2>
        <Profile />
      </section>

    </div>
  );
}

export default App;
