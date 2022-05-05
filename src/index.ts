import isInteger from 'is-integer'

type IsPositiveIntegerOrNumber<Value> = number extends Value
	? Value
	: Value extends infer R
	? `${R & number}` extends `-${number}` | `${number}.${number}`
		? '0 and Positive Integer Only'
		: Value
	: never // impossible route
/**
 *
 * @param array array to reorder
 * @param indexes.from reorder from which index
 * @param indexes.to reorder to which index
 * @returns
 */
export const reorder = <T, V extends number, U extends number>(
	array: T[],
	indexes: {
		from: IsPositiveIntegerOrNumber<V>
		to: IsPositiveIntegerOrNumber<U>
	}
): T[] => {
	const { to, from } = indexes
	const cloned: T[] = JSON.parse(JSON.stringify(array))
	const item = array[from]
	const length = array.length

	if (length === 0) {
		throw Error(`empty array`)
	}

	if (to + 1 > length) {
		throw Error(`to${to} out of range`)
	}

	if (from + 1 > length) {
		throw Error(`from${from} out of range`)
	}

	if (!isInteger(to)) {
		throw Error(`to(${to}) is not an integer`)
	}

	if (to < 0) {
		throw Error(`to(${to}) smaller than 0`)
	}

	if (!isInteger(from)) {
		throw Error(`from(${from}) is not an integer`)
	}

	if (from < 0) {
		throw Error(`from(${from}) smaller than 0`)
	}

	if ((to as number) === (from as number)) {
		return cloned
	}

	cloned.splice(from, 1)
	cloned.splice(to, 0, item)

	return cloned
}
