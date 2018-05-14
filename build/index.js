module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _Body = __webpack_require__(4);

var _Body2 = _interopRequireDefault(_Body);

var _Pagination = __webpack_require__(11);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Limiter = __webpack_require__(10);

var _Limiter2 = _interopRequireDefault(_Limiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_LIMIT = 20;

var calculatePaginationProps = function calculatePaginationProps(props) {
    var page = props.page ? props.page : 1;
    page > 1 ? page : 1;

    var limit = props.limit ? props.limit : 10;
    limit = limit > MIN_LIMIT ? limit : MIN_LIMIT;

    var start = (page - 1) * limit;
    var count = props.count;
    var end = start + limit - 1;

    return {
        page: page,
        start: start,
        end: count > end ? end : count,
        count: count,
        limit: limit,
        total: Math.ceil(count / limit)
    };
};

var Table = function Table(props) {
    return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement(
                    'div',
                    { className: 'card' },
                    !!props.title && _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                        ' ',
                        props.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-block' },
                        _react2.default.createElement(
                            'div',
                            { className: 'table-responsive' },
                            _react2.default.createElement(_Limiter2.default, {
                                name: props.name,
                                url: props.url,
                                setLimit: props.setLimit,
                                options: props.limiterOptions }),
                            _react2.default.createElement(
                                'table',
                                { className: 'table table-sm table-hover' },
                                _react2.default.createElement(_Header2.default, {
                                    name: props.name,
                                    url: props.url,
                                    columns: props.columns,
                                    setSortOrder: props.setSortOrder,
                                    setFilter: props.setFilter,
                                    query: props.query }),
                                _react2.default.createElement(_Body2.default, { data: props.data, columns: props.columns })
                            ),
                            _react2.default.createElement(_Pagination2.default, _extends({
                                name: props.name,
                                url: props.url,
                                setPage: props.setPage
                            }, calculatePaginationProps(props.query)))
                        )
                    )
                )
            )
        )
    );
};

Table.propTypes = {
    name: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string,
    columns: _propTypes2.default.object.isRequired,
    limiterOptions: _propTypes2.default.array.isRequired,
    data: _propTypes2.default.array.isRequired,
    query: _propTypes2.default.shape({
        sort: _propTypes2.default.string,
        dir: _propTypes2.default.string,
        page: _propTypes2.default.number,
        limit: _propTypes2.default.number,
        offset: _propTypes2.default.number,
        count: _propTypes2.default.number,
        search: _propTypes2.default.object
    }).isRequired
};

Table.defaultProps = {
    data: {},
    query: {
        limit: MIN_LIMIT,
        offset: 1,
        search: {}
    }
};

exports.default = Table;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createReducer = exports.data = exports.fetchDataEpic = exports.setParamsEpic = exports.setFilter = exports.setLimit = exports.setSort = exports.setPage = exports.receiveData = exports.requestData = exports.cancelRequest = exports.SET_LIMIT = exports.SET_SORT = exports.SET_FILTER = exports.SET_PAGE = exports.REQUEST_DATA_CANCEL = exports.RECEIVE_DATA = exports.REQUEST_DATA = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Observable = __webpack_require__(14);

var _mergeMap = __webpack_require__(16);

var _of = __webpack_require__(15);

var _qs = __webpack_require__(13);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'rxjs';

// import 'rxjs/add/operator/mergeMap';


var REQUEST_DATA = exports.REQUEST_DATA = 'REQUEST_DATA';
var RECEIVE_DATA = exports.RECEIVE_DATA = 'RECEIVE_DATA';
var REQUEST_DATA_CANCEL = exports.REQUEST_DATA_CANCEL = 'REQUEST_DATA_CANCEL';

var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var SET_FILTER = exports.SET_FILTER = 'SET_FILTER';
var SET_SORT = exports.SET_SORT = 'SET_SORT';
var SET_LIMIT = exports.SET_LIMIT = 'SET_LIMIT';

var cancelRequest = exports.cancelRequest = function cancelRequest(name) {
    return { type: REQUEST_DATA_CANCEL, name: name };
};
var requestData = exports.requestData = function requestData(name, url, query) {
    return { type: REQUEST_DATA, name: name, url: url, query: query };
};
var receiveData = exports.receiveData = function receiveData(name, payload) {
    return { type: RECEIVE_DATA, name: name, payload: payload };
};
var setPage = exports.setPage = function setPage(name, url, page) {
    return { type: SET_PAGE, name: name, url: url, page: page };
};
var setSort = exports.setSort = function setSort(name, url, sort, dir) {
    return { type: SET_SORT, name: name, url: url, sort: sort, dir: dir };
};
var setLimit = exports.setLimit = function setLimit(name, url, limit) {
    return { type: SET_LIMIT, name: name, url: url, limit: limit };
};
var setFilter = exports.setFilter = function setFilter(name, url, key, filter) {
    return { type: SET_FILTER, name: name, url: url, key: key, filter: filter };
};

var setParamsEpic = exports.setParamsEpic = function setParamsEpic(action$, store) {
    return action$.ofType(SET_PAGE, SET_FILTER, SET_LIMIT, SET_SORT).mergeMap(function (action) {
        return _Observable.Observable.of(cancelRequest(action.name), requestData(action.name, action.url, store.getState()[action.name].query));
    });
};

var fetchDataEpic = exports.fetchDataEpic = function fetchDataEpic(action$, store, _ref) {
    var getJSONSecure = _ref.getJSONSecure;
    return action$.ofType(REQUEST_DATA).mergeMap(function (action) {
        return getJSONSecure(action.url + '?' + _qs2.default.stringify(action.query)).map(function (response) {
            return receiveData(action.name, response);
        }).takeUntil(action$.ofType(REQUEST_DATA_CANCEL).filter(function (cancelAction) {
            return cancelAction.name == action.name;
        }));
    });
};

var initialState = {
    isFetching: false,
    title: "",
    items: [],
    query: {
        dir: 'desc',
        sort: null,
        page: 0,
        limit: 20,
        offset: 0,
        count: 0,
        search: {}
    }
};

var data = exports.data = function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var data = initialState;
    switch (action.type) {
        case REQUEST_DATA:
            data.isFetching = true;
            return Object.assign({}, state, data);
        case RECEIVE_DATA:
            data.isFetching = false;
            data.items = action.payload.data.items;

            var totalEntries = parseInt(action.payload.data.total);
            var totalPages = Math.ceil(totalEntries / data.query.limit);
            if (totalPages < data.page) {
                data.query.page = totalPages;
            }
            data.query.count = totalEntries;
            return Object.assign({}, state, data);
        case SET_PAGE:
            data.query.page = action.page;
            data.query.offset = (data.query.page - 1) * data.query.limit;
            return Object.assign({}, state, data);
        case SET_SORT:
            data.query.sort = action.sort;
            data.query.dir = action.dir;
            return Object.assign({}, state, data);
        case SET_LIMIT:
            data.query.limit = parseInt(action.limit);
            data.query.offset = (data.query.page - 1) * data.query.limit;
            return Object.assign({}, state, data);
        case SET_FILTER:
            // data.search = action.filters;
            data.query.search[action.key] = action.filter;
            return Object.assign({}, state, data);
        default:
            return state;
    }
};

var createReducer = exports.createReducer = function createReducer(reducer, predicate) {
    return function (state, action) {
        return predicate(action) || state === undefined ? reducer(state, action) : state;
    };
};

exports.default = function (_ref2) {
    var name = _ref2.name,
        url = _ref2.url,
        columns = _ref2.columns,
        limiterOptions = _ref2.limiterOptions,
        onLoadParams = _ref2.onLoadParams;
    return function (Table) {
        var WrappedTable = function (_Component) {
            _inherits(WrappedTable, _Component);

            function WrappedTable() {
                _classCallCheck(this, WrappedTable);

                return _possibleConstructorReturn(this, (WrappedTable.__proto__ || Object.getPrototypeOf(WrappedTable)).apply(this, arguments));
            }

            _createClass(WrappedTable, [{
                key: 'componentWillMount',
                value: function componentWillMount() {
                    var _props = this.props,
                        onLoad = _props.onLoad,
                        query = _props.query;

                    onLoad(name, url, onLoadParams);
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Table, _extends({ name: name,
                        url: url,
                        columns: columns,
                        limiterOptions: limiterOptions
                    }, this.props));
                }
            }]);

            return WrappedTable;
        }(_react.Component);

        return WrappedTable;
    };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Renderer = __webpack_require__(6);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
    var columns = _ref.columns,
        data = _ref.data;
    return _react2.default.createElement(
        'tbody',
        null,
        data.map(function (item, index) {
            return _react2.default.createElement(
                'tr',
                { key: index },
                Object.keys(columns).map(function (key) {
                    return !!columns[key].name && _react2.default.createElement(_Renderer2.default, { key: key,
                        index: columns[key].name,
                        data: item,
                        renderer: columns[key].renderer });
                })
            );
        })
    );
};

Body.propTypes = {
    columns: _propTypes2.default.object.isRequired,
    data: _propTypes2.default.array.isRequired
};

Body.defaultProps = {
    columns: {},
    data: {}
};

exports.default = Body;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeSortOrder = function changeSortOrder(tableName, url, query, name, sorter, event) {
    var dir = null;
    if (query.sort != name) {
        dir = 'asc';
    } else {
        if (query.dir == 'asc') {
            dir = 'desc';
        } else if (query.dir == 'desc') {
            name = '';
            dir = '';
        } else {
            dir = 'asc';
        }
    }

    sorter(tableName, url, name, dir);
};

var Cell = function Cell(_ref) {
    var tableName = _ref.tableName,
        name = _ref.name,
        url = _ref.url,
        query = _ref.query,
        label = _ref.label,
        isHeader = _ref.isHeader,
        sorter = _ref.sorter,
        attributes = _ref.attributes;
    return isHeader ? _react2.default.createElement(
        'th',
        _extends({ className: 'sortable ' + (name == query.sort ? query.dir : '') }, attributes, { onClick: function onClick(event) {
                return changeSortOrder(tableName, url, query, name, sorter, event);
            } }),
        label
    ) : _react2.default.createElement(
        'td',
        attributes,
        label
    );
};

Cell.propTypes = {
    tableName: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string,
    isHeader: _propTypes2.default.bool.isRequired,
    sorter: _propTypes2.default.func,
    label: _propTypes2.default.string.isRequired,
    attributes: _propTypes2.default.object
};

Cell.defaultProps = {
    isHeader: false,
    attributes: {}
};

exports.default = Cell;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Renderer = function Renderer(props) {
    var TagName = props.renderer;
    return _react2.default.createElement(TagName, { index: props.index, data: props.data });
};

Renderer.propTypes = {
    index: _propTypes2.default.string.isRequired,
    data: _propTypes2.default.object.isRequired,
    renderer: _propTypes2.default.func
};

Renderer.defaultProps = {
    renderer: _Text2.default
};

exports.default = Renderer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
    var index = _ref.index,
        data = _ref.data;
    return _react2.default.createElement(
        "td",
        null,
        " ",
        data[index],
        " "
    );
};

exports.default = Text;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEARCH_OPERATOR_CONTAINS = 'contains';
var SEARCH_OPERATOR_BETWEEN = 'between';
var SEARCH_OPERATOR_IS = 'is';
var SEARCH_OPERATOR_IN = 'in';
var SEARCH_OPERATOR_NOT_IN = 'not in';
var SEARCH_TYPE_DATE = 'date';

var _applyFilters = function _applyFilters(tableName, url, filterer, event) {
    var filter = {};
    if (event.target.value) {
        filter = {
            operator: SEARCH_OPERATOR_IS,
            field: event.target.name,
            value: event.target.value,
            logic: 'where'
        };
    }

    filterer(tableName, url, event.target.name, filter);
};

var Filter = function Filter(_ref) {
    var tableName = _ref.tableName,
        url = _ref.url,
        name = _ref.name,
        filterer = _ref.filterer;
    return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement('input', { name: name, onChange: function onChange(event) {
                return _applyFilters(tableName, url, filterer, event);
            } })
    );
};

Filter.propTypes = {
    tableName: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string,
    filterer: _propTypes2.default.func.isRequired,
    type: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
};

Filter.defaultProps = {
    type: "string"
};

exports.default = Filter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cell = __webpack_require__(5);

var _Cell2 = _interopRequireDefault(_Cell);

var _Filter = __webpack_require__(8);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var name = _ref.name,
        url = _ref.url,
        query = _ref.query,
        columns = _ref.columns,
        setSortOrder = _ref.setSortOrder,
        setFilter = _ref.setFilter;
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            { className: 'headers' },
            Object.keys(columns).map(function (key) {
                return _react2.default.createElement(_Cell2.default, {
                    key: key,
                    isHeader: true,
                    sorter: setSortOrder,
                    tableName: name,
                    url: url,
                    name: columns[key].name,
                    label: columns[key].label,
                    query: query,
                    attributes: columns[key].attributes });
            })
        ),
        _react2.default.createElement(
            'tr',
            { className: 'filters' },
            Object.keys(columns).map(function (key) {
                return _react2.default.createElement(_Filter2.default, {
                    key: key,
                    type: columns[key].type,
                    name: columns[key].name,
                    tableName: name,
                    url: url,
                    filterer: setFilter });
            })
        )
    );
};

Header.propTypes = {
    columns: _propTypes2.default.object.isRequired,
    setSortOrder: _propTypes2.default.func,
    setFilter: _propTypes2.default.func
};

exports.default = Header;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Limiter = function Limiter(_ref) {
    var name = _ref.name,
        url = _ref.url,
        options = _ref.options,
        setLimit = _ref.setLimit;
    return _react2.default.createElement(
        "select",
        { className: "form-control", id: "limiter", onChange: function onChange(event) {
                return setLimit(name, url, event.target.value);
            } },
        options.map(function (option, index) {
            return _react2.default.createElement(
                "option",
                { key: index },
                option
            );
        })
    );
};

Limiter.propTypes = {
    options: _propTypes2.default.array.isRequired,
    setLimit: _propTypes2.default.func
};

exports.default = Limiter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUM_LINKS = 5;

var fillRange = function fillRange(start, end) {
    return Array(end - start + 1).fill().map(function (item, index) {
        return start + index;
    });
};

var getPages = function getPages(currentPage, total) {
    var padding = Math.floor(NUM_LINKS / 2);
    var left = currentPage - padding < padding ? 1 : currentPage - padding;
    var right = left + NUM_LINKS - 1 > total ? total : left + NUM_LINKS - 1;

    left = right == total ? right - NUM_LINKS < 1 ? 1 : right - NUM_LINKS + 1 : left;

    return fillRange(left, right);
};

var lowerLimit = function lowerLimit(page, limit) {
    return (page - 1) * limit + 1;
};
var upperLimit = function upperLimit(page, limit, count) {
    return page * limit > count ? count : page * limit;
};

var Pagination = function Pagination(_ref) {
    var name = _ref.name,
        url = _ref.url,
        start = _ref.start,
        end = _ref.end,
        page = _ref.page,
        total = _ref.total,
        count = _ref.count,
        limit = _ref.limit,
        setPage = _ref.setPage;
    return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            !!count > 0 && _react2.default.createElement(
                "span",
                null,
                "Showing ",
                lowerLimit(page, limit),
                " to ",
                upperLimit(page, limit, count),
                " of ",
                count,
                " entries"
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
                "ul",
                { className: "pagination justify-content-end" },
                _react2.default.createElement(
                    "li",
                    { className: "page-item " + (page < 2 ? 'disabled' : '') },
                    _react2.default.createElement(
                        "a",
                        { className: "page-link", href: "#", onClick: function onClick(event) {
                                return setPage(name, url, page - 1);
                            } },
                        "Previous"
                    )
                ),
                getPages(page, total).map(function (link, index) {
                    return _react2.default.createElement(
                        "li",
                        { key: index, className: "page-item " + (link == page ? 'active' : '') },
                        _react2.default.createElement(
                            "a",
                            { className: "page-link", href: "#", onClick: function onClick(event) {
                                    return setPage(name, url, link);
                                } },
                            link
                        )
                    );
                }),
                _react2.default.createElement(
                    "li",
                    { className: "page-item " + (page >= total ? 'disabled' : '') },
                    _react2.default.createElement(
                        "a",
                        { className: "page-link", href: "#", onClick: function onClick(event) {
                                return setPage(name, url, page + 1);
                            } },
                        "Next"
                    )
                )
            )
        )
    );
};

Pagination.propTypes = {
    start: _propTypes2.default.number.isRequired,
    end: _propTypes2.default.number.isRequired,
    page: _propTypes2.default.number.isRequired,
    total: _propTypes2.default.number.isRequired,
    count: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired,
    setPage: _propTypes2.default.func
};

exports.default = Pagination;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SET_FILTER = exports.SET_LIMIT = exports.SET_SORT = exports.SET_PAGE = exports.REQUEST_DATA_CANCEL = exports.RECEIVE_DATA = exports.REQUEST_DATA = exports.fetchDataEpic = exports.setParamsEpic = exports.setFilter = exports.setLimit = exports.setSort = exports.setPage = exports.receiveData = exports.requestData = exports.data = exports.createReducer = exports.Table = undefined;

var _createTable = __webpack_require__(3);

var _createTable2 = _interopRequireDefault(_createTable);

var _Table = __webpack_require__(2);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _Table2.default;
exports.createReducer = _createTable.createReducer;
exports.data = _createTable.data;
exports.requestData = _createTable.requestData;
exports.receiveData = _createTable.receiveData;
exports.setPage = _createTable.setPage;
exports.setSort = _createTable.setSort;
exports.setLimit = _createTable.setLimit;
exports.setFilter = _createTable.setFilter;
exports.setParamsEpic = _createTable.setParamsEpic;
exports.fetchDataEpic = _createTable.fetchDataEpic;
exports.REQUEST_DATA = _createTable.REQUEST_DATA;
exports.RECEIVE_DATA = _createTable.RECEIVE_DATA;
exports.REQUEST_DATA_CANCEL = _createTable.REQUEST_DATA_CANCEL;
exports.SET_PAGE = _createTable.SET_PAGE;
exports.SET_SORT = _createTable.SET_SORT;
exports.SET_LIMIT = _createTable.SET_LIMIT;
exports.SET_FILTER = _createTable.SET_FILTER;
exports.default = _createTable2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operator/mergeMap");

/***/ })
/******/ ]);