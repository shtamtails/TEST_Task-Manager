import { Container } from "@mui/material";
import { useEffect } from "react";
import { todoStore } from "store/todoStore";
import { Header } from "components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { DefaultTodos } from "pages/DefaultTodos";
import { TagsTodos } from "pages/TagsTodos";
import { CompletedTodos } from "pages/CompletedTodos";
import { OutdatedTodos } from "pages/OutdatedTodos";

const App = () => {
  useEffect(() => {
    // ? Load todos from localstorage
    todoStore.parseFromLocalStorage();
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Routes>
          <Route path="/" element={<DefaultTodos />} />
          <Route path="/tags/:tag" element={<TagsTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />
          <Route path="/outdated" element={<OutdatedTodos />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
