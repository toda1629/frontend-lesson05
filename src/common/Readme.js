import React from 'react'
import { useEffect, useState } from "react";
import Markdown from 'react-markdown'
import "../resources/css/markdown.css";

export default function Readme() {

  const [markdown, setMarkdown] = useState("# loading...");

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/remarkjs/react-markdown/refs/heads/main/readme.md`)
      .then((m) => {
        console.log(m);
        return m.text();
      })
      .then((md) => {
        setMarkdown(md);
      });
  }, []);

  return (
    <div className='markdown-wrap'>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}