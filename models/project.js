export default (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      projectId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      title: {
          type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      favorite: {
        type: DataTypes.BOOLEAN
      },
      archived: {
        type: DataTypes.BOOLEAN
      },
      deadline: {
        type: DataTypes.DATE
      },
      color: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    Project.associate = (models) => {
      Project.hasMany(models.Task, { foreignKey: "fkProjectId", sourceKey: "projectId" });
    };

    Project.associate = (models) => {
      Project.hasMany(models.TaskIdea, { foreignKey: "fkProjectId", sourceKey: "projectId" });
    };

    Project.associate = (models) => {
      Project.hasMany(models.LearningGoal, { foreignKey: "fkProjectId", sourceKey: "projectId" });
    };

    Project.associate = (models) => {
      Project.hasMany(models.Story, { foreignKey: "fkProjectId", sourceKey: "projectId" });
    };
  
    return Project;
  };