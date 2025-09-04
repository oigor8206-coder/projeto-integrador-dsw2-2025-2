# projeto-integrador-dsw2-2025-2
- # [Laço Eterno - peça o seu laço sem sair de casa]

## 1) Problema

Nos pedidos de laços, os clientes sofrem com a falta de clareza sobre a ordem das encomendas.
Isso acontece no processo de produção e entrega, onde não há um controle visível.
Essa dificuldade gera atrasos, insatisfação e desconfiança de quem compra.
Importa porque a falta de organização afeta a confiança no trabalho e prejudica a experiência do cliente.

## 2) Atores e Decisores (quem usa / quem decide)

Usuários principais: [ Os clientes que fazem encomenda o seu laço.]
Decisores/Apoiadores: [Dono da loja; funcionarios que fazem as encomendas]

## 3) Casos de uso (de forma simples)

Todos: [ações comuns, ex.: Logar/deslogar; Manter dados cadastrais]  <!--- VER DPS A PARTE DE PAGAMENTO>
[Fabricante ]: [ver, ter chat, atualizar, remover, entregar]  
[Comprador  ]: [ver, comprar, entrar em contato,]

## 4) Limites e suposições

Limites: entrega final até o fim da disciplina e conseguir encomedar o laço. 
Suposições: [O pedido ser incopativel, e ocorrer atrasos na entrega.]  
Plano B: [Para resolver, seria de forma no chat.]

## 5) Hipóteses + validação

H-Valor: Se o cliente conseguir ver a posição da sua encomenda de laço na fila, então a satisfação melhora em clareza e confiança no prazo de entrega.
Validação (valor): teste com 5 clientes reais; alvo: pelo menos 4 em 5 relatam sentir mais segurança e menos ansiedade sobre o pedido
H-Viabilidade: Com [tecnologia], [ação/tela] leva até [n] s.  
Validação (viabilidade): [medição no protótipo]; meota: [n] s ou menos na maioria das vezes (ex.: 9/10).

## 6) Fluxo principal e primeira fatia
<!-- Pense “Entrada → Processo → Saída”.
     EXEMPLO de Fluxo:
     1) Aluno faz login
     2) Clica em "Pedir ajuda" e descreve a dúvida
     3) Sistema salva e coloca na fila
     4) Lista mostra ordem e tempo desde criação
     5) Professor encerra o chamado
     EXEMPLO de 1ª fatia:
     Inclui login simples, criar chamado, listar em ordem.
     Critérios de aceite (objetivos): criar → aparece na lista com horário; encerrar → some ou marca "fechado". -->
**Fluxo principal (curto):**  
1) [entrada do usuário] → 2) [processo] → 3) [salvar algo] → 4) [mostrar resultado]

**Primeira fatia vertical (escopo mínimo):**  
Inclui: [uma tela], [uma ação principal], [salvar], [mostrar algo]  
Critérios de aceite:
- [Condição 1 bem objetiva]
- [Condição 2 bem objetiva]

## 7) Esboços de algumas telas (wireframes)
<!-- Vale desenho no papel (foto), Figma, Excalidraw, etc. Não precisa ser bonito, precisa ser claro.
     EXEMPLO de telas:
     • Login
     • Lista de chamados (ordem + tempo desde criação)
     • Novo chamado (formulário simples)
     • Painel do professor (atender/encerrar)
     EXEMPLO de imagem:
     ![Wireframe - Lista de chamados](img/wf-lista-chamados.png) -->
[Links ou imagens dos seus rascunhos de telas aqui]

## 8) Tecnologias
<!-- Liste apenas o que você REALMENTE pretende usar agora. -->

### 8.1 Navegador
**Navegador:** [HTML/CSS/JS | React/Vue/Bootstrap/etc., se houver]  
**Armazenamento local (se usar):** [LocalStorage/IndexedDB/—]  
**Hospedagem:** [GitHub Pages/—]

### 8.2 Front-end (servidor de aplicação, se existir)
**Front-end (servidor):** [ex.: Next.js/React/—]  
**Hospedagem:** [ex.: Vercel/—]

### 8.3 Back-end (API/servidor, se existir)
**Back-end (API):** [ex.: FastAPI/Express/PHP/Laravel/Spring/—]  
**Banco de dados:** [ex.: SQLite/Postgres/MySQL/MongoDB/—]  
**Deploy do back-end:** [ex.: Render/Railway/—]

## 9) Plano de Dados (Dia 0) — somente itens 1–3
<!-- Defina só o essencial para criar o banco depois. -->

### 9.1 Entidades
<!-- EXEMPLO:
     - Usuario — pessoa que usa o sistema (aluno/professor)
     - Chamado — pedido de ajuda criado por um usuário -->
- [Entidade 1] — [que representa em 1 linha]
- [Entidade 2] — [...]
- [Entidade 3] — [...]

### 9.2 Campos por entidade
<!-- Use tipos simples: uuid, texto, número, data/hora, booleano, char. -->

### Usuario
| Campo           | Tipo                          | Obrigatório | Exemplo            |
|-----------------|-------------------------------|-------------|--------------------|
| id              | número                        | sim         | 1                  |
| nome            | texto                         | sim         | "Ana Souza"        |
| email           | texto                         | sim (único) | "ana@exemplo.com"  |
| senha_hash      | texto                         | sim         | "$2a$10$..."       |
| papel           | número (0=aluno, 1=professor) | sim         | 0                  |
| dataCriacao     | data/hora                     | sim         | 2025-08-20 14:30   |
| dataAtualizacao | data/hora                     | sim         | 2025-08-20 15:10   |

### Encomenda
| Campo           | Tipo               | Obrigatório | Exemplo                 |
|-----------------|--------------------|-------------|-------------------------|
| id              | número             | sim         | 2                       |
| Usuario_id      | número (fk)        | sim         | 1                       |
| Material        | char               | sim         | 'couro'                 |
| Chumbo          | char               | sim         | '5'                     |
| Peso laço       | numerico           | não         | 700,5                   |
| Cor             | texto              | sim         | azul                    |
| dataCriacao     | data/hora          | sim         | 2025-08-20 14:35        |
| dataAtualizacao | data/hora          | sim         | 2025-08-20 14:50        |


### Encomenda
| Campo           | Tipo               | Obrigatório | Exemplo                 |
|-----------------|--------------------|-------------|-------------------------|
| id              | número             | sim         | 2                       |
| Usuario_id      | número (fk)        | sim         | 1                       |
| Material        | char               | sim         | 'Ci' \| 'Co'  \|'Mo'    |
| Chumbo          | char               | sim         | '5' \| '6' \| '7' \| '8'|
| Peso laço       | numerico           | não         | 'a' \| 'f'              |
| Cor             | texto              | sim         | 'a' \| 'f'              |
| dataCriacao     | data/hora          | sim         | 2025-08-20 14:35        |
| dataAtualizacao | data/hora          | sim         | 2025-08-20 14:50        |

### 9.3 Relações entre entidades
<!-- Frases simples bastam. EXEMPLO:
     Um Usuario tem muitos Chamados (1→N).
     Um Chamado pertence a um Usuario (N→1). -->
- Um [A] tem muitos [B]. (1→N)
- Um [B] pertence a um [A]. (N→1)
