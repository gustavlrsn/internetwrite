# internetwrite

### Idea

A collaborative writing experience, where a new word is formed every hour (?), from the most popular/common word submitted by the users.

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
