const User = require('../models/user-model');

async function getUsers(req, res) {
  try {
    const users = await User.find().select();
    console.log(users);
    res.status(200).json({status: 'success', data: {users}});
  } catch (error) {
    console.log('Error fetching users', error);
  }
}

module.exports = {
  getUsers,
};
