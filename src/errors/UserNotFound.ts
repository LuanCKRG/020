export class UserNotFoundError extends Error {
  constructor() {
    super('Email não cadastrado')
  }
}
