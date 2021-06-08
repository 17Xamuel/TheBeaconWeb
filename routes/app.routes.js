const express = require("express");
const db = require("../db/firebase");

const router = express.Router();
const users = db.collection("users");
const classes = db.collection("classes");

router.post("/new_user", async (req, res) => {
  const reg_no = req.body.reg_no ? req.body.reg_no : "";
  const user_course = reg_no.slice(10, 13).toUpperCase();
  const user_year = reg_no.slice(0, 2);
  const user_class = user_course + "-" + user_year;

  let user_obj = {
    user_name: req.body.username,
    reg_no: req.body.reg_no,
    user_password: req.body.password,
    user_class,
    user_profile_photo: null,
  };
  try {
    const user = await users.where("reg_no", "==", `${user_obj.reg_no}`).get();
    if (user.empty) {
      const user_res = await users.add(user_obj);
      let new_user = {
        user_name: user_obj.user_name,
        reg_no: user_obj.reg_no,
        user_id: user_res.id,
      };
      res.send(JSON.stringify(new_user));
    } else {
      res.send("Problem with Reg Number");
    }
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await users.where("reg_no", "==", `${req.body.reg_no}`).get();
    let auth_user = "";
    if (user.empty) {
      res.send("user not found");
    } else {
      user.forEach((i) => {
        if (i.data().user_password == req.body.password) {
          auth_user = i.data();
          res.send(auth_user);
        } else {
          res.send("Wrong Password");
        }
      });
    }
    res.send(auth_user);
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

router.get('/admin/feed',(req,res)=>{

})
module.exports = router;
