export default (sequelize, DataTypes) => {
    const ProjectIdea = sequelize.define('ProjectIdea', {
      projectIdeaId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
    return ProjectIdea;
  };