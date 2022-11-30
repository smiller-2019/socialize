const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/users/:update
router.route("/:userId").put(updateUser);

// /api/users/:userId
router.route("/:userId").delete(deleteUser);

// // /api/users/:userId/friends/:firendId
router.route("/:userId/friends/:friendId").post(addUserFriend);

// // /api/users/:userId/friends/:firendId
router.route("/:userId/friends/:friendId").delete(removeUserFriend);

module.exports = router;
