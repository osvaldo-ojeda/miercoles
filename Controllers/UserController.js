import { User, Role } from "../Models/models.js";

class UserController {
  // createUser(){}
  createUser = async (req, res) => {
    try {
      const { name, mail, password, roleId } = req.body;
      const data = await User.create({ name, mail, password, roleId });
      res.status(201).send({
        success: true,
        message: `Usuario ${data.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  readAllUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["name", "mail", "isActive", "roleId"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        attributes: ["name", "mail", "isActive"],
        where: { id },
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({
        where: { id },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, mail, isActive } = req.body;
      const data = await User.update(
        { name, mail, isActive },
        { where: { id } }
      );
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
}

export default UserController;
