'use strict';
/**
 * @module hence-user-biography
 */

import Hence from 'hence-component-framework';

/**
 * HenceUserBiography Component
 * @constructor
 */
let HenceUserBiography = Hence.Ui({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-user-biography',
  properties: {
    avatar: String,
    biography: String,
    mySites: Array
  },

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/


  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/


  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  behaviors: []
});

export default HenceUserBiography;
