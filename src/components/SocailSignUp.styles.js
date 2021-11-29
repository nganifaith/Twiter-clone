import styled  from 'styled-components';


export const Wrapper = styled.div`
    background-color: black;
    align-content: flex-start;
    padding: 10px 0 5px 10px;
    color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const TextContent = styled.div`
  padding: 5px;
  margin: 10px;
  line-height: 1.5px;
  font-weight: bolder;
`;

export const SignUp = styled.div`
  margin: 10px;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-content: center;
  justify-content: center;

  icon {
    width: 25%;
  };

  h3 {
    flex: 1;
  }
`
