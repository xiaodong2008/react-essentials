import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import configImg from "./assets/config.png";
import uiImg from "./assets/jsx-ui.png";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

const coreConcept_data = [
  {
    image: reactImg,
    title: "React Overview",
    desc: "Learn the basics of React and its core principles.",
  },
  {
    image: componentImg,
    title: "Components",
    desc: "Understand how to build reusable UI components.",
  },
  {
    image: configImg,
    title: "Configuration",
    desc: "Set up and configure your React environment.",
  },
  {
    image: uiImg,
    title: "JSX and UI",
    desc: "Learn how to create dynamic user interfaces using JSX.",
  },
];

const welcome = "Hello!";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {coreConcept_data.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
