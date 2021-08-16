import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home"
import { Steps } from "./pages/Steps"

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/Steps"  component={Steps} />
    </BrowserRouter>
  );
}
export default App;