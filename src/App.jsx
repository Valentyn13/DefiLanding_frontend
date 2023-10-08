import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PlatformPage from "./Pages/PlatformPage";
import DevelopersPage from "./Pages/DevelopersPage";
import CommunityPage from "./Pages/CommunityPage";
import UseDefiPage from "./Pages/UseDefiPage";
import Layout from "./components/Layout/Layout";
import SwapDefi from "./UseDefi/SwapDefi/SwapDefi";
import TransactionsUseDefi from "./UseDefi/TransactionsUseDefi/TransactionsUseDefi";
import CoreUseDefi from "./UseDefi/CoreUseDefi/CoreUseDefi";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="platform" element={<PlatformPage/>}/>
              <Route path="dev" element={<DevelopersPage/>}/>
              <Route path="comm" element={<CommunityPage/>}/>
              <Route path="about" element={<AboutPage />}/>
              <Route path="use/*" element={<UseDefiPage/>}>
                <Route index element={<CoreUseDefi/>}/>
                <Route path="coins" element={<CoreUseDefi/>}/>
                <Route path="swap" element={<SwapDefi/>}/>
                <Route path="transactions" element={<TransactionsUseDefi/>}/>
              </Route>
            </Route>
        </Routes>
    </>


  );
}

export default App;
