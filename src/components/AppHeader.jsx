import { NavLink } from "react-router-dom";
import { menuData } from "../data/menuData";

export default function AppHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        🎬 Movie Reviews
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main-menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main-menu">
                        <ul className="navbar-nav ms-auto">
                            {menuData.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <NavLink className="nav-link" to={item.path}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

