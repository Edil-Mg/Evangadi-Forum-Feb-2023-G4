import  userService from './users.service.js';
//Importing bcryptJs module to use password encryption
import bcrypt from 'bcryptjs';
//Importing database structure 
import {connection} from '../../config/db.js';
import jwt from 'jsonwebtoken';

const userController = {
  createUser: (req, res) => {
        //console.log(req.body);
        let user_id;
        const {firstName,middleName, lastName,otherName, email, password } = req.body;
        //validation 
        if (!firstName || !middleName || !otherName || !lastName || !email || !password)
            return res.status(400).json({ msg: 'Not all fields have been provided!' })
        
        //username genarating
        connection.query(`SELECT * FROM registration WHERE user_name = ?`, [firstName], (errors, results) => { 
            if (results.length > 0) { 
            req.body.userName = `${firstName}${generateRandomTwoDigitNumber()}`;
          }
            else {
               req.body.userName = firstName;
          }
           
        
    
       
        // validate password using regular expression
        const validationResult = validatePassword(password);
        if (!validationResult)
            return res
                .status(400)
                .json({ msg:  validationResult.errors})
        

        // check the email is alredy taken
        connection.query('SELECT * FROM registration WHERE user_email = ?',
            [email],
            (err, results) => {
                if (err) {
                    return res
                        .status(err)
                        .json({ msg: "database connection err during email checking" })
                }

                if (results.length > 0) {
                    return res
                        .status(400)
                        .json({ msg: "An account with this email already exists!" });
                } else {
                    //password encryption
                    const salt = bcrypt.genSaltSync();
                    req.body.password = bcrypt.hashSync(password, salt);

                    //sending data to register
                    userService.register(req.body, (err, results) => {
                        if (err) {
                            console.log(err);
                            return res
                                .status(500)
                                .json({ msg: "database connection err during inserting to registration table" });
                        }
                        req.body.userId = results.insertId;
                        userService.profile(req.body, (err, results) => {
                                if (err) {
                                    console.log(err);
                                    return res
                                        .status(500)
                                        .json({ msg: "database connection err" });
                                }
                                return res.status(200).json({
                                    msg: "New user added successfully",
                                    data: results
                                })
                            })
                    })
                }
            })
        })
        },
    getUsers: (req, res) => {
        getAllUsers((err, results) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .json({ msg: "database connection err" });
            }
            return res.status(200).json({ data: results });
        })
  },
    
    getUserById: (req, res) => {
        userService.userById(req.id, (err, results) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .json({ msg: "database connection err" })
            }
            if (!results) {
                return res.status(404).json({ msg: "Record not found" });
            }
            return res.status(200).json({ data: results })
        })
    },
    login: (req, res) => {
        const { email, password } = req.body;
        //validation
        if (!email || !password)
            return res
                .status(400)
          .json({ msg: 'Not all fields have been provided!' })
        //check email existance
        userService.getUserByEmail(email, (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).json({ msg: "database connection err" })
            }
            if (!results) {
                return res
                    .status(404)
                    .json({ msg: "No account with this email has been registered" })
          }
          // check password 
            const isMatch = bcrypt.compareSync(password, results.user_password);
            if (!isMatch)
                return res
                    .status(404)
                    .json({ msg: "Invalid Credentials incorrect password" })
            const token = jwt.sign({ id: results.user_id, username: results.user_name }, process.env.JWT_SECRET, { expiresIn: "1m" });
            return res.json({
                token,
                user: {
                    id: results.user_id,
                    userName: results.user_name
                }
            })
        })
    }
}

const validatePassword = (password)=> {
  const errors = [];

  // Validate password length
  if (!/.{8,}/.test(password)) {
    errors.push('Password must be at least 8 characters long.');
  }

  // Validate uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }

  // Validate lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }

  // Validate digit
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one digit.');
  }

  // Validate special character
  if (!/[$@$!%*?&]/.test(password)) {
    errors.push('Password must contain at least one special character.');
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors: errors
    };
  }

  return {
    valid: true
  };
}

const  generateRandomTwoDigitNumber =()=> {
  return Math.floor(Math.random() * 90 + 10);
}


export default userController;







