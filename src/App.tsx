import React, {Fragment} from 'react';
import Styled from 'styled-components/native';

import Todo from '~/Screens/Todo';

import { TodoListContextProvider } from '~/Context/TodoListContext';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return(
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;