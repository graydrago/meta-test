function property(type) {
    return function(target, key, descriptor) {
        let options = {
            type: type,
            active: true
        };

        if (typeof target === "function") {
            descriptor.writable = true;
            descriptor.configurable = true;
            target.prototype[key] = function(v) {
                if (v === undefined) {
                    return this[`_${key}`];
                }
                this[`_${key}`] = v;

                // for chaining
                return this;
            };

            if (target.prototype.propertyList === undefined) {
                target.prototype.propertyList = {};
            }
            target.prototype.propertyList[key] = options;
        } else {
            if (target.propertyList === undefined) {
                target.propertyList = {};
            }
            target.propertyList[key] = options;
        }

        return descriptor;
    }
}

export { property };
