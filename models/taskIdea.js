export default (sequelize, DataTypes) => {
  const TaskIdea = sequelize.define(
    'TaskIdea',
    {
      taskIdeaId: {
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
    }
  );

  TaskIdea.associate = models => {
    TaskIdea.belongsTo(models.Project, {
      foreignKey: 'fkProjectId',
      targetKey: 'projectId'
    });
  };

  return TaskIdea;
};
