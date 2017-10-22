/**
 * @fileoverview Order of the Tachyons classes
 * @author Breno Calazans
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { RuleTester } from 'eslint'
import rule from '../../../lib/rules/order'
import parserOptionsMapper from '../../__util__/parserOptionsMapper'

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()

ruleTester.run('order', rule, {
  valid: [
    {
      code: '<div className=""></div>',
    },
    {
      code: '<p className="oi"></p>',
    },
  ].map(parserOptionsMapper),

  invalid: [
    {
      code: '<div/>',
      errors: [
        {
          message: 'Fill me in.',
          type: 'Me too',
        },
      ],
    },
  ].map(parserOptionsMapper),
})
