import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [activeExample, setActiveExample] = useState(null);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key, index) => (
              <TabButton
                handleClick={() => {
                  setActiveExample(index);
                  console.log(index, "clicked");
                }}
                key={index}
              >
                <span
                  style={{
                    fontWeight: activeExample == index && 900,
                    color: activeExample == index && "skyblue",
                  }}
                >
                  {activeExample == index
                    ? EXAMPLES[key].title.toUpperCase()
                    : EXAMPLES[key].title}
                </span>
              </TabButton>
            ))}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
