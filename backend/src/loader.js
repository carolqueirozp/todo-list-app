/* O loader será responsável por carregar os principais
arquivos de configuração*/

const app = require('./config/app')
require('./config/db')
require('./config/routes')(app)