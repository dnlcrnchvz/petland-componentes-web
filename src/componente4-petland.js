import {html, css, nothing, LitElement} from 'lit';
export class ComponenteCuatro extends LitElement{
    static styles = css `
    section.cachorros-section{
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
    align-items: center;
    margin-bottom: 1.25rem;
    }
    p{
    color: #275972;
    font-size: clamp(1.375rem, 1.222rem + 0.7648vw, 1.875rem);
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    font-weight: 700;
    width: 450px;
    }
    button.ver-cachorros-button{
    border-style: none;
    padding: 20px 40px;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 62rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    background-color: #fdfefe;
    border: 0.125rem solid #DE6061;
    color: #5F9EA0;
    }
    button.ver-cachorros-button:hover{
    background-color: #F0AF4A;
    color: #fdfefe;
    border: 0.125rem solid #F0AF4A;
    }
    `;
    static properties = {
        parrafo : {type: String},
        boton : {type: String},
    } 
    constructor(){
        super();
        this.parrafo = "";
        this.boton= "";
    }
    render(){
        return html `
        <section class="cachorros-section">
            <p> ${this.parrafo}</p>
            ${this.boton ? html `<button class="ver-cachorros-button">Ver cachorros</button>`: nothing}
        </section>
        `;
    }
}
customElements.define('componente-cuatro', ComponenteCuatro);