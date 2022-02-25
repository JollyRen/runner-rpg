[YouTube link — https://youtu.be/5TSJAplPGv8](https://youtu.be/5TSJAplPGv8)
# Introducing RUNNER puzzle RPG

To start, use `npm run seed`, then `npm run build`, and finally `npm start`. This creates a localhost server at port `3000`.

However, it's unlikely to show anything at all, except for perhaps footer buttons. The project is currently not getting data for the components, and therefore isn't loading. I'm in the process of getting the express routes and middleware set up, in order to pull data, and to navigate through an API list of my own creation.

As for hosting, I plan to later host on Heroku using postgresql database technology for my database.

# What is RUNNER?

## RUNNER is a text-based puzzle RPG

The base-case for RUNNER is to make runs on dataforts and break through Ice — security programs of `Sentry`, `Codegate`, or `Firewall` variety. In future versions, it won't be a simple rock-paper-scissors game, but also include program subroutines, which each individual Ice will have. Abilities, if you will. These will be simple action types that will be processed through a reducer to cause an effect in the game, on-screen.

RUNNER is a text game, but it will have visual elements such as a dashboard that wraps the screen, and within which the console will be set. The console is the main focus of the game, which will display results of actions in commented out code snips.

In fact, there may be a later implementation of "adjusting code" in order to pass Ice with your programs, necessitating basic coding knowledge and principles. The intention is to be mildly instructive for the user.

## RUNNER is set in a cyberpunk world
where corporations are as — or more — powerful than governments. RUNNERS come in many varieties, such as Street Samurai, Deckers, and more. This game focuses on Deckers — runners who go on dataruns. These runs are for clients that need data, to expunge records that affect their lives, to obtain data to make a change in the world, to finance other endevours, or just to bring down "the man."

A Runner "jacks in" to the matrix through a deck, a specialized computer that allows a runner to visualize and interact with the Matrix, a virtual construct of data systems through 'trodes. They used programs installed on the deck itself that are akin to hacking tools. Some may be viruses, stealthware, Icebreakers, or Sentry Killers. Runners may also employ various cybernetic implants to augment this, such as storing programs directly in their brains, or integrating a deck into their body. They may even get systems installed as a buffer between themselves and the deck to prevent brain-damage on Sentry feedback designed to fry the offending RUNNER.

# Technologies Explored in RUNNER

RUNNER uses [npx nano-react-app](https://github.com/nano-react-app) to generate a "boilerplate" for a react project. It uses [Vite](https://vitejs.dev/) instead of node, nodemon, and webpack. It loads a localhost, rolls up modules and uses ES Modules natively, utilizing `Babel` and [esbuild](https://esbuild.github.io/).

My goal for this project was to create an application WITHOUT the use of `redux` if possible, and using `React hooks`. I'm well on my way to getting through this, though there have been issues in converting over to a "bleeding edge" latest version of react and other technologies. My node should be updated to 17 for this project, I recently realized, but I'll have to modify it to make up for that, perhaps depricating some versions.

A current list of technologies are:

- PostgreSQL
- PG
- Node 16
- Sequelize
- React 17
- Express
- Axios
- Vite
- Babel
- Nano-React-App

In the future, I also plan to implement a basic visual representation of the matrix and navigating the space using [Kaboom](https://kaboomjs.com/) or another game engine.
