import "./App.css"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="App ">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  )
}

export default App
