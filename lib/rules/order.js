/**
 * @fileoverview Order of the Tachyons classes
 * @author Breno Calazans
 */
'use strict'

var jsxAstUtils = require('jsx-ast-utils')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Order of the Tachyons classes',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function(context) {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      JSXOpeningElement: function(node) {
        const classNameProp = jsxAstUtils.getProp(node.attributes, 'className')

        if (!classNameProp) return

        const propValue = jsxAstUtils.getPropValue(classNameProp)

        if (!propValue) return

        console.log('ALOO', propValue)

        context.report({
          node,
          message: 'No className!',
        })
      },
    }
  },
}
