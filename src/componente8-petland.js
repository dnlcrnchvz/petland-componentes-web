import{html, css,LitElement} from 'lit';
export class ComponenteOcho extends LitElement{
    static styles = css`
    :host{
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif !important;
    }
    section.reward-card{
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin: 2rem;
    }
    img.image{
    width: 550px;
    }
    h1, p.anuncio{
    color: #275972;
    }
    h1{
    font-size: 30px;
    padding: 10px;
    }
    p{
    font-size: 17px;
    font-weight: 400;
    color: #818284;
    }
    p.anuncio{
    font-size: 25px;
    padding: 10px;
    font-weight: 700;
    }
    p.parrafo{
    margin: 20px 0 20px 0;
    padding: 10px 10px 0 10px;
    white-space: pre-line;
    }
    
    `;
    static properties = {
        titulo: {type: String},
        parrafo: {type: String},
        parrafo2: {type: String},
        anuncio: {type: String},
        imagen: {type: String},

    }
    constructor(){
        super();
        this.titulo= "";
        this.parrafo= "";
        this.anuncio= "";
        this.imagen= "";
    }
    render(){
        return html`
        <section class="reward-card">
            <div>
                <img src=${this.imagen} class="image">
            </div>
            <div>
                <h1>${this.titulo}</h1>
                <p class="parrafo">${this.parrafo}</p>
                <p class="anuncio">${this.anuncio}</p>
            </div>
        </section>
        `;
    }
}
customElements.define('componente-ocho', ComponenteOcho);