import {html, css, LitElement} from 'lit';
export class ComponenteDiez extends LitElement{
    static styles = css `
    footer{
    display: flex;
    background-color: #5f9ea0;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    }
    div.informacion{
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin: 0rem;
    padding: 0rem;
    }
    li{
    list-style: none;
    font-weight: 700;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    }
    img.logo{
    height: 100px;
    }
    li.item{
    font-size: 17px;
    font-weight: 500; 
    }
    a{
    text-decoration: none;
    color: #fdfefe;
    transition: 0.2s, outline 1e-06s;
    }
    a:hover{
    color: #F0AF4A;
    }
    `;
    static properties = {
    }
    constructor(){
        super();
    }
    render(){
        return html `
        <footer>
            <div class="imagen">
                <li>
                    <a href="https://petlandmexico.com/">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/petland-logo-png-transparent.png" class="logo">
                    </a>
                </li>
            </div>
            <div class="informacion">
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
            </div>
            <div class="redes">
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
            </div>
        </footer>
        `;
    }
}
customElements.define('componente-diez', ComponenteDiez);