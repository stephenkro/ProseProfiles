import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from "../components/Home";
import { AboutMe } from "../components/About";
import { Services } from "../components/Services";



export const RoutesHandler = () => {
    return (
    <div>
    <Routes>
    <Route path="about" element={<AboutMe />} />
    <Route path="services" element={<Services/>}/>
    <Route path="/" element={<Home/>}>
      {/* <Route index element={<Home />} /> */}
      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Route>
  </Routes>
  </div>
    )
}