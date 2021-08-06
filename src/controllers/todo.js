const { todo } = require('../../models');

exports.getTodos = async (req, res) => {
  try {
    const data = await todo.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.send({
      status: 'success',
      message: 'Todos Successfully Get',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { body } = req;

    await todo.create(body);

    res.send({
      status: 'success',
      message: 'Todo Successfully Add',
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
