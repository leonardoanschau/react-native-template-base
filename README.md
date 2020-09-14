# react-native-template-base
Base template for react native projects

# Organização do Projeto:

# src => App
O App é responsável pela inicialização do projeto.

# src => Pages
Na pasta pages irão conter todas as pages da aplicação. Ex: UsuarioPage, onde serão mostradras as informações do usuário.

# src => Constants
As constants são arquivos utilizados globalmente em todo projeto.

# src => Middleware
O Middleware é responsável por realizar as requisições e auth do projeto.

# src => Services
As Services são responsáveis por criar requisições para o back-end. Ex: middleware.GetUsers();

# src => Storage
O Storage Contém métodos que abstraem o AsyncStorage. Utiliza-se para persistência local. Ex: persistência de token gerado.
