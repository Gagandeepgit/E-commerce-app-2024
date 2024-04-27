import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "79.6vh" }}>
        <ToastContainer/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultPros = {
  title: "Ecommerece app - shop now",
  description: "MERN Stack Project",
  keywords: "Mern, react, node mongodb",
  author: "Gagan",
};

export default Layout;
