import { Bookmark, ArrowUpRight, GitCompareArrows, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
const initials = (name) => name.split(/[\s.]+/).filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();
export default function ToolCard({tool}) {
  const {favorites,toggleFavorite,compare,toggleCompare}=useApp();
  return <article className="tool-card">
    <div className="tool-card-top"><div className="tool-logo">{initials(tool.name)}</div><div className="card-actions">
      <button className={compare.includes(tool.id)?"mini-icon selected":"mini-icon"} title="Add to compare" onClick={()=>toggleCompare(tool.id)}><GitCompareArrows size={16}/></button>
      <button className={favorites.includes(tool.id)?"mini-icon selected":"mini-icon"} title="Save tool" onClick={()=>toggleFavorite(tool.id)}><Bookmark size={16} fill={favorites.includes(tool.id)?"currentColor":"none"}/></button>
    </div></div>
    <div className="tool-title-row"><h3>{tool.name}</h3><span className="rating"><Star size={13} fill="currentColor"/>{tool.rating.toFixed(1)}</span></div>
    <p className="tool-description">{tool.description}</p>
    <div className="tool-meta"><span className="category-pill">{tool.category}</span><span className={"pricing "+tool.pricing.toLowerCase()}>{tool.pricing}</span></div>
    <div className="tool-card-bottom"><span className="maker">{tool.maker}</span><Link to={`/tool/${tool.slug}`} className="text-link">View details <ArrowUpRight size={15}/></Link></div>
  </article>;
}