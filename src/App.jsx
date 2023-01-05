import './App.css'

function App() {
  console.log(import.meta.env.VITE_FEATURE_FLAG);
  const feature = () => {
    if (!import.meta.env.VITE_FEATURE_FLAG ||
      import.meta.env.VITE_FEATURE_FLAG === "true") {
        return <p>A feature to show</p>
      } else {
        return <p>No feature</p>
      }
  }

  return (
    <div className="App">
      {feature()}
    </div>
  )
}

export default App
