/**
 *
 * @class
 * @extends {OwnedStructure}
 */
StructureLab = function() { };

StructureLab.prototype =
{
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the lab can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of mineral resources containing in the lab.
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The type of minerals containing in the lab.
     * Labs can contain only one mineral type at the same time.
     *
     * @type {string}
     */
    mineralType: "",

    /**
     * The total amount of minerals the lab can contain.
     *
     * @type {number}
     */
    mineralCapacity: 0,

    /**
     * Boosts creep body part using the containing mineral compound.
     * The creep has to be at adjacent square to the lab.
     *
     * @type {function}
     *
     * @param {Creep} creep The target creep.
     * @param {number} [bodyPartsCount] The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_FOUND|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    boostCreep: function(creep, bodyPartsCount) { },

    /**
     * Produce mineral compounds using reagents from two another labs.
     * The same input labs can be used by many output labs.
     *
     * @type {function}
     *
     * @param {StructureLab} lab1 The first source lab.
     * @param {StructureLab} lab2 The second source lab.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED}
     */
    runReaction: function(lab1, lab2) { },

    /**
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};
