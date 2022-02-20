import styled from "styled-components";
import MonacoEditor from "@monaco-editor/react";

const PanelWrapper = styled.div`
  overflow: hidden;
`

function EditorPanel({ className, ...rest}) {
  return (
    <PanelWrapper
      className={className}
    >
      <MonacoEditor
        {...rest}
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </PanelWrapper>
  )
}

export default styled(EditorPanel)``