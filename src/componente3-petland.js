import {html, css, LitElement} from 'lit';
export class ComponenteTres extends LitElement{
    static styles = css`
    section.product-card{
    padding: 1.25rem;
    border-radius: 1.25rem;
    display:flex;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    width: 550px;
    height: 250px;
    margin-left: 12px;
    background-color: #fdfefe;
    }
    img.logo{
    width: 120px;
    height: auto;
    }
    h1{
    font-size: clamp(1.25rem, 1.097rem + 0.7648vw, 1.75rem);
    font-family: Roboto;
    font-weight: 300;
    padding: 0.3125rem 0px;
    margin: 0;
    max-width: 250px;
    }
    button{
    border-style: none;
    padding: 20px 40px;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 62rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    }
    a{
    text-decoration: none;
    color: #fdfefe;
    }
    button.tienda-button{
    background-color: #de6061;
    margin-top: 1.25rem;
    }
    button.tienda-button:hover{
    background-color: #F0AF4A;
    }
    img.imagen-alimento{
    height: 260px;
    }
 `;
 static properties = {
    descuento: {type: Number},
    imagen1: {type: String},
    imagen2: {type: String},
 }
 constructor(){
    super();
    this.descuento = 'Something';
    this.imagen1 = "https://static.vecteezy.com/system/resources/previews/004/834/084/large_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg";
    this.imagen2 = "https://static.vecteezy.com/system/resources/previews/004/834/084/large_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg";
 }
 render(){
    return html `
        <section class="product-card">
            <div class="informacion">
                <img src=${this.imagen2} class="logo">
                <h1>¡Hasta el <strong>${this.descuento}%</strong> de descuento!</h1>
                <button class="tienda-button">
                    <a href="https://listado.mercadolibre.com.mx/tienda/petland/" target="blank">Tienda en linea</a>
                </button>
            </div>
            <div class="imagen">
                <img src=${this.imagen1} class="imagen-alimento">
            </div>
        </section>
    `;
 }
}
customElements.define('componente-tres', ComponenteTres);