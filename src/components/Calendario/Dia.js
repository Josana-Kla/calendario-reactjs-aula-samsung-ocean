import {Component} from "react";

class Dia extends Component {  //pesquisar sobre isso. Component é um método do react que vem com o Render(=tornar visível)
  constructor () {
    super();
    this.aoClicar = this.aoClicar.bind(this);
  } //é para dizer execute o construtor primeiro e depois as variaveis e coisas dele
  
  state = { qtdadeCliques: 0}

  aoClicar(event) {
    console.log(this.state.qtdadeCliques);
  }

  render () { //this pq eu quero chamar a função aoClicar apenas desse dia e não dos outros tb
    return (
    <button onClick={this.aoClicar}> 
      { 
      this.props.data > 0 && this.props.data < 32 ? this.props.data : '-' 
      } 
    </button>
    ); //fala que nessa classe (this.data) vc pega as propriedades dela e ela
  }
}  // dá para criar componentes por meio de classe utilizando o conceito de orientação a objetos. Onde vc tem um elemento que pode ter caracteristicas diferente dependendo da situação. Dentro de uma classe da para criar funções, mas dentro de funções não pode criar funções, chamamos de métodos


/*
function Dia({diaDaSemana, data}) {  //Aqui criamos um componente utilizando funções. Quando fazemos isso, a funão acaba aqui depois de executada (não conseguimos interagir mais com ela), mas se quisermos que ela continue a existir e a interagir com o código e usuário, como o dia nesse caso, precisamos fazer por meio de classes
  return (
    <button>{
      data > 0 && data < 32 ? data : '-' //para exibir a data só entre o dia 1 e 31, e se for mais ou menos que esses números, aparecerá um tracinho
      }</button>
  )
}
*/

export default Dia;