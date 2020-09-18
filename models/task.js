export default (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      taskId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      fkProjectId: {
        type: DataTypes.STRING
      },
      fkStoryId: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      }, 
      description: {
        type: DataTypes.STRING
      },
      plannedHours: {
        type: DataTypes.INTEGER
      },
      completed: {
        type: DataTypes.BOOLEAN
      },
      fkTaskStatusId: {
        type: DataTypes.STRING
      },
      priority: {
        type: DataTypes.INTEGER
      },
      date: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    Task.associate = (models) => {
      Task.belongsTo(models.Project, { foreignKey: "fkProjectId", targetKey: "projectId" });
    };

    Task.associate = (models) => {
      Task.belongsTo(models.Story, { foreignKey: "fkStoryId", targetKey: "storyId" });
    };

    Task.associate = (models) => {
      Task.belongsTo(models.TaskStatus, { foreignKey: "fkTaskStatusId", targetKey: "taskStatusId" });
    };

    Task.associate = (models) => {
      Task.belongsTo(models.TaskType, {
        foreignKey: "fkTaskTypeId",
        targetKey: "taskTypeId"
      });
    }

    Task.associate = (models) => {
      Task.hasMany(models.TaskLog, {
        foreignKey: "fkTaskId",
        sourceKey: "taskId"
      });
    };

    Task.associate = (models) => {
      Task.hasMany(models.TaskTimeLog, {
        foreignKey: "fkTaskId",
        sourceKey: "taskId"
      });
    };

    return Task;
  };