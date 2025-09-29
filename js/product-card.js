   class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    static get observedAttributes() {
        return ["nombre", "precio", "descripcion", "imagen"];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const nombre = this.getAttribute("nombre") || "Sin nombre";
        const precio = this.getAttribute("precio") || "0";
        const descripcion = this.getAttribute("descripcion") || "Sin descripción";
        const imagen = this.getAttribute("imagen") || "";

    this.shadowRoot.innerHTML = `
    <style>
        .card {
            border: 1px solid #ccc;
            padding: 15px;
            border-radius: 10px;
            width: 220px;
            text-align: center;
            background: white;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: 8px;
        }

        h3 {
            margin: 10px 0 5px;
            font-size: 1.1rem;
            color: #111;
        }

        p {
            font-size: 0.9rem;
            color: #555;
        }

        .price {
            font-weight: bold;
            color: green;
            margin: 8px 0;
        }

        button {
            background: #222;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
        background: #ffcc00;
        color: #222;
        }
    </style>

    <div class="card">
        <img src="${imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <div class="price">$${precio}</div>
        <button>Comprar</button>
    </div>
    `;
    }
}

// Registrar el nuevo elemento personalizado
customElements.define("product-card", ProductCard);