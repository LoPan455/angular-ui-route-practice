app.config(function($stateProvider){

  var home = {
    name: 'home',
    url: '/',
    template: '<h2>Please Click On An Item In the Side Menu<h2>'
  }

  var basicProfile = {
    name: 'basicProfile',
    url: '/basicProfile',
    templateUrl: 'views/templates/profile-questions.html'
  }

  var basicProfileQuestions = {
    name: 'basicProfile.questions',
    url: '/basicQuestions',
    parent: 'basicProfile',
    templateUrl: 'views/forms/basic-profile-form.html'
  }

  var householdQuestions = {
    name: 'basicProfile.household',
    url: '/household',
    parent: 'basicProfile',
    templateUrl: 'views/forms/household-info.html'
  }

  var budget = {
    name: 'budget',
    url: '/budget',
    templateUrl: 'views/templates/budget-questions.html'
  }

  var balanceSheet = {
    name: 'balanceSheet',
    url: '/balanceSheet',
    templateUrl: 'views/templates/balance-sheet.html'
  }

    $stateProvider.state(home);
    $stateProvider.state(basicProfile);
    $stateProvider.state(budget);
    $stateProvider.state(balanceSheet);
    $stateProvider.state(basicProfileQuestions);
    $stateProvider.state(householdQuestions);




}) //end stateProvider
