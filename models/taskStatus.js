export default (sequelize, DataTypes) => {
    const TaskStatus = sequelize.define('TaskStatus', {
      taskStatusId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    TaskStatus.associate = (models) => {
      TaskStatus.hasMany(models.Task, { foreignKey: "fkTaskStatusId", sourceKey: "taskStatusId" });
    };

    return TaskStatus;
  };