# AngularJS Playground

Project for me to fool around with AngularJS (version 1).


### Angular Material validation message bug

To properly animate validation messages a change needs to be made to `angular-material`. 
Version with bug: `1.1.0-rc5`. The fix is below, just replace the whole function in `node_modules/angular-material/angular-material.js` after running `npm install`.

```javascript
function ngMessageAnimation($animateCss) {
  return {
    enter: function(element, done) {
      var messages = getMessagesElement(element);
      var inputContainer = getInputElement(element);
      var input = angular.element(inputContainer[0].querySelector('input'));
  
      // If we have the md-auto-hide class, the md-input-invalid animation will fire, so we can skip
      if (messages.hasClass('md-auto-hide') && input.hasClass('ng-untouched')) {
        done();
        return;
      }
  
      return showMessage(element, $animateCss);
    },
  
    leave: function(element, done) {
      return hideMessage(element, $animateCss);
    }
  }
}
```