import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, UserRound, LogOut } from "lucide-react";
import Logo from "./Logo";
import { useApp } from "../context/AppContext";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, user, setUser } = useApp();
  const navigate = useNavigate();
  const links = [["Explore","/explore"],["Categories","/categories"],["Trending","/trending"],["Compare","/compare"]];
  const close = () => setOpen(false);
  return <header className="site-header"><div className="nav-wrap">
    <Logo/>
    <nav className={open ? "nav-links open" : "nav-links"}>
      {links.map(([label,path]) => <NavLink key={path} to={path} onClick={close} className={({isActive})=>isActive?"active":""}>{label}</NavLink>)}
      <Link to="/submit-tool" className="nav-submit" onClick={close}>Submit a tool <span>↗</span></Link>
    </nav>
    <div className="nav-actions">
      <button className="icon-button" aria-label="Search tools" onClick={()=>navigate("/explore")}><Search size={18}/></button>
      <button className="icon-button" aria-label="Toggle theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</button>
      {user ? <button className="avatar-button" onClick={()=>navigate("/dashboard")}><UserRound size={17}/></button> : <Link className="button button-small button-primary" to="/login">Sign in</Link>}
      {user && <button className="icon-button logout-button" title="Sign out" onClick={()=>{setUser(null);navigate("/")}}><LogOut size={17}/></button>}
    </div>
    <button className="mobile-menu icon-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </div></header>;
}