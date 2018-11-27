Feature: concentra test scenarios

  Background: Open OrgVue homepage
    Given I visit the OrgVue homepage

  Scenario: As a visitor I want to be able to request a demo
    Given I request a demo
    When I fill in my details
    Then my details will be visible in the form

  Scenario: As a visitor I want to be able to search for articles
    Given I navigate to the "contact" page
    And I open the knowledge base
    And I search for "Test"
    When I navigate to the first result
    Then Writer is "Rob Hatley" and the last update was in "2018"