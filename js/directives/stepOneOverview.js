angular.module('WalkthroughJS').directive('stepOneOverview', function () {

  return {
    restrict: 'E',
    template: '<div class="page-content text-center">'+
      '<div class="content-numbers">' +
        '<h2>If you are just starting out, you are probably asking yourself, "What in the world could primitive mean, when it comes to' +
        'a data type?" That is a great question. The simple answer is that they are data types that cannot be broken down into anything smaller.' +
        'Depending on who you talk to, they might describe it with different words like "basic" or "built-in", but it all basically means the same' +
        'thing. As of right now, there are 7 primitive data types in Javascript. Luckily for you, we will only talk about three in this step.' +
        'The rest of them we will revisit in later steps. The ones that we will focus on today are:</h2><br>'+
        '<ul class="text-center">' +
          '<li>' +
            '<h3>Numbers</h3>' +
          '</li>' +
          '<li>' +
            '<h3>Strings</h3>' +
          '</li>' +
          '<li>' +
            '<h3>Boolean values</h3>'+
          '</li>' +
        '</ul><br>' +
        '<h2>Numbers are any plain values with no single or double quotes surrounding them, such as 1, 2, 3, 232547635, etc.' +
        'Strings are any ASCII character (with a few exceptions) that is surrounded by single or double quotes. The rule is that you cannot use single-quotes within single-quotes and double-quotes within double-quotes, but you can use single-quotes within double-quotes and visa versa. Booleans values are either "true" or "false", but they are not put within quotes. They are built into Javascript. It is hard to describe why they are useful until you see them in action, but trust me when I say they are.</h2>' +
      '</div><br>' +
      '</div' +
    '</div><br>' +
    '<div class="content-variables text-center">' +
      '<h2>' +
        'Ahhh, the world "variable". Reminds you of that amazing time you had all the way through math after algebra started. It is the same type of thing, but you can store more than one primitive data type in it. In fact, you can store everything we are going to talk about in a variable and it is super useful to learn because of how versatile using them can be. Right now, though, we will start with the basics.' +
      '</h2>' +
      '<h2>' +
        'var x = 2; <br>' +
        'var y = "Hello";<br>' +
        'var z = true;' +
      '</h2>' +
      '<h2>' +
        'There are a few rules that you are going to have to play by from the beginning. When you "declare" a variable for the first time, you will put "var" before it, the name of the variable, the assignment operator "=", then the value of the variable, followed by a semi-colon. If you have seen other programming languages, you might have seen other things like "int", "float", "bool", or something similar, instead of "var". That is the beautiful part of Javascript, though. All you need to write next to the variable is "var". In some other lanugages, you have to declare the type of value that the variable will contain. Javascript knows what kind of value you are assigning. Javascript is awesome like that.' +
      '</h2>' +
      '<h2>' +
        'So now that you know how to declare variables, it is your turn to practice!' +
      '</h2><br>' +
      '<h2 class="text-center"> Now we will make a few variables!</h2>',
      transclude: true,

      link: function(scope, element, attrs, ctrl, transclude) {

        transclude(scope.$parent, function(clone, scope) {
          element.append(clone);
        });
      },

  };


});
