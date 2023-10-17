import React from 'react'
import MyAppProvider from '../component/MyAppProvider';

export default function AppProvider({ children }) {
	return (

		<MyAppProvider>
			{children}
		</MyAppProvider>

	)
}