const { gql } = require('apollo-server');

module.exports = gql`
  type SocialLinks {
    website: String
    linkedin: String
    twitter: String
    codepen: String
    github: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    profilePhotoUrl: String
    bio: String
    links: SocialLinks
    courses: [Course!]
  }

  type Lesson {
    id: ID!
    title: String!
    description: String!
    videoUrl: String!
    transcript: String
  }

  type Module {
    title: String!
    lessons: [Lesson!]!
  }

  type Course {
    id: ID!
    title: String!
    tags: [String!]
    author: User!
    description: String!
    modules: [Module!]!
  }

  input NewLessonInput {
    id: ID
    title: String!
    description: String!
    videoUrl: String!
    transcript: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    courses: [Course]
    course(id: ID!): Course
    lesson(id: ID!): Lesson
  }

  type Mutation {
    newLesson(input: NewLessonInput!): Lesson!
  }
`;
