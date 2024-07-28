import {configureStore} from '@reduxjs/toolkit'
import bookingsReducer from '../../features/bookings'

export const store = configureStore({
    reducer : {
        bookings : bookingsReducer
    }
}
)
