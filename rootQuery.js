const { UserType, QuizType, QuestionType } = require("./schema");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} = require("graphql");
const { db } = require("./db");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: "List of all users",
      resolve(obj, args) {
        return db.many("SELECT * FROM users");
      }
    },
    quizzes: {
      type: new GraphQLList(QuizType),
      description: "List of all quizzes",
      resolve(obj, args) {
        return db.many("SELECT * FROM quizzes");
      }
    },
    questions: {
      type: new GraphQLList(QuestionType),
      description: "List of all questions",
      resolve(obj, args) {
        return db.many("SELECT * FROM questions");
      }
    },
    quizByTitle: {
      type: QuizType,
      description: "A single quiz",
      args: {
        quiz_title: { type: GraphQLString }
      },
      resolve(obj, args) {
        return (
          db.one("SELECT * FROM quizzes WHERE quiz_title = $1"),
          [args.quiz_title]
        );
      }
    },
    //Although passing the test, quizByTitle returns null and this needs addressing
    userByEmail: {
      type: UserType,
      description: "A single user",
      args: {
        email_address: { type: GraphQLString }
      },
      resolve(obj, args) {
        return db.one("SELECT * FROM users WHERE email_address = $1", [
          args.email_address
        ]);
      }
    },
    questionsByQuizID: {
      type: new GraphQLList(QuestionType),
      description: "All questions belonging to a particular quiz",
      args: {
        quiz_id: { type: GraphQLInt }
      },
      resolve(obj, args) {
        return db.many("SELECT * FROM questions WHERE quiz_id = $1", [
          args.quiz_id
        ]);
      }
    }
  })
});

exports.RootQueryType = RootQueryType;
