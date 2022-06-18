const Engineer = require ("../lib/Engineer.js");

describe("GitHub", () => {
  it("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const n = new Engineer("Tyler", 123, "email@email.com", testValue);
    expect(n.GitHub).toBe(testValue);
   });

  describe("getRole", () => {
  it("should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const n = new Engineer("Tyler", 123, "email@email.com", "GitHubUser");
    expect(n.getRole()).toBe(testValue);
  });
  });
  describe ("getGitHub", () => {
  it("Can get GitHub username via getGitHub()", () => {
    const testValue = "GitHubUser";
    const n = new Engineer("Tyler", 123, "email@email.com", testValue);
    expect(n.getGitHub()).toBe(testValue);
  });  
  });
});
