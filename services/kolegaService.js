angular.module('kolegator').service('kolegaService', function() {

    var _koledzy = [];

    var koledzyWBazie = localStorage.getItem('koledzy');
    if (koledzyWBazie) {
        _koledzy = JSON.parse(koledzyWBazie);
    }

    var _save = function() {
        window.localStorage.setItem('koledzy', JSON.stringify(_koledzy));
    };

    return {
        addKolega: function(kolega) {
            console.log("addKolega() sie wywolal ", kolega);

            if (!kolega.id) {
                kolega.id = Math.floor(Math.random() * 1000000);
            }
            _koledzy.push(kolega);
            _save();
        },
        getKolega: function(id) {
            for (var i = 0; i < _koledzy.length; i++) {
                if (_koledzy.id === id) {
                    return _koledzy[i];
                }
            }
            return null;
        },
        removeKolega: function(id) {
            var toRemove = -1;
            for (var i = 0; i < _koledzy.length; i++) {
                if (_koledzy.id === id) {
                    toRemove = i;
                    break;
                }
            }
            _koledzy.splice(toRemove, 1);
            saveToLocalStorage();
        },
        getKoledzy: function() {
            return _koledzy;
        },
        saveToLocalStorage: _save
    };
});
