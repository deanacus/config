/**
 * How to handle violation of rule
 * 0 - ignore
 * 1 - warn
 * 2 - throw
 */
type RuleLevel = 0 | 1 | 2;

/**
 * Application of rule
 * always - positive
 * never - negative
 */
type RuleCondition = 'always' | 'never';

/**
 * Additional, optional options to pass to rule
 */
type RuleOptions = any;

/**
 * Basic complete rule definition
 */
type PrimitiveRule = [RuleLevel, RuleCondition, RuleOptions?];

/**
 * Async rules are resolved during config lookup.
 * They can be used to set up linting rules based on e.g. the project fs
 */
type AsyncRule = Promise<PrimitiveRule>;

/**
 * Function rules are executed during config lookup.
 * They can be used to set up linting rules based on e.g. the project fs
 */
type FunctionRule = () => PrimitiveRule;

/**
 * Async function rules are executed and awaited during config lookup.
 * They can be used to set up linting rules based on e.g. the project fs
 */
type AsyncFunctionRule = () => Promise<PrimitiveRule>;

/**
 * Polymorphic rule struct
 */
type Rule = PrimitiveRule | FunctionRule | AsyncFunctionRule;

type RuleName = string;

export type RuleSet = Record<RuleName, Rule>;
