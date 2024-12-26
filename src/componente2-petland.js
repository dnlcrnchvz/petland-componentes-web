import {html, css, LitElement} from 'lit';
export class ComponenteDos extends LitElement{
    static styles = css `
    section.card-comprar-mascota{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 100px;
    }
    h1{
    color: #275972;
    font-size: 3rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    margin: 0;
    max-width: 500px;
    line-height: 1.2;
    }
    p{
    font-size: 1.25rem;
    color: #5F9EA0;
    font-weight: 500;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    margin-top: 1rem;
    padding: 0.3125rem 0px;
    max-width: 450px;
    }
    span{
    color: #fdfefe;
    background-color: #F0AF4A;
    }
    div.texto{
    padding-top: 160px;
    }
    img.imagen-mascota{
    height: 620px;
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
    color: #5F9EA0;
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
    static propierties = {

    }
    constructor(){
        super();
    }
    render(){
        return html `
        <section class="card-comprar-mascota">
            <div class="texto">
                <h1>¡Encuentra a tu nuevo <span>mejor amigo</span> en Petland!</h1>
                <p>Visítanos hoy y conoce a nuestros hermosos cachorros.</p>
                <button class="cachorros-button">Cachorros</button>
                <button class="tienda-button">Tienda en linea</button>
            </div>
            <div class="imagen">
                <img src="https://img.freepik.com/premium-vector/young-cute-happy-woman-hugging-dog-with-love-vector-illustration-portrait-happy-pet-owner_615232-2483.jpg" class="imagen-mascota">
            </div>
        </section>
        `;
    }
}
customElements.define('componente-dos', ComponenteDos);