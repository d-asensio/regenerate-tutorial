import styled from "styled-components";
import EditorPanel from "./EditorPanel";
import TutorialPanel from "./TutorialPanel";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  height: 100vh;
  width: 100vw;
  
  ${TutorialPanel} {
    
  }
  
  ${EditorPanel} {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`

export function Editor() {
  return (
    <Wrapper>
      <TutorialPanel />
      <EditorPanel />
    </Wrapper>
  );
}
