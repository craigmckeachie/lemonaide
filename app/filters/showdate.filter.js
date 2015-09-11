/**
 * Show Date filter takes a date string, converts it to a new Date and
 *        then uppercases the date.
 **/
angular.module('app.filters', [])
.filter('showDate', ['$filter', function ($filter) {
    return function (item) {
        if (angular.isString(item)) {
            var parsedDate = new Date(item);
            var angularDateFilter = $filter('date');
            return angularDateFilter(parsedDate, 'mediumDate').toUpperCase();
        }
    };
}]);