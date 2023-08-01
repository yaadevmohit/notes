import {Routes, Route, Navigate} from "react-router-dom"
import NewNote from "./NewNote"

function App() {
  return (
    <>
     <div className="container mx-auto my-4">
        <Routes>
          <Route path="/" element={<h1 className="text-4xl">Home</h1>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1 className="text-4xl">Show</h1>} />
            <Route path="edit" element={<h1 className="text-4xl">Edit</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     </div>
    </>
  )
}

export default App
