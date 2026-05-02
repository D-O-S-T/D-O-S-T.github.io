const PHASES = [
    {
        id: 'limits',
        name: 'Limites',
        icon: '∞',
        color: '#00f5c4',
        subfases: [
            {
                id: 'limits-1',
                name: 'Conceitos Básicos',
                level: 1,
                questions: [
                    {
                        topic: 'Definição de Limite',
                        text: 'O que significa dizer que $\\lim_{x \\to a} f(x) = L$?',
                        formula: '',
                        options: [
                            { text: '$f(a) = L$ obrigatoriamente', correct: false },
                            { text: '$f(x)$ se aproxima de $L$ quando $x$ se aproxima de $a$', correct: true },
                            { text: '$f(x) = L$ para todo $x$ perto de $a$', correct: false },
                            { text: '$f(x)$ nunca alcança $L$', correct: false },
                        ],
                        explanation: 'O limite descreve o comportamento de $f(x)$ <strong>quando $x$ se aproxima de $a$</strong>, independentemente do valor em $x = a$. A função pode até não estar definida em $a$!'
                    },
                    {
                        topic: 'Limite Direto',
                        text: 'Calcule o limite:',
                        formula: '$$\\lim_{x \\to 3} (2x + 1)$$',
                        options: [
                            { text: '$5$', correct: false },
                            { text: '$7$', correct: true },
                            { text: '$6$', correct: false },
                            { text: '$8$', correct: false },
                        ],
                        explanation: 'Por substituição direta: $2(3) + 1 = $ <strong>$7$</strong>. Quando a função é contínua em $a$, basta substituir $x = a$.'
                    },
                    {
                        topic: 'Limite com Indeterminação',
                        text: 'Qual a forma indeterminada ao calcular diretamente?',
                        formula: '$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$',
                        options: [
                            { text: '$\\dfrac{0}{1}$', correct: false },
                            { text: '$\\dfrac{2}{0}$', correct: false },
                            { text: '$\\dfrac{0}{0}$', correct: true },
                            { text: '$\\dfrac{\\infty}{\\infty}$', correct: false },
                        ],
                        explanation: 'Em $x = 2$: numerador $= 4 - 4 = 0$ e denominador $= 2 - 2 = 0$. Isso é a <strong>forma indeterminada $\\dfrac{0}{0}$</strong>, que requer fatoração para resolver.'
                    },
                    {
                        topic: 'Fatoração de Limite',
                        text: 'Resolvendo por fatoração, qual o valor do limite?',
                        formula: '$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$',
                        options: [
                            { text: '$0$', correct: false },
                            { text: '$2$', correct: false },
                            { text: '$4$', correct: true },
                            { text: 'Não existe', correct: false },
                        ],
                        explanation: 'Fatorando: $\\dfrac{x^2-4}{x-2} = \\dfrac{(x+2)(x-2)}{x-2} = x+2$. Logo, $\\lim_{x \\to 2}(x+2) = $ <strong>$4$</strong>.'
                    },
                    {
                        topic: 'Limites Laterais',
                        text: 'Para que um limite exista, os limites laterais devem ser:',
                        formula: '$$\\lim_{x \\to a^-} f(x) \\quad \\text{e} \\quad \\lim_{x \\to a^+} f(x)$$',
                        options: [
                            { text: 'Iguais a $f(a)$', correct: false },
                            { text: 'Iguais entre si', correct: true },
                            { text: 'Ambos zero', correct: false },
                            { text: 'Ambos $\\infty$', correct: false },
                        ],
                        explanation: 'O limite bilateral existe se e somente se $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$. Se divergirem, o limite <strong>não existe</strong>.'
                    },
                ]
            },
            {
                id: 'limits-2',
                name: 'Regras e Propriedades',
                level: 2,
                questions: [
                    {
                        topic: 'Propriedades de Limites',
                        text: 'Qual é o valor do limite? Use substituição direta.',
                        formula: '$$\\lim_{x \\to 1} (3x^2 + 2x - 1)$$',
                        options: [
                            { text: '$3$', correct: false },
                            { text: '$4$', correct: true },
                            { text: '$5$', correct: false },
                            { text: '$2$', correct: false },
                        ],
                        explanation: 'Substituição direta (polinômio, sempre contínuo): $3(1)^2 + 2(1) - 1 = 3 + 2 - 1 = $ <strong>$4$</strong>.'
                    },
                    {
                        topic: 'Limite no Infinito',
                        text: 'Qual o valor do limite?',
                        formula: '$$\\lim_{x \\to \\infty} \\frac{3x^2 + x}{x^2}$$',
                        options: [
                            { text: '$0$', correct: false },
                            { text: '$1$', correct: false },
                            { text: '$3$', correct: true },
                            { text: '$\\infty$', correct: false },
                        ],
                        explanation: 'Dividindo por $x^2$: $\\dfrac{3 + \\frac{1}{x}}{1}$. Quando $x \\to \\infty$, $\\dfrac{1}{x} \\to 0$. Logo o limite é <strong>$3$</strong>.'
                    },
                    {
                        topic: "Regra de L'Hôpital",
                        text: "Quando se aplica a Regra de L'Hôpital?",
                        formula: '',
                        options: [
                            { text: 'Sempre que quisermos', correct: false },
                            { text: 'Quando o limite é $\\infty$', correct: false },
                            { text: 'Nas formas $\\dfrac{0}{0}$ ou $\\dfrac{\\infty}{\\infty}$', correct: true },
                            { text: 'Apenas em funções trigonométricas', correct: false },
                        ],
                        explanation: "L'Hôpital aplica-se às formas indeterminadas <strong>$\\dfrac{0}{0}$ ou $\\dfrac{\\infty}{\\infty}$</strong>: derivamos numerador e denominador separadamente e recalculamos."
                    },
                    {
                        topic: "L'Hôpital na Prática",
                        text: "Usando L'Hôpital, calcule:",
                        formula: '$$\\lim_{x \\to 0} \\frac{\\operatorname{sen}(x)}{x}$$',
                        options: [
                            { text: '$0$', correct: false },
                            { text: '$\\infty$', correct: false },
                            { text: '$1$', correct: true },
                            { text: '$\\pi$', correct: false },
                        ],
                        explanation: 'Forma $\\dfrac{0}{0}$. Derivando: $\\dfrac{\\cos(x)}{1}$. Em $x = 0$: $\\cos(0) = $ <strong>$1$</strong>. Este é um dos limites fundamentais do cálculo!'
                    },
                    {
                        topic: 'Limite com Raiz',
                        text: 'Qual é o valor do limite?',
                        formula: '$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$$',
                        options: [
                            { text: '$0$', correct: false },
                            { text: '$\\dfrac{1}{4}$', correct: true },
                            { text: '$\\dfrac{1}{2}$', correct: false },
                            { text: 'Não existe', correct: false },
                        ],
                        explanation: 'Multiplicando pelo conjugado $\\dfrac{\\sqrt{x}+2}{\\sqrt{x}+2}$: $\\dfrac{x-4}{(x-4)(\\sqrt{x}+2)} = \\dfrac{1}{\\sqrt{x}+2}$. Em $x=4$: <strong>$\\dfrac{1}{4}$</strong>.'
                    },
                ]
            },
            {
                id: 'limits-3',
                name: 'Continuidade',
                level: 3,
                questions: [
                    {
                        topic: 'Definição de Continuidade',
                        text: 'Uma função $f$ é contínua em $x = a$ quando:',
                        formula: '',
                        options: [
                            { text: '$f(a)$ existe', correct: false },
                            { text: '$\\lim_{x \\to a} f(x)$ existe', correct: false },
                            { text: 'As duas anteriores e $\\lim_{x \\to a} f(x) = f(a)$', correct: true },
                            { text: '$f$ é diferenciável em $a$', correct: false },
                        ],
                        explanation: 'Continuidade exige 3 condições: $f(a)$ definida, limite existe, e <strong>$\\lim_{x \\to a} f(x) = f(a)$</strong>. As três juntas!'
                    },
                    {
                        topic: 'Tipos de Descontinuidade',
                        text: 'Qual descontinuidade ocorre quando $\\lim_{x\\to a} f(x)$ existe, mas $\\neq f(a)$?',
                        formula: '',
                        options: [
                            { text: 'Descontinuidade de salto', correct: false },
                            { text: 'Descontinuidade removível', correct: true },
                            { text: 'Descontinuidade essencial', correct: false },
                            { text: 'Descontinuidade assintótica', correct: false },
                        ],
                        explanation: '<strong>Descontinuidade removível</strong>: o limite existe, mas $f(a)$ é indefinida ou diferente do limite. Pode ser corrigida redefinindo $f(a)$.'
                    },
                    {
                        topic: 'Limite Fundamental Trigonométrico',
                        text: 'Calcule o limite fundamental:',
                        formula: '$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$$',
                        options: [
                            { text: '$1$', correct: false },
                            { text: '$0$', correct: true },
                            { text: '$\\dfrac{1}{2}$', correct: false },
                            { text: '$\\infty$', correct: false },
                        ],
                        explanation: "Por L'Hôpital: $\\dfrac{\\operatorname{sen}(x)}{1} \\to 0$ quando $x \\to 0$. Resultado: <strong>$0$</strong>. Compare com $\\lim_{x\\to 0}\\dfrac{\\operatorname{sen}(x)}{x} = 1$."
                    },
                    {
                        topic: 'Assíntotas Horizontais',
                        text: 'Se $\\lim_{x \\to \\infty} f(x) = 5$, a função possui:',
                        formula: '',
                        options: [
                            { text: 'Assíntota vertical em $x = 5$', correct: false },
                            { text: 'Assíntota horizontal em $y = 5$', correct: true },
                            { text: 'Ponto de inflexão em $y = 5$', correct: false },
                            { text: 'Máximo global de $5$', correct: false },
                        ],
                        explanation: 'Quando $\\lim_{x \\to \\infty} f(x) = L$, a reta <strong>$y = L$</strong> é assíntota horizontal. A função se aproxima desta reta conforme $x \\to \\infty$.'
                    },
                ]
            },
        ]
    },
    {
        id: 'derivatives',
        name: 'Derivadas',
        icon: '∂',
        color: '#ff6b6b',
        subfases: [
            {
                id: 'deriv-1',
                name: 'Regras Básicas',
                level: 1,
                questions: [
                    {
                        topic: 'Definição de Derivada',
                        text: "A derivada $f'(a)$ representa geometricamente:",
                        formula: '',
                        options: [
                            { text: 'A área sob a curva em $a$', correct: false },
                            { text: 'O valor máximo de $f$', correct: false },
                            { text: 'A inclinação da reta tangente à curva em $a$', correct: true },
                            { text: 'A distância entre $a$ e $f(a)$', correct: false },
                        ],
                        explanation: "A derivada $f'(a)$ é o <strong>coeficiente angular da reta tangente</strong> ao gráfico de $f$ no ponto $\\big(a,\\; f(a)\\big)$."
                    },
                    {
                        topic: 'Regra da Potência',
                        text: 'Qual é a derivada de $f(x) = x^5$?',
                        formula: '',
                        options: [
                            { text: '$x^4$', correct: false },
                            { text: '$5x^4$', correct: true },
                            { text: '$5x^5$', correct: false },
                            { text: '$\\dfrac{x^6}{6}$', correct: false },
                        ],
                        explanation: '<strong>Regra da potência:</strong> $\\dfrac{d}{dx}\\left[x^n\\right] = n\\,x^{n-1}$. Aqui: $\\dfrac{d}{dx}\\left[x^5\\right] = 5x^4$.'
                    },
                    {
                        topic: 'Derivada de Constante',
                        text: 'Qual é a derivada de $f(x) = 7$?',
                        formula: '',
                        options: [
                            { text: '$7$', correct: false },
                            { text: '$x$', correct: false },
                            { text: '$0$', correct: true },
                            { text: '$7x$', correct: false },
                        ],
                        explanation: 'A derivada de uma <strong>constante é sempre $0$</strong>. Uma função constante tem inclinação zero — é uma reta horizontal!'
                    },
                    {
                        topic: 'Regra da Soma',
                        text: 'Derive $f(x) = 3x^2 + 4x - 2$.',
                        formula: '',
                        options: [
                            { text: '$6x + 4$', correct: true },
                            { text: '$3x + 4$', correct: false },
                            { text: '$6x^2 + 4$', correct: false },
                            { text: '$6x + 4x$', correct: false },
                        ],
                        explanation: 'Regra da soma: $\\dfrac{d}{dx}[3x^2] = 6x$, $\\dfrac{d}{dx}[4x] = 4$, $\\dfrac{d}{dx}[-2] = 0$. Logo $f\'(x) = $ <strong>$6x + 4$</strong>.'
                    },
                    {
                        topic: 'Derivada de Exponencial',
                        text: 'Qual é a derivada de $f(x) = e^x$?',
                        formula: '',
                        options: [
                            { text: '$x \\cdot e^{x-1}$', correct: false },
                            { text: '$e^x + 1$', correct: false },
                            { text: '$e^x$', correct: true },
                            { text: '$e$', correct: false },
                        ],
                        explanation: '<strong>$e^x$ é sua própria derivada!</strong> Propriedade única da exponencial natural: $\\dfrac{d}{dx}\\left[e^x\\right] = e^x$.'
                    },
                ]
            },
            {
                id: 'deriv-2',
                name: 'Regra da Cadeia',
                level: 2,
                questions: [
                    {
                        topic: 'Regra do Produto',
                        text: 'Derive usando a regra do produto:',
                        formula: '$$f(x) = x^2 \\cdot e^x$$',
                        options: [
                            { text: '$2x \\cdot e^x$', correct: false },
                            { text: '$e^x(x^2 + 2x)$', correct: true },
                            { text: '$2x + e^x$', correct: false },
                            { text: '$x^2 + e^x$', correct: false },
                        ],
                        explanation: '<strong>Regra do produto:</strong> $(uv)\' = u\'v + uv\'$. Aqui: $2x\\,e^x + x^2 e^x = $ <strong>$e^x(x^2 + 2x)$</strong>.'
                    },
                    {
                        topic: 'Regra do Quociente',
                        text: 'Qual é a derivada de $f(x) = \\dfrac{x^2 + 1}{x}$?',
                        formula: '',
                        options: [
                            { text: '$\\dfrac{2x}{1}$', correct: false },
                            { text: '$\\dfrac{x^2 - 1}{x^2}$', correct: true },
                            { text: '$\\dfrac{x^2 + 1}{x^2}$', correct: false },
                            { text: '$2x - 1$', correct: false },
                        ],
                        explanation: 'Regra do quociente: $\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'v - uv\'}{v^2}$. Numerador: $2x \\cdot x - (x^2+1) \\cdot 1 = x^2 - 1$. Logo <strong>$\\dfrac{x^2-1}{x^2}$</strong>.'
                    },
                    {
                        topic: 'Regra da Cadeia',
                        text: 'Derive usando a regra da cadeia:',
                        formula: '$$f(x) = (x^2 + 3)^5$$',
                        options: [
                            { text: '$5(x^2 + 3)^4$', correct: false },
                            { text: '$10x(x^2 + 3)^4$', correct: true },
                            { text: '$5x(x^2 + 3)^4$', correct: false },
                            { text: '$2x \\cdot 5(x^2 + 3)^5$', correct: false },
                        ],
                        explanation: '<strong>Regra da cadeia:</strong> $\\dfrac{d}{dx}[g(u)] = g\'(u)\\cdot u\'$. Aqui: $5(x^2+3)^4 \\cdot 2x = $ <strong>$10x(x^2+3)^4$</strong>.'
                    },
                    {
                        topic: 'Derivada de Seno',
                        text: 'Qual é a derivada de $f(x) = \\operatorname{sen}(3x)$?',
                        formula: '',
                        options: [
                            { text: '$\\cos(3x)$', correct: false },
                            { text: '$-3\\cos(3x)$', correct: false },
                            { text: '$3\\cos(3x)$', correct: true },
                            { text: '$\\operatorname{sen}(3x)\\cos(3x)$', correct: false },
                        ],
                        explanation: 'Pela cadeia: $\\dfrac{d}{dx}[\\operatorname{sen}(3x)] = \\cos(3x) \\cdot 3 = $ <strong>$3\\cos(3x)$</strong>.'
                    },
                    {
                        topic: 'Derivada de Logaritmo',
                        text: 'Derive $f(x) = \\ln(x^2)$.',
                        formula: '',
                        options: [
                            { text: '$\\dfrac{1}{x^2}$', correct: false },
                            { text: '$\\dfrac{2x}{x^2}$', correct: false },
                            { text: '$\\dfrac{2}{x}$', correct: true },
                            { text: '$\\ln(2x)$', correct: false },
                        ],
                        explanation: 'Pela cadeia: $\\dfrac{1}{x^2} \\cdot 2x = \\dfrac{2}{x}$. Ou: $\\ln(x^2) = 2\\ln(x) \\Rightarrow f\'(x) = $ <strong>$\\dfrac{2}{x}$</strong>.'
                    },
                ]
            },
            {
                id: 'deriv-3',
                name: 'Aplicações',
                level: 3,
                questions: [
                    {
                        topic: 'Pontos Críticos',
                        text: 'Para encontrar máximos ou mínimos locais de $f$, devemos:',
                        formula: '',
                        options: [
                            { text: 'Encontrar onde $f(x) = 0$', correct: false },
                            { text: "Encontrar onde $f'(x) = 0$ ou é indefinida", correct: true },
                            { text: "Encontrar onde $f''(x) = 0$", correct: false },
                            { text: 'Encontrar onde $f(x) > 0$', correct: false },
                        ],
                        explanation: "Os <strong>pontos críticos</strong> são onde $f'(x) = 0$ ou não existe. São candidatos a máximos, mínimos ou inflexão — a segunda derivada confirma qual."
                    },
                    {
                        topic: 'Crescimento e Decrescimento',
                        text: "Se $f'(x) > 0$ em um intervalo, a função é:",
                        formula: '',
                        options: [
                            { text: 'Decrescente', correct: false },
                            { text: 'Côncava para cima', correct: false },
                            { text: 'Crescente', correct: true },
                            { text: 'Constante', correct: false },
                        ],
                        explanation: "$f'(x) > 0$ → $f$ <strong>cresce</strong>. $f'(x) < 0$ → $f$ decresce. $f'(x) = 0$ → ponto crítico."
                    },
                    {
                        topic: 'Segunda Derivada e Concavidade',
                        text: "Se $f''(x) > 0$ em um intervalo, a curva é:",
                        formula: '',
                        options: [
                            { text: 'Crescente', correct: false },
                            { text: 'Côncava para baixo ($\\cap$)', correct: false },
                            { text: 'Côncava para cima ($\\cup$)', correct: true },
                            { text: 'Decrescente', correct: false },
                        ],
                        explanation: "$f''(x) > 0$ → côncava para <strong>cima</strong> ($\\cup$). $f''(x) < 0$ → côncava para baixo ($\\cap$). A segunda derivada mede a \"aceleração\" da curva."
                    },
                    {
                        topic: 'Ponto de Inflexão',
                        text: 'Um ponto de inflexão ocorre quando:',
                        formula: '',
                        options: [
                            { text: "$f'(x) = 0$", correct: false },
                            { text: "$f''(x)$ muda de sinal", correct: true },
                            { text: '$f(x) = 0$', correct: false },
                            { text: "$f''(x) = 0$ (condição suficiente)", correct: false },
                        ],
                        explanation: "Ponto de inflexão: a <strong>concavidade muda</strong>. $f''(x) = 0$ é necessário, mas não suficiente — é preciso que $f''$ efetivamente troque de sinal."
                    },
                ]
            },
        ]
    },
    {
        id: 'integrals',
        name: 'Integrais',
        icon: '∫',
        color: '#a78bfa',
        subfases: [
            {
                id: 'int-1',
                name: 'Antiderivadas',
                level: 1,
                questions: [
                    {
                        topic: 'Conceito de Integral',
                        text: 'A integral indefinida $\\int f(x)\\,dx$ representa:',
                        formula: '',
                        options: [
                            { text: 'A derivada de $f(x)$', correct: false },
                            { text: 'A área exata sob $f(x)$', correct: false },
                            { text: 'A família de antiderivadas de $f(x)$', correct: true },
                            { text: 'O valor de $f$ em um ponto', correct: false },
                        ],
                        explanation: '$\\int f(x)\\,dx$ é a <strong>família de antiderivadas</strong> $F(x) + C$, onde $F\'(x) = f(x)$. O $+C$ representa a constante de integração.'
                    },
                    {
                        topic: 'Regra da Potência (Integral)',
                        text: 'Calcule:',
                        formula: '$$\\int x^3\\,dx$$',
                        options: [
                            { text: '$3x^2 + C$', correct: false },
                            { text: '$x^4 + C$', correct: false },
                            { text: '$\\dfrac{x^4}{4} + C$', correct: true },
                            { text: '$4x^4 + C$', correct: false },
                        ],
                        explanation: '<strong>Regra da potência:</strong> $\\displaystyle\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$. Aqui: $\\displaystyle\\int x^3\\,dx = \\dfrac{x^4}{4} + C$.'
                    },
                    {
                        topic: 'Integral de Constante',
                        text: 'Calcule:',
                        formula: '$$\\int 5\\,dx$$',
                        options: [
                            { text: '$5$', correct: false },
                            { text: '$5x^2 + C$', correct: false },
                            { text: '$5x + C$', correct: true },
                            { text: '$0$', correct: false },
                        ],
                        explanation: '$\\int k\\,dx = kx + C$. Integrar a constante $5$ resulta em <strong>$5x + C$</strong>. Verificação: $\\dfrac{d}{dx}[5x + C] = 5$. ✓'
                    },
                    {
                        topic: 'Integral da Soma',
                        text: 'Calcule:',
                        formula: '$$\\int (2x + 3)\\,dx$$',
                        options: [
                            { text: '$x^2 + C$', correct: false },
                            { text: '$x^2 + 3x$', correct: false },
                            { text: '$x^2 + 3x + C$', correct: true },
                            { text: '$2 + C$', correct: false },
                        ],
                        explanation: 'Termo a termo: $\\int 2x\\,dx + \\int 3\\,dx = x^2 + 3x + C$. <strong>Não esqueça o $+C$!</strong>'
                    },
                    {
                        topic: 'Integral de Exponencial',
                        text: 'Calcule:',
                        formula: '$$\\int e^x\\,dx$$',
                        options: [
                            { text: '$e^{x-1} + C$', correct: false },
                            { text: '$\\dfrac{e^x}{x} + C$', correct: false },
                            { text: '$e^x + C$', correct: true },
                            { text: '$e + C$', correct: false },
                        ],
                        explanation: '<strong>$\\int e^x\\,dx = e^x + C$</strong>. A exponencial natural é sua própria integral. Verificação: $\\dfrac{d}{dx}[e^x + C] = e^x$. ✓'
                    },
                ]
            },
            {
                id: 'int-2',
                name: 'Integral Definida',
                level: 2,
                questions: [
                    {
                        topic: 'Teorema Fundamental do Cálculo',
                        text: 'O Teorema Fundamental do Cálculo afirma que:',
                        formula: '$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$',
                        options: [
                            { text: 'Derivadas de segunda ordem se anulam', correct: false },
                            { text: 'Limites e derivadas são equivalentes', correct: false },
                            { text: '$F$ é qualquer antiderivada de $f$', correct: true },
                            { text: 'A integral sempre diverge em $\\infty$', correct: false },
                        ],
                        explanation: 'O TFC conecta integração e diferenciação: onde $F\'(x) = f(x)$. <strong>A grande unificação do cálculo!</strong>'
                    },
                    {
                        topic: 'Integral Definida',
                        text: 'Calcule:',
                        formula: '$$\\int_0^2 2x\\,dx$$',
                        options: [
                            { text: '$2$', correct: false },
                            { text: '$4$', correct: true },
                            { text: '$8$', correct: false },
                            { text: '$0$', correct: false },
                        ],
                        explanation: 'Antiderivada: $x^2$. TFC: $\\left[x^2\\right]_0^2 = 4 - 0 = $ <strong>$4$</strong>. Geometricamente é a área do triângulo de base $2$ e altura $4$: $\\dfrac{1}{2}(2)(4) = 4$. ✓'
                    },
                    {
                        topic: 'Área sob a Curva',
                        text: 'Calcule a área entre $f(x) = x^2$ e o eixo $x$ em $[0,\\,3]$:',
                        formula: '$$\\int_0^3 x^2\\,dx$$',
                        options: [
                            { text: '$9$', correct: true },
                            { text: '$27$', correct: false },
                            { text: '$3$', correct: false },
                            { text: '$\\dfrac{27}{2}$', correct: false },
                        ],
                        explanation: 'Antiderivada: $\\dfrac{x^3}{3}$. TFC: $\\left[\\dfrac{x^3}{3}\\right]_0^3 = \\dfrac{27}{3} - 0 = $ <strong>$9$</strong>.'
                    },
                    {
                        topic: 'Propriedades da Integral',
                        text: 'Qual é o valor da integral?',
                        formula: '$$\\int_a^a f(x)\\,dx$$',
                        options: [
                            { text: '$f(a)$', correct: false },
                            { text: '$2f(a)$', correct: false },
                            { text: '$0$', correct: true },
                            { text: '$F(a)$', correct: false },
                        ],
                        explanation: 'Limites iguais: $F(a) - F(a) = $ <strong>$0$</strong>. Integramos num intervalo de largura zero — área nula.'
                    },
                    {
                        topic: 'Substituição (u-sub)',
                        text: 'Usando $u = x^2$, calcule:',
                        formula: '$$\\int 2x\\,e^{x^2}\\,dx$$',
                        options: [
                            { text: '$2e^{x^2} + C$', correct: false },
                            { text: '$e^{x^2} + C$', correct: true },
                            { text: '$x^2 e^{x^2} + C$', correct: false },
                            { text: '$\\dfrac{e^{x^2}}{2x} + C$', correct: false },
                        ],
                        explanation: 'Com $u = x^2$, $du = 2x\\,dx$. A integral vira $\\int e^u\\,du = e^u + C = $ <strong>$e^{x^2} + C$</strong>.'
                    },
                ]
            },
            {
                id: 'int-3',
                name: 'Aplicações',
                level: 3,
                questions: [
                    {
                        topic: 'Área entre Curvas',
                        text: 'A área entre $f(x)$ e $g(x)$, com $f(x) \\geq g(x)$ em $[a,b]$, é:',
                        formula: '',
                        options: [
                            { text: '$\\displaystyle\\int_a^b f(x) \\cdot g(x)\\,dx$', correct: false },
                            { text: '$\\displaystyle\\int_a^b [f(x) - g(x)]\\,dx$', correct: true },
                            { text: '$\\displaystyle\\int_a^b [f(x) + g(x)]\\,dx$', correct: false },
                            { text: '$\\displaystyle\\int f\\,dx \\cdot \\int g\\,dx$', correct: false },
                        ],
                        explanation: 'Área entre curvas $= \\displaystyle\\int_a^b [f(x) - g(x)]\\,dx$. Subtraímos a curva inferior da superior para obter a <strong>altura</strong> de cada fatia.'
                    },
                    {
                        topic: 'Área entre Curvas — Cálculo',
                        text: 'Qual é a área entre $y = x$ e $y = x^2$ em $[0,1]$?',
                        formula: '$$\\int_0^1 (x - x^2)\\,dx$$',
                        options: [
                            { text: '$\\dfrac{1}{2}$', correct: false },
                            { text: '$\\dfrac{1}{3}$', correct: false },
                            { text: '$\\dfrac{1}{6}$', correct: true },
                            { text: '$\\dfrac{1}{4}$', correct: false },
                        ],
                        explanation: '$\\left[\\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{3}{6} - \\dfrac{2}{6} = $ <strong>$\\dfrac{1}{6}$</strong>.'
                    },
                    {
                        topic: 'Integral Imprópria',
                        text: 'Quando uma integral é chamada de "imprópria"?',
                        formula: '',
                        options: [
                            { text: 'Quando o resultado é negativo', correct: false },
                            { text: 'Quando o resultado é irracional', correct: false },
                            { text: 'Quando os limites são $\\pm\\infty$ ou $f$ é ilimitada no intervalo', correct: true },
                            { text: 'Quando não tem antiderivada elementar', correct: false },
                        ],
                        explanation: 'Integral imprópria: <strong>limites infinitos</strong> (ex: $\\int_1^{\\infty}$) ou <strong>descontinuidade</strong> de $f$ no intervalo. São calculadas como limites.'
                    },
                    {
                        topic: 'Convergência de Integral Imprópria',
                        text: 'A integral imprópria abaixo é:',
                        formula: '$$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$$',
                        options: [
                            { text: 'Divergente ($\\to \\infty$)', correct: false },
                            { text: 'Convergente e igual a $1$', correct: true },
                            { text: 'Convergente e igual a $2$', correct: false },
                            { text: 'Indefinida', correct: false },
                        ],
                        explanation: '$\\lim_{b \\to \\infty} \\left[-\\dfrac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty}\\!\\left(1 - \\dfrac{1}{b}\\right) = $ <strong>$1$</strong>. Área infinita sob $\\dfrac{1}{x^2}$ converge!'
                    },
                ]
            },
        ]
    },
];