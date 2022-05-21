import './App.css';
import  { StyledApp }  from './styledApp'
import {
  useQuery,
  gql
} from "@apollo/client";
import React from 'react';

const PRUEBA = gql`
  query allCountries {countries{
    code
    name
    }
  }
`;



function App() {
  const {loading, error, data} = useQuery(PRUEBA)

  if(loading) return <p>cargando</p>
  if(error) return <p>Error</p>

  return (
    <React.Fragment>
      <h1>dgrwegrweg</h1>
      {data.countries.map(data => (

        <StyledApp key={data.code}>{data.name}</StyledApp>
      
      ))} 
    </React.Fragment>
  );
}

export default App;
