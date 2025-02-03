import React from "react";
import GitHubSearch from "./components/GitHub-Search";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import BlogPosts from "./components/BlogPosts";

export default function App() {
  return (
    <div>
      <Counter />
      <GitHubSearch />
      <ProductList />
      <BlogPosts />
    </div>
  );
}
