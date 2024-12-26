import {html, css, LitElement} from 'lit';
export class ComponenteNueve extends LitElement{
static styles = css`
section.somos-card{
display: flex;
justufy-content: space-between;
margin: 2rem;
gap: 60px;
}
img.image{
width: 560px;
color: transparent;
border-radius: 3.125rem;
img.logo{
height: 50px;
}
p{
font-size: 17px;
font-weight: 400;
color: #818284;
font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif !important;
margin: 20px 0 20px 0;
padding: 10px 10px 0 10px;
white-space: pre-line;
}
button{
border-style: none;
padding: 20px 40px;
font-size: 1.1rem;
font-weight: 500;
border-radius: 62rem;
font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
margin: 10px;
}
button.cachorros-button{
background-color: #de6061;
color: #fdfefe;
margin-top: 1.25rem;
}
button.tienda-button{
background-color: #fdfefe;
border: 0.125rem solid #DE6061;
color: #818284;
}
button.cachorros-button:hover{
background-color: #F0AF4A;
}
button.tienda-button:hover{
background-color: #F0AF4A;
color: #fdfefe;
border: 0.125rem solid #F0AF4A;
}
`;
static properties = {
    parrafo: {type: String},
    imagen: {type: String},
}
constructor(){
    super();
    this.parrafo= "";
    this.imagen= "";
}
render(){
    return html `
    <section class="somos-card">
            <div>
                <img src="https://petlandmexico.com/_next/static/media/logo.55985588.svg" class="logo"> 
                <p class="parrafo">${this.parrafo}</p>
                <button class="cachorros-button">Cachorros</button>
                <button class="tienda-button">Sucursales</button>
            </div>
            <div>
                <img src=${this.imagen} class="image">
            </div>
        </section>
    `;
}
}
customElements.define('componente-nueve', ComponenteNueve);