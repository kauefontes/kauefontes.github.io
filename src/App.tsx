import { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

function App() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("https://quewuicom-ngh257ycxq-uc.a.run.app/cv")
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.document}>
        <MarkdownPreview source={markdownContent} style={styles.markdown} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minWidth: "100vw",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  document: {
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    width: "100%",
  },
  markdown: {
    padding: "16px",
  },
};

export default App;
