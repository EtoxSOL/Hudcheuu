import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import { InfoCard } from "./data"

function App() {
  const cards = InfoCard.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
}) 
  return (
    <div>
      <Navbar />
      <Header />
      <section className="cards-list">
                {cards}
            </section>
      <Footer />
    </div>
  )
}

export default App
