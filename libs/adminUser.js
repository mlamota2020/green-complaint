const User = require("./../models/User");
/** Create an admin's user for developing. */
const createAdminUser = async () => {
  const adminUser = await User.findOne({ email: "admin@localhost" });

  if (adminUser) return;

  const newUser = new User({
    name: "admin",
    email: "admin@localhost",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user has been deleted or corrupted. Another account has been created:", admin);
};

module.exports = { createAdminUser };
