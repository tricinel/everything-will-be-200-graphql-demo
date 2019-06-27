# Everything will be 200

When was the last time you asked your back-end dev how to fetch data from the server, which data is available and if they can possibly extend the API end point with some fields your front-end needs? If you're anything like me, it was sometime in the last 10 days. If you are me, it was yesterday!

The problem is that there is a tight relationship between the client and the server. The API end points are the gatekeepers of the data. They're not in place to help you retrieve the data you need, but rather to stop you from retrieving any data they don't specifically allow. In exactly this format. In exactly this shape. At exactly this location. By asking for it with exactly designed structures in place.

This tight relationship quickly turns from love to hate because the server describes what you can do while the client describes what you need to do. Capabilities vs. needs. When they don't match, one of them must give. This takes time and when sprint review is coming and your release date is yesterday, it's your turn to explain why all customers are named Undefined Undefined.

But what if it doesn't have to be like that? What if you can ask the server for the data you need, in the shape you want it and get back from the server exactly that data, in that shape, all ready to use in your UI?

With kick-ass tooling, support for loads of programming languages, self-documenting code (no, really), no under or over fetching and a single entry point to rule them all, GraphQL can make everything be 200. OK.

## The code

This is the code used in the meetup for GraphQL.

### Get it set up

Install everything with

```
yarn
```

Run a dev server by running

```
yarn dev
```

If you have a `now.sh` account (it's free), you can deploy by running

```
now
```
