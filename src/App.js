import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AllRoutes />
    </QueryClientProvider>
  );
}

export default App;
