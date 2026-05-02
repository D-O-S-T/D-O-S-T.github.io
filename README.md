### 🧮 CalcQuest — Domine o Cálculo 1

> Jogo educacional de quiz interativo para o ensino de **Limites, Derivadas e Integrais**, desenvolvido como projeto acadêmico da disciplina de Cálculo 1.

---

### 📋 Índice

- [Visão Geral](#visão-geral)
- [Como Jogar](#como-jogar)
- [Estrutura de Fases](#estrutura-de-fases)
- [Sistema de Vidas](#sistema-de-vidas)
- [Sistema de Pontuação](#sistema-de-pontuação)
- [Regras de Progressão](#regras-de-progressão)
- [Sistema de Progresso e Save](#sistema-de-progresso-e-save)
- [Ranking](#ranking)
- [Tecnologias](#tecnologias)
- [Como Executar](#como-executar)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

---

### Visão Geral

CalcQuest é um quiz gamificado que cobre os três grandes pilares do Cálculo 1. O jogador avança por fases temáticas respondendo perguntas de múltipla escolha com dificuldade progressiva. A mecânica de **vidas**, **pontuação por acerto** e **bônus de perfeição** incentiva tanto o avanço quanto a excelência, similar ao modelo do Duolingo, mas voltado para matemática universitária.

O jogo roda inteiramente no navegador, sem backend, sem instalação.

---

### Como Jogar

Acesse o jogo diretamente pelo navegador:  
👉 **https://d-o-s-t.github.io**

1. Insira seu nome na tela inicial.
2. Escolha uma subfase disponível no mapa de fases.
3. Responda as perguntas de múltipla escolha — cada uma tem exatamente **uma alternativa correta**.
4. Após cada resposta, um painel de feedback mostra se você acertou ou errou, junto com uma **explicação didática**.
5. Ao terminar todas as perguntas da subfase, veja seu resultado e os pontos acumulados.
6. Complete todas as subfases das 3 fases para vencer o jogo e entrar no ranking.

---

### Estrutura de Fases

O jogo é dividido em **3 fases principais**, cada uma com **3 subfases** de dificuldade crescente.

#### Fase 1 — Limites ∞

| Subfase | Nome | Nível | Questões |
|---|---|---|---|
| 1.1 | Conceitos Básicos | 1 | 5 |
| 1.2 | Regras e Propriedades | 2 | 5 |
| 1.3 | Continuidade | 3 | 4 |

Conteúdos abordados: definição de limite, substituição direta, formas indeterminadas, fatoração, limites laterais, L'Hôpital, limites no infinito, continuidade e assíntotas.

---

#### Fase 2 — Derivadas ∂

| Subfase | Nome | Nível | Questões |
|---|---|---|---|
| 2.1 | Regras Básicas | 1 | 5 |
| 2.2 | Regra da Cadeia | 2 | 5 |
| 2.3 | Aplicações | 3 | 4 |

Conteúdos abordados: definição geométrica, regra da potência, derivada de constante, soma, produto, quociente, regra da cadeia, derivadas trigonométricas e logarítmicas, pontos críticos, crescimento/decrescimento, segunda derivada e pontos de inflexão.

---

#### Fase 3 — Integrais ∫

| Subfase | Nome | Nível | Questões |
|---|---|---|---|
| 3.1 | Antiderivadas | 1 | 5 |
| 3.2 | Integral Definida | 2 | 5 |
| 3.3 | Aplicações | 3 | 4 |

Conteúdos abordados: integral indefinida, regra da potência inversa, constante de integração, Teorema Fundamental do Cálculo, integral definida, área sob a curva, substituição por variável (u-sub), área entre curvas, integrais impróprias.

---

### Sistema de Vidas

O jogador começa com **5 vidas** (❤️❤️❤️❤️❤️), compartilhadas ao longo de toda a sessão de jogo.

| Evento | Efeito nas vidas |
|---|---|
| Resposta correta | Nenhum efeito |
| Resposta errada | −1 vida |
| Chegar a 0 vidas | **Game Over** — reinício completo |

**Regras importantes:**
- As vidas persistem entre subfases dentro da mesma sessão. Se você perder 2 vidas na subfase 1.1, entrará na 1.2 com 3 vidas.
- Não há regeneração de vidas ao concluir subfases.
- No Game Over, toda a pontuação acumulada é perdida e o progresso de save é apagado.

---

### Sistema de Pontuação

#### Pontos por acerto

Cada resposta correta vale **+100 pontos**, creditados imediatamente com animação visual.  
Respostas erradas não geram pontos.

#### Bônus de conclusão (apenas na primeira vez)

Ao concluir uma subfase **pela primeira vez**, dois bônus são aplicados:

| Bônus | Valor | Condição |
|---|---|---|
| **Bônus de vidas** | +10 pts × vidas restantes | Sempre na 1ª conclusão |
| **Bônus de perfeição** | +50 pts | Acertar 100% das questões na 1ª conclusão |

**Exemplo:** Subfase com 5 questões, tudo certo, 4 vidas sobrando:
```
5 acertos × 100 pts  =  500 pts
Bônus vidas: 4 × 10  =   40 pts
Bônus perfeição      =   50 pts
─────────────────────────────────
Total da subfase     =  590 pts
```

#### Proteção contra farm de pontos

Subfases já concluídas **não geram pontos** em repetições. Nem por acerto, nem por bônus. O sistema trava a soma ao verificar o status `completed` ou `perfect` no progresso salvo. Isso impede o acúmulo infinito de pontuação pela mesma subfase.

#### Pontuação máxima teórica

Considerando todas as subfases (9 no total), acertando tudo com 5 vidas intactas:

```
Questões totais: 42
Pontos por acertos: 42 × 100           = 4200 pts
Bônus vidas (9 subfases × 5 × 10)     =  450 pts
Bônus perfeição (9 subfases × 50)      =  450 pts
─────────────────────────────────────────────────
Pontuação máxima possível              = 5100 pts
```

---

### Regras de Progressão

#### Desbloqueio de fases

```
Fase 1 (Limites)    → sempre disponível
Fase 2 (Derivadas)  → desbloqueada ao concluir TODAS as subfases da Fase 1
Fase 3 (Integrais)  → desbloqueada ao concluir TODAS as subfases da Fase 2
```

#### Desbloqueio de subfases

Dentro de cada fase, as subfases desbloqueiam sequencialmente:

```
Subfase N+1 só fica disponível após concluir a Subfase N
```

Isso garante progressão didática — o jogador não pode pular para conteúdos avançados sem ter passado pelos fundamentos.

#### Critério de conclusão

Uma subfase é considerada **concluída** ao responder pelo menos 1 questão corretamente e finalizar a rodada. Ela recebe o status:

| Status | Símbolo | Critério |
|---|---|---|
| `completed` | ✅ | Concluiu com ao menos 1 acerto |
| `perfect` | ⭐ | Acertou **todas** as questões |

O status só melhora, nunca piora. Uma subfase `perfect` não pode voltar a `completed`.

#### Tentativa adicional (retry)

O botão **"Tentar novamente"** fica disponível apenas quando a subfase **ainda não foi concluída** (status `undefined`). Uma vez concluída, o botão é ocultado — o jogador segue em frente.

> Isso encoraja aprender com os erros antes de avançar, mas não prende o jogador para sempre num nível que ele não domina completamente.

---

### Sistema de Progresso e Save

O progresso é salvo automaticamente via `localStorage` do navegador após cada subfase concluída. Não há necessidade de login ou backend.

#### O que é salvo

```json
{
  "playerName": "João Silva",
  "lives": 3,
  "score": 850,
  "progress": {
    "limits-1": "perfect",
    "limits-2": "completed",
    "limits-3": "completed"
  }
}
```

#### Comportamento do save

| Situação | Comportamento |
|---|---|
| Mesmo nome na próxima sessão | Retoma do ponto salvo |
| Nome diferente | Inicia um novo jogo do zero |
| Game Over | Save apagado — reinício completo |
| Vitória (jogo completo) | Save apagado após entrada no ranking |

#### Aleatoriedade

As perguntas e as alternativas são **embaralhadas** a cada rodada, garantindo que repetir uma subfase não seja simplesmente memorizar a posição das respostas.

---

### Ranking

O ranking armazena as **10 melhores pontuações** de partidas completas (jogo finalizado), com nome do jogador, pontuação e data.

- Acessível pela tela inicial antes mesmo de começar a jogar.
- Ordenado do maior para o menor score.
- Salvo em localStorage separado do save de progresso.
- Pode ser limpo manualmente pelo botão na própria tela de ranking.
- Uma pontuação só entra no ranking ao **completar o jogo inteiro** (todas as 3 fases).

---

### Tecnologias

| Camada | Tecnologia |
|---|---|
| Estrutura | HTML5 semântico |
| Estilo | CSS3 puro (variáveis, animações, grid, flexbox) |
| Lógica | JavaScript vanilla (ES6+) |
| Persistência | localStorage nativo do navegador |
| Fontes | Google Fonts — Syne + Space Mono |
| Deploy | GitHub Pages (estático, zero configuração) |
| Frameworks | **Nenhum** |

Sem npm, sem build step, sem dependências externas além das fontes. Qualquer máquina com navegador moderno roda o jogo.

---

### Como Executar

#### Localmente

```bash
# Clone o repositório
git clone https://github.com/D-O-S-T/D-O-S-T.github.io.git
cd calc-quest

# Abra diretamente no navegador
open index.html
# ou arraste o index.html para qualquer navegador
```

Não precisa de servidor local — é HTML/CSS/JS puro.

#### Via GitHub Pages

Após o push para a branch `main` com GitHub Pages habilitado nas configurações do repositório:

```
https://d-o-s-t.github.io
```

Cada novo `git push` na `main` atualiza automaticamente a versão publicada.

---

### Estrutura de Arquivos

```
calc-quest/
├── index.html   # Estrutura de todas as telas (home, mapa, quiz, resultado, ranking)
├── style.css    # Todo o visual: tema dark, animações, responsividade
├── data.js      # Banco de questões: 3 fases × 3 subfases × 4–5 questões cada
├── game.js      # Engine completa: estado, navegação, quiz, pontuação, save, ranking
└── README.md    # Este arquivo
```

#### Separação de responsabilidades

**`data.js`** — dados puros. Cada questão tem `topic`, `text`, `formula`, array de `options` (com flag `correct`) e `explanation` para o feedback didático. Adicionar novas questões é só editar este arquivo.

**`game.js`** — lógica pura. Gerencia o `state` global, a sessão atual (`session`), todas as transições de tela, cálculos de pontuação e interações com `localStorage`. Não contém HTML inline além de templates mínimos de cards.

**`style.css`** — visual puro. Usa CSS custom properties para theming consistente. Nenhuma lógica de negócio aqui.

---

*Projeto desenvolvido para a disciplina de Cálculo 1 — Organização DOST*