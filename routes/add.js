var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newFriend = {
		"name":req.query.name,
		"description":req.query.description,
		"imageURL": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1/c44.156.552.552/s200x200/1014174_524517700949440_1156023979_n.jpg",
	}
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add');	
 }