// import { createStore, applyMiddleware} from 'redux'
import { configureStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composewithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

// const store = createStore(
// 	rootReducer,
// 	compose: composewithDevTools(applyMiddleware(thunk))
// )

const store = configureStore({
	reducer: {
		rootReducer,
		compose: composewithDevTools(applyMiddleware(thunk))
	}
})

const DataProvider = ({children}) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}

export default DataProvider
 