# react-native-template-base
Base template for react native projects

# Organização do Projeto:

# App
O App é responsável pela inicialização do projeto.

# Pages
Na pasta pages irão conter todas as pages da aplicação. Ex: UsuarioPage, onde serão mostradras as informações do usuário.

# Constants
As constants são arquivos utilizados globalmente em todo projeto.

# Middleware
O Middleware é responsável por realizar as requisições e auth do projeto.

# Services
As Services são responsáveis por criar requisições para o back-end. Ex: middleware.GetUsers();

# Storage
O Storage Contém métodos que abstraem o AsyncStorage. Utiliza-se para persistência local. Ex: persistência de token gerado.