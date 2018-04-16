Feature: POST /todos
    Scenario: Save a todo
    Given I have no todos
    When I save a todo with title 'Get some milk'
    Then I receive confirmation the todo has been saved with title 'Get some milk'