import { Request, Response } from "express";
const User = require("../../aplication/User/Model/user.model") 
const Post = require( "../../aplication/Post/Model/post.model" );

export const Profile = async (req: Request, res: Response) => {
    try {   
      const userID = req.cookies.usersession
      const user = await User.findById(userID);
        if (!user) {
            console.log(userID)
            return res.status(404).send("Usuario no encontrado");
        }
        // Suponiendo que tienes un modelo de publicación asociado al usuario
        const posts = await Post.find({ idUser: userID });
      res.render('profile/index', {user, posts})
    } catch (error) {
      res.status(500).send("Error al obtener el usuario");
    }
  };
