import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  

  return (
    <div>
      <NavBar />
      <main>
        This is the main content
      </main>
      <div className="cards">
        <Card title="Card 1" description="description 1" />
        <Card title="Card 2" description="description 2" />
        <Card title="Card 3" description="description 3" />
        <Card title="Card 4" description="description 4" />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
