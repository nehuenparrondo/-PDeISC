// menu.js
const generarMenu = () => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            :root {
                --primary: #4f46e5;
                --primary-hover: #4338ca;
                --bg: #f8fafc;
                --text: #1e293b;
                --white: #ffffff;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }

            body { 
                font-family: 'Inter', -apple-system, sans-serif; 
                line-height: 1.6; 
                color: var(--text); 
                background-color: var(--bg); 
                padding: 15px;
            }

            .container { 
                max-width: 850px; 
                margin: 20px auto; 
                background: var(--white); 
                padding: 30px; 
                border-radius: 20px; 
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); 
            }
            
            nav { 
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 10px;
                margin-bottom: 30px;
            }
            
            nav a { 
                color: var(--white); 
                text-decoration: none; 
                padding: 12px;
                border-radius: 12px; 
                background: var(--primary);
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                transition: all 0.3s ease;
            }

            nav a:hover { 
                background: var(--primary-hover);
                transform: translateY(-2px);
            }

            h1 { 
                color: #0f172a; 
                font-size: 1.8rem; 
                margin-bottom: 20px; 
                text-align: center;
            }

            .card { 
                background: #f1f5f9; 
                padding: 20px; 
                border-radius: 16px; 
                margin: 15px 0; 
                border: 1px solid #e2e8f0;
            }

            .label { font-weight: bold; color: var(--primary); }

            @media (max-width: 600px) {
                .container { padding: 20px; border-radius: 15px; }
                nav { grid-template-columns: 1fr 1fr; }
            }
        </style>
    </head>
    <body>
    <div class="container">
        <nav>
            <a href="/">Inicio</a>
            <a href="/calculo">Cálculo</a>
            <a href="/url-info">URL</a>
            <a href="/npm-test">NPM</a>
            <a href="/contacto">Contacto</a>
        </nav>
    `;
};

module.exports = generarMenu;