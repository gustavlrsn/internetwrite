# internetwrite

### Idea

A collaborative writing experience, where a new word is formed every hour (?), from the most popular/common word submitted by the users.

It is also open source, and the source code is also allowed to change, although here there is some moderation as opposed to the writing experience. But this allows the project to evolve.

### ideas

- give out achievements, like, first vote on winning word.
- let the open soure community add features, like comments on words and stuff, captcha, and what not.
- if there is no vote at all, print a dot.
- launch it while it is live, dont set a launch date in advance etc.
- send emails to everybody signed up, once a day with the latest words
  - ability to change to once a week, or unsubscribe in email

### Implementation

### Frontend

- Next.js.
- A simple, clean and minimal design. Very much focused on the content.
- Display votes or not?
  - more interactive if you display votes..
- comment on words? would be kind of cool...
- encourage collaboration?
- live chat?

### Authentication

To prevent too much cheating/voting multiple times, some kind of email verification and authentication makes sense.

A easy, simple solution would be a password-less email based flow, inspired by https://zeit.co.

- Google/facebook/twitter auth?
  - at least google maybe makes sense...

### Backend

- GraphQL API (good for realtime...).
- Storing votes in mongo
- cronjob every 1 hour:
  - calculate the most popular word from the last hour
  - save word to db, with some metadata like: voting statistics
  - empty out database with votes
- collections:
  - votes
  - words
  - users

### name ideas:

- internetwrite .com
- internetwrites .com
- lettertoself .com
- lettertoearth .com
- letter to humanity
- worldlog
- hourword .com
- hourperword.com
- wordperhour.com
- 1wordperhour.com
- onewordperhour.com
- democraticwriting.com
- democracywrites.com
- writeby.vote
- writing.vote
- writer.vote
