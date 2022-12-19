import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer theme="colored" position="top-center" />
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
