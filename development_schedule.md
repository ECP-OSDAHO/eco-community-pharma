# Cronograma de Desenvolvimento: Ecossistema Farmacêutico Eco-Comunitário

Este documento descreve o cronograma de desenvolvimento para o ecossistema farmacêutico Eco-Comunitário, composto por três aplicações interconectadas e um backend de borda descentralizado.

## 1. Infraestrutura Central: Backend de Borda Descentralizado
**Objetivo:** Estabelecer a camada de comunicação e a base de soberania de dados.
**Pilha Tecnológica:** GraphQL, WebSockets, Edge Computing (ex: Cloudflare Workers / Deno Deploy / DB local-first como RxDB ou PouchDB), Integrações Omnichannel.

### Fase 1: Fundação (Semanas 1-4)
- [ ] **Design de Arquitetura:**
    - **Detalhe:** Definir o protocolo de sincronização de dados P2P (Peer-to-Peer) para garantir a consistência e disponibilidade entre os nós.
    - **Detalhe:** Estabelecer a estratégia offline-first, permitindo que as aplicações funcionem sem conectividade constante e sincronizem dados quando online.
- [ ] **Design de Schema GraphQL:**
    - **Detalhe:** Criar um esquema GraphQL robusto que defina as entidades centrais do sistema, como Usuário (autenticação e perfis), Produto (descrições, inventário), Transação (pedidos, pagamentos) e Mensagem (comunicações internas e externas).
- [ ] **Configuração de Implantação de Borda:**
    - **Detalhe:** Configurar pipelines de CI/CD (Integração Contínua/Entrega Contínua) para automatizar a implantação e atualização de funções de borda, garantindo agilidade e confiabilidade.
- [ ] **Identidade e Autenticação:**
    - **Detalhe:** Integrar soluções de identidade descentralizada (DID) ou autenticação baseada em carteira (wallet-based auth), promovendo a soberania do usuário sobre seus dados e credenciais.

### Fase 2: Tempo Real e Omnichannel (Semanas 5-8)
- [ ] **Implementação de WebSocket:**
    - **Detalhe:** Desenvolver e integrar funcionalidades de WebSocket para permitir atualizações em tempo real de informações críticas, como status de pedidos, notificações de chat e mudanças no inventário.
- [ ] **Gateway Omnichannel:**
    - **Detalhe:** Construir um gateway unificado para integrar-se com APIs de comunicação populares, incluindo WhatsApp Business API, Meta (FB/Insta) Graph API e TikTok API, permitindo comunicação fluida através de múltiplos canais.
- [ ] **Lógica de Caixa de Entrada Unificada:**
    - **Detalhe:** Implementar uma lógica para agregar mensagens de todas as plataformas omnichannel em uma única thread de conversa por usuário, simplificando o gerenciamento da comunicação.

---

## 2. App 1: "O Cultivador" (Cultivador e Mercado P2P)
**Público-Alvo:** Cultivadores caseiros, buscadores de jardinagem terapêutica, buscadores de renda.
**Funcionalidades Chave:** Marketplace P2P (Sementes, Insumos), Rastreamento Terapêutico, Feed da Comunidade.

### Fase 1: MVP (Semanas 9-12)
- [ ] **Interface do Marketplace:**
    - **Detalhe:** Desenvolver a interface de usuário para criação de listagens (anúncios de sementes, insumos), funcionalidades de pesquisa avançada e filtros para facilitar a descoberta de produtos.
- [ ] **Fluxo de Transação P2P:**
    - **Detalhe:** Implementar o fluxo completo de compra e venda, incluindo carrinho de compras, checkout (com integração para criptomoedas e/ou fiat) e gerenciamento de pedidos.
- [ ] **Perfil do Cultivador:**
    - **Detalhe:** Criar perfis detalhados para os cultivadores, exibindo um portfólio de suas culturas, histórico de vendas e um sistema de reputação baseado em avaliações.

### Fase 2: Terapêutico e Social (Semanas 13-16)
- [ ] **Diário Terapêutico:**
    - **Detalhe:** Adicionar funcionalidades para registro do crescimento das plantas, acompanhamento do humor do usuário e insights personalizados de "Terapia de Jardim" com base nos dados coletados.
- [ ] **Funcionalidades de Comunidade:**
    - **Detalhe:** Integrar recursos sociais como compartilhamento de dicas, seções de perguntas e respostas, e um sistema de descoberta para "Trocas entre Vizinhos".
- [ ] **Chat Omnichannel:**
    - **Detalhe:** Habilitar a comunicação direta entre compradores e vendedores através de seus aplicativos sociais preferidos, utilizando o gateway omnichannel do backend.

---

## 3. App 2: "O Criador" (Processador e Gerente)
**Público-Alvo:** Cozinheiros, organizadores, gerentes de espaço, buscadores de culinária terapêutica.
**Funcionalidades Chave:** Gerenciamento de Inventário, Fluxos de Trabalho de Processamento, Sub-alocação de Espaço.

### Fase 1: MVP (Semanas 17-20)
- [ ] **Ponte de Inventário:**
    - **Detalhe:** Desenvolver uma integração para sincronizar e puxar matérias-primas disponíveis do App 1 (O Cultivador), garantindo que o inventário esteja sempre atualizado.
- [ ] **Gerenciamento de Processamento:**
    - **Detalhe:** Implementar módulos para gerenciamento de receitas, rastreamento de lotes de produção e fluxos de trabalho para embalagem e preparação de produtos.
- [ ] **Gerenciamento de Espaço:**
    - **Detalhe:** Criar funcionalidades para definir e organizar espaços de armazenamento ou cozinha, permitindo a sub-alocação desses espaços para outros usuários.

### Fase 2: Gerenciamento e Terapia (Semanas 21-24)
- [ ] **Terapia Culinária:**
    - **Detalhe:** Incluir recursos para registrar logs de culinária, planejar refeições saudáveis e promover a atenção plena através da preparação de alimentos.
- [ ] **Marketplace de Serviços:**
    - **Detalhe:** Desenvolver um marketplace onde os "Criadores" podem oferecer serviços de processamento e culinária aos "Cultivadores" do App 1.
- [ ] **Painel Financeiro:**
    - **Detalhe:** Criar um painel que rastreie os custos dos insumos e compare-os com o valor dos bens processados, fornecendo insights financeiros.

---

## 4. App 3: "O Pesquisador" (Avançado e Científico)
**Público-Alvo:** Pesquisadores, voluntários, estagiários, botânicos avançados.
**Funcionalidades Chave:** Controle Preciso de Insumos, Coleta de Dados, Registro Científico.

### Fase 1: Camada de Dados Avançada (Semanas 25-28)
- [ ] **Esquema Expandido:**
    - **Detalhe:** Estender o esquema de dados do App 1 e App 2 para incluir parâmetros científicos detalhados, como pH, condutividade elétrica (EC), espectro de luz, temperatura e umidade.
- [ ] **Rastreamento de Experimentos:**
    - **Detalhe:** Implementar funcionalidades para definir e rastrear experimentos, permitindo a criação de grupos de controle e grupos de teste para culturas específicas.
- [ ] **Gerenciamento de Voluntários:**
    - **Detalhe:** Desenvolver um sistema para atribuição de tarefas a voluntários, rastreamento de horas trabalhadas e gerenciamento de certificações ou treinamentos.

### Fase 2: Análise e Relatórios (Semanas 29-32)
- [ ] **Visualização de Dados:**
    - **Detalhe:** Criar ferramentas de visualização de dados, como gráficos interativos, para analisar ciclos de crescimento, correlação de insumos e outros parâmetros científicos.
- [ ] **Ferramentas de Exportação:**
    - **Detalhe:** Habilitar a geração e exportação de relatórios detalhados para pesquisas acadêmicas ou comunitárias, suportando diversos formatos.
- [ ] **Integração:**
    - **Detalhe:** Implementar a integração para retroalimentar dados importantes ao App 1 (melhores práticas de cultivo) e ao App 2 (análise nutricional de produtos processados).

---

## 5. Integração e Polimento (Semanas 33-36)
- [ ] **Testes Entre Aplicativos:**
    - **Detalhe:** Realizar testes abrangentes para garantir um fluxo de dados contínuo e sem falhas entre os aplicativos "Cultivador", "Criador" e "Pesquisador".
- [ ] **Otimização de Desempenho:**
    - **Detalhe:** Otimizar o desempenho do sistema através de técnicas como cache de borda e ajuste fino da sincronização offline para garantir uma experiência de usuário rápida e responsiva.
- [ ] **Lançamento Beta:**
    - **Detalhe:** Preparar e executar o lançamento da versão beta para uma comunidade piloto selecionada, coletando feedback valioso para iterações futuras.
