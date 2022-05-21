import './App.css';
import  { StyledApp }  from './styledApp'
import {
  useQuery,
  gql
} from "@apollo/client";

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
    data.countries.map(data => (

      <StyledApp key={data.code}>{data.name}</StyledApp>
    
    ))
  );
}

export default App;
