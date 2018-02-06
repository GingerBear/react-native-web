Object.defineProperty(exports, '__esModule', { value: true });
const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
const _invariant = require('fbjs/lib/invariant');
const _invariant2 = _interopRequireDefault(_invariant);
const _isEmpty = require('fbjs/lib/isEmpty');
const _isEmpty2 = _interopRequireDefault(_isEmpty);
const _warning = require('fbjs/lib/warning');
const _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function defaultGetRowData(dataBlob, sectionID, rowID) {
  return dataBlob[sectionID][rowID];
}
function defaultGetSectionHeaderData(dataBlob, sectionID) {
  return dataBlob[sectionID];
}
const ListViewDataSource = (function() {
  function ListViewDataSource(params) {
    _classCallCheck(this, ListViewDataSource);
    (0, _invariant2.default)(
      params && typeof params.rowHasChanged === 'function',
      'Must provide a rowHasChanged function.'
    );
    this._rowHasChanged = params.rowHasChanged;
    this._getRowData = params.getRowData || defaultGetRowData;
    this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
    this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;
    this._dataBlob = null;
    this._dirtyRows = [];
    this._dirtySections = [];
    this._cachedRowCount = 0;
    this.rowIdentities = [];
    this.sectionIdentities = [];
  }
  _createClass(ListViewDataSource, [
    {
      key: 'cloneWithRows',
      value: function cloneWithRows(dataBlob, rowIdentities) {
        const rowIds = rowIdentities ? [rowIdentities] : null;
        if (!this._sectionHeaderHasChanged) {
          this._sectionHeaderHasChanged = function() {
            return false;
          };
        }
        return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
      }
    },
    {
      key: 'cloneWithRowsAndSections',
      value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
        (0, _invariant2.default)(
          typeof this._sectionHeaderHasChanged === 'function',
          'Must provide a sectionHeaderHasChanged function with section data.'
        );
        const newSource = new ListViewDataSource({
          getRowData: this._getRowData,
          getSectionHeaderData: this._getSectionHeaderData,
          rowHasChanged: this._rowHasChanged,
          sectionHeaderHasChanged: this._sectionHeaderHasChanged
        });
        newSource._dataBlob = dataBlob;
        if (sectionIdentities) {
          newSource.sectionIdentities = sectionIdentities;
        } else {
          newSource.sectionIdentities = Object.keys(dataBlob);
        }
        if (rowIdentities) {
          newSource.rowIdentities = rowIdentities;
        } else {
          newSource.rowIdentities = [];
          newSource.sectionIdentities.forEach(function(sectionID) {
            newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
          });
        }
        newSource._cachedRowCount = countRows(newSource.rowIdentities);
        newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);
        return newSource;
      }
    },
    {
      key: 'getRowCount',
      value: function getRowCount() {
        return this._cachedRowCount;
      }
    },
    {
      key: 'getRowAndSectionCount',
      value: function getRowAndSectionCount() {
        return this._cachedRowCount + this.sectionIdentities.length;
      }
    },
    {
      key: 'rowShouldUpdate',
      value: function rowShouldUpdate(sectionIndex, rowIndex) {
        const needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
        (0, _warning2.default)(
          needsUpdate !== undefined,
          'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex
        );
        return needsUpdate;
      }
    },
    {
      key: 'getRowData',
      value: function getRowData(sectionIndex, rowIndex) {
        const sectionID = this.sectionIdentities[sectionIndex];
        const rowID = this.rowIdentities[sectionIndex][rowIndex];
        (0, _warning2.default)(
          sectionID !== undefined && rowID !== undefined,
          'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex
        );
        return this._getRowData(this._dataBlob, sectionID, rowID);
      }
    },
    {
      key: 'getRowIDForFlatIndex',
      value: function getRowIDForFlatIndex(index) {
        let accessIndex = index;
        for (let ii = 0; ii < this.sectionIdentities.length; ii++) {
          if (accessIndex >= this.rowIdentities[ii].length) {
            accessIndex -= this.rowIdentities[ii].length;
          } else {
            return this.rowIdentities[ii][accessIndex];
          }
        }
        return null;
      }
    },
    {
      key: 'getSectionIDForFlatIndex',
      value: function getSectionIDForFlatIndex(index) {
        let accessIndex = index;
        for (let ii = 0; ii < this.sectionIdentities.length; ii++) {
          if (accessIndex >= this.rowIdentities[ii].length) {
            accessIndex -= this.rowIdentities[ii].length;
          } else {
            return this.sectionIdentities[ii];
          }
        }
        return null;
      }
    },
    {
      key: 'getSectionLengths',
      value: function getSectionLengths() {
        const results = [];
        for (let ii = 0; ii < this.sectionIdentities.length; ii++) {
          results.push(this.rowIdentities[ii].length);
        }
        return results;
      }
    },
    {
      key: 'sectionHeaderShouldUpdate',
      value: function sectionHeaderShouldUpdate(sectionIndex) {
        const needsUpdate = this._dirtySections[sectionIndex];
        (0, _warning2.default)(
          needsUpdate !== undefined,
          'missing dirtyBit for section: ' + sectionIndex
        );
        return needsUpdate;
      }
    },
    {
      key: 'getSectionHeaderData',
      value: function getSectionHeaderData(sectionIndex) {
        if (!this._getSectionHeaderData) {
          return null;
        }
        const sectionID = this.sectionIdentities[sectionIndex];
        (0, _warning2.default)(
          sectionID !== undefined,
          'renderSection called on invalid section: ' + sectionIndex
        );
        return this._getSectionHeaderData(this._dataBlob, sectionID);
      }
    },
    {
      key: '_calculateDirtyArrays',
      value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {
        const prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
        const prevRowsHash = {};
        for (let ii = 0; ii < prevRowIDs.length; ii++) {
          var sectionID = prevSectionIDs[ii];
          (0, _warning2.default)(
            !prevRowsHash[sectionID],
            'SectionID appears more than once: ' + sectionID
          );
          prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
        }
        this._dirtySections = [];
        this._dirtyRows = [];
        let dirty;
        for (let sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
          var sectionID = this.sectionIdentities[sIndex];
          dirty = !prevSectionsHash[sectionID];
          const sectionHeaderHasChanged = this._sectionHeaderHasChanged;
          if (!dirty && sectionHeaderHasChanged) {
            dirty = sectionHeaderHasChanged(
              this._getSectionHeaderData(prevDataBlob, sectionID),
              this._getSectionHeaderData(this._dataBlob, sectionID)
            );
          }
          this._dirtySections.push(!!dirty);
          this._dirtyRows[sIndex] = [];
          for (let rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
            const rowID = this.rowIdentities[sIndex][rIndex];
            dirty =
              !prevSectionsHash[sectionID] ||
              !prevRowsHash[sectionID][rowID] ||
              this._rowHasChanged(
                this._getRowData(prevDataBlob, sectionID, rowID),
                this._getRowData(this._dataBlob, sectionID, rowID)
              );
            this._dirtyRows[sIndex].push(!!dirty);
          }
        }
      }
    }
  ]);
  return ListViewDataSource;
})();
function countRows(allRowIDs) {
  let totalRows = 0;
  for (let sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
    const rowIDs = allRowIDs[sectionIdx];
    totalRows += rowIDs.length;
  }
  return totalRows;
}
function keyedDictionaryFromArray(arr) {
  if ((0, _isEmpty2.default)(arr)) {
    return {};
  }
  const result = {};
  for (let ii = 0; ii < arr.length; ii++) {
    const key = arr[ii];
    (0, _warning2.default)(!result[key], 'Value appears more than once in array: ' + key);
    result[key] = true;
  }
  return result;
}
exports.default = ListViewDataSource;
