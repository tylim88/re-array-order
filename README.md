<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

# Re-Array-Order

<div>
		<a href="https://www.npmjs.com/package/re-array-order" target="_blank">
				<img
					src="https://img.shields.io/npm/v/re-array-order"
					alt="Created by tylim88"
				/>
			</a>
			&nbsp;
			<a
				href="https://github.com/tylim88/re-array-order/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/re-array-order"
					alt="License"
				/>
			</a>
			&nbsp;
			<a
				href="https://www.npmjs.com/package/re-array-order?activeTab=dependencies"
				target="_blank"
			>
				<img
					src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/re-array-order&label=dependencies&query=$.dependencies.count&color=brightgreen"
					alt="dependency count"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/re-array-order/actions" target="_blank">
				<img
					src="https://github.com/tylim88/re-array-order/workflows/Main/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/re-array-order" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/re-array-order/branch/master/graph/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/re-array-order/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/re-array-order"
				></img>
			</a>
			&nbsp;
			<a href="https://snyk.io/test/github/tylim88/re-array-order" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/re-array-order/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/re-array-order/alerts/"
				target="_blank"
			>
				<img
					alt="Total alerts"
					src="https://img.shields.io/lgtm/alerts/g/tylim88/re-array-order.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/re-array-order/context:javascript"
				target="_blank"
			>
				<img
					alt="Language grade: JavaScript"
					src="https://img.shields.io/lgtm/grade/javascript/g/tylim88/re-array-order.svg?logo=lgtm&logoWidth=18"
				/>
			</a>

</div>
<br/>

## Installation

```bash
npm i re-array-order
```

## Usage

return a deeply cloned array

```ts
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

reorder(arr, { from: 0, to: 9 }) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

reorder(arr, { from: 7, to: 3 }) // [0, 1, 2, 7, 4, 5, 6, 3, 8, 9]
```

throw error if `from` or `to` is invalid

```ts
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

reorder(arr, { from: 10, to: 0 }) // from out of range
reorder(arr, { from: 0, to: 10 }) // to out of range
reorder(arr, { from: 1, to: -1 as number }) // to smaller than 0
reorder(arr, { from: -1 as number, to: 1 }) // from smaller than 0
reorder(arr, { from: 1, to: 1.34 as number }) // to is not an integer
reorder(arr, { from: 0.237 as number, to: 1 }) // from is not an integer
reorder([], { from: 0 as number, to: 0 }) // empty array
```

## Block invalid number

Typescript will stop you from using fresh negative number and fresh decimal number.

`fresh` refer to value that is not attached to any variable.

`number` is a valid type.

```ts
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
```
