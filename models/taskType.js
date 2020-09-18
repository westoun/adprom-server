export default (sequelize, DataTypes) => {
    const TaskType = sequelize.define('TaskType', {
      taskTypeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      }, 
      icon: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    TaskType.associate = (models) => {
      TaskType.hasMany(models.Task, { foreignKey: "fkTaskTypeId", sourceKey: "taskTypeId" });
    };
  
    return TaskType;
  };