
export const _buildExclamationKeyObject = function (tuples) {
  var valueMap = {};
  tuples.forEach(function (tuple) {
    valueMap['!' + tuple.value0] = tuple.value1;
  });
  return valueMap;
};

var templatePattern = /\$\{([^}]+)\}/g;

export const _getTemplateVars = function (str) {
  return (str.match(templatePattern) || []).map(function (str) {
    return str.substring(2, str.length - 1);
  });
};
