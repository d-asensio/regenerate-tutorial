import Editor from "@monaco-editor/react";

function App() {
  return (
    <Editor
      height="100vh"
      width="100vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}

export default App;
