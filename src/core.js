/**
 * identity.
 * @param {*} x
 * @returns {*}
 */
function identity(x) {
  return x;
}

/**
 * noop.
 * @returns {*}
 */
function noop() {}

const _usedPlugins = new Set();

/**
 * Check is nil.
 * @param {*} v
 * @returns {boolean}
 */
function isNil(v) {
  return v === null || v === undefined;
}

/**
 * Check is empty.
 * @param {*} v
 * @returns {boolean}
 */
function isEmpty(v) {
  if (isNil(v)) return true;
  if (typeof v === "string") return v.length === 0;
  if (Array.isArray(v)) return v.length === 0;
  if (v instanceof Map || v instanceof Set) return v.size === 0;
  if (typeof v === "object") return Object.keys(v).length === 0;
  return false;
}

/**
 * default To.
 * @param {*} v
 * @param {*} fallback
 * @returns {*}
 */
function defaultTo(v, fallback) {
  return isNil(v) ? fallback : v;
}

/**
 * String helper: merge.
 * @param {*} str
 * @param {...*} parts
 * @returns {string}
 */
function stringMerge(str) {
  let parts = Array.prototype.slice.call(arguments, 1);
  if (parts.length === 1 && Array.isArray(parts[0])) parts = parts[0];
  return String(str) + parts.map(String).join("");
}

/**
 * String helper: interleave.
 * @param {*} str
 * @param {*} pattern
 * @returns {string}
 */
function interleave(str, pattern) {
  const s = String(str);
  const p = String(pattern);
  if (!s || !p) return s;
  let out = "";
  for (let i = 0; i < s.length; i++) {
    out += s[i] + p[i % p.length];
  }
  return out;
}

/**
 * String helper: to lower.
 * @param {*} s
 * @returns {*}
 */
function toLower(s) {
  return String(s).toLowerCase();
}

/**
 * String helper: to upper.
 * @param {*} s
 * @returns {*}
 */
function toUpper(s) {
  return String(s).toUpperCase();
}

/**
 * String helper: capitalize.
 * @param {*} s
 * @returns {*}
 */
function capitalize(s) {
  const str = String(s);
  return str.length ? str[0].toUpperCase() + str.slice(1) : "";
}

/**
 * String helper: trim.
 * @param {*} s
 * @returns {*}
 */
function trim(s) {
  return String(s).trim();
}

/**
 * String helper: normalize string.
 * @param {*} s
 * @returns {*}
 */
function normalizeString(s) {
  return trim(toLower(s));
}

/**
 * String helper: slugify.
 * @param {*} s
 * @returns {*}
 */
function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * String helper: pad left.
 * @param {*} s
 * @param {*} length
 * @param {*} padChar = " "
 * @returns {*}
 */
function padLeft(s, length, padChar = " ") {
  return String(s).padStart(length, padChar);
}

/**
 * String helper: pad right.
 * @param {*} s
 * @param {*} length
 * @param {*} padChar = " "
 * @returns {*}
 */
function padRight(s, length, padChar = " ") {
  return String(s).padEnd(length, padChar);
}

/**
 * String helper: repeat.
 * @param {*} s
 * @param {*} times
 * @returns {*}
 */
function repeat(s, times) {
  return String(s).repeat(times);
}

/**
 * String helper: strip non alpha.
 * @param {*} s
 * @returns {*}
 */
function stripNonAlpha(s) {
  return String(s).replace(/[^a-z0-9]+/gi, "");
}

/**
 * Check is blank.
 * @param {*} s
 * @returns {boolean}
 */
function isBlank(s) {
  return String(s).trim().length === 0;
}

/**
 * Array helper: as array.
 * @param {*} v
 * @returns {*}
 */
function asArray(v) {
  if (isNil(v)) return [];
  return Array.isArray(v) ? v : [v];
}

/**
 * array From Args.
 * @param {*} args
 * @param {*} fallback
 * @returns {*}
 */
function arrayFromArgs(args, fallback) {
  if (!args || args.length === 0) return fallback || [];
  if (Array.isArray(args[0])) return args[0];
  return Array.prototype.slice.call(args);
}

/**
 * Check any of.
 * @param {*} value
 * @param {*} candidates
 * @returns {boolean}
 */
function anyOf(value, candidates) {
  const list = Array.isArray(candidates) ? candidates : Array.prototype.slice.call(arguments, 1);
  return list.includes(value);
}

/**
 * Check eq any.
 * @param {*} value
 * @param {*} candidates
 * @returns {boolean}
 */
function eqAny(value, candidates) {
  return anyOf.apply(null, arguments);
}

/**
 * Check in array.
 * @param {*} value
 * @param {*} arr
 * @returns {boolean}
 */
function inArray(value, arr) {
  if (Array.isArray(arr)) return arr.includes(value);
  if (arguments.length > 2) {
    const list = Array.prototype.slice.call(arguments, 1);
    return list.includes(value);
  }
  return false;
}

/**
 * Compute clamp.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function clamp(n, min, max) {
  const num = Number(n);
  return Math.min(max, Math.max(min, num));
}

/**
 * Check between.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @param {*} inclusive = true
 * @returns {boolean}
 */
function between(n, min, max, inclusive = true) {
  const num = Number(n);
  return inclusive ? num >= min && num <= max : num > min && num < max;
}

/**
 * Compute to int.
 * @param {*} v
 * @param {*} base = 10
 * @returns {number}
 */
function toInt(v, base = 10) {
  const n = parseInt(v, base);
  return Number.isNaN(n) ? 0 : n;
}

/**
 * Compute to float.
 * @param {*} v
 * @returns {number}
 */
function toFloat(v) {
  const n = parseFloat(v);
  return Number.isNaN(n) ? 0 : n;
}

/**
 * Compute to number.
 * @param {*} v
 * @returns {number}
 */
function toNumber(v) {
  const n = Number(v);
  return Number.isNaN(n) ? 0 : n;
}

/**
 * Check is number.
 * @param {*} v
 * @returns {boolean}
 */
function isNumber(v) {
  return typeof v === "number" && Number.isFinite(v);
}

/**
 * Check is int.
 * @param {*} v
 * @returns {boolean}
 */
function isInt(v) {
  return Number.isInteger(v);
}

/**
 * Array helper: compact.
 * @param {*} arr
 * @param {*} predicate
 * @returns {*}
 */
function compact(arr, predicate) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    const last = args[args.length - 1];
    if (typeof last === "function") {
      predicate = last;
      arr = args.slice(0, -1);
    } else {
      arr = args;
    }
  }
  if (typeof predicate === "function") return arr.filter(predicate);
  return arr.filter(v => !isNil(v));
}

/**
 * Array helper: uniq.
 * @param {*} arr
 * @returns {*}
 */
function uniq(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  return Array.from(new Set(arr));
}

/**
 * Array helper: flatten.
 * @param {*} arr
 * @returns {*}
 */
function flatten(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  return arr.reduce((acc, v) => acc.concat(v), []);
}

/**
 * Array helper: chunk.
 * @param {*} arr
 * @param {*} size
 * @returns {*}
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    size = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr) || size <= 0) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

/**
 * Array helper: range.
 * @param {*} start
 * @param {*} end
 * @param {*} step = 1
 * @returns {*}
 */
function range(start, end, step = 1) {
  let s = start;
  let e = end;
  if (end === undefined) {
    s = 0;
    e = start;
  }
  if (step === 0) return [];
  const out = [];
  const inc = step > 0;
  for (let i = s; inc ? i < e : i > e; i += step) {
    out.push(i);
  }
  return out;
}

/**
 * Compute min.
 * @param {*} arr
 * @returns {number}
 */
function min(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (arr.length === 0) return 0;
  return Math.min.apply(null, arr.map(Number));
}

/**
 * Compute max.
 * @param {*} arr
 * @returns {number}
 */
function max(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (arr.length === 0) return 0;
  return Math.max.apply(null, arr.map(Number));
}

/**
 * Compute sum.
 * @param {*} arr
 * @returns {number}
 */
function sum(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  return arr.reduce((a, b) => a + Number(b || 0), 0);
}

/**
 * Compute avg.
 * @param {*} arr
 * @returns {number}
 */
function avg(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

/**
 * Compute median.
 * @param {*} arr
 * @returns {number}
 */
function median(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (arr.length === 0) return 0;
  const sorted = arr.map(Number).slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Compute mode.
 * @param {*} arr
 * @returns {number}
 */
function mode(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (arr.length === 0) return 0;
  const counts = new Map();
  let best = arr[0];
  let bestCount = 0;
  for (const v of arr) {
    const c = (counts.get(v) || 0) + 1;
    counts.set(v, c);
    if (c > bestCount) {
      bestCount = c;
      best = v;
    }
  }
  return Number(best);
}

/**
 * Compute percentile.
 * @param {*} arr
 * @param {*} p
 * @returns {number}
 */
function percentile(arr, p) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    p = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  const sorted = arr.map(Number).slice().sort((a, b) => a - b);
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.round((p / 100) * (sorted.length - 1))));
  return sorted[idx];
}

/**
 * Array helper: group by.
 * @param {*} arr
 * @param {*} keyFn
 * @returns {*}
 */
function groupBy(arr, keyFn) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    keyFn = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr)) return {};
  const fn = typeof keyFn === "function" ? keyFn : (x) => x[keyFn];
  return arr.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

/**
 * Array helper: first.
 * @param {*} arr
 * @returns {*}
 */
function first(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  return arr[0];
}

/**
 * Array helper: last.
 * @param {*} arr
 * @returns {*}
 */
function last(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  return arr[arr.length - 1];
}

/**
 * Array helper: take.
 * @param {*} arr
 * @param {*} n
 * @returns {*}
 */
function take(arr, n) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    n = args.pop();
    arr = args;
  }
  return Array.isArray(arr) ? arr.slice(0, n) : [];
}

/**
 * Array helper: take right.
 * @param {*} arr
 * @param {*} n
 * @returns {*}
 */
function takeRight(arr, n) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    n = args.pop();
    arr = args;
  }
  return Array.isArray(arr) ? arr.slice(Math.max(0, arr.length - n)) : [];
}

/**
 * Array helper: drop.
 * @param {*} arr
 * @param {*} n
 * @returns {*}
 */
function drop(arr, n) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    n = args.pop();
    arr = args;
  }
  return Array.isArray(arr) ? arr.slice(n) : [];
}

/**
 * Array helper: drop right.
 * @param {*} arr
 * @param {*} n
 * @returns {*}
 */
function dropRight(arr, n) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    n = args.pop();
    arr = args;
  }
  return Array.isArray(arr) ? arr.slice(0, Math.max(0, arr.length - n)) : [];
}

/**
 * Array helper: zip.
 * @param {*} arrs
 * @returns {*}
 */
function zip(arrs) {
  const lists = Array.isArray(arrs) && Array.isArray(arrs[0]) ? arrs : Array.prototype.slice.call(arguments);
  if (lists.length === 0) return [];
  const minLen = Math.min.apply(null, lists.map(a => a.length));
  const out = [];
  for (let i = 0; i < minLen; i++) {
    out.push(lists.map(a => a[i]));
  }
  return out;
}

/**
 * Array helper: unzip.
 * @param {*} arr
 * @returns {*}
 */
function unzip(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  return zip.apply(null, arr);
}

/**
 * Array helper: intersection.
 * @param {*} arr
 * @returns {*}
 */
function intersection(arr) {
  const lists = Array.isArray(arr) && Array.isArray(arr[0]) ? arr : Array.prototype.slice.call(arguments);
  if (lists.length === 0) return [];
  return lists.reduce((acc, cur) => acc.filter(x => cur.includes(x)));
}

/**
 * Array helper: difference.
 * @param {*} arr
 * @returns {*}
 */
function difference(arr) {
  const lists = Array.isArray(arr) && Array.isArray(arr[0]) ? arr : Array.prototype.slice.call(arguments);
  if (lists.length === 0) return [];
  const [firstArr, ...rest] = lists;
  const exclude = new Set(flatten(rest));
  return firstArr.filter(x => !exclude.has(x));
}

/**
 * Array helper: union.
 * @param {*} arr
 * @returns {*}
 */
function union(arr) {
  const lists = Array.isArray(arr) && Array.isArray(arr[0]) ? arr : Array.prototype.slice.call(arguments);
  return uniq(flatten(lists));
}

/**
 * Object helper: pick.
 * @param {*} obj
 * @param {*} keys
 * @returns {*}
 */
function pick(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  const list = Array.isArray(keys) ? keys : Array.prototype.slice.call(arguments, 1);
  const out = {};
  list.forEach(k => {
    if (k in obj) out[k] = obj[k];
  });
  return out;
}

/**
 * Object helper: omit.
 * @param {*} obj
 * @param {*} keys
 * @returns {*}
 */
function omit(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  const list = new Set(Array.isArray(keys) ? keys : Array.prototype.slice.call(arguments, 1));
  const out = {};
  Object.keys(obj).forEach(k => {
    if (!list.has(k)) out[k] = obj[k];
  });
  return out;
}

/**
 * Check has.
 * @param {*} obj
 * @param {*} key
 * @returns {boolean}
 */
function has(obj, key) {
  return !!obj && Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Object helper: keys.
 * @param {*} obj
 * @returns {*}
 */
function keys(obj) {
  return obj ? Object.keys(obj) : [];
}

/**
 * Object helper: values.
 * @param {*} obj
 * @returns {*}
 */
function values(obj) {
  return obj ? Object.values(obj) : [];
}

/**
 * Object helper: entries.
 * @param {*} obj
 * @returns {*}
 */
function entries(obj) {
  return obj ? Object.entries(obj) : [];
}

/**
 * Object helper: from entries.
 * @param {*} arr
 * @returns {*}
 */
function fromEntries(arr) {
  return Object.fromEntries(Array.isArray(arr) ? arr : []);
}

/**
 * Object helper: merge.
 * @param {*} obj
 * @returns {*}
 */
function merge(obj) {
  const list = Array.isArray(obj) && !Array.isArray(obj[0]) ? obj : Array.prototype.slice.call(arguments);
  return Object.assign({}, ...list);
}

/**
 * Object helper: deep merge.
 * @param {*} obj
 * @returns {*}
 */
function deepMerge(obj) {
  const list = Array.prototype.slice.call(arguments);
  const isPlain = (v) => v && typeof v === "object" && !Array.isArray(v);
  const out = {};
  list.forEach(src => {
    if (!isPlain(src)) return;
    Object.keys(src).forEach(k => {
      if (isPlain(src[k]) && isPlain(out[k])) {
        out[k] = deepMerge(out[k], src[k]);
      } else {
        out[k] = src[k];
      }
    });
  });
  return out;
}

/**
 * Check is object.
 * @param {*} v
 * @returns {*}
 */
function isObject(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

/**
 * Object helper: size.
 * @param {*} v
 * @returns {*}
 */
function size(v) {
  if (isNil(v)) return 0;
  if (typeof v === "string" || Array.isArray(v)) return v.length;
  if (v instanceof Map || v instanceof Set) return v.size;
  if (typeof v === "object") return Object.keys(v).length;
  return 0;
}

/**
 * parse Path.
 * @param {*} path
 * @returns {*}
 */
function parsePath(path) {
  if (Array.isArray(path)) return path;
  return String(path)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

/**
 * Object helper: safe get.
 * @param {*} obj
 * @param {*} path
 * @param {*} fallback
 * @returns {*}
 */
function safeGet(obj, path, fallback) {
  const parts = parsePath(path);
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return fallback;
    cur = cur[parts[i]];
  }
  return cur === undefined ? fallback : cur;
}

/**
 * Object helper: safe set.
 * @param {*} obj
 * @param {*} path
 * @param {*} value
 * @returns {*}
 */
function safeSet(obj, path, value) {
  const parts = parsePath(path);
  if (!parts.length) return obj;
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (cur[key] == null || typeof cur[key] !== "object") cur[key] = {};
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
  return obj;
}

/**
 * try Catch.
 * @param {*} fn
 * @param {*} fallback
 * @returns {*}
 */
function tryCatch(fn, fallback) {
  try {
    return fn();
  } catch (err) {
    return typeof fallback === "function" ? fallback(err) : fallback;
  }
}

/**
 * tap.
 * @param {*} value
 * @param {*} fn
 * @returns {*}
 */
function tap(value, fn) {
  if (typeof fn === "function") fn(value);
  return value;
}

/**
 * sleep.
 * @param {*} ms
 * @returns {*}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check contains any.
 * @param {*} str
 * @param {*} candidates
 * @returns {boolean}
 */
function containsAny(str, candidates) {
  const s = String(str);
  const list = Array.isArray(candidates) ? candidates : Array.prototype.slice.call(arguments, 1);
  return list.some(c => s.includes(String(c)));
}

/**
 * Check starts with any.
 * @param {*} str
 * @param {*} candidates
 * @returns {boolean}
 */
function startsWithAny(str, candidates) {
  const s = String(str);
  const list = Array.isArray(candidates) ? candidates : Array.prototype.slice.call(arguments, 1);
  return list.some(c => s.startsWith(String(c)));
}

/**
 * Check ends with any.
 * @param {*} str
 * @param {*} candidates
 * @returns {boolean}
 */
function endsWithAny(str, candidates) {
  const s = String(str);
  const list = Array.isArray(candidates) ? candidates : Array.prototype.slice.call(arguments, 1);
  return list.some(c => s.endsWith(String(c)));
}

/**
 * safe Json Parse.
 * @param {*} s
 * @param {*} fallback
 * @returns {*}
 */
function safeJsonParse(s, fallback) {
  try {
    return JSON.parse(s);
  } catch (err) {
    return fallback;
  }
}

/**
 * once.
 * @param {*} fn
 * @returns {*}
 */
function once(fn) {
  let called = false;
  let value;
  return function wrapped() {
    if (!called) {
      called = true;
      value = fn.apply(this, arguments);
    }
    return value;
  };
}

/**
 * debounce.
 * @param {*} fn
 * @param {*} wait
 * @returns {*}
 */
function debounce(fn, wait) {
  let timer = null;
  return function debounced() {
    const args = arguments;
    const ctx = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(ctx, args), wait);
  };
}

/**
 * throttle.
 * @param {*} fn
 * @param {*} wait
 * @returns {*}
 */
function throttle(fn, wait) {
  let last = 0;
  let timer = null;
  return function throttled() {
    const now = Date.now();
    const remaining = wait - (now - last);
    const ctx = this;
    const args = arguments;
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      last = now;
      fn.apply(ctx, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn.apply(ctx, args);
      }, remaining);
    }
  };
}

/**
 * Array helper: unique by.
 * @param {*} arr
 * @param {*} keyFn
 * @returns {*}
 */
function uniqueBy(arr, keyFn) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    keyFn = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr)) return [];
  const fn = typeof keyFn === "function" ? keyFn : (x) => x[keyFn];
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    const key = fn(item);
    if (!seen.has(key)) {
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}

/**
 * Array helper: pluck.
 * @param {*} arr
 * @param {*} key
 * @returns {*}
 */
function pluck(arr, key) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    key = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr)) return [];
  return arr.map(x => x && x[key]);
}

/**
 * Array helper: sort by.
 * @param {*} arr
 * @param {*} keyFn
 * @returns {*}
 */
function sortBy(arr, keyFn) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    keyFn = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr)) return [];
  const fn = typeof keyFn === "function" ? keyFn : (x) => x[keyFn];
  return arr.slice().sort((a, b) => {
    const ka = fn(a);
    const kb = fn(b);
    if (ka < kb) return -1;
    if (ka > kb) return 1;
    return 0;
  });
}

/**
 * Compute round to.
 * @param {*} n
 * @param {*} decimals
 * @returns {number}
 */
function roundTo(n, decimals) {
  // If a place value like 100 or 1000 is provided, round to that place.
  if (typeof decimals === "number" && Number.isInteger(decimals) && Math.abs(decimals) >= 10) {
    const place = decimals;
    if (place === 0) return 0;
    return Math.round(Number(n) / place) * place;
  }
  const p = Math.pow(10, decimals || 0);
  return Math.round(Number(n) * p) / p;
}

/**
 * Compute round decimal.
 * @param {*} n
 * @param {*} place
 * @returns {number}
 */
function roundDecimal(n, place) {
  const map = {
    tenths: 1,
    hundredths: 2,
    thousandths: 3,
  };
  const dec = typeof place === "string" ? (map[place] ?? 0) : place;
  const p = Math.pow(10, dec || 0);
  return Math.round(Number(n) * p) / p;
}

/**
 * Compute round down.
 * @param {*} n
 * @returns {number}
 */
function roundDown(n) {
  return Math.floor(n);
}

/**
 * Compute round up.
 * @param {*} n
 * @returns {number}
 */
function roundUp(n) {
  return Math.ceil(n);
}

/**
 * Compute lerp.
 * @param {*} a
 * @param {*} b
 * @param {*} t
 * @returns {number}
 */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Compute percent.
 * @param {*} part
 * @param {*} total
 * @returns {number}
 */
function percent(part, total) {
  if (total === 0) return 0;
  return (Number(part) / Number(total)) * 100;
}

/**
 * Compute clamp 01.
 * @param {*} n
 * @returns {number}
 */
function clamp01(n) {
  return clamp(n, 0, 1);
}

/**
 * Compute random int.
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function randomInt(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

/**
 * Compute random float.
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Array helper: shuffle.
 * @param {*} arr
 * @returns {*}
 */
function shuffle(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (!Array.isArray(arr)) return [];
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Array helper: sample.
 * @param {*} arr
 * @returns {*}
 */
function sample(arr) {
  if (!Array.isArray(arr)) arr = arrayFromArgs(arguments, []);
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * deep Clone.
 * @param {*} value
 * @returns {*}
 */
function deepClone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

/**
 * safe Json Stringify.
 * @param {*} value
 * @param {*} fallback = ""
 * @returns {*}
 */
function safeJsonStringify(value, fallback = "") {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return String(fallback);
  }
}

/**
 * Array helper: move.
 * @param {*} arr
 * @param {*} fromIndex
 * @param {*} toIndex
 * @returns {*}
 */
function move(arr, fromIndex, toIndex) {
  if (!Array.isArray(arr)) {
    const args = Array.prototype.slice.call(arguments);
    toIndex = args.pop();
    fromIndex = args.pop();
    arr = args;
  }
  if (!Array.isArray(arr)) return [];
  const out = arr.slice();
  const len = out.length;
  const from = fromIndex < 0 ? len + fromIndex : fromIndex;
  const to = toIndex < 0 ? len + toIndex : toIndex;
  if (from < 0 || from >= len || to < 0 || to >= len) return out;
  const [item] = out.splice(from, 1);
  out.splice(to, 0, item);
  return out;
}

/**
 * Array helper: array group by.
 * @param {*} arr
 * @param {*} keyFn
 * @returns {*}
 */
function arrayGroupBy(arr, keyFn) {
  return groupBy(arr, keyFn);
}

/**
 * Object helper: map keys.
 * @param {*} obj
 * @param {*} keyFn
 * @returns {*}
 */
function mapKeys(obj, keyFn) {
  if (!obj || typeof obj !== "object") return {};
  const out = {};
  Object.keys(obj).forEach(k => {
    const nk = keyFn(k, obj[k], obj);
    out[nk] = obj[k];
  });
  return out;
}

/**
 * Object helper: invert.
 * @param {*} obj
 * @returns {*}
 */
function invert(obj) {
  if (!obj || typeof obj !== "object") return {};
  const out = {};
  Object.keys(obj).forEach(k => {
    out[String(obj[k])] = k;
  });
  return out;
}

/**
 * Object helper: object compact.
 * @param {*} obj
 * @returns {*}
 */
function objectCompact(obj) {
  if (!obj || typeof obj !== "object") return {};
  const out = {};
  Object.keys(obj).forEach(k => {
    if (!isEmpty(obj[k])) out[k] = obj[k];
  });
  return out;
}

/**
 * String helper: to title case.
 * @param {*} s
 * @returns {*}
 */
function toTitleCase(s) {
  return String(s)
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * String helper: truncate.
 * @param {*} s
 * @param {*} length
 * @returns {*}
 */
function truncate(s, length) {
  const str = String(s);
  if (length <= 3) return str.slice(0, length);
  if (str.length <= length) return str;
  return str.slice(0, length - 3) + "...";
}

/**
 * String helper: replace all.
 * @param {*} s
 * @param {*} substring
 * @param {*} newSub
 * @returns {*}
 */
function replaceAll(s, substring, newSub) {
  return String(s).split(substring).join(newSub);
}

/**
 * String helper: count words.
 * @param {*} s
 * @returns {*}
 */
function countWords(s) {
  const words = String(s).trim().match(/\b[\w']+\b/g);
  return words ? words.length : 0;
}

/**
 * install.
 * @returns {*}
 */
function use(plugin) {
  if (typeof plugin !== "function") {
    throw new TypeError("easy.use(plugin) expects a function");
  }
  if (_usedPlugins.has(plugin)) return module.exports;
  _usedPlugins.add(plugin);
  plugin(module.exports);
  return module.exports;
}

/**
 * Add prototype helpers.
 */
function install() {
  const define = (proto, name, fn) => {
    if (!Object.prototype.hasOwnProperty.call(proto, name)) {
      Object.defineProperty(proto, name, {
        value: fn,
        enumerable: false,
        configurable: true,
        writable: true,
      });
    }
  };

  define(Array.prototype, "shuffle", function () { return shuffle(this); });
  define(Array.prototype, "unique", function () { return uniq(this); });
  define(Array.prototype, "chunk", function (size) { return chunk(this, size); });
  define(Array.prototype, "move", function (from, to) { return move(this, from, to); });
  define(Array.prototype, "groupBy", function (fn) { return arrayGroupBy(this, fn); });
  define(Array.prototype, "compact", function (fn) { return compact(this, fn); });
  define(Array.prototype, "flatten", function () { return flatten(this); });
  define(Array.prototype, "first", function () { return first(this); });
  define(Array.prototype, "last", function () { return last(this); });
  define(Array.prototype, "take", function (n) { return take(this, n); });
  define(Array.prototype, "takeRight", function (n) { return takeRight(this, n); });
  define(Array.prototype, "drop", function (n) { return drop(this, n); });
  define(Array.prototype, "dropRight", function (n) { return dropRight(this, n); });

  define(Object.prototype, "mapKeys", function (fn) { return mapKeys(this, fn); });
  define(Object.prototype, "pick", function (keys) { return pick(this, keys); });
  define(Object.prototype, "invert", function () { return invert(this); });
  define(Object.prototype, "compact", function () { return objectCompact(this); });
  define(Object.prototype, "omit", function (keys) { return omit(this, keys); });
  define(Object.prototype, "has", function (key) { return has(this, key); });
  define(Object.prototype, "merge", function () { return merge.apply(null, [this].concat(Array.prototype.slice.call(arguments))); });
  define(Object.prototype, "deepMerge", function () { return deepMerge.apply(null, [this].concat(Array.prototype.slice.call(arguments))); });
  define(Object.prototype, "size", function () { return size(this); });

  define(String.prototype, "toTitleCase", function () { return toTitleCase(this); });
  define(String.prototype, "truncate", function (len) { return truncate(this, len); });
  define(String.prototype, "replaceAllEasy", function (sub, rep) { return replaceAll(this, sub, rep); });
  define(String.prototype, "countWords", function () { return countWords(this); });
  define(String.prototype, "slugify", function () { return slugify(this); });
  define(String.prototype, "padLeft", function (len, ch) { return padLeft(this, len, ch); });
  define(String.prototype, "padRight", function (len, ch) { return padRight(this, len, ch); });
  define(String.prototype, "repeatEasy", function (times) { return repeat(this, times); });
  define(String.prototype, "stripNonAlpha", function () { return stripNonAlpha(this); });
  define(String.prototype, "isBlank", function () { return isBlank(this); });
  define(String.prototype, "normalizeString", function () { return normalizeString(this); });
  define(String.prototype, "merge", function () { return stringMerge.apply(null, [this].concat(Array.prototype.slice.call(arguments))); });
  define(String.prototype, "interleave", function (pattern) { return interleave(this, pattern); });
}

/**
 * chain.
 * @param {*} value
 * @returns {*}
 */
function chain(value) {
  const api = {
    _value: value,
    value() { return this._value; },
  };

  const add = (name, fn) => {
    api[name] = function () {
      this._value = fn.apply(null, [this._value].concat(Array.prototype.slice.call(arguments)));
      return this;
    };
  };

  // Array-focused helpers (chainable)
  add("uniq", uniq);
  add("shuffle", shuffle);
  add("take", take);
  add("takeRight", takeRight);
  add("drop", drop);
  add("dropRight", dropRight);
  add("chunk", chunk);
  add("flatten", flatten);
  add("compact", compact);
  add("union", union);
  add("intersection", intersection);
  add("difference", difference);
  add("groupBy", groupBy);
  add("sortBy", sortBy);
  add("pluck", pluck);
  add("first", first);
  add("last", last);

  return api;
}





// __EXPORTS_START
module.exports = {
  abs,
  acosDeg,
  add,
  anyOf,
  apothemRegularPolygon,
  arcLength,
  areaCircle,
  areaEllipse,
  areaParallelogram,
  areaRectangle,
  areaRegularPolygon,
  areaRing,
  areaSector,
  areaSquare,
  areaTrapezoid,
  areaTriangle,
  arrayFromArgs,
  arrayGroupBy,
  asArray,
  asinDeg,
  atanDeg,
  averageOfThree,
  averageOfTwo,
  avg,
  avgBy,
  between,
  camelCase,
  capitalize,
  cbrt,
  ceilTo,
  ceilToMultiple,
  chain,
  chunk,
  chunkBy,
  chunkWhile,
  circumferenceCircle,
  circumradiusRegularPolygon,
  clamp,
  clamp01,
  clampAbs,
  clampInt,
  clampMax,
  clampMin,
  clampPercent,
  cloneShallow,
  collapseWhitespace,
  compact,
  compactBy,
  compose,
  containsAny,
  convertCtoF,
  convertCtoK,
  convertFtoC,
  convertFtoK,
  convertKtoC,
  convertKtoF,
  cosDeg,
  count,
  countBy,
  countChars,
  countOccurrences,
  countWords,
  cube,
  debounce,
  deepClone,
  deepMerge,
  defaultTo,
  defaults,
  defaultsDeep,
  defer,
  degToRad,
  degToTurn,
  denormalize,
  diff,
  difference,
  differenceBy,
  distance1D,
  distance2D,
  distance3D,
  distancePointLine,
  distancePoints,
  divide,
  dot2,
  dot3,
  drop,
  dropRight,
  dropUntil,
  dropWhile,
  endsWith,
  endsWithAny,
  ensurePrefix,
  ensureSuffix,
  entries,
  eqAny,
  exp,
  expm1,
  factorial,
  fibonacci,
  filterKeys,
  filterValues,
  findLast,
  findLastIndex,
  first,
  flatten,
  flattenDeep,
  flattenDepth,
  floorTo,
  floorToMultiple,
  fromEntries,
  fromPairs,
  fromPercent,
  fromSet,
  gcd,
  geometricMean,
  groupBy,
  harmonicMean,
  has,
  hasPath,
  head,
  heronArea,
  hypot2,
  hypot3,
  identity,
  inArray,
  inRangeExclusive,
  inRangeInclusive,
  includes,
  indexBy,
  indexOfAll,
  init,
  insertAt,
  use,
  install,
  intersection,
  intersectionBy,
  invert,
  invertBy,
  isArray,
  isBlank,
  isEmpty,
  isEmptyObject,
  isEven,
  isFiniteNumber,
  isInt,
  isLower,
  isMultipleOf,
  isNaNNumber,
  isNegative,
  isNil,
  isNumber,
  isObject,
  isOdd,
  isPositive,
  isPowerOfTwo,
  isPrime,
  isUpper,
  isZero,
  kebabCase,
  keyBy,
  keys,
  last,
  lastIndex,
  lastIndexOf,
  lawOfCosinesAngle,
  lawOfCosinesSide,
  lawOfSinesAngle,
  lawOfSinesSide,
  lcm,
  lerp,
  lerpAngleDeg,
  lerpAngleRad,
  lerpClamped,
  lerpInt,
  lines,
  ln1p,
  log,
  log10,
  log2,
  manhattan2D,
  manhattan3D,
  mapEntries,
  mapKeys,
  mapRange,
  mapValues,
  mask,
  max,
  mean,
  median,
  medianOfThree,
  memoize,
  merge,
  mergeWith,
  midpointX,
  midpointY,
  min,
  mod,
  modSafe,
  mode,
  move,
  multiply,
  nCr,
  nPr,
  nearEqual,
  nextPrime,
  noop,
  noopAsync,
  normalize,
  normalizeAngle,
  normalizeString,
  objectCompact,
  omit,
  omitBy,
  omitPath,
  once,
  onceAsync,
  padCenter,
  padLeft,
  padRight,
  parsePath,
  partition,
  pascalCase,
  percent,
  percentChange,
  percentOf,
  percentile,
  perimeterRectangle,
  perimeterRegularPolygon,
  perimeterSquare,
  perimeterTriangle,
  pick,
  pickBy,
  pickPath,
  pingPong,
  pipe,
  pluck,
  pow,
  prevPrime,
  pythagoras,
  quadraticDiscriminant,
  quadraticRoots,
  radToDeg,
  radToTurn,
  randomBool,
  randomFloat,
  randomGaussian,
  randomInt,
  randomSign,
  range,
  ratio,
  removeAt,
  removeConsonants,
  removeVowels,
  repeat,
  repeatArray,
  replaceAll,
  replaceFirst,
  replaceLast,
  reverseString,
  rms,
  rotate,
  rotateLeft,
  rotateRight,
  roundBankers,
  roundDecimal,
  roundDown,
  roundHalfDown,
  roundHalfUp,
  roundTo,
  roundToMultiple,
  roundToNearest,
  roundToSignificant,
  roundToStep,
  roundUp,
  safeDivide,
  safeGet,
  safeJsonParse,
  safeJsonStringify,
  safeSet,
  sample,
  sawtoothWave,
  shuffle,
  sigmoid,
  sign,
  sinDeg,
  size,
  sleep,
  slidingWindow,
  slope,
  slugify,
  smoothClamp,
  smootherstep,
  smoothstep,
  smoothstep01,
  snakeCase,
  sortBy,
  sqrt,
  square,
  startsWith,
  startsWithAny,
  stdDev,
  stdDevSample,
  step,
  stripNonAlpha,
  stripPrefix,
  stripSuffix,
  subtract,
  sum,
  sumBy,
  sumOfSquares,
  sumOfTwo,
  surfaceAreaCone,
  surfaceAreaCube,
  surfaceAreaCylinder,
  surfaceAreaPyramidSquare,
  surfaceAreaRectPrism,
  surfaceAreaSphere,
  surround,
  swap,
  swapCase,
  tail,
  take,
  takeRight,
  takeUntil,
  takeWhile,
  tanDeg,
  tap,
  throttle,
  times,
  toFloat,
  toInt,
  stringMerge,
  interleave,
  toLower,
  toNumber,
  toPairs,
  toSet,
  toTitleCase,
  toTitleCaseWords,
  toUpper,
  triangleWave,
  triangularNumber,
  trim,
  trimEnd,
  trimStart,
  truncate,
  tryCatch,
  turnToDeg,
  turnToRad,
  union,
  unionBy,
  uniq,
  uniqueBy,
  uniqueSorted,
  unmask,
  unsetPath,
  unzip,
  values,
  variance,
  varianceSample,
  volumeCone,
  volumeCube,
  volumeCylinder,
  volumePyramidSquare,
  volumeRectPrism,
  volumeSphere,
  words,
  wrap,
  wrapAngle,
  wrapPi,
  zip,
  zipObject,
  zipObjectDeep,
};
// __EXPORTS_END





/**
 * Compute add.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function add(a, b) {
  return Number(a) + Number(b);
}

/**
 * Compute subtract.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function subtract(a, b) {
  return Number(a) - Number(b);
}

/**
 * Compute multiply.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function multiply(a, b) {
  return Number(a) * Number(b);
}

/**
 * Compute divide.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function divide(a, b) {
  return Number(b) === 0 ? 0 : Number(a) / Number(b);
}

/**
 * Compute mod.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function mod(a, b) {
  return Number(b) === 0 ? 0 : Number(a) % Number(b);
}

/**
 * Compute mod safe.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function modSafe(a, b) {
  const m = Number(b); if (!m) return 0; return ((Number(a) % m) + m) % m;
}

/**
 * Compute abs.
 * @param {*} n
 * @returns {number}
 */
function abs(n) {
  return Math.abs(Number(n));
}

/**
 * Compute sign.
 * @param {*} n
 * @returns {number}
 */
function sign(n) {
  return Math.sign(Number(n));
}

/**
 * Compute square.
 * @param {*} n
 * @returns {number}
 */
function square(n) {
  const x = Number(n); return x * x;
}

/**
 * Compute cube.
 * @param {*} n
 * @returns {number}
 */
function cube(n) {
  const x = Number(n); return x * x * x;
}

/**
 * Compute pow.
 * @param {*} n
 * @param {*} p
 * @returns {number}
 */
function pow(n, p) {
  return Math.pow(Number(n), Number(p));
}

/**
 * Compute sqrt.
 * @param {*} n
 * @returns {number}
 */
function sqrt(n) {
  return Math.sqrt(Number(n));
}

/**
 * Compute cbrt.
 * @param {*} n
 * @returns {number}
 */
function cbrt(n) {
  return Math.cbrt(Number(n));
}

/**
 * Compute log.
 * @param {*} n
 * @returns {number}
 */
function log(n) {
  return Math.log(Number(n));
}

/**
 * Compute log 10.
 * @param {*} n
 * @returns {number}
 */
function log10(n) {
  return Math.log10(Number(n));
}

/**
 * Compute log 2.
 * @param {*} n
 * @returns {number}
 */
function log2(n) {
  return Math.log2(Number(n));
}

/**
 * Compute exp.
 * @param {*} n
 * @returns {number}
 */
function exp(n) {
  return Math.exp(Number(n));
}

/**
 * Compute expm 1.
 * @param {*} n
 * @returns {number}
 */
function expm1(n) {
  return Math.expm1(Number(n));
}

/**
 * Compute ln 1p.
 * @param {*} n
 * @returns {number}
 */
function ln1p(n) {
  return Math.log1p(Number(n));
}

/**
 * Compute clamp min.
 * @param {*} n
 * @param {*} min
 * @returns {number}
 */
function clampMin(n, min) {
  const x = Number(n); return x < min ? min : x;
}

/**
 * Compute clamp max.
 * @param {*} n
 * @param {*} max
 * @returns {number}
 */
function clampMax(n, max) {
  const x = Number(n); return x > max ? max : x;
}

/**
 * Check in range inclusive.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {boolean}
 */
function inRangeInclusive(n, min, max) {
  const x = Number(n); return x >= min && x <= max;
}

/**
 * Check in range exclusive.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {boolean}
 */
function inRangeExclusive(n, min, max) {
  const x = Number(n); return x > min && x < max;
}

/**
 * Compute wrap.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function wrap(n, min, max) {
  const range = max - min; if (range === 0) return min; return ((Number(n) - min) % range + range) % range + min;
}

/**
 * Compute map range.
 * @param {*} n
 * @param {*} inMin
 * @param {*} inMax
 * @param {*} outMin
 * @param {*} outMax
 * @returns {number}
 */
function mapRange(n, inMin, inMax, outMin, outMax) {
  if (inMax === inMin) return outMin; const t = (Number(n) - inMin) / (inMax - inMin); return outMin + t * (outMax - outMin);
}

/**
 * Compute normalize.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function normalize(n, min, max) {
  return mapRange(Number(n), min, max, 0, 1);
}

/**
 * Compute denormalize.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function denormalize(n, min, max) {
  return mapRange(Number(n), 0, 1, min, max);
}

/**
 * Compute lerp clamped.
 * @param {*} a
 * @param {*} b
 * @param {*} t
 * @returns {number}
 */
function lerpClamped(a, b, t) {
  const t2 = Math.min(1, Math.max(0, Number(t))); return Number(a) + (Number(b) - Number(a)) * t2;
}

/**
 * Compute smoothstep.
 * @param {*} edge0
 * @param {*} edge1
 * @param {*} x
 * @returns {number}
 */
function smoothstep(edge0, edge1, x) {
  let t2 = (Number(x) - edge0) / (edge1 - edge0); t2 = Math.min(1, Math.max(0, t2)); return t2 * t2 * (3 - 2 * t2);
}

/**
 * Compute smootherstep.
 * @param {*} edge0
 * @param {*} edge1
 * @param {*} x
 * @returns {number}
 */
function smootherstep(edge0, edge1, x) {
  let t2 = (Number(x) - edge0) / (edge1 - edge0); t2 = Math.min(1, Math.max(0, t2)); return t2 * t2 * t2 * (t2 * (t2 * 6 - 15) + 10);
}

/**
 * Compute deg to rad.
 * @param {*} deg
 * @returns {number}
 */
function degToRad(deg) {
  return Number(deg) * (Math.PI / 180);
}

/**
 * Compute rad to deg.
 * @param {*} rad
 * @returns {number}
 */
function radToDeg(rad) {
  return Number(rad) * (180 / Math.PI);
}

/**
 * Compute sin deg.
 * @param {*} deg
 * @returns {number}
 */
function sinDeg(deg) {
  return Math.sin(Number(deg) * (Math.PI / 180));
}

/**
 * Compute cos deg.
 * @param {*} deg
 * @returns {number}
 */
function cosDeg(deg) {
  return Math.cos(Number(deg) * (Math.PI / 180));
}

/**
 * Compute tan deg.
 * @param {*} deg
 * @returns {number}
 */
function tanDeg(deg) {
  return Math.tan(Number(deg) * (Math.PI / 180));
}

/**
 * Compute asin deg.
 * @param {*} x
 * @returns {number}
 */
function asinDeg(x) {
  return Math.asin(Number(x)) * (180 / Math.PI);
}

/**
 * Compute acos deg.
 * @param {*} x
 * @returns {number}
 */
function acosDeg(x) {
  return Math.acos(Number(x)) * (180 / Math.PI);
}

/**
 * Compute atan deg.
 * @param {*} x
 * @returns {number}
 */
function atanDeg(x) {
  return Math.atan(Number(x)) * (180 / Math.PI);
}

/**
 * Compute hypot 2.
 * @param {*} x
 * @param {*} y
 * @returns {number}
 */
function hypot2(x, y) {
  return Math.hypot(Number(x), Number(y));
}

/**
 * Compute hypot 3.
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @returns {number}
 */
function hypot3(x, y, z) {
  return Math.hypot(Number(x), Number(y), Number(z));
}

/**
 * Compute distance 2d.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {number}
 */
function distance2D(x1, y1, x2, y2) {
  return Math.hypot(Number(x2) - Number(x1), Number(y2) - Number(y1));
}

/**
 * Compute distance 3d.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @param {*} z1
 * @param {*} z2
 * @returns {number}
 */
function distance3D(x1, y1, x2, y2, z1, z2) {
  return Math.hypot(Number(x2) - Number(x1), Number(y2) - Number(y1), Number(z2) - Number(z1));
}

/**
 * Compute dot 2.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {number}
 */
function dot2(x1, y1, x2, y2) {
  return Number(x1) * Number(x2) + Number(y1) * Number(y2);
}

/**
 * Compute dot 3.
 * @param {*} x1
 * @param {*} y1
 * @param {*} z1
 * @param {*} x2
 * @param {*} y2
 * @param {*} z2
 * @returns {number}
 */
function dot3(x1, y1, z1, x2, y2, z2) {
  return Number(x1) * Number(x2) + Number(y1) * Number(y2) + Number(z1) * Number(z2);
}

/**
 * Compute manhattan 2d.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {number}
 */
function manhattan2D(x1, y1, x2, y2) {
  return Math.abs(Number(x2) - Number(x1)) + Math.abs(Number(y2) - Number(y1));
}

/**
 * Compute manhattan 3d.
 * @param {*} x1
 * @param {*} y1
 * @param {*} z1
 * @param {*} x2
 * @param {*} y2
 * @param {*} z2
 * @returns {number}
 */
function manhattan3D(x1, y1, z1, x2, y2, z2) {
  return Math.abs(Number(x2) - Number(x1)) + Math.abs(Number(y2) - Number(y1)) + Math.abs(Number(z2) - Number(z1));
}

/**
 * Compute mean.
 * @param {*} values
 * @returns {number}
 */
function mean(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (!arr.length) return 0; return arr.reduce((a,b)=>a+Number(b||0),0)/arr.length;
}

/**
 * Compute variance.
 * @param {*} values
 * @returns {number}
 */
function variance(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (!arr.length) return 0; const m = arr.reduce((a,b)=>a+Number(b||0),0)/arr.length; return arr.reduce((a,b)=>a+Math.pow(Number(b)-m,2),0)/arr.length;
}

/**
 * Compute variance sample.
 * @param {*} values
 * @returns {number}
 */
function varianceSample(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (arr.length < 2) return 0; const m = arr.reduce((a,b)=>a+Number(b||0),0)/arr.length; return arr.reduce((a,b)=>a+Math.pow(Number(b)-m,2),0)/(arr.length-1);
}

/**
 * Compute std dev.
 * @param {*} values
 * @returns {number}
 */
function stdDev(values) {
  return Math.sqrt(variance(values));
}

/**
 * Compute std dev sample.
 * @param {*} values
 * @returns {number}
 */
function stdDevSample(values) {
  return Math.sqrt(varianceSample(values));
}

/**
 * Compute sum of squares.
 * @param {*} values
 * @returns {number}
 */
function sumOfSquares(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); return arr.reduce((a,b)=>a+Math.pow(Number(b||0),2),0);
}

/**
 * Compute rms.
 * @param {*} values
 * @returns {number}
 */
function rms(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (!arr.length) return 0; const s = arr.reduce((a,b)=>a+Math.pow(Number(b||0),2),0)/arr.length; return Math.sqrt(s);
}

/**
 * Compute geometric mean.
 * @param {*} values
 * @returns {number}
 */
function geometricMean(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (!arr.length) return 0; const prod = arr.reduce((a,b)=>a*Number(b||1),1); return Math.pow(prod, 1/arr.length);
}

/**
 * Compute harmonic mean.
 * @param {*} values
 * @returns {number}
 */
function harmonicMean(values) {
  const arr = Array.isArray(values) ? values : Array.prototype.slice.call(arguments); if (!arr.length) return 0; const denom = arr.reduce((a,b)=>a+(1/Number(b||1)),0); return arr.length/denom;
}

/**
 * Compute percent change.
 * @param {*} oldValue
 * @param {*} newValue
 * @returns {number}
 */
function percentChange(oldValue, newValue) {
  const a = Number(oldValue); const b = Number(newValue); if (a === 0) return 0; return ((b-a)/a)*100;
}

/**
 * Compute ratio.
 * @param {*} numerator
 * @param {*} denominator
 * @returns {number}
 */
function ratio(numerator, denominator) {
  const b = Number(denominator); if (!b) return 0; return Number(numerator)/b;
}

/**
 * Compute round to step.
 * @param {*} n
 * @param {*} step
 * @returns {number}
 */
function roundToStep(n, step) {
  const s = Number(step); if (!s) return Number(n); return Math.round(Number(n)/s)*s;
}

/**
 * Compute floor to.
 * @param {*} n
 * @param {*} step
 * @returns {number}
 */
function floorTo(n, step) {
  const s = Number(step); if (!s) return Math.floor(Number(n)); return Math.floor(Number(n)/s)*s;
}

/**
 * Compute ceil to.
 * @param {*} n
 * @param {*} step
 * @returns {number}
 */
function ceilTo(n, step) {
  const s = Number(step); if (!s) return Math.ceil(Number(n)); return Math.ceil(Number(n)/s)*s;
}

/**
 * Compute round to significant.
 * @param {*} n
 * @param {*} sig
 * @returns {number}
 */
function roundToSignificant(n, sig) {
  const x = Number(n); if (x === 0) return 0; const d = Math.ceil(Math.log10(Math.abs(x))); const p = sig - d; const m = Math.pow(10, p); return Math.round(x*m)/m;
}

/**
 * Compute clamp int.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function clampInt(n, min, max) {
  return Math.max(min, Math.min(max, Math.trunc(Number(n))));
}

/**
 * Check is even.
 * @param {*} n
 * @returns {boolean}
 */
function isEven(n) {
  return Number(n) % 2 === 0;
}

/**
 * Check is odd.
 * @param {*} n
 * @returns {boolean}
 */
function isOdd(n) {
  return Math.abs(Number(n) % 2) === 1;
}

/**
 * Check is positive.
 * @param {*} n
 * @returns {boolean}
 */
function isPositive(n) {
  return Number(n) > 0;
}

/**
 * Check is negative.
 * @param {*} n
 * @returns {boolean}
 */
function isNegative(n) {
  return Number(n) < 0;
}

/**
 * Check is zero.
 * @param {*} n
 * @returns {boolean}
 */
function isZero(n) {
  return Number(n) === 0;
}

/**
 * Check is finite number.
 * @param {*} n
 * @returns {boolean}
 */
function isFiniteNumber(n) {
  return Number.isFinite(Number(n));
}

/**
 * Check is na nnumber.
 * @param {*} n
 * @returns {boolean}
 */
function isNaNNumber(n) {
  return Number.isNaN(Number(n));
}

/**
 * Compute gcd.
 * @param {*} x
 * @param {*} y
 * @returns {number}
 */
function gcd(x, y) {
  let a = Math.abs(Number(x)); let b = Math.abs(Number(y)); while (b) { const t = b; b = a % b; a = t; } return a;
}

/**
 * Compute lcm.
 * @param {*} x
 * @param {*} y
 * @returns {number}
 */
function lcm(x, y) {
  const a = Math.abs(Number(x)); const b = Math.abs(Number(y)); if (!a || !b) return 0; return Math.abs(a*b)/gcd(a,b);
}

/**
 * Compute factorial.
 * @param {*} n
 * @returns {number}
 */
function factorial(n) {
  let r = 1; const n2 = Math.max(0, Math.trunc(Number(n))); for (let i=2;i<=n2;i++) r*=i; return r;
}

/**
 * Compute fibonacci.
 * @param {*} n
 * @returns {number}
 */
function fibonacci(n) {
  let a=0,b=1; const n2=Math.max(0,Math.trunc(Number(n))); for (let i=0;i<n2;i++){ const t=a; a=b; b=t+b; } return a;
}

/**
 * Compute n cr.
 * @param {*} n
 * @param {*} r
 * @returns {number}
 */
function nCr(n, r) {
  const n2=Math.trunc(Number(n)); const r2=Math.trunc(Number(r)); if (r2<0||n2<0||r2>n2) return 0; return factorial(n2)/(factorial(r2)*factorial(n2-r2));
}

/**
 * Compute n pr.
 * @param {*} n
 * @param {*} r
 * @returns {number}
 */
function nPr(n, r) {
  const n2=Math.trunc(Number(n)); const r2=Math.trunc(Number(r)); if (r2<0||n2<0||r2>n2) return 0; return factorial(n2)/factorial(n2-r2);
}

/**
 * Check is prime.
 * @param {*} n
 * @returns {boolean}
 */
function isPrime(n) {
  const n2=Math.trunc(Number(n)); if (n2<=1) return false; if (n2<=3) return true; if (n2%2===0||n2%3===0) return false; for (let i=5;i*i<=n2;i+=6){ if (n2%i===0||n2%(i+2)===0) return false; } return true;
}

/**
 * Compute next prime.
 * @param {*} n
 * @returns {number}
 */
function nextPrime(n) {
  let n2=Math.max(2,Math.trunc(Number(n))); while (!isPrime(n2)) n2++; return n2;
}

/**
 * Compute prev prime.
 * @param {*} n
 * @returns {number}
 */
function prevPrime(n) {
  let n2=Math.trunc(Number(n)); if (n2<2) return 0; while (n2>=2 && !isPrime(n2)) n2--; return n2<2?0:n2;
}

/**
 * Compute random bool.
 * @returns {number}
 */
function randomBool() {
  return Math.random() < 0.5;
}

/**
 * Compute random sign.
 * @returns {number}
 */
function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

/**
 * Compute random gaussian.
 * @returns {number}
 */
function randomGaussian() {
  let u=0,v=0; while(u===0) u=Math.random(); while(v===0) v=Math.random(); return Math.sqrt(-2.0*Math.log(u))*Math.cos(2.0*Math.PI*v);
}

/**
 * Array helper: head.
 * @param {*} arr
 * @returns {*}
 */
function head(arr) {
  return Array.isArray(arr) ? arr[0] : undefined;
}

/**
 * Array helper: tail.
 * @param {*} arr
 * @returns {*}
 */
function tail(arr) {
  return Array.isArray(arr) ? arr.slice(1) : [];
}

/**
 * Array helper: init.
 * @param {*} arr
 * @returns {*}
 */
function init(arr) {
  return Array.isArray(arr) ? arr.slice(0, -1) : [];
}

/**
 * Array helper: last index.
 * @param {*} arr
 * @returns {*}
 */
function lastIndex(arr) {
  return Array.isArray(arr) ? arr.length - 1 : -1;
}

/**
 * Array helper: find last.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function findLast(arr, fn) {
  if (!Array.isArray(arr)) return undefined; for (let i=arr.length-1;i>=0;i--){ if (fn(arr[i], i, arr)) return arr[i]; }
}

/**
 * Array helper: find last index.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function findLastIndex(arr, fn) {
  if (!Array.isArray(arr)) return -1; for (let i=arr.length-1;i>=0;i--){ if (fn(arr[i], i, arr)) return i; } return -1;
}

/**
 * Array helper: count by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function countBy(arr, fn) {
  if (!Array.isArray(arr)) return {}; return arr.reduce((acc,v)=>{ const k=fn(v); acc[k]=(acc[k]||0)+1; return acc; },{});
}

/**
 * Array helper: key by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function keyBy(arr, fn) {
  if (!Array.isArray(arr)) return {}; return arr.reduce((acc,v)=>{ const k=fn(v); acc[k]=v; return acc; },{});
}

/**
 * Array helper: partition.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function partition(arr, fn) {
  if (!Array.isArray(arr)) return [[],[]]; return arr.reduce((acc,v)=>{ (fn(v)?acc[0]:acc[1]).push(v); return acc; },[[],[]]);
}

/**
 * Array helper: unique sorted.
 * @param {*} arr
 * @returns {*}
 */
function uniqueSorted(arr) {
  if (!Array.isArray(arr)) return []; const out=[]; let prev; for (const v of arr){ if (v!==prev){ out.push(v); prev=v; } } return out;
}

/**
 * Array helper: flatten deep.
 * @param {*} arr
 * @returns {*}
 */
function flattenDeep(arr) {
  if (!Array.isArray(arr)) return []; return arr.flat(Infinity);
}

/**
 * Array helper: flatten depth.
 * @param {*} arr
 * @param {*} depth
 * @returns {*}
 */
function flattenDepth(arr, depth) {
  if (!Array.isArray(arr)) return []; return arr.flat(depth);
}

/**
 * Array helper: rotate.
 * @param {*} arr
 * @param {*} count
 * @returns {*}
 */
function rotate(arr, count) {
  if (!Array.isArray(arr)) return []; const n=arr.length; if (!n) return []; const k=((count%n)+n)%n; return arr.slice(-k).concat(arr.slice(0,n-k));
}

/**
 * Array helper: rotate left.
 * @param {*} arr
 * @param {*} count
 * @returns {*}
 */
function rotateLeft(arr, count) {
  return rotate(arr, -count);
}

/**
 * Array helper: rotate right.
 * @param {*} arr
 * @param {*} count
 * @returns {*}
 */
function rotateRight(arr, count) {
  return rotate(arr, count);
}

/**
 * Array helper: sliding window.
 * @param {*} arr
 * @param {*} size
 * @returns {*}
 */
function slidingWindow(arr, size) {
  if (!Array.isArray(arr) || size<=0) return []; const out=[]; for (let i=0;i<=arr.length-size;i++){ out.push(arr.slice(i,i+size)); } return out;
}

/**
 * Array helper: take while.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function takeWhile(arr, fn) {
  if (!Array.isArray(arr)) return []; const out=[]; for (const v of arr){ if (!fn(v)) break; out.push(v);} return out;
}

/**
 * Array helper: drop while.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function dropWhile(arr, fn) {
  if (!Array.isArray(arr)) return []; let i=0; for (;i<arr.length;i++){ if (!fn(arr[i])) break; } return arr.slice(i);
}

/**
 * Array helper: take until.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function takeUntil(arr, fn) {
  if (!Array.isArray(arr)) return []; const out=[]; for (const v of arr){ if (fn(v)) break; out.push(v);} return out;
}

/**
 * Array helper: drop until.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function dropUntil(arr, fn) {
  if (!Array.isArray(arr)) return []; let i=0; for (;i<arr.length;i++){ if (fn(arr[i])) break; } return arr.slice(i);
}

/**
 * Array helper: zip object.
 * @param {*} keys
 * @param {*} values
 * @returns {*}
 */
function zipObject(keys, values) {
  if (!Array.isArray(keys) || !Array.isArray(values)) return {}; const out={}; for (let i=0;i<keys.length;i++){ out[keys[i]] = values[i]; } return out;
}

/**
 * Array helper: index by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function indexBy(arr, fn) {
  return keyBy(arr, fn);
}

/**
 * Array helper: count.
 * @param {*} arr
 * @returns {*}
 */
function count(arr) {
  if (!Array.isArray(arr)) return 0; return arr.length;
}

/**
 * Array helper: repeat array.
 * @param {*} arr
 * @param {*} times
 * @returns {*}
 */
function repeatArray(arr, times) {
  if (!Array.isArray(arr)) return []; const out=[]; for (let i=0;i<times;i++) out.push(...arr); return out;
}

/**
 * Array helper: to set.
 * @param {*} arr
 * @returns {*}
 */
function toSet(arr) {
  return new Set(Array.isArray(arr) ? arr : []);
}

/**
 * Array helper: from set.
 * @param {*} set
 * @returns {*}
 */
function fromSet(set) {
  return Array.from(set || []);
}

/**
 * Array helper: index of all.
 * @param {*} arr
 * @param {*} value
 * @returns {*}
 */
function indexOfAll(arr, value) {
  if (!Array.isArray(arr)) return []; const out=[]; arr.forEach((v,i)=>{ if (v===value) out.push(i); }); return out;
}

/**
 * Array helper: chunk while.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function chunkWhile(arr, fn) {
  if (!Array.isArray(arr)) return []; const out=[]; let buf=[]; for (const v of arr){ if (fn(v, buf)) { buf.push(v); } else { if (buf.length) out.push(buf); buf=[v]; } } if (buf.length) out.push(buf); return out;
}

/**
 * Array helper: chunk by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function chunkBy(arr, fn) {
  return chunkWhile(arr, (v, buf)=>buf.length===0 || fn(v, buf[buf.length-1]));
}

/**
 * Array helper: difference by.
 * @param {*} arr
 * @param {*} values
 * @param {*} fn
 * @returns {*}
 */
function differenceBy(arr, values, fn) {
  if (!Array.isArray(arr) || !Array.isArray(values)) return []; const set=new Set(values.map(fn)); return arr.filter(v=>!set.has(fn(v)));
}

/**
 * Array helper: intersection by.
 * @param {*} arr
 * @param {*} values
 * @param {*} fn
 * @returns {*}
 */
function intersectionBy(arr, values, fn) {
  if (!Array.isArray(arr) || !Array.isArray(values)) return []; const set=new Set(values.map(fn)); return arr.filter(v=>set.has(fn(v)));
}

/**
 * Array helper: union by.
 * @param {*} a
 * @param {*} b
 * @param {*} fn
 * @returns {*}
 */
function unionBy(a, b, fn) {
  if (!Array.isArray(a) || !Array.isArray(b)) return []; const seen=new Set(); const out=[]; for (const v of a.concat(b)) { const k=fn(v); if (!seen.has(k)) { seen.add(k); out.push(v); } } return out;
}

/**
 * Array helper: sum by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function sumBy(arr, fn) {
  if (!Array.isArray(arr)) return 0; return arr.reduce((acc,v)=>acc+Number(fn(v)||0),0);
}

/**
 * Array helper: avg by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function avgBy(arr, fn) {
  if (!Array.isArray(arr) || !arr.length) return 0; return sumBy(arr, fn)/arr.length;
}

/**
 * Array helper: compact by.
 * @param {*} arr
 * @param {*} fn
 * @returns {*}
 */
function compactBy(arr, fn) {
  if (!Array.isArray(arr)) return []; return arr.filter(fn);
}

/**
 * Check is array.
 * @param {*} arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * Array helper: last index of.
 * @param {*} arr
 * @param {*} value
 * @returns {*}
 */
function lastIndexOf(arr, value) {
  if (!Array.isArray(arr)) return -1; return arr.lastIndexOf(value);
}

/**
 * Array helper: swap.
 * @param {*} arr
 * @param {*} fromIndex
 * @param {*} toIndex
 * @returns {*}
 */
function swap(arr, fromIndex, toIndex) {
  if (!Array.isArray(arr)) return []; const out=arr.slice(); const i2=fromIndex, j2=toIndex; if (i2<0||j2<0||i2>=out.length||j2>=out.length) return out; const t=out[i2]; out[i2]=out[j2]; out[j2]=t; return out;
}

/**
 * Array helper: insert at.
 * @param {*} arr
 * @param {*} index
 * @param {*} value
 * @returns {*}
 */
function insertAt(arr, index, value) {
  if (!Array.isArray(arr)) return []; const out=arr.slice(); out.splice(index,0,value); return out;
}

/**
 * Array helper: remove at.
 * @param {*} arr
 * @param {*} index
 * @returns {*}
 */
function removeAt(arr, index) {
  if (!Array.isArray(arr)) return []; const out=arr.slice(); out.splice(index,1); return out;
}

/**
 * String helper: trim start.
 * @param {*} s
 * @returns {*}
 */
function trimStart(s) {
  return String(s).trimStart();
}

/**
 * String helper: trim end.
 * @param {*} s
 * @returns {*}
 */
function trimEnd(s) {
  return String(s).trimEnd();
}

/**
 * String helper: pad center.
 * @param {*} s
 * @param {*} length
 * @param {*} ch=" "
 * @returns {*}
 */
function padCenter(s, length, ch=" ") {
  const str=String(s); const total=length-str.length; if (total<=0) return str; const left=Math.floor(total/2); const right=total-left; return padLeft(padRight(str, str.length+right, ch), str.length+left+right, ch);
}

/**
 * String helper: reverse string.
 * @param {*} s
 * @returns {*}
 */
function reverseString(s) {
  return String(s).split("").reverse().join("");
}

/**
 * Check is lower.
 * @param {*} s
 * @returns {*}
 */
function isLower(s) {
  return String(s) === String(s).toLowerCase();
}

/**
 * Check is upper.
 * @param {*} s
 * @returns {*}
 */
function isUpper(s) {
  return String(s) === String(s).toUpperCase();
}

/**
 * String helper: words.
 * @param {*} s
 * @returns {*}
 */
function words(s) {
  return String(s).trim().match(/\b[\w']+\b/g) || [];
}

/**
 * String helper: lines.
 * @param {*} s
 * @returns {*}
 */
function lines(s) {
  return String(s).split(/\r?\n/);
}

/**
 * String helper: camel case.
 * @param {*} s
 * @returns {*}
 */
function camelCase(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+(.)/g, (_,c)=>c.toUpperCase());
}

/**
 * String helper: snake case.
 * @param {*} s
 * @returns {*}
 */
function snakeCase(s) {
  return String(s).trim().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "").toLowerCase();
}

/**
 * String helper: kebab case.
 * @param {*} s
 * @returns {*}
 */
function kebabCase(s) {
  return String(s).trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
}

/**
 * String helper: pascal case.
 * @param {*} s
 * @returns {*}
 */
function pascalCase(s) {
  const w=words(s); return w.map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join("");
}

/**
 * Check starts with.
 * @param {*} s
 * @param {*} prefix
 * @returns {boolean}
 */
function startsWith(s, prefix) {
  return String(s).startsWith(String(prefix));
}

/**
 * Check ends with.
 * @param {*} s
 * @param {*} suffix
 * @returns {boolean}
 */
function endsWith(s, suffix) {
  return String(s).endsWith(String(suffix));
}

/**
 * Check includes.
 * @param {*} s
 * @param {*} sub
 * @returns {boolean}
 */
function includes(s, sub) {
  return String(s).includes(String(sub));
}

/**
 * String helper: count chars.
 * @param {*} s
 * @returns {*}
 */
function countChars(s) {
  return String(s).length;
}

/**
 * String helper: count occurrences.
 * @param {*} s
 * @param {*} sub
 * @returns {*}
 */
function countOccurrences(s, sub) {
  return String(s).split(String(sub)).length-1;
}

/**
 * String helper: replace first.
 * @param {*} s
 * @param {*} sub
 * @param {*} rep
 * @returns {*}
 */
function replaceFirst(s, sub, rep) {
  return String(s).replace(String(sub), String(rep));
}

/**
 * String helper: replace last.
 * @param {*} s
 * @param {*} sub
 * @param {*} rep
 * @returns {*}
 */
function replaceLast(s, sub, rep) {
  const str=String(s); const subStr=String(sub); const idx=str.lastIndexOf(subStr); if (idx===-1) return str; return str.slice(0,idx)+String(rep)+str.slice(idx+subStr.length);
}

/**
 * String helper: ensure prefix.
 * @param {*} s
 * @param {*} prefix
 * @returns {*}
 */
function ensurePrefix(s, prefix) {
  const str=String(s); const p=String(prefix); return str.startsWith(p) ? str : p+str;
}

/**
 * String helper: ensure suffix.
 * @param {*} s
 * @param {*} suffix
 * @returns {*}
 */
function ensureSuffix(s, suffix) {
  const str=String(s); const p=String(suffix); return str.endsWith(p) ? str : str+p;
}

/**
 * String helper: strip prefix.
 * @param {*} s
 * @param {*} prefix
 * @returns {*}
 */
function stripPrefix(s, prefix) {
  const str=String(s); const p=String(prefix); return str.startsWith(p)?str.slice(p.length):str;
}

/**
 * String helper: strip suffix.
 * @param {*} s
 * @param {*} suffix
 * @returns {*}
 */
function stripSuffix(s, suffix) {
  const str=String(s); const p=String(suffix); return str.endsWith(p)?str.slice(0,-p.length):str;
}

/**
 * String helper: collapse whitespace.
 * @param {*} s
 * @returns {*}
 */
function collapseWhitespace(s) {
  return String(s).trim().replace(/s+/g, " ");
}

/**
 * String helper: mask.
 * @param {*} s
 * @param {*} keepEnd=4
 * @param {*} ch="*"
 * @returns {*}
 */
function mask(s, keepEnd=4, ch="*") {
  const str=String(s); const keep=Math.max(0, Number(keepEnd)); const maskChar=String(ch||"*"); return maskChar.repeat(Math.max(0,str.length-keep))+str.slice(-keep);
}

/**
 * String helper: unmask.
 * @param {*} s
 * @param {*} ch="*"
 * @returns {*}
 */
function unmask(s, ch="*") {
  const str = String(s);
  const esc = String(ch).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return str.replace(new RegExp("^" + esc + "+"), "");
}

/**
 * String helper: surround.
 * @param {*} s
 * @param {*} prefix
 * @param {*} suffix
 * @returns {*}
 */
function surround(s, prefix, suffix) {
  return String(prefix)+String(s)+String(suffix);
}

/**
 * String helper: to title case words.
 * @param {*} s
 * @returns {*}
 */
function toTitleCaseWords(s) {
  return words(s).map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join(" ");
}

/**
 * String helper: remove vowels.
 * @param {*} s
 * @returns {*}
 */
function removeVowels(s) {
  return String(s).replace(/[aeiou]/gi, "");
}

/**
 * String helper: remove consonants.
 * @param {*} s
 * @returns {*}
 */
function removeConsonants(s) {
  return String(s).replace(/[^aeiouWd_]/gi, "");
}

/**
 * String helper: swap case.
 * @param {*} s
 * @returns {*}
 */
function swapCase(s) {
  return String(s).split("").map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join("");
}

/**
 * Object helper: map values.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function mapValues(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ out[k]=fn(obj[k], k, obj); }); return out;
}

/**
 * Object helper: map entries.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function mapEntries(obj, fn) {
  if (!obj || typeof obj !== "object") return []; return Object.entries(obj).map(([k,v])=>fn(k,v,obj));
}

/**
 * Object helper: filter keys.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function filterKeys(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ if (fn(k,obj[k],obj)) out[k]=obj[k]; }); return out;
}

/**
 * Object helper: filter values.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function filterValues(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ if (fn(obj[k],k,obj)) out[k]=obj[k]; }); return out;
}

/**
 * Object helper: invert by.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function invertBy(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ const v=fn(obj[k]); out[v]=k; }); return out;
}

/**
 * Object helper: omit by.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function omitBy(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ if (!fn(obj[k],k,obj)) out[k]=obj[k]; }); return out;
}

/**
 * Object helper: pick by.
 * @param {*} obj
 * @param {*} fn
 * @returns {*}
 */
function pickBy(obj, fn) {
  if (!obj || typeof obj !== "object") return {}; const out={}; Object.keys(obj).forEach(k=>{ if (fn(obj[k],k,obj)) out[k]=obj[k]; }); return out;
}

/**
 * Object helper: defaults.
 * @param {*} ...objects
 * @returns {*}
 */
function defaults(...objects) {
  const out={}; const list=Array.prototype.slice.call(arguments); for (const src of list){ if (!src) continue; Object.keys(src).forEach(k=>{ if (out[k]===undefined) out[k]=src[k]; }); } return out;
}

/**
 * Object helper: defaults deep.
 * @param {*} ...objects
 * @returns {*}
 */
function defaultsDeep(...objects) {
  const list=Array.prototype.slice.call(arguments); const isPlain=v=>v&&typeof v==="object"&&!Array.isArray(v); const out={}; for (const src of list){ if (!isPlain(src)) continue; for (const k of Object.keys(src)){ if (isPlain(src[k])) { out[k]=defaultsDeep(out[k]||{}, src[k]); } else if (out[k]===undefined) out[k]=src[k]; } } return out;
}

/**
 * Check has path.
 * @param {*} obj
 * @param {*} path
 * @returns {*}
 */
function hasPath(obj, path) {
  const parts=Array.isArray(path)?path:String(path).split("."); let cur=obj; for (const p of parts){ if (!cur || !(p in cur)) return false; cur=cur[p]; } return true;
}

/**
 * Object helper: unset path.
 * @param {*} obj
 * @param {*} path
 * @returns {*}
 */
function unsetPath(obj, path) {
  const parts=Array.isArray(path)?path:String(path).split("."); let cur=obj; for (let i=0;i<parts.length-1;i++){ if (!cur || typeof cur!=="object") return false; cur=cur[parts[i]]; } if (cur && Object.prototype.hasOwnProperty.call(cur, parts[parts.length-1])) { delete cur[parts[parts.length-1]]; return true; } return false;
}

/**
 * Object helper: clone shallow.
 * @param {*} obj
 * @returns {*}
 */
function cloneShallow(obj) {
  return obj && typeof obj === "object" ? Object.assign({}, obj) : obj;
}

/**
 * Check is empty object.
 * @param {*} obj
 * @returns {*}
 */
function isEmptyObject(obj) {
  return obj && typeof obj === "object" ? Object.keys(obj).length===0 : true;
}

/**
 * Object helper: to pairs.
 * @param {*} obj
 * @returns {*}
 */
function toPairs(obj) {
  return entries(obj);
}

/**
 * Object helper: from pairs.
 * @param {*} pairs
 * @returns {*}
 */
function fromPairs(pairs) {
  return fromEntries(pairs);
}

/**
 * Object helper: zip object deep.
 * @param {*} paths
 * @param {*} values
 * @returns {*}
 */
function zipObjectDeep(paths, values) {
  if (!Array.isArray(paths) || !Array.isArray(values)) return {}; const out={}; for (let i=0;i<paths.length;i++){ safeSet(out, paths[i], values[i]); } return out;
}

/**
 * Object helper: merge with.
 * @returns {*}
 */
function mergeWith() {
  const list = Array.prototype.slice.call(arguments);
  const custom = list.pop();
  const out = {};
  for (const src of list) {
    if (!src) continue;
    for (const k of Object.keys(src)) {
      const ov = out[k];
      const sv = src[k];
      const r = custom(ov, sv, k);
      out[k] = r === undefined ? sv : r;
    }
  }
  return out;
}

/**
 * Object helper: pick path.
 * @param {*} obj
 * @param {*} paths
 * @returns {*}
 */
function pickPath(obj, paths) {
  const out={}; for (const p of paths){ const v=safeGet(obj,p); if (v!==undefined) safeSet(out,p,v); } return out;
}

/**
 * Object helper: omit path.
 * @param {*} obj
 * @param {*} paths
 * @returns {*}
 */
function omitPath(obj, paths) {
  const out=deepClone(obj); for (const p of paths){ unsetPath(out,p); } return out;
}

/**
 * memoize.
 * @param {*} fn
 * @param {*} resolver
 * @returns {*}
 */
function memoize(fn, resolver) {
  const cache=new Map(); return function(){ const key=resolver?resolver.apply(this, arguments):arguments[0]; if (cache.has(key)) return cache.get(key); const v=fn.apply(this, arguments); cache.set(key,v); return v; };
}

/**
 * compose.
 * @returns {*}
 */
function compose() {
  const fns = Array.prototype.slice.call(arguments);
  return function(x){ return fns.reduceRight((v,f)=>f(v), x); };
}

/**
 * pipe.
 * @returns {*}
 */
function pipe() {
  const fns = Array.prototype.slice.call(arguments);
  return function(x){ return fns.reduce((v,f)=>f(v), x); };
}

/**
 * times.
 * @param {*} count
 * @param {*} fn
 * @returns {*}
 */
function times(count, fn) {
  const out=[]; for (let i=0;i<count;i++) out.push(fn(i)); return out;
}

/**
 * defer.
 * @returns {*}
 */
function defer() {
  return new Promise(resolve=>setTimeout(resolve,0));
}

/**
 * noop Async.
 * @returns {*}
 */
function noopAsync() {
  return Promise.resolve();
}

/**
 * once Async.
 * @param {*} fn
 * @returns {*}
 */
function onceAsync(fn) {
  let called=false; let value; return async function(){ if (!called){ called=true; value = await fn.apply(this, arguments); } return value; };
}


/**
 * Compute clamp abs.
 * @param {*} n
 * @param {*} max
 * @returns {number}
 */
function clampAbs(n, max) {
  const x=Number(n); const m=Math.abs(Number(max)); return Math.max(-m, Math.min(m, x));
}

/**
 * Compute round to nearest.
 * @param {*} n
 * @param {*} step
 * @returns {number}
 */
function roundToNearest(n, step) {
  const s=Number(step); if (!s) return Number(n); return Math.round(Number(n)/s)*s;
}

/**
 * Compute round to multiple.
 * @param {*} n
 * @param {*} multiple
 * @returns {number}
 */
function roundToMultiple(n, multiple) {
  const m=Number(multiple); if (!m) return Number(n); return Math.round(Number(n)/m)*m;
}

/**
 * Compute ceil to multiple.
 * @param {*} n
 * @param {*} multiple
 * @returns {number}
 */
function ceilToMultiple(n, multiple) {
  const m=Number(multiple); if (!m) return Math.ceil(Number(n)); return Math.ceil(Number(n)/m)*m;
}

/**
 * Compute floor to multiple.
 * @param {*} n
 * @param {*} multiple
 * @returns {number}
 */
function floorToMultiple(n, multiple) {
  const m=Number(multiple); if (!m) return Math.floor(Number(n)); return Math.floor(Number(n)/m)*m;
}

/**
 * Compute median of three.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function medianOfThree(a, b, c) {
  const arr=[Number(a),Number(b),Number(c)].sort((x,y)=>x-y); return arr[1];
}

/**
 * Compute average of two.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function averageOfTwo(a, b) {
  return (Number(a)+Number(b))/2;
}

/**
 * Compute sum of two.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function sumOfTwo(a, b) {
  return Number(a)+Number(b);
}

/**
 * Compute diff.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function diff(a, b) {
  return Math.abs(Number(a)-Number(b));
}

/**
 * Compute distance 1d.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function distance1D(a, b) {
  return Math.abs(Number(b)-Number(a));
}

/**
 * Compute lerp int.
 * @param {*} a
 * @param {*} b
 * @param {*} t
 * @returns {number}
 */
function lerpInt(a, b, t) {
  return Math.round(Number(a)+(Number(b)-Number(a))*Number(t));
}

/**
 * Compute smooth clamp.
 * @param {*} n
 * @param {*} min
 * @param {*} max
 * @returns {number}
 */
function smoothClamp(n, min, max) {
  return smoothstep(min, max, n);
}

/**
 * Compute triangle wave.
 * @param {*} x
 * @param {*} period
 * @returns {number}
 */
function triangleWave(x, period) {
  const p=Number(period)||1; const t=(Number(x)/p)%1; return 1-4*Math.abs(Math.round(t)-t);
}

/**
 * Compute sawtooth wave.
 * @param {*} x
 * @param {*} period
 * @returns {number}
 */
function sawtoothWave(x, period) {
  const p=Number(period)||1; return ((Number(x)/p)%1+1)%1;
}

/**
 * Compute ping pong.
 * @param {*} x
 * @param {*} length
 * @returns {number}
 */
function pingPong(x, length) {
  const len=Number(length)||1; const t=((Number(x)%(2*len))+2*len)%(2*len); return len-Math.abs(t-len);
}

/**
 * Compute wrap angle.
 * @param {*} deg
 * @returns {number}
 */
function wrapAngle(deg) {
  return ((Number(deg)%360)+360)%360;
}

/**
 * Compute wrap pi.
 * @param {*} rad
 * @returns {number}
 */
function wrapPi(rad) {
  const two=2*Math.PI; let r=((Number(rad)%two)+two)%two; if (r>Math.PI) r-=two; return r;
}

/**
 * Compute normalize angle.
 * @param {*} rad
 * @returns {number}
 */
function normalizeAngle(rad) {
  return wrapPi(rad);
}

/**
 * Compute lerp angle deg.
 * @param {*} from
 * @param {*} to
 * @param {*} t
 * @returns {number}
 */
function lerpAngleDeg(from, to, t) {
  const a=wrapAngle(from); const b=wrapAngle(to); let d=b-a; if (d>180) d-=360; if (d<-180) d+=360; return wrapAngle(a+d*Number(t));
}

/**
 * Compute lerp angle rad.
 * @param {*} from
 * @param {*} to
 * @param {*} t
 * @returns {number}
 */
function lerpAngleRad(from, to, t) {
  const a=wrapPi(from); const b=wrapPi(to); let d=b-a; if (d>Math.PI) d-=2*Math.PI; if (d<-Math.PI) d+=2*Math.PI; return wrapPi(a+d*Number(t));
}

/**
 * Compute deg to turn.
 * @param {*} deg
 * @returns {number}
 */
function degToTurn(deg) {
  return Number(deg)/360;
}

/**
 * Compute turn to deg.
 * @param {*} turn
 * @returns {number}
 */
function turnToDeg(turn) {
  return Number(turn)*360;
}

/**
 * Compute rad to turn.
 * @param {*} rad
 * @returns {number}
 */
function radToTurn(rad) {
  return Number(rad)/(2*Math.PI);
}

/**
 * Compute turn to rad.
 * @param {*} turn
 * @returns {number}
 */
function turnToRad(turn) {
  return Number(turn)*2*Math.PI;
}

/**
 * Compute safe divide.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function safeDivide(a, b) {
  return Number(b)===0 ? 0 : Number(a)/Number(b);
}

/**
 * Compute percent of.
 * @param {*} part
 * @param {*} total
 * @returns {number}
 */
function percentOf(part, total) {
  return Number(total)===0 ? 0 : (Number(part)/Number(total))*100;
}

/**
 * Compute from percent.
 * @param {*} percent
 * @param {*} total
 * @returns {number}
 */
function fromPercent(percent, total) {
  return Number(total)*Number(percent)/100;
}

/**
 * Compute clamp percent.
 * @param {*} n
 * @returns {number}
 */
function clampPercent(n) {
  return Math.max(0, Math.min(100, Number(n)));
}

/**
 * Compute sigmoid.
 * @param {*} x
 * @returns {number}
 */
function sigmoid(x) {
  return 1/(1+Math.exp(-Number(x)));
}

/**
 * Compute smoothstep 01.
 * @param {*} x
 * @returns {number}
 */
function smoothstep01(x) {
  return smoothstep(0,1,x);
}

/**
 * Compute step.
 * @param {*} edge
 * @param {*} x
 * @returns {number}
 */
function step(edge, x) {
  return Number(x) < Number(edge) ? 0 : 1;
}

/**
 * Check near equal.
 * @param {*} a
 * @param {*} b
 * @param {*} eps
 * @returns {boolean}
 */
function nearEqual(a, b, eps) {
  return Math.abs(Number(a)-Number(b)) <= (Number(eps)||1e-9);
}

/**
 * Compute round bankers.
 * @param {*} n
 * @returns {number}
 */
function roundBankers(n) {
  const x=Number(n); const f=Math.floor(x); const r=x-f; if (r>0.5) return f+1; if (r<0.5) return f; return f%2===0?f:f+1;
}

/**
 * Compute round half up.
 * @param {*} n
 * @returns {number}
 */
function roundHalfUp(n) {
  const x=Number(n); return Math.sign(x)*Math.floor(Math.abs(x)+0.5);
}

/**
 * Compute round half down.
 * @param {*} n
 * @returns {number}
 */
function roundHalfDown(n) {
  const x=Number(n); return Math.sign(x)*Math.ceil(Math.abs(x)-0.5);
}

/**
 * Compute triangular number.
 * @param {*} n
 * @returns {number}
 */
function triangularNumber(n) {
  const n2=Math.trunc(Number(n)); return n2*(n2+1)/2;
}

/**
 * Check is power of two.
 * @param {*} n
 * @returns {boolean}
 */
function isPowerOfTwo(n) {
  const n2=Math.trunc(Number(n)); return n2>0 && (n2 & (n2-1))===0;
}


/**
 * Check is multiple of.
 * @param {*} n
 * @param {*} multiple
 * @returns {boolean}
 */
function isMultipleOf(n, multiple) {
  const m=Number(multiple); if (!m) return false; return Number(n) % m === 0;
}

/**
 * Compute average of three.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function averageOfThree(a, b, c) {
  return (Number(a)+Number(b)+Number(c))/3;
}


/**
 * Compute area circle.
 * @param {*} radius
 * @returns {number}
 */
function areaCircle(radius) {
  const r=Number(radius); return Math.PI*r*r;
}

/**
 * Compute circumference circle.
 * @param {*} radius
 * @returns {number}
 */
function circumferenceCircle(radius) {
  const r=Number(radius); return 2*Math.PI*r;
}

/**
 * Compute area square.
 * @param {*} side
 * @returns {number}
 */
function areaSquare(side) {
  const s=Number(side); return s*s;
}

/**
 * Compute perimeter square.
 * @param {*} side
 * @returns {number}
 */
function perimeterSquare(side) {
  return 4*Number(side);
}

/**
 * Compute area rectangle.
 * @param {*} width
 * @param {*} height
 * @returns {number}
 */
function areaRectangle(width, height) {
  return Number(width)*Number(height);
}

/**
 * Compute perimeter rectangle.
 * @param {*} width
 * @param {*} height
 * @returns {number}
 */
function perimeterRectangle(width, height) {
  return 2*(Number(width)+Number(height));
}

/**
 * Compute area triangle.
 * @param {*} base
 * @param {*} height
 * @returns {number}
 */
function areaTriangle(base, height) {
  return (Number(base)*Number(height))/2;
}

/**
 * Compute perimeter triangle.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function perimeterTriangle(a, b, c) {
  return Number(a)+Number(b)+Number(c);
}

/**
 * Compute area parallelogram.
 * @param {*} base
 * @param {*} height
 * @returns {number}
 */
function areaParallelogram(base, height) {
  return Number(base)*Number(height);
}

/**
 * Compute area trapezoid.
 * @param {*} a
 * @param {*} b
 * @param {*} height
 * @returns {number}
 */
function areaTrapezoid(a, b, height) {
  return (Number(a)+Number(b))*Number(height)/2;
}

/**
 * Compute area ellipse.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function areaEllipse(a, b) {
  return Math.PI*Number(a)*Number(b);
}

/**
 * Compute area sector.
 * @param {*} theta
 * @param {*} r
 * @returns {number}
 */
function areaSector(theta, r) {
  return (Number(theta)/2)*Number(r)*Number(r);
}

/**
 * Compute arc length.
 * @param {*} theta
 * @param {*} r
 * @returns {number}
 */
function arcLength(theta, r) {
  return Number(theta)*Number(r);
}

/**
 * Compute area ring.
 * @param {*} outerR
 * @param {*} innerR
 * @returns {number}
 */
function areaRing(outerR, innerR) {
  const R=Number(outerR), r=Number(innerR); return Math.PI*(R*R-r*r);
}

/**
 * Compute volume cube.
 * @param {*} side
 * @returns {number}
 */
function volumeCube(side) {
  const s=Number(side); return s*s*s;
}

/**
 * Compute surface area cube.
 * @param {*} side
 * @returns {number}
 */
function surfaceAreaCube(side) {
  const s=Number(side); return 6*s*s;
}

/**
 * Compute volume rect prism.
 * @param {*} width
 * @param {*} height
 * @param {*} depth
 * @returns {number}
 */
function volumeRectPrism(width, height, depth) {
  return Number(width)*Number(height)*Number(depth);
}

/**
 * Compute surface area rect prism.
 * @param {*} width
 * @param {*} height
 * @param {*} depth
 * @returns {number}
 */
function surfaceAreaRectPrism(width, height, depth) {
  const w=Number(width), h=Number(height), d=Number(depth); return 2*(w*h+w*d+h*d);
}

/**
 * Compute volume cylinder.
 * @param {*} radius
 * @param {*} height
 * @returns {number}
 */
function volumeCylinder(radius, height) {
  const r=Number(radius), h=Number(height); return Math.PI*r*r*h;
}

/**
 * Compute surface area cylinder.
 * @param {*} radius
 * @param {*} height
 * @returns {number}
 */
function surfaceAreaCylinder(radius, height) {
  const r=Number(radius), h=Number(height); return 2*Math.PI*r*(r+h);
}

/**
 * Compute volume sphere.
 * @param {*} radius
 * @returns {number}
 */
function volumeSphere(radius) {
  const r=Number(radius); return (4/3)*Math.PI*r*r*r;
}

/**
 * Compute surface area sphere.
 * @param {*} radius
 * @returns {number}
 */
function surfaceAreaSphere(radius) {
  const r=Number(radius); return 4*Math.PI*r*r;
}

/**
 * Compute volume cone.
 * @param {*} radius
 * @param {*} height
 * @returns {number}
 */
function volumeCone(radius, height) {
  const r=Number(radius), h=Number(height); return (Math.PI*r*r*h)/3;
}

/**
 * Compute surface area cone.
 * @param {*} radius
 * @param {*} height
 * @returns {number}
 */
function surfaceAreaCone(radius, height) {
  const r=Number(radius), h=Number(height); const l=Math.sqrt(r*r+h*h); return Math.PI*r*(r+l);
}

/**
 * Compute volume pyramid square.
 * @param {*} baseArea
 * @param {*} height
 * @returns {number}
 */
function volumePyramidSquare(baseArea, height) {
  return Number(baseArea)*Number(height)/3;
}

/**
 * Compute surface area pyramid square.
 * @param {*} baseSide
 * @param {*} slantHeight
 * @returns {number}
 */
function surfaceAreaPyramidSquare(baseSide, slantHeight) {
  const b=Number(baseSide), h=Number(slantHeight); return b*b + 2*b*h;
}

/**
 * Compute slope.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {number}
 */
function slope(x1, y1, x2, y2) {
  return (Number(y2)-Number(y1))/(Number(x2)-Number(x1));
}

/**
 * Compute midpoint x.
 * @param {*} x1
 * @param {*} x2
 * @returns {number}
 */
function midpointX(x1, x2) {
  return (Number(x1)+Number(x2))/2;
}

/**
 * Compute midpoint y.
 * @param {*} y1
 * @param {*} y2
 * @returns {number}
 */
function midpointY(y1, y2) {
  return (Number(y1)+Number(y2))/2;
}

/**
 * Compute distance points.
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {number}
 */
function distancePoints(x1, y1, x2, y2) {
  return Math.hypot(Number(x2)-Number(x1), Number(y2)-Number(y1));
}

/**
 * Compute pythagoras.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function pythagoras(a, b) {
  return Math.hypot(Number(a), Number(b));
}

/**
 * Compute quadratic discriminant.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function quadraticDiscriminant(a, b, c) {
  return Number(b)*Number(b) - 4*Number(a)*Number(c);
}

/**
 * Compute quadratic roots.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function quadraticRoots(a, b, c) {
  const A=Number(a), B=Number(b), C=Number(c); const d=B*B-4*A*C; if (A===0) return []; if (d<0) return []; const s=Math.sqrt(d); return [(-B+s)/(2*A), (-B-s)/(2*A)];
}

/**
 * Compute heron area.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function heronArea(a, b, c) {
  const s=(Number(a)+Number(b)+Number(c))/2; return Math.sqrt(s*(s-Number(a))*(s-Number(b))*(s-Number(c)));
}

/**
 * Compute law of cosines side.
 * @param {*} a
 * @param {*} b
 * @param {*} C
 * @returns {number}
 */
function lawOfCosinesSide(a, b, C) {
  return Math.sqrt(Number(a)*Number(a)+Number(b)*Number(b)-2*Number(a)*Number(b)*Math.cos(Number(C)));
}

/**
 * Compute law of cosines angle.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns {number}
 */
function lawOfCosinesAngle(a, b, c) {
  return Math.acos((Number(a)*Number(a)+Number(b)*Number(b)-Number(c)*Number(c))/(2*Number(a)*Number(b)));
}

/**
 * Compute law of sines side.
 * @param {*} a
 * @param {*} A
 * @param {*} B
 * @returns {number}
 */
function lawOfSinesSide(a, A, B) {
  return Number(a)*Math.sin(Number(B))/Math.sin(Number(A));
}

/**
 * Compute law of sines angle.
 * @param {*} a
 * @param {*} A
 * @param {*} b
 * @returns {number}
 */
function lawOfSinesAngle(a, A, b) {
  return Math.asin(Number(b)*Math.sin(Number(A))/Number(a));
}

/**
 * Compute convert cto f.
 * @param {*} c
 * @returns {number}
 */
function convertCtoF(c) {
  return Number(c)*9/5+32;
}

/**
 * Compute convert fto c.
 * @param {*} f
 * @returns {number}
 */
function convertFtoC(f) {
  return (Number(f)-32)*5/9;
}

/**
 * Compute convert cto k.
 * @param {*} c
 * @returns {number}
 */
function convertCtoK(c) {
  return Number(c)+273.15;
}

/**
 * Compute convert kto c.
 * @param {*} k
 * @returns {number}
 */
function convertKtoC(k) {
  return Number(k)-273.15;
}

/**
 * Compute convert fto k.
 * @param {*} f
 * @returns {number}
 */
function convertFtoK(f) {
  return (Number(f)+459.67)*5/9;
}

/**
 * Compute convert kto f.
 * @param {*} k
 * @returns {number}
 */
function convertKtoF(k) {
  return Number(k)*9/5-459.67;
}

/**
 * Compute area regular polygon.
 * @param {*} sides
 * @param {*} sideLength
 * @returns {number}
 */
function areaRegularPolygon(sides, sideLength) {
  const n=Number(sides), s=Number(sideLength); if (n<3) return 0; return (n*s*s)/(4*Math.tan(Math.PI/n));
}

/**
 * Compute perimeter regular polygon.
 * @param {*} sides
 * @param {*} sideLength
 * @returns {number}
 */
function perimeterRegularPolygon(sides, sideLength) {
  return Number(sides)*Number(sideLength);
}

/**
 * Compute apothem regular polygon.
 * @param {*} sides
 * @param {*} sideLength
 * @returns {number}
 */
function apothemRegularPolygon(sides, sideLength) {
  return Number(sideLength)/(2*Math.tan(Math.PI/Number(sides)));
}

/**
 * Compute circumradius regular polygon.
 * @param {*} sides
 * @param {*} sideLength
 * @returns {number}
 */
function circumradiusRegularPolygon(sides, sideLength) {
  return Number(sideLength)/(2*Math.sin(Math.PI/Number(sides)));
}

/**
 * Compute distance point line.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} x
 * @param {*} y
 * @returns {number}
 */
function distancePointLine(a, b, c, x, y) {
  const A=Number(a), B=Number(b), C=Number(c); return Math.abs(A*Number(x)+B*Number(y)+C)/Math.hypot(A,B);
}
