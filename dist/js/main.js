"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CircusApi = /*#__PURE__*/function () {
  function CircusApi() {
    _classCallCheck(this, CircusApi);

    _defineProperty(this, "API_URL", "http://circuslabs.net:3000/data");
  }

  _createClass(CircusApi, [{
    key: "getData",
    value: function getData(key) {
      console.log("getting data for key " + key);
      axios.get("".concat(this.API_URL, "/").concat(key)).then(this.handleSuccessfulReponse);
    }
  }, {
    key: "handleSuccessfulReponse",
    value: function handleSuccessfulReponse(response) {
      console.log("got a response!", response);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      console.log("got an error!", error);
    }
  }]);

  return CircusApi;
}();
//# sourceMappingURL=main.js.map
