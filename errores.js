export class WordNotFound extends Error {
  constructor(message) {
      super(message);
      this.name = "WordNotFound";
  }
}

export class DatabaseError extends Error {
  constructor(message) {
      super(message);
      this.name = "DatabaseError";
  }
}

export class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}