
const getFavorites = (req, res) => {
    res.json("All emails");
}

const addFavorite = (req, res) => {
    res.json("Add email address");
}

const deleteFavorite = (req, res) => {
    res.json("Remove email address");
}


module.exports = { getFavorites, addFavorite, deleteFavorite};