const NODE_ENV = process.env.NODE_ENV

const apisMap = {
  development: {
    FE: 'http://localhost',
    BASE: 'http://fendi-dev-magento.d1mgroup.com',
  },
  production: {

  }
}

export default apisMap[NODE_ENV]