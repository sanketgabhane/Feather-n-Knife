// import { HashRouter, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import ServiceDetail from "./pages/ServiceDetail";
// import Services from "./pages/Services";
// import Tribe from "./pages/Tribe";

// export default function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="services/:slug" element={<ServiceDetail />} />
//           <Route path="tribe" element={<Tribe />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="blog/:slug" element={<BlogPost />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   );
// }

import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";
import Tribe from "./pages/Tribe";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="tribe" element={<Tribe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
