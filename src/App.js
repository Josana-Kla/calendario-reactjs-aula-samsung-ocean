import MenuTopo from './components/MenuTopo'
import Rodape from './components/Rodape'
import Corpo from './components/Corpo'

function App() {
  return (
    <>
      <MenuTopo logado={true}/>
      <Corpo />
      <Rodape autor="josana"/>
    </>
  )
}

export default App;