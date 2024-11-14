export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<JQuery<HTMLElement>>;
      addPost(
        File: string,
        Title: string,
        Sammary: string,
        Content: string
      ): Chainable<JQuery<HTMLElement>>;
      deleteLastPost(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
