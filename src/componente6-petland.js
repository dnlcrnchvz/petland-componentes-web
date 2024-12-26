import {html, css, LitElement} from 'lit';
 
export class ComponenteSeis extends LitElement{
    static properties = {
        name: {type: String},
        phone: {type: String},
        mapLink: {type: String},
    }
    constructor(){
        super();
        this.name = "name";
        this.phone = "phone";
        this.mapLink = "mapLink";
    }
    static styles = css`
        :host{
        display:block;
        font-family:Arial, sans-serif
        }
        section.store-location{
        background-color: white;
        cursor: pointer;
        border-radius: 0.625rem;
        padding: 1rem 1.25rem;
        display: flex;
        align-items:flex-start;
        border: 0.125rem solid #de6061;
        transition: background-color 0.3 ease, color 0.3 ease;
        width: 250px;
        }
        section.store-location:hover{
        background-color: #de6061;
        color: white;
        }
        a.location-link{
        text-decoration: none;
        color:inherit;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        }
        div.location-header{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        width:100%
        }
        svg.location-icon{
        width:18px;
        height:18px;
        margin-right: 10px;
        color:#de6061;
        transition: color 0.3 ease;
        }
        p.store-name{
        font-weight:600;
        font-size: 1.15 rem;
        margin: 0;
        }
        div.info-text{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items:flex-start;
        width:100%;
        }
        span.store-phone, 
        span.view-map{
        font-size: 1rem;
        margin: 0;
        display: block;
        text-align: left;
        padding-left: 30px;
        }
        span.view-map{
        color:#de6061;
        cursor:pointer;
        }
        span.view-map:hover{
        text-decoration: none;
        }
        section.store-location:hover svg.location-icon{
        color:white
        }
        section.store-location:hover span.view-map{
        color:white
        }
        `;
    render(){
        return html`
        <section class="store-location">
            <a href ="${this.mapLink}" target="_blank" class="location-link"> 
                <div class="location-header">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" class="location-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" font-size="1rem" style="height: 1em;"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                    <p class="store-name">${this.name}</p>   
                </div>
                <div class="info-text">
                    <span class="store-phone">${this.phone}</span>
                    <span class="view-map">Ver mapa</span>
                </div>
            </a>   
        </section>
         `;
    }
}
customElements.define('componente-seis',ComponenteSeis);