Feature: concentra test scenarios

  Background: Open OrgVue homepage
    Given I visit the OrgVue homepage

  Scenario: As a visitor I want to be able to request a demo
    Given I request a demo
    When I fill in my details
    Then my details will be visible in the form