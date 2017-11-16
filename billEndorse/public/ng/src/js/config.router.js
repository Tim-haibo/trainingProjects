'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/access/signin');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'tpl/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })

              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: 'tpl/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'tpl/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: 'tpl/table_footable.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: 'tpl/table_grid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/grid.js');
                              }
                          );
                      }]
                  }
              })

              .state('app.table.publishBill', {
                  url: '/publishBill',
                  templateUrl: 'tpl/page_publishBill.html'
              })

              .state('app.table.myBill', {
                  url: '/myBill',
                  templateUrl: 'tpl/page_myBill.html'
              })

              .state('app.table.myUnBill', {
                  url: '/myUnBill',
                  templateUrl: 'tpl/page_myUnBill.html'
              })

              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view></div>'
              })
              .state('app.page.editProfile', {
                  url: '/editProfile',
                  templateUrl: 'tpl/page_editProfile.html'
                  //,
                  //resolve: {
                  //    deps: ['$ocLazyLoad',
                  //      function( $ocLazyLoad ){
                  //        return $ocLazyLoad.load(['js/controllers/EditProfileCtrl.js']);
                  //    }]
                  //}
              })

              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'tpl/page_profile.html'
              })

              //access
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html'
                  //,
                  //resolve: {
                  //    deps: ['uiLoad',
                  //      function( uiLoad ){
                  //        return uiLoad.load( ['js/controllers/signin.js'] );
                  //    }]
                  //}
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html'//,
                  //resolve: {
                  //    deps: ['uiLoad',
                  //      function( uiLoad ){
                  //        return uiLoad.load( ['js/controllers/signup.js'] );
                  //    }]
                  //}
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              });

      }
    ]
  );