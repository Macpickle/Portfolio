import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import About from "./sections/About";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Sidenav />

      <div className="flex flex-col items-center h-full text-neutral-300 gap-8">
        <Home />
        <About />
        <Experience />
        <Project />
      </div>

      <footer className="flex justify-between items-center h-20 bg-neutral-950 text-neutral-300 border-t border-neutral-900 px-4">
        <p className="text-sm">© 2021 Dylan MacLeod</p>
      </footer>
    </>
  );
}

export default App;