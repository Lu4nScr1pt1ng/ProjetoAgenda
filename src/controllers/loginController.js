const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login');
  };
  
exports.register = async function(req, res) {
    let login = new Login(req.body);
    await login.register();

    console.log(login)

    if(login.errors.lenght > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('back');
        });
        return;
    }

    res.send(login.errors);
};