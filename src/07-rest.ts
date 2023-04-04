import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username: 'Ivan',
  role: ROLES.CUSTOMER
}

const checkAdminRole = () => currentUser.role === ROLES.ADMIN ? true : false

const checkRole = (...roles: string[]) => roles.includes(currentUser.role) ? true : false

console.log(checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER))

console.log(checkAdminRole())
