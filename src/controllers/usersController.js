const controller = {
    login: (req, res) => {
      res.render('users/login.ejs')
    },
    registro: (req, res) => {
        res.render('users/registro.ejs')
      },
  }
  
  module.exports = controller