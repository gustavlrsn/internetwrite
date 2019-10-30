import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.article`
  flex: 0 1 700px;
  min-width: 0;
  background: lightgrey;
  pre {
    padding: 10px;
    margin: 0px 0px;
    background: lightgreen;
    overflow-x: scroll;
    display: block;
    white-space: pre;
  }
`;

export default () => (
  <Flex>
    <Container>
      <div>
        <pre>
          Long text yaoo!!! Long text yaoo!!!Long text yaoo!!!Long text
          <br /> yaoo!!!Long text yaoo!!! Long text yaoo!!!Long text yaoo!!!Long
          text yaoo!!!Long text yaoo!!!Long text yaoo!!!
        </pre>
        <p>
          Long text yaoo!!! Long text yaoo!!!Long text yaoo!!!Long text
          yaoo!!!Long text yaoo!!! Long text yaoo!!!Long text yaoo!!!Long text
          yaoo!!!Long text yaoo!!!Long text yaoo!!!
        </p>
      </div>
    </Container>
  </Flex>
);
