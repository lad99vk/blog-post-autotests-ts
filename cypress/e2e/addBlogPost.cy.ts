import * as allPostsPage from "../constants/allPostsPage";
import * as blogPostPage from "../constants/blogPostPage";
import * as profileMenu from "../constants/profileMenu";
import * as postContent from "../fixtures/postContent";

describe("Home Page - Interact", () => {
  before(() => {
    cy.login();
  });

  it("Сheck the creation of the blog post", () => {
    cy.get(profileMenu.UserIcon).click();
    cy.get(profileMenu.AddBlogPostButton).click();

    cy.intercept("GET", /\/recommended-content$/).as("recommended-content");
    cy.addPost(
      postContent.FilePath,
      postContent.TitleText,
      postContent.SummaryText,
      postContent.ContentText
    );
    cy.wait("@recommended-content", { timeout: 100000 });

    cy.xpath(blogPostPage.AllPostsButton).click();
    cy.get(allPostsPage.PostFrame).first().click();
    cy.get(blogPostPage.TitleLine).should("have.text", postContent.TitleText);
    cy.get(blogPostPage.SummaryLine).should(
      "include.text",
      postContent.SummaryText
    );
    cy.get(blogPostPage.ContentLine).should(
      "have.text",
      postContent.ContentText
    );
  });

  after(() => {
    cy.deleteLastPost();
  });
});
