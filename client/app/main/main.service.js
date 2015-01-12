(function() {
  'use strict';

  angular.module('ValuesModule', [])
    .factory('values', values);


    function values(){
      // initialize all values to equivalient empties, so $watch doesnt freak out.

      // string represents the current test string, on which the regex matches will appear
      var string = '',

        // regexBody represents the body of the regex string; whatever symbols fit inside the fwrd slashes in the expression
        regexBody = '',

        // tags represent the tags in the regex
        regexTags = '',

        // results of string.match(regexp)
        matches,

        // the regular expression generated through new RegExp(regexBody, regexTags)
        regexp = '',

        // The regex tree generated by the railroad-diagram parse library
        regexTree = {"type": "match", "body": []},

        // all saved regexTrees for any given session. This allows for the undo button functionality
        savedRegexTrees = [],

        // A counter used as a signal that the tree has completed a change; used with $watch to track tree changes
        treeChanged = 0,

        // Info text displayed to the left of the railroad
        info = 'Drag and drop elements from the library below to the railroad and build a regex diagram',

        // tooltip text used to supply info for each library component. these should really be in a single info object. w/e
        componentTip = 'Hover over a diagram component for more information',

        // Corresponding regex symbol for each component library element
        componentSymbol = '',

        // stores any node that is to be added to the tree
        nodeToAdd;


      return {
        string: string,
        regexBody: regexBody,
        regexTags: regexTags,
        regexp: regexp,
        regexTree: regexTree,
        savedRegexTrees: savedRegexTrees,
        matches: matches,
        treeChanged: treeChanged,
        info: info,
        componentTip: componentTip,
        componentSymbol: componentSymbol,
        nodeToAdd: nodeToAdd
      };
    }

})();
