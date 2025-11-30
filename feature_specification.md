# Especificação Detalhada de Funcionalidades: Ecossistema de Restauração Comunitária

Este documento detalha as funcionalidades (features) necessárias para o sistema
"Eco-Community Pharma", focado na criação, gestão e restauração de comunidades
locais, com ênfase na integração de populações em situação de vulnerabilidade
social.

## 1. Núcleo de Identidade e Acesso (Inclusão Radical)

O objetivo é remover barreiras de entrada para quem não possui documentos,
endereço fixo ou se encontra em situação de vulnerabilidade social.

### 1.1. Identidade Soberana Simplificada (DID)

- **Login sem Senha:** Acesso via biometria local ou "Web of Trust" (um padrinho
  da comunidade fornece uma frase de indicação, que ficara atrelada ao DID).
- **Carteira de Reputação:** Em vez de apenas um score de crédito financeiro, um
  score de contribuição comunitária (horas trabalhadas, sementes doadas, etc).
- **Carteira Digital Dupla:** Todo usuário possui um balanço em moeda local
  dividido em:
  - **Pessoal Disponível:** Para uso livre do indivíduo.
  - **Compartilhado:** Para investimentos coletivos ou fundos de reserva da
    comunidade.
- **Modo Offline-First:** O app deve funcionar plenamente sem internet,
  sincronizando dados quando houver conexão (essencial para zonas rurais).

### 1.2. Interface Acessível e Multimodal

- **Comandos de Voz:** Toda a navegação e input de dados (ex: "registre que
  plantei 10 alfaces") pode ser feita por voz apenas por usuario com acesso a
  microfone.
- **Interface Visual (Iconográfica):** Uso de ícones universais e cores para
  quem não sabe ler ou não fala o idioma local (refugiados).

### 1.3. Desbloqueio de Recursos (Onboarding Assistido)

- **Curadoria via Padrinho:** O acesso inicial aos recursos de todos os
  aplicativos (Cultivo, Processamento, Pesquisa) é definido pela indicação do
  "Padrinho" e pelas respostas do usuário durante o cadastro, entregando apenas
  o necessário para o momento de vida dele.
- **Evolução Gradual:** Novos módulos e funcionalidades são desbloqueados
  conforme o usuário ganha reputação ou demonstra necessidade. O Padrinho pode
  configurar o nível de acesso inicial e a trilha de evolução no momento da
  criação da frase de ingresso.

---

## 2. App 1: "O Cultivador" (the_angry_bird)

Focado na terapia através da terra e na geração de renda primária.

### 2.1. Gestão de Cultivo Terapêutico

- **Diário de Bordo Emocional:** Ao registrar uma rega ou colheita, o usuário
  registra como está se sentindo (Emoji/Voz). O sistema correlaciona o trabalho
  na terra com a melhora do humor.
- **Gamificação da Restauração:** Missões como "Recupere 1m² de solo degradado"
  ou "Plante uma espécie nativa em extinção" geram badges e reputação.

### 2.2. Marketplace P2P Solidário

- **Troca Sem Moeda (Escambo):** Funcionalidade nativa para trocar "1 hora de
  capina" por "1 cesta de vegetais".
- **Venda Antecipada (CSA):** Consumidores "adotam" um canteiro, garantindo
  renda para o produtor vulnerável antes mesmo da colheita.
- **Rastreabilidade Social:** O QR Code do produto mostra a história de quem
  plantou (ex: "Este tomate ajudou o João a reconstruir sua vida").

---

## 3. App 2: "O Criador" (the_foundation)

Focado na organização comunitária, cozinhas solidárias, subalocação de espaços e
agregação de valor.

### 3.1. Gestão de Cozinhas Comunitárias

- **Escala de Trabalho Colaborativa:** Organização de turnos para cozinhas
  compartilhadas, garantindo que todos participem e aprendam.
- **Gestão de Estoque Perecível:** Alertas automáticos de "Use agora, doe ou
  reutilize" para evitar desperdício de alimentos frescos ou outros insumos.

### 3.2. Padronização de Saberes (Receitas Ancestrais)

- **Biblioteca de Receitas Vivas:** Registro de receitas tradicionais em
  vídeo/áudio.
- **Calculadora de Custo/Nutrição:** O sistema calcula automaticamente o custo
  de produção e o valor nutricional.

### 3.3. Subalocação de Espaços

- **Airbnb Solidário de Espaços:** Quem tem um quintal ocioso pode "alugar" para
  quem quer plantar mas não tem terra, em troca de parte da colheita.

---

## 4. App 3: "O Pesquisador" (the_tesis)

Focado na geração de dados para políticas públicas e validação científica.

### 4.1. Monitoramento de Impacto Social

- **Indicadores de Saúde Comunitária:** Dashboards que mostram a redução de
  incidentes de saúde ou violência na comunidade conforme o projeto avança.
- **Censo Vivo:** Mapeamento em tempo real das necessidades da comunidade (quem
  precisa de remédio, quem tem excedente de comida).

### 4.2. Ciência Cidadã

- **Validação Botânica:** Pesquisadores validam fotos enviadas pelos usuários
  para identificar pragas ou confirmar espécies medicinais.
- **Protocolos de Pesquisa Ética:** O sistema garante que o conhecimento
  tradicional compartilhado (ex: uso de uma hortalicia) gere royalties ou
  benefícios para a comunidade.

### 4.3. Gestão de Metas de Pesquisa

- **Dashboard de Metas:** Interface para pesquisadores definirem missões e metas
  específicas para os usuários dos Apps 1 (Cultivo) e 2 (Processamento), como
  "Cultivar 50 mudas de Guaco" ou "Produzir 10 litros de xarope".
- **Acompanhamento de Progresso:** Visualização em tempo real do avanço das
  metas coletivas e individuais, permitindo intervenções ou incentivos.

### 4.4. Dashboard de Monitoramento Integral

- **Controle de Insumos e Produção:** Visão consolidada do estoque de sementes,
  adubos e ferramentas distribuídos, cruzada com a produção real colhida.
- **Avaliação Psicossocial:** Análise agregada do "Diário de Bordo Emocional",
  permitindo identificar tendências de saúde mental na comunidade e impacto da
  terapia hortícola.
- **Pontos de Interesse (POIs):** Mapa interativo com alertas de pragas, áreas
  de alta produtividade ou zonas que necessitam de intervenção social urgente.

---

## 5. Backend Descentralizado - (the-backend)

A infraestrutura que conecta tudo sem depender de grandes corporações.

### 5.1. Comunicação Omnichannel

- **Bridge WhatsApp/Telegram:** O usuário na ponta usa o WhatsApp, mas a
  mensagem cai no sistema de gestão da comunidade. Ninguém é forçado a instalar
  um app novo se não quiser.
- **Rede Mesh Local:** Em caso de queda de internet ou catástrofe, os celulares
  se comunicam via Bluetooth/Wi-Fi Direct para manter a rede de ajuda ativa.

### 5.2. Governança DAO (Organização Autônoma Descentralizada)

- **Votação de Recursos:** A comunidade decide democraticamente onde investir o
  fundo comum (ex: "Comprar um trator ou reformar a cozinha?").
- **Transparência Radical:** Todo recurso que entra (doação ou venda) é visível
  para todos no ledger público e pode ser votado para ser gasto de acordo com o
  score e nivel de acesso de cada usuario.
