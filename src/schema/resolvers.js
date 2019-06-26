const { users, courses, lessons } = require('../data.json');
const { guid, findById, convertId } = require('../utils');

module.exports = {
  Query: {
    async users() {
      return await users;
    },
    async user(_, args) {
      return await findById(users, args.id);
    },
    async courses() {
      return await courses;
    },
    async course(_, args) {
      return await findById(courses, args.id);
    },
    async lesson(_, args) {
      return await findById(lessons, args.id);
    }
  },
  Mutation: {
    newLesson(_, args) {
      const lesson = {
        ...args.input,
        _id: args.input.id || guid()
      };

      // Now we can save the lesson as needed
      // For this exercise, we'll just return it
      return lesson;
    }
  },
  User: {
    id: convertId,
    courses(res) {
      return courses.filter(({ authorId }) => authorId === res._id);
    }
  },
  Course: {
    id: convertId,
    author(res) {
      return findById(users, res.authorId);
    }
  },
  Module: {
    lessons(res) {
      return res.lessons.map(lessonId => findById(lessons, lessonId));
    }
  },
  Lesson: {
    id: convertId
  }
};
