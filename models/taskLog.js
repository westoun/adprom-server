export default (sequelize, DataTypes) => {
  const TaskLog = sequelize.define(
    'TaskLog',
    {
      taskLogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fkTaskId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  TaskLog.associate = models => {
    TaskLog.belongsTo(models.Task, {
      foreignKey: 'fkTaskId',
      targetKey: 'taskId'
    });
  };

  return TaskLog;
};
