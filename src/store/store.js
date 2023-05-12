
import {configureStore} from "@reduxjs/toolkit"
import jobPostSlice from "./store-slice"
const store=configureStore({


    reducer:{

        "jobStore":jobPostSlice.reducer
    }

})

export default store;