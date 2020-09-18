export default (sequelize, DataTypes) => {
    const LearningGoal = sequelize.define('LearningGoal', {
      learningGoalId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      fkProjectId: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      }, 
      description: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    LearningGoal.associate = (models) => {
      LearningGoal.belongsTo(models.Project, { foreignKey: "fkProjectId", targetKey: "projectId" });
    };
  
    return LearningGoal;
  };