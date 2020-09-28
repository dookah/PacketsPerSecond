//Render the First Page 
exports.root = (req, res) => {
   res.json({'hello': 'world'})
}

exports.home = (req, res) => {
   res.render("home")
}