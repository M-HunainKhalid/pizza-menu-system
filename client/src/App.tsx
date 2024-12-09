import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import LoadingFallback from "./components/LoadingFallback";
import ROUTES from "./config/routesConfig";
import { queryClient } from "repositories/queryClient";

const MenuSearchPage = React.lazy(() => import("pages/MenuSearchPage"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.MENU} replace />} />
          <Route path={ROUTES.MENU} element={<MenuSearchPage />} />
        </Routes>
      </Suspense>
    </Router>
  </QueryClientProvider>
);

export default App;
