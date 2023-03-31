enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string,
  role: ROLES
}

const user1: User = {
  username: 'Ivam',
  role: ROLES.ADMIN
}
