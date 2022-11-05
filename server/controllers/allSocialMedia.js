const getEmails = (req, res) => {
    res.json("All emails");
}

const addEmail = (req, res) => {
    res.json("Add email address");
}

const deleteEmail = (req, res) => {
    res.json("Remove email address");
}

const updateEmail = (req, res) => {
    res.json("Update email address");
}

module.exports = { getEmails, addEmail, deleteEmail, updateEmail };