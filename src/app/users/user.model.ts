enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

interface User {
  id: string | number,
  username: string,
  role: ROLES
}

export { User, ROLES }
