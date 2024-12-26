import {html, css, LitElement} from 'lit';

export class MiCalculadora extends LitElement {
  static styles = css`
      p { 
      color: #a569bd; 
      font-family: Roboto;
      }
      input{
      padding: 5px 10px;
      border-style: none;
      border-radius: 30px;
      margin-bottom: 20px;
      border: 2px solid gray;
      }
      button{
      border-style: none;
      border-radius: 20px;
      padding: 5px 10px;
      border: 2px solid purple;
      }
      `;

  static properties = {
    number: {type: Number},
    inputOperando: {type: Number},
    resultado: {type: Number},
    backgroundColor : {type: String},
  };

  constructor() {
    super();
    this.number = 0;
    this.inputOperando = 0;
    this.resultado = 0;
    this.backgroundColor = 'gray';
  }
  __sumarNumero(){
  //let a = this.number;
  //const b = this.inputOperando;
  this.number = this.number + this.inputOperando; //this.resultado = a + b;//Number(a) + Number(b);
    
  }
  __restarNumero(num){
  //let a = this.number;
  //const b = this.inputOperando;
  this.number = this.number - this.inputOperando; //this.resultado = a - b;//Number(a) - Number(b);
  }
  __multiplicarNumero(num){
  //let a = this.number;
  //const b = this.inputOperando;
  this.number = this.number * this.inputOperando; //this.resultado = a * b; //Number(a) * Number(b);
  }
  __dividirNumero(num){
  //let a = this.number;
  //const b = this.inputOperando;
  this.number = this.number / this.inputOperando; //this.resultado = a / b; //Number(a) / Number(b);
  }
  handleInputChange(event) {
    this.inputOperando = Number(event.target.value); //event.target.value; 
  }

  render() {
    const estilosBoton = {
    backgroundColor: this.backgroundColor,
    };
    return html`
        <p>Resultado: <b>${this.number}</b></p>
        <input type="text" class="inputOperando" id="operando" @input="${this.handleInputChange}">
        <section>
        <button @click="${this.__sumarNumero}">Sumar</button>
        <button @click="${this.__restarNumero}">Restar</button>
        <button @click="${this.__multiplicarNumero}">Multiplicar</button>
        <button @click="${this.__dividirNumero}">Dividir</button>
        </section>
        `;
  }
}
customElements.define('mi-calculadora', MiCalculadora);
