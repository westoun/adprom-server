export default (sequelize, DataTypes) => {
  const Story = sequelize.define(
    'Story',
    {
      storyId: {
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
      },
      plannedHours: {
        type: DataTypes.INTEGER
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Story.associate = models => {
    Story.belongsTo(models.Project, {
      foreignKey: 'fkProjectId',
      targetKey: 'projectId'
    });
  };

  Story.associate = models => {
    Story.hasMany(models.Task, {
      foreignKey: 'fkStoryId',
      sourceKey: 'storyId'
    });
  };

  return Story;
};
