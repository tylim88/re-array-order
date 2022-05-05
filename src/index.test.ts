import { reorder } from '.'

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
describe('test reorder type', () => {
	it('test normally, should pass', () => {
		expect(reorder(arr, { from: 0, to: 9 })).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
		])

		expect(reorder(arr, { from: 7, to: 3 })).toEqual([
			0, 1, 2, 7, 3, 4, 5, 6, 8, 9,
		])

		expect(reorder(arr, { from: 1, to: 1 })).toEqual(arr)
	})

	it('test out of range error, should failed', () => {
		expect(() => reorder(arr, { from: 10, to: 9 })).toThrow()
		expect(() => reorder(arr, { from: 0, to: 10 })).toThrow()
		expect(() => reorder(arr, { from: 1, to: -1 as number })).toThrow()
		expect(() => reorder(arr, { from: -1 as number, to: 1 })).toThrow()
		expect(() => reorder(arr, { from: 1, to: 1.34 as number })).toThrow()
		expect(() => reorder(arr, { from: 0.237 as number, to: 1 })).toThrow()
		expect(() => reorder([], { from: 0 as number, to: 0 })).toThrow()
	})

	it('test invalid input', () => {
		;() => {
			reorder(arr, {
				// @ts-expect-error
				from: -1,
				// @ts-expect-error
				to: -9,
			})

			reorder(arr, {
				// @ts-expect-error
				from: 1.4233,
				// @ts-expect-error
				to: 8.82738,
			})

			reorder(arr, {
				// @ts-expect-error
				from: -1.4233,
				// @ts-expect-error
				to: -8.82738,
			})
		}
	})
})
