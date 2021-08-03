const express = require('express');
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

// Middlewars
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const session = require("express-session")
const {
    authUser,
    getUsuarios,
    getMultass,
    getMultas,
    getbalan,
    getbalans
} = require("./conexion/consultas");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Establecer el motor para las vistas.
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

require('./hbs/helpers')

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}))

app.get('/home', function(req, res) {
    res.render('home', {
        titulo: "Home",
        nombre: "Richard CamacHO"
    });
});

app.get('/login', function(req, res) {
    res.render('login', {
        titulo: "Home",
        nombre: "Richard CamacHO"
    });
});

app.post('/auth', async(req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    //let passhash = await bcryptjs.hash(pass, 8);
    if (user && pass) {
        const authe = await authUser(user, pass);
        // console.log(authe[0].id_perfil_pk);
        if (authe == false) {
            res.render('login', {
                alert: true,
                alertTitle: "Error",
                alertMessage: 'Usuario y/o Contraseña incorrectas',
                icon: 'error',
                showConfirmButton: true,
                ruta: ''
            });
        } else {
            let Ruta;
            if (authe[0].id_perfil_pk == '1') {
                // console.log("f");
                req.session.loggedinAdmin = true;
                Ruta = 'admin';
            } else if (authe[0].id_perfil_pk == "2") {
                req.session.loggedinSocio = true;
                Ruta = 'socio';
            }
            req.session.user = {
                name: authe[0].na,
                usuario: authe[0].usuario,
                perfil: authe[0].id_perfil_pk
                    // id_usuario: authe[0].id_usuario_pk
            }
            let user = req.session.user;
            res.render(Ruta, {
                alert: true,
                alertTitle: "Conexion Exitosa",
                alertMessage: 'Login Correcto',
                icon: 'success',
                timer: 1500,
                ruta: Ruta,
                nombre: user.name
            });
        }
    }
});

app.get('/', function(req, res) {
    res.render('index', {
        titulo: "Index",
        nombre: "RichARd cAmaCHo"
    });

});


app.get('/multass', async(req, res) => {
    if (req.session.loggedinSocio) {
        let multass = req.session.multass;
        //console.log(localTime);
        let multasso = await getMultass();
        //console.log(repartidores.length);
        res.render('multass', {
            login: true,
            titulo: 'multass',
            multasso
            //gandi: gananciadia[0].ganancia_total
        });
    } else {
        res.redirect('/')
    }
});

app.get('/multas', async(req, res) => {
    if (req.session.loggedinAdmin) {
        let user = req.session.user;
        //console.log(localTime);
        let multaso = await getMultas();
        //console.log(repartidores.length);
        res.render('multas', {
            login: true,
            titulo: 'multas',
            multaso
            //gandi: gananciadia[0].ganancia_total
        });
    } else {
        res.redirect('/')
    }
});


app.get('/admin', function(req, res) {
    if (req.session.loggedinAdmin) {
        let user = req.session.user;
        res.render('admin', {
            login: true,
            titulo: 'Dashboard',
            tipo: 'admin',
            nombre: user.name
        });
    } else {
        res.redirect('/')
    }
});
app.get('/socio', function(req, res) {
    if (req.session.loggedinSocio) {
        let user = req.session.user;
        res.render('socio', {
            login: true,
            titulo: 'socio',
            tipo: 'socio',
            name: user.nombre
        });
    } else {
        res.redirect('/')
    }
});

app.get('/balan', async(req, res) => {
    if (req.session.loggedinAdmin) {
        let user = req.session.user;
        //console.log(localTime);
        let balano = await getbalan();
        //console.log(repartidores.length);
        res.render('balan', {
            login: true,
            titulo: 'balan',
            tipo: user.tipo,
            name: user.nombre,
            balano
            //gandi: gananciadia[0].ganancia_total
        });
    } else {
        res.redirect('/')
    }
});

app.get('/balans', async(req, res) => {
    if (req.session.loggedinSocio) {
        let user = req.session.user;
        //console.log(localTime);
        let balanso = await getbalans();
        //console.log(repartidores.length);
        res.render('balans', {
            login: true,
            titulo: 'balans',
            tipo: user.tipo,
            name: user.nombre,
            balanso
            //gandi: gananciadia[0].ganancia_total
        });
    } else {
        res.redirect('/')
    }
});

// app.get('/data', (req, res) => {
//     res.send('data');
// });

app.listen(port, () => {
    console.log('Servidor iniciado, Escuchando el Puerto 3000');
})