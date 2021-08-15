import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home"
import { Oscar } from "./pages/Oscar"

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/oscar"  component={Oscar} />
    </BrowserRouter>
  );
}
export default App;