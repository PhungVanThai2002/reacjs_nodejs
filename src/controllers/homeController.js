
let getHomePage = (req,res) => {
    return res.render('homepage.ejs');
}
let getTestHomePage = (req,res) => {
    return res.render('testHomePage.ejs');
}
module.exports = {
    getHomePage:getHomePage,
    getTestHomePage:getTestHomePage
}