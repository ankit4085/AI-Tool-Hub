import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { tools as seedTools } from "../data/tools";

const AppContext = createContext(null);
export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("ath-favorites") || "[]"));
  const [compare, setCompare] = useState(() => JSON.parse(localStorage.getItem("ath-compare") || "[]"));
  const [theme, setTheme] = useState(() => localStorage.getItem("ath-theme") || "dark");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("ath-user") || "null"));
  const [customTools, setCustomTools] = useState(() => JSON.parse(localStorage.getItem("ath-custom-tools") || "[]"));
  const allTools = useMemo(() => [...customTools, ...seedTools], [customTools]);
  useEffect(() => localStorage.setItem("ath-favorites", JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem("ath-compare", JSON.stringify(compare)), [compare]);
  useEffect(() => localStorage.setItem("ath-theme", theme), [theme]);
  useEffect(() => localStorage.setItem("ath-user", JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem("ath-custom-tools", JSON.stringify(customTools)), [customTools]);
  const toggleFavorite = (id) => setFavorites((old) => old.includes(id) ? old.filter((x) => x !== id) : [...old, id]);
  const toggleCompare = (id) => setCompare((old) => old.includes(id) ? old.filter((x) => x !== id) : old.length >= 3 ? old : [...old, id]);
  return <AppContext.Provider value={{ tools: allTools, favorites, compare, theme, setTheme, user, setUser, customTools, setCustomTools, toggleFavorite, toggleCompare }}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);