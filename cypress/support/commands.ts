import "cypress-xpath";
import * as env from "../constants/env";
import * as loginPage from "../constants/loginPage";
import * as addPostsPage from "../constants/addPostsPage";
import * as allPostsPage from "../constants/allPostsPage";
import * as blogPostPage from "../constants/blogPostPage";

Cypress.Commands.add("login", () => {
  cy.clearCookies();
  cy.visit("/");
  cy.get(loginPage.UsernameField).type(env.USER_NAME, { log: false });
  cy.get(loginPage.PasswordField).type(env.PASSWORD, { log: false });
  cy.get(loginPage.LogInButton).click();
});

Cypress.Commands.add("addPost", (File, Title, Summary, Content) => {
  cy.get(addPostsPage.UploadFileButton).selectFile(File, { force: true });
  cy.get(addPostsPage.TitleField).type(Title);
  cy.get(addPostsPage.SummaryField).type(Summary);
  cy.get(addPostsPage.ContentField).type(Content);
  cy.get(addPostsPage.ContinueButton).click({ force: true });
  cy.get(addPostsPage.PublishSwith).click();
  cy.get(addPostsPage.FeaturedPostSwith).click();
  cy.xpath(addPostsPage.SaveButton).click();
});

Cypress.Commands.add("deleteLastPost", () => {
  cy.xpath(blogPostPage.AllPostsButton).click();
  cy.get(allPostsPage.EditPostButton).first().click();
  cy.xpath(allPostsPage.DeletePostButton).click();
});
