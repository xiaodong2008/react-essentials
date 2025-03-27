import ReactImg from "./assets/react-core-concepts.png";

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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
