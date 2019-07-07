const { QuizToUserType } = require("./schema");
const { db } = require("./db");
const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "root mutation",
  fields: () => ({
    insertIDs: {
      type: QuizToUserType,
      description: "Insert user and quiz id",
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        quiz_id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return db
          .one(
            "INSERT INTO quizz_to_user (user_id, quiz_id) VALUES ($1, $2)RETURNING *",
            [args.user_id, args.quiz_id]
          )
          .then(res => {
            return res;
          })
          .catch(error => {
            console.log("ERROR:", error);
          });
      }
    }
  })
});

exports.RootMutationType = RootMutationType;
