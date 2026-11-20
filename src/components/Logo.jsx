import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export default function Logo() {
  return <Link to="/" className="brand"><span className="brand-mark"><Sparkles size={19}/></span><span>AI Tools <b>Hub</b></span></Link>;
}