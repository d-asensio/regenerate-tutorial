import styled from "styled-components";
import Markdown from 'react-markdown';
import exampleMarkdown from './example.js'

const Wrapper = styled.div`
  z-index: 1;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
`

function TutorialPanel ({ className, ...rest }) {
  return (
    <Wrapper>
      <Markdown {...rest}>
        {exampleMarkdown}
      </Markdown>
    </Wrapper>
  )
}

export default styled(TutorialPanel)``
