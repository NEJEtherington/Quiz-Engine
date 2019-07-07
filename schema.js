const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "Users",
  description: "This represents a user",
  fields: () => ({
    user_id: { type: GraphQLInt },
    username: { type: GraphQLNonNull(GraphQLString) },
    email_address: { type: GraphQLNonNull(GraphQLString) }
  })
});
exports.UserType = UserType;

const QuizType = new GraphQLObjectType({
  name: "Quizzes",
  description: "This represents a quiz",
  fields: () => ({
    quiz_id: { type: GraphQLInt },
    quiz_title: { type: GraphQLString },
    published: { type: GraphQLBoolean },
    times_quiz_taken: { type: GraphQLInt },
    bracket_1: { type: GraphQLInt },
    bracket_2: { type: GraphQLInt },
    bracket_3: { type: GraphQLInt },
    bracket_4: { type: GraphQLInt },
    bracket_5: { type: GraphQLInt },
    bracket_6: { type: GraphQLInt },
    bracket_7: { type: GraphQLInt },
    bracket_8: { type: GraphQLInt },
    bracket_9: { type: GraphQLInt },
    bracket_10: { type: GraphQLInt }
  })
});
exports.QuizType = QuizType;

const QuestionType = new GraphQLObjectType({
  name: "Questions",
  description: "This represents a question",
  fields: () => ({
    question_id: { type: GraphQLInt },
    quiz_id: { type: GraphQLInt },
    question_text: { type: GraphQLNonNull(GraphQLString) },
    answer_1: { type: GraphQLNonNull(GraphQLString) },
    answer_2: { type: GraphQLNonNull(GraphQLString) },
    answer_3: { type: GraphQLNonNull(GraphQLString) },
    answer_4: { type: GraphQLNonNull(GraphQLString) },
    correct_answer: { type: GraphQLNonNull(GraphQLString) }
  })
});
exports.QuestionType = QuestionType;

const QuizToUserType = new GraphQLObjectType({
  name: "Quizzes to users",
  description:
    "This represents the scores achieved by a user for a given quiz, and the answers given by the user to separate questions",
  fields: () => ({
    user_id: { type: GraphQLInt },
    quiz_id: { type: GraphQLInt },
    question_id: { type: GraphQLInt },
    answer_selected: { type: GraphQLString }
  })
});
exports.QuizToUserType = QuizToUserType;
