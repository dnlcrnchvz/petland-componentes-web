import {html, css, LitElement} from 'lit';

export class ComponenteCinco extends LitElement {
  static styles = css`
    section.mascota-card {
    width: 270px;
    height: 330px;
    margin: 1rem 0rem;
    border-radius: 0.625rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', Oxygen, sans-serif;
    }
    section.mascota-card:hover {
    border: 0.125rem solid #DE6061;
    border-radius: 0.625rem;
    }
    img.mascota-imagen {
    width: 100%;
    height: 205px;
    border-radius: 0.625rem;
    box-shadow: rgba(185, 185, 185, 0.4) 0px 0.1875rem 1.25rem;
    transition: border-radius 0.2s;
    }
    .dog-icon {
    width: 20px;
    height: 20px;
    padding-top: 17px;
    padding-left: 18px;
    }
    div.texto {
    display: flex;
    justify-content: start;
    align-items: start;
    }
    p.conoce-mas {
    display: none;
    margin-top: 1rem;
    }
    section.mascota-card:hover p.conoce-mas {
    display: block;
    color: #DE6061;
    padding-left: 12px;
    }
    h1 {
    font-size: 20px;
    margin: 0;
    padding-top: 16px;
    padding-left: 12px;
    }
    p {
    font-size: 17px;
    font-weight: 400;
    }
    p.fecha {
    color: #818284;
    margin: 0;
    padding: 0;
    padding-left: 12px;
    }
    
  `;

  static properties = {
    raza: {type: String},
    fecha: {type: String},
    imagen: {type: String},
  }

  constructor() {
    super();
    this.raza = "";
    this.fecha = "";
    this.imagen = "";
  }

  render() {
    return html`
      <section class="mascota-card">
        <img src=${this.imagen} class="mascota-imagen">
        <div class="texto">
          <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dog" class="dog-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" font-size="1rem" style="height: 1em;">
                <path fill="currentColor" d="M448 64C448 28.7 419.3 0 384 0C348.7 0 320 28.7 320 64C320 99.3 348.7 128 384 128C419.3 128 448 99.3 448 64zM392 160H288C278.5 160 270.1 167.4 267.1 176.1L243.1 240H156.9L132.9 176.1C129.9 167.4 121.5 160 112 160H56C26.6 160 0 186.6 0 216V368C0 391.3 10.8 413.6 28.9 431.2C48.4 451.3 83.3 464 112 464H128C138.8 464 148.5 459.7 155.4 451.3L179.4 412.7C183.3 406.5 191.7 400 200.6 400H439.4C448.3 400 456.7 406.5 460.6 412.7L484.6 451.3C491.5 459.7 501.2 464 512 464H528C556.7 464 591.6 451.3 611.1 431.2C629.2 413.6 640 391.3 640 368V216C640 186.6 613.4 160 584 160H528C518.5 160 510.1 167.4 507.1 176.1L483.1 240H396.9L372.9 176.1C369.9 167.4 361.5 160 352 160H392z"></path>
            </svg>
          </div>
          <div>
            <h1>${this.raza}</h1>
            <p class="fecha">${this.fecha}</p>
            <p class="conoce-mas">Conoce más</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('componente-cinco', ComponenteCinco);
