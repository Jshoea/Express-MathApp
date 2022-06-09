/**We are going to create an 'extend' of Error */

class ExpressError extends Error {
  constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
      console.error(this.stack);
  }
}

module.exports = ExpressError;