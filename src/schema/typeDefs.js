const { gql } = require('apollo-server');

module.exports = gql`
  """
  Users can have links to their social profiles or other web properties.
  """
  type SocialLinks {
    website: String
    linkedin: String
    twitter: String
    codepen: String
    github: String
  }

  """
  A User is required to log in and use the platform. Users can also publish courses, as well as subscribe to participate in any of the lessons.
  """
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    """
    The URL of the profile photo can be either a local URL or an S3 link.
    """
    profilePhotoUrl: String
    bio: String
    links: SocialLinks
    """
    If the User has published any courses, they will be available here.
    """
    courses: [Course!]
  }

  """
  A Lesson is a single entity in the form of a video with an optional transcript.
  """
  type Lesson {
    id: ID!
    title: String!
    description: String!
    videoUrl: String!
    transcript: String
    url: String!
  }

  """
  A Module consists of a title and one or more Lessons.
  """
  type Module {
    title: String!
    lessons: [Lesson!]!
  }

  """
  A Course consists of Modules.
  """
  type Course {
    id: ID!
    title: String!
    tags: [String!]
    author: User!
    description: String!
    """
    Modules are a collections that group Lessons into logical units.
    """
    modules: [Module!]!
    category: String
      @deprecated(
        reason: "Support for categories will be discontinued soon. Please use tags in order to search."
      )
    url: String!
  }

  """
  In order to create a new Lesson, this is what you need to pass as the input parameter.
  """
  input NewLessonInput {
    id: ID
    title: String!
    description: String!
    videoUrl: String!
    transcript: String
    url: String!
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
