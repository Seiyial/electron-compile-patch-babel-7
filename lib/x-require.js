'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requireModule(href) {
  let filePath = href;

  if (filePath.match(/^file:/i)) {
    let theUrl = _url2.default.parse(filePath);
    filePath = decodeURIComponent(theUrl.pathname);

    if (process.platform === 'win32') {
      filePath = filePath.slice(1);
    }
  }

  // NB: We don't do any path canonicalization here because we rely on
  // InlineHtmlCompiler to have already converted any relative paths that
  // were used with x-require into absolute paths.
  require(filePath);
}

/**
 * @private
 */

exports.default = (() => {
  if (process.type !== 'renderer' || !window || !window.document) return null;

  let proto = Object.assign(Object.create(HTMLElement.prototype), {
    createdCallback: function () {
      let href = this.getAttribute('src');
      if (href && href.length > 0) {
        requireModule(href);
      }
    },
    attributeChangedCallback: function (attrName, oldVal, newVal) {
      if (attrName !== 'src') return;
      requireModule(newVal);
    }
  });

  return document.registerElement('x-require', { prototype: proto });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy94LXJlcXVpcmUuanMiXSwibmFtZXMiOlsicmVxdWlyZU1vZHVsZSIsImhyZWYiLCJmaWxlUGF0aCIsIm1hdGNoIiwidGhlVXJsIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXRobmFtZSIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInNsaWNlIiwicmVxdWlyZSIsInR5cGUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInByb3RvIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjcmVhdGVkQ2FsbGJhY2siLCJnZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJhdHRyTmFtZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInJlZ2lzdGVyRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQzNCLE1BQUlDLFdBQVdELElBQWY7O0FBRUEsTUFBSUMsU0FBU0MsS0FBVCxDQUFlLFNBQWYsQ0FBSixFQUErQjtBQUM3QixRQUFJQyxTQUFTLGNBQUlDLEtBQUosQ0FBVUgsUUFBVixDQUFiO0FBQ0FBLGVBQVdJLG1CQUFtQkYsT0FBT0csUUFBMUIsQ0FBWDs7QUFFQSxRQUFJQyxRQUFRQyxRQUFSLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ2hDUCxpQkFBV0EsU0FBU1EsS0FBVCxDQUFlLENBQWYsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0FDLFVBQVFULFFBQVI7QUFDRDs7QUFFRDs7OztrQkFHZSxDQUFDLE1BQU07QUFDcEIsTUFBSU0sUUFBUUksSUFBUixLQUFpQixVQUFqQixJQUErQixDQUFDQyxNQUFoQyxJQUEwQyxDQUFDQSxPQUFPQyxRQUF0RCxFQUFnRSxPQUFPLElBQVA7O0FBRWhFLE1BQUlDLFFBQVFDLE9BQU9DLE1BQVAsQ0FBY0QsT0FBT0UsTUFBUCxDQUFjQyxZQUFZQyxTQUExQixDQUFkLEVBQW9EO0FBQzlEQyxxQkFBaUIsWUFBVztBQUMxQixVQUFJcEIsT0FBTyxLQUFLcUIsWUFBTCxDQUFrQixLQUFsQixDQUFYO0FBQ0EsVUFBSXJCLFFBQVFBLEtBQUtzQixNQUFMLEdBQWMsQ0FBMUIsRUFBNkI7QUFDM0J2QixzQkFBY0MsSUFBZDtBQUNEO0FBQ0YsS0FONkQ7QUFPOUR1Qiw4QkFBMEIsVUFBU0MsUUFBVCxFQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQzNELFVBQUlGLGFBQWEsS0FBakIsRUFBd0I7QUFDeEJ6QixvQkFBYzJCLE1BQWQ7QUFDRDtBQVY2RCxHQUFwRCxDQUFaOztBQWFBLFNBQU9iLFNBQVNjLGVBQVQsQ0FBeUIsV0FBekIsRUFBc0MsRUFBRVIsV0FBV0wsS0FBYixFQUF0QyxDQUFQO0FBQ0QsQ0FqQmMsRyIsImZpbGUiOiJ4LXJlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XHJcblxyXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlKGhyZWYpIHtcclxuICBsZXQgZmlsZVBhdGggPSBocmVmO1xyXG4gIFxyXG4gIGlmIChmaWxlUGF0aC5tYXRjaCgvXmZpbGU6L2kpKSB7XHJcbiAgICBsZXQgdGhlVXJsID0gdXJsLnBhcnNlKGZpbGVQYXRoKTtcclxuICAgIGZpbGVQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHRoZVVybC5wYXRobmFtZSk7XHJcblxyXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcclxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aC5zbGljZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTkI6IFdlIGRvbid0IGRvIGFueSBwYXRoIGNhbm9uaWNhbGl6YXRpb24gaGVyZSBiZWNhdXNlIHdlIHJlbHkgb25cclxuICAvLyBJbmxpbmVIdG1sQ29tcGlsZXIgdG8gaGF2ZSBhbHJlYWR5IGNvbnZlcnRlZCBhbnkgcmVsYXRpdmUgcGF0aHMgdGhhdFxyXG4gIC8vIHdlcmUgdXNlZCB3aXRoIHgtcmVxdWlyZSBpbnRvIGFic29sdXRlIHBhdGhzLlxyXG4gIHJlcXVpcmUoZmlsZVBhdGgpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICovIFxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLnR5cGUgIT09ICdyZW5kZXJlcicgfHwgIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50KSByZXR1cm4gbnVsbDtcclxuICBcclxuICBsZXQgcHJvdG8gPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKSwge1xyXG4gICAgY3JlYXRlZENhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcbiAgICAgIGlmIChocmVmICYmIGhyZWYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlcXVpcmVNb2R1bGUoaHJlZik7XHJcbiAgICAgIH1cclxuICAgIH0sIFxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOiBmdW5jdGlvbihhdHRyTmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcclxuICAgICAgaWYgKGF0dHJOYW1lICE9PSAnc3JjJykgcmV0dXJuO1xyXG4gICAgICByZXF1aXJlTW9kdWxlKG5ld1ZhbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ3gtcmVxdWlyZScsIHsgcHJvdG90eXBlOiBwcm90byB9KTtcclxufSkoKTtcclxuIl19