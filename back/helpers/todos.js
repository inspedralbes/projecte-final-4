var db = require('../models');

exports.getAdmin = function(req, res){
    db.Admin.find()
    .then(function(admins){
        res.json(admins);
    })
    .catch(function(err){
        res.send(err);
    })
}
exports.signin = (req, res) => {
    db.Admin.findOne({
      usuario: req.body.usuario,
    })
      .exec((err, usuario) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (!usuario) {
          return res.status(404).send({ message: "User Not found." });
        }
        // var passwordIsValid = bcrypt.compareSync(
        //   req.body.password,
        //   user.password
        // );
        // if (!passwordIsValid) {
        //   return res.status(401).send({ message: "Invalid Password!" });
        // }
        // var token = jwt.sign({ id: user.id }, config.secret, {
        //   expiresIn: 86400, // 24 hours
        // });
        // var authorities = [];
        // for (let i = 0; i < user.roles.length; i++) {
        //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        // }
        // req.session.token = token;
        // res.status(200).send({
        //   id: user._id,
        //   username: user.username,
        //   email: user.email,
        //   roles: authorities,
        // });
      });
  };
exports.getAdminId = function(req, res, next){
    
 }

exports.getPuntuaciones = function(req, res){
    db.Punt.find()
    .then(function(Punts){
        res.json(Punts);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createPuntuaciones = function(req, res){
    db.Punt.create(req.body)
    .then(function(newPunt){
        res.status(201).json(newPunt);
    })
    .catch(function(err){
        res.send(err);
    })
  }

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
  db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateTodo =  function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteTodo = function(req, res){
   db.Todo.remove({_id: req.params.todoId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;