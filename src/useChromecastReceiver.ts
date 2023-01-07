import { useEffect, useState } from 'react'

type Receiver = {
	cast: typeof cast
}

type SetupBeforeStart = (receiver: Receiver) => void

const load = (() => {
	let promise: Promise<Receiver> | null = null

	return (setup: SetupBeforeStart = () => {}) => {
		if (promise === null) {
			promise = new Promise((resolve) => {
				const script = document.createElement('script')
				script.src =
					'https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js'
				document.body.appendChild(script)

				const loop = () => {
					if ('cast' in window && 'framework' in cast) {
						const receiver = {
							cast,
						}
						try {
							const context = cast.framework.CastReceiverContext.getInstance()
							setup(receiver)
							context.start()
						} catch (error) {
							document.body.textContent = error.message
						}
						resolve(receiver)
						return
					}
					setTimeout(() => {
						loop()
					}, 100)
				}
				loop()
			})
		}
		return promise
	}
})()

export const useChromecastReceiver = () => {
	const [receiver, setReceiver] = useState<Receiver | { cast: null }>({
		cast: null,
	})

	useEffect(() => {
		load().then((sender) => {
			setReceiver(sender)
		})
	}, [])

	return receiver
}
