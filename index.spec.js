const EasyGraphQLTester = require("easygraphql-tester");

const { schema } = require("./app");

describe("Test queries and mutations", () => {
  let tester;

  before(() => {
    tester = new EasyGraphQLTester(schema);
  });

  after(() => {
    process.exit();
  });

  describe("queries on users path", () => {
    it("returns false if passed an invalid query on users", () => {
      const invalidQuery = `
        {users {
          user_id
          username
          email_address
          invalidField
        }}
      `;
      tester.test(false, invalidQuery);
    });

    it("should return true if passed a valid query on users", () => {
      const validQuery = `
        {
          users {
            email_address
          }
        }
      `;
      tester.test(true, validQuery);
    });

    describe("queries on quizzes path", () => {
      it("returns false if passed an invalid query on users", () => {
        const invalidQuery = `
        {
          quizzes {
            invalidField
        }
      }
      `;
        tester.test(false, invalidQuery);
      });

      it("should return true if passed a valid query on quizzes", () => {
        const validQuery = `
        {
          quizzes {
            quiz_title
          }
        }
      `;
        tester.test(true, validQuery);
      });
    });
    describe("queries on questions path", () => {
      it("returns false if passed an invalid query on questions", () => {
        const invalidQuery = `
        {
          questions {
            invalidField
        }
      }
      `;
        tester.test(false, invalidQuery);
      });

      it("should return true if passed a valid query on questions", () => {
        const validQuery = `
        {
          questions {
            question_id
          }
        }
      `;
        tester.test(true, validQuery);
      });
    });
    describe("queries on questionsByQuizID path", () => {
      it("returns false if passed an invalid query", () => {
        const invalidQuery = `
        {
          questionsByQuizID(quiz_name: "Simple arithmetics) {
            question_id
        }
      }
      `;
        tester.test(false, invalidQuery);
      });

      it("should return true if passed a valid query", () => {
        const validQuery = `
        {
          questionsByQuizID(quiz_id: 1) {
            question_id
          }
        }
      `;
        tester.test(true, validQuery);
      });
    });
    describe("queries on userByEmail path", () => {
      it("returns false if passed an invalid query", () => {
        const invalidQuery = `
        {
          userByEmail(user_id: 1) {
            username
        }
      }
      `;
        tester.test(false, invalidQuery);
      });

      it("should return true if passed a valid query", () => {
        const validQuery = `
        {
          userByEmail(email_address: "quizzee@quiz.quiz") {
            username
          }
        }
      `;
        tester.test(true, validQuery);
      });
    });
    describe("queries on quizByTitle path", () => {
      it("returns false if passed an invalid query", () => {
        const invalidQuery = `
        {
          quizByTitle(user_id: 1) {
            quiz_id
        }
      }
      `;
        tester.test(false, invalidQuery);
      });

      it("should return true if passed a valid query", () => {
        const validQuery = `
        {
          quizByTitle(quiz_title: "Simple arithmetics") {
            quiz_id
          }
        }
      `;
        tester.test(true, validQuery);
      });
    });
  });
});
