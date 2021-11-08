# nearby
An app that connects local buyers to sellers. This app has two roles: `Buyer` & `Seller`. 

- A Buyer can log in and make purchases. 
- A seller can add products, sell them in 5-10 pin codes within his territory.

## Code Structure

[Find Latest here:](./tree.txt)

# Files

- `start.js` - main entry file, starts server and configures mongoose.
- `app.js` - setup for express, used to configure 'supertest' for API testing in Jest.
- `.env` - file containing all the secrets. (not to be committed on git)

- `jsonconfig.json` - used for workspace settings + babel configuration
- `.babelrc.js` - configures babel to support absolute paths. This makes importing modules a breeze.
- `jest.config.js` - Jest related configuration.
- `.gitignore` - tracks files and folders not to be commited to the git working tree. 

# Folders

- `_config` - contains app level configuration, that is not a secret. 
- `_utils` -  contains app level utilities used almost everywhere in the project. This allows to maintain structure and avoid repeatability.

- `models` - Mongoose Models & Schema
- `controllers` - Express controllers to be run at certain endpoints. Controllers are wrapped in `handleErrors` wrapper for error handling. 
- `middlewares` - It contains middlewares for the app.
- `validators` - Validator middlewares to run before the controller code is executed. 

- `setups` - It is used to configure libraries specific settings.

- `tests` - It contains tests for testing REST Endpoints. All test files are of the format `*.test.js`

# ENV File

```
   MONGODB_URI=<your-mongodb-uri>
   PORT=<your-port>
```