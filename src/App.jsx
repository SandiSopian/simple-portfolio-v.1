import Brand from "./components/Brand/Brand";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-bg-primary">
      <Header />
      <Brand />
      <Project />
      <div className="bg-bg-secondary rounded-t-[6rem] md:rounded-t-[8rem] py-12">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
