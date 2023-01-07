# Use Chromecast receiver [![npm](https://img.shields.io/npm/v/use-chromecast-caf-receiver.svg)](https://www.npmjs.com/package/use-chromecast-caf-receiver) ![npm type definitions](https://img.shields.io/npm/types/use-chromecast-caf-receiver.svg)

## Installation

```bash
npm install use-chromecast-caf-receiver
```

## How to use

```jsx
import { useChromecastReceiver } from 'use-chromecast-caf-receiver'

const Component = () => {
	const { cast } = useChromecastReceiver()

	return <div>{cast === null ? 'Loading' : 'Cast receiver sdk is loaded'}</div>
}
```

## Development

- Install dependencies: `npm ci`
- Build the package: `npm run dev`
