import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AllRoutes />
      <ReactQueryDevtools initialIsOpen={false} position = "bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
