const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // ⬅️ IMPORTANTE: 3000, não 5500

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

// Rotas para outras páginas
app.get('/custom', (req, res) => {
    res.render('custom', { title: 'Custom Vehicles' });
});

app.get('/sedan', (req, res) => {
    res.render('sedan', { title: 'Sedan Vehicles' });
});

app.get('/suv', (req, res) => {
    res.render('suv', { title: 'SUV Vehicles' });
});

app.get('/truck', (req, res) => {
    res.render('truck', { title: 'Truck Vehicles' });
});

app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚗 CSE Motors Website');
    console.log(`📡 Servidor rodando: http://localhost:${PORT}`);
    console.log(`📁 Views: ${path.join(__dirname, 'views')}`);
    console.log(`📁 Public: ${path.join(__dirname, 'public')}`);
    console.log('='.repeat(60));
    console.log('\nPara parar o servidor: Ctrl+C\n');
});