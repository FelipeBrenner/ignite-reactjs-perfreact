<img alt="ignite-reactjs" title="ignite-reactjs" src=".github/cover-reactjs.png">

<h1 align="center">
  Perfomando apps com ReactJS
</h1>

## 💻 Repositório

Projeto desenvolvido estudando como performar aplicações com React entendendo como funcionam os algoritmos internos da biblioteca e todo o fluxo de renderização de componentes.

## 📖 Bibliotecas, funções, hooks e recursos

- Extensão Developer Tools
  - Aba Components: exibe a árvore dos componentes React e informações de cada um, como props, hooks e por quem foi renderizado; há um check box "Highlight updates when components render", que quando marcado realça quais componentes estão sendo renderizados em cada ação do usuário.
  - Aba Profiler: mostra quais componentes renderizaram a partir de alguma ação do usuário, porque renderizou, quanto demorou, etc.
- memo
  - Função React que ao ser utilizada em um componente ele só renderiza quando houver alteração em relação a sua versão anterior, ou seja, não renderiza quando um componente pai renderizar.
  - Deve ser usado em 3 situações:
    - em componentes puros, funções que dados os mesmos parâmetros sempre retornam o mesmo resultado, são apenas para abstrair uma parte visual;
    - em componentes que renderizam demais;
    - em componentes que renderizam novamente com os mesmo parâmetros.
- useMemo
  - Hook utilizado para memorizar um valor.
  - Deve ser usado em 2 situações:
    - em cálculos pesados realizados em um componente React, para que a performance não seja afetada com o cálculo sendo realizado toda vez que o componente é renderizado mas suas variáveis estão iguais;
    - para igualdade referencial, quando é repassado uma informação a um componente filho, para que essa informação não seja recriada do zero, não ocupe um novo espaço na memória.
- useCallback
  - Hook utilizado para memorizar uma função.
  - Deve ser usado somente em 1 situação:
    - para igualdade referencial, quando é repassada uma função a um componente filho, para que essa função não seja recriada do zero, não ocupe um novo espaço na memória.
- Code Splitting
  - Lazy no React, ou Dynamic no Next, servem para uma importação ser realizada somente quando ela for utilizada.
- react-virtualized
  - Biblioteca para quando houver uma lista grande para exibir em tela, renderizar o html somente do que estiver visível conforme a barra de rolagem.
- Bundle Analyzer
  - Biblioteca para analisar o tamanho de tudo que compõe a build.

---

Por Felipe Brenner
