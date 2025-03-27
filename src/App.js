import ReactImg from "./assets/react-core-concepts.png";
import CoreConcept from "./components/CoreConcept";

function Header() {
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const welcome = "Hello!";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="First Title" desc="123" image="img1" />
          <CoreConcept title="Sec Title" desc="123" />
          <CoreConcept title="123" desc="123" />
          <CoreConcept title="123" desc="123" />
        </ul>
      </main>
    </div>
  );
}

export default App;
