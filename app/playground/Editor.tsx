"use client"

import { useRef, useState } from "react"
import Editor from "@monaco-editor/react"

const EditorPage = () => {
  const editorRef = useRef(null)
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editor
  }

  return (
    <div className="mt-20">
      <Editor
        height="600px"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  )
}

export default EditorPage
