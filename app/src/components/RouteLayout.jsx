import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavBar"
import {Provider} from 'react-redux'
import store from "../store/Store"
function RouteLayout() {
  return (
      <Provider store={store}>
      <NavbarPanel/>
      <main>
      <Outlet/>
      </main>
      </Provider>
  )
}

export default RouteLayout
