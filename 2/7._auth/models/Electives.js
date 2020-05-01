const { Model } = require('objection');
const User = require("./User")

class Electives extends Model{
    
    static tableName = "electives";

    static relationMappings = {
        user: {
          relation: Model.BelongsToOneRelation,
          modelClass: User,
          join: {
            from: 'electives.userId',
            to: 'users.id'
          }
        }
      };
    }

module.exports = Electives;
