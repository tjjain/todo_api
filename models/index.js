var mongoose  = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb+srv://Tanmaya:Tanmayajain@11@cluster0-gv5gs.mongodb.net/test?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("connected to databade!");
}).catch(err=>{
	console.log("Error");
	console.log(err);
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
