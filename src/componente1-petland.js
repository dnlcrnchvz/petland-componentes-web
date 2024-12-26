import {html, css, LitElement} from 'lit'; //importacion de

export class ComponenteUno extends LitElement{
    static styles = css `
    navbar{
    display: flex;
    background-color: #b3b6b7;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    }
    li{
    list-style: none;
    font-weight: 700;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    }
    li.image-item{
    padding-right: 300px;
    }
    img.logo-petland{
    height: 50px;
    baclground-color: #fdfefe;
    }
    li.item{
    font-size: 18px;
    }
    li.button-item{
    padding: 20px 20px;
    }
    a{
    text-decoration: none;
    color: #fdfefe;
    }
    a:hover{
    color: #F0AF4A;
    }
    button.navbar-contacto-button{
    background-color: #DE6061;
    border-style: none;
    padding: 5px 15px;
    font-weight: 500;
    font-size: 17px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    color: white;
    }
    button.navbar-contacto-button:hover{
    background-color: #F0AF4A;
    }
    `;
    static propierties = {
    };
    constructor(){
        super();
    }
    render(){
        return html `
        <navbar>
            <li class="image-item">
                <a href="https://petlandmexico.com/">
                    <img src="https://petlandmexico.com/_next/static/media/logo.55985588.svg" class="logo-petland">
                </a>
            </li>
            <li class="item">
                <a href="https://petlandmexico.com/cachorros">Cachorros</a>
            </li>
            <li class="item">
                <a href="https://listado.mercadolibre.com.mx/tienda/petland/">Tienda</a>
            </li>
            <li class="item">
                <a href="https://petlandmexico.com/sucursales">Sucursales</a>
            </li>
            <li class="item">
                <a href="https://petlandmexico.com/#petland">Petland</a>
            </li>
            <li class="item">
                <a href="https://petlandmexico.com/contacto">Contacto</a>
            </li>
            <li class="button-item">
                <button class="navbar-contacto-button">(55) 92215810</button>
            </li>
        </navbar>
        `;
    }

}
customElements.define('componente-uno', ComponenteUno);