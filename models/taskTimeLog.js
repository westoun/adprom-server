export default (sequelize, DataTypes) => {
  const TaskTimeLog = sequelize.define(
    'TaskTimeLog',
    {
        taskTimeLogId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        fkTaskId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  TaskTimeLog.associate = (models) => {
    TaskTimeLog.belongsTo(models.Task, {
      foreignKey: 'fkTaskId',
      targetKey: 'taskId'
    });
  };

  return TaskTimeLog;
};
