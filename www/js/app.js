// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();  
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.flashcards', {
    url: '/flashcards',
    views: {
      'menuContent': {
        templateUrl: 'templates/flashcards.html',
        controller: 'FlashcardsCtrl'
      }
    }
  })

  .state('app.decklist', {
    url: '/decklist',
    views: {
      'menuContent': {
        templateUrl: 'templates/flashCardList.html',
        controller: 'FlashCardListCtrl'
      }
    }
  })

  .state('app.deck', {
    url: '/deck/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/deck.html',
        controller: 'DeckCtrl'
      }
    }
  })

  .state('app.noteslist', {
    url: '/noteslist',
    views: {
      'menuContent': {
        templateUrl: 'templates/notesList.html',
        controller: 'NotesListCtrl'
      }
    }
  })

  .state('app.stats', {
    url: '/stats',
    views: {
      'menuContent': {
        templateUrl: 'templates/stats.html',
        controller: 'StatsCtrl'
      }
    }
  })

  .state('app.collaborate', {
    url: '/collaborate',
    views: {
      'menuContent': {
        templateUrl: 'templates/collaborate.html',
        controller: 'CollaborateCtrl'
      }
    }
  })

  .state('app.note', {
    url: '/note/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/note.html',
        controller: 'NoteCtrl'
      }
    }
  })

  .state('app.quizzes', {
    url: '/quizzes',
    views: {
      'menuContent': {
        templateUrl: 'templates/quizzes.html',
        controller: 'QuizzesCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
