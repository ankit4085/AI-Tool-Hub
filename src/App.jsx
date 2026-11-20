import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import { ToolDetails, Categories, CategoryPage, Compare, Favorites, AuthPage, Dashboard, Profile, SubmitTool, Admin, StaticPage } from "./pages/InfoPages";
import { useApp } from "./context/AppContext";
function AppRoutes(){const {theme}=useApp();return <div data-theme={theme}><Layout><Routes>
<Route path="/" element={<Home/>}/><Route path="/explore" element={<Directory/>}/><Route path="/trending" element={<Directory mode="trending"/>}/><Route path="/new" element={<Directory mode="new"/>}/>
<Route path="/categories" element={<Categories/>}/><Route path="/category/:name" element={<CategoryPage/>}/><Route path="/tool/:slug" element={<ToolDetails/>}/>
<Route path="/compare" element={<Compare/>}/><Route path="/favorites" element={<Favorites/>}/><Route path="/login" element={<AuthPage/>}/><Route path="/register" element={<AuthPage register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/><Route path="/profile" element={<Profile/>}/><Route path="/submit-tool" element={<SubmitTool/>}/><Route path="/admin" element={<Admin/>}/>
<Route path="/about" element={<StaticPage type="about"/>}/><Route path="/contact" element={<StaticPage type="contact"/>}/><Route path="/privacy" element={<StaticPage type="privacy"/>}/><Route path="/terms" element={<StaticPage type="terms"/>}/>
<Route path="*" element={<Navigate to="/" replace/>}/>
</Routes></Layout></div>}
export default function App(){return <AppRoutes/>;}