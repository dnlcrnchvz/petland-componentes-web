import {html, css, LitElement} from 'lit';
export class ComponenteSiete extends LitElement{
    static styles = css`
    section.background {
    background-image: url('https://miro.medium.com/v2/resize:fit:1200/1*VV3a29bVJQ4pN210shlriQ.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100wh;
    height: 500px;
    margin: 2rem;
    border-radius: 3rem;
    }
    h1, p {
    color: #fdfefe;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    }
    h1{
    font-size: 2rem;
    font-weight: 500;
    width: 500px;
    padding-left: 50px;
    padding-top: 200px;
    margin-bottom: 10px;
    }
    p{
    font-size: 20px;
    font-weight: 400;
    width: 550px;
    padding-left: 50px;
    margin: 0;
    }
    button.tienda-button{
    border-style: none;
    padding: 20px 40px;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 62rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    background-color: #DE6061;
    color: #fdfefe;
    margin-left: 50px;
    margin-top: 50px;
    }
    button.tienda-button:hover{
    background-color: #F0AF4A;
    }
    `;
    static properties = {

    }
    constructor(){
        super();
    }
    render(){
        return html`
        <section class="background">
        <h1>¡Cuida de tu mascota con los mejores productos en Petland!</h1>
        <p>Ven a nuestra tienda y encuentra todo lo que necesitas para mantener a tu mascota feliz y saludable.</p>
        <button class="tienda-button">Tienda en linea</button>
        </section>
        `;
    }
}
customElements.define('componente-siete', ComponenteSiete);