var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://FasTik:Tbt3SS6s36@cluster0.t7hx9yq.mongodb.net/?retryWrites=true&w=majority');

var schema =mongoose.Schema({
  name: String
})

schema.methods.meow = function() {
  console.log(this.get("name") + " say meow")
}

var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({ name: 'Пушок' });
kitty.save(function (err) {
  kitty.meow()
})
