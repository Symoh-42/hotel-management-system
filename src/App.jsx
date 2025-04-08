import { Route, BrowserRouter as Router, Routes } from "react-router"
import { Dashboard, Restaurant, Rooms } from "./dashboardPages"
import DashboardLayout from "./dashboardPages/_dashboardLayout"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App