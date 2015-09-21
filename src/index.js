'use strict';

import HenceUserBiography from './hence-user-biography';
import docReady from 'doc-ready';

// Ensure we're waiting for the document to actually be loaded before interacting with it.
docReady(()=> {
  // Location to bind preview components too. Use this to ensure the style guide will display these too.
  let componentPreviewBox = document.getElementById('component-previews');

  // Spawn various states of the component to preview them side by side
  HenceUserBiography.appendElementTo({
    avatar: 'http://placehold.it/350x50',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequatur ex id iste modi natus ' +
    'nostrum numquam odio porro praesentium quisquam quos, rem reprehenderit sequi unde vero vitae voluptatem?',
    mySites: [
      {
        label: 'Site',
        url: 'http://placehold.it/350x50'
      }
    ]
  }, componentPreviewBox);
});
