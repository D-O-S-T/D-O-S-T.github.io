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
                        text: 'O que significa dizer que lim f(x) = L quando x → a?',
                        formula: '',
                        options: [
                            { text: 'f(a) = L obrigatoriamente', correct: false },
                            { text: 'f(x) se aproxima de L quando x se aproxima de a', correct: true },
                            { text: 'f(x) = L para todo x perto de a', correct: false },
                            { text: 'f(x) nunca alcança L', correct: false },
                        ],
                        explanation: 'O limite descreve o comportamento de f(x) <strong>quando x se aproxima de a</strong>, independentemente do valor em x = a. A função pode até não estar definida em a!'
                    },
                    {
                        topic: 'Limite Direto',
                        text: 'Calcule o limite:',
                        formula: 'lim (x → 3)  2x + 1',
                        options: [
                            { text: '5', correct: false },
                            { text: '7', correct: true },
                            { text: '6', correct: false },
                            { text: '8', correct: false },
                        ],
                        explanation: 'Por substituição direta: 2(3) + 1 = <strong>7</strong>. Quando a função é contínua em a, basta substituir x = a.'
                    },
                    {
                        topic: 'Limite com Indeterminação',
                        text: 'Qual a forma indeterminada ao calcular diretamente?',
                        formula: 'lim (x→2)  (x²−4) / (x−2)',
                        options: [
                            { text: '0/1', correct: false },
                            { text: '2/0', correct: false },
                            { text: '0/0', correct: true },
                            { text: '∞/∞', correct: false },
                        ],
                        explanation: 'Em x = 2: numerador = 4 − 4 = 0 e denominador = 2 − 2 = 0. Isso é a <strong>forma indeterminada 0/0</strong>, que requer fatoração para resolver.'
                    },
                    {
                        topic: 'Fatoração de Limite',
                        text: 'Resolvendo por fatoração, qual o valor do limite?',
                        formula: 'lim (x→2)  (x²−4) / (x−2)',
                        options: [
                            { text: '0', correct: false },
                            { text: '2', correct: false },
                            { text: '4', correct: true },
                            { text: 'Não existe', correct: false },
                        ],
                        explanation: 'Fatorando: (x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Logo, lim (x→2) x+2 = <strong>4</strong>.'
                    },
                    {
                        topic: 'Limites Laterais',
                        text: 'Para que um limite exista, os limites laterais devem ser:',
                        formula: 'lim(x→a⁻) f(x)  e  lim(x→a⁺) f(x)',
                        options: [
                            { text: 'Iguais a f(a)', correct: false },
                            { text: 'Iguais entre si', correct: true },
                            { text: 'Ambos zero', correct: false },
                            { text: 'Ambos infinito', correct: false },
                        ],
                        explanation: 'O limite bilateral existe se e somente se <strong>lim(x→a⁻) = lim(x→a⁺)</strong>. Se divergirem, o limite não existe.'
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
                        text: 'Qual é o valor do limite abaixo? Use as propriedades.',
                        formula: 'lim(x→1) [3x² + 2x − 1]',
                        options: [
                            { text: '3', correct: false },
                            { text: '4', correct: true },
                            { text: '5', correct: false },
                            { text: '2', correct: false },
                        ],
                        explanation: 'Substituição direta (função polinomial, sempre contínua): 3(1)² + 2(1) − 1 = 3 + 2 − 1 = <strong>4</strong>.'
                    },
                    {
                        topic: 'Limite no Infinito',
                        text: 'Qual o valor do limite?',
                        formula: 'lim(x→∞)  (3x² + x) / (x²)',
                        options: [
                            { text: '0', correct: false },
                            { text: '1', correct: false },
                            { text: '3', correct: true },
                            { text: '∞', correct: false },
                        ],
                        explanation: 'Dividindo numerador e denominador por x²: (3 + 1/x) / 1. Quando x→∞, 1/x → 0. Logo o limite é <strong>3</strong>.'
                    },
                    {
                        topic: 'Regra de L\'Hôpital',
                        text: 'Quando aplicamos a Regra de L\'Hôpital?',
                        formula: '',
                        options: [
                            { text: 'Sempre que quisermos', correct: false },
                            { text: 'Quando o limite é ∞', correct: false },
                            { text: 'Nas formas 0/0 ou ∞/∞', correct: true },
                            { text: 'Apenas em funções trigonométricas', correct: false },
                        ],
                        explanation: 'L\'Hôpital se aplica às formas indeterminadas <strong>0/0 ou ∞/∞</strong>: derivamos numerador e denominador separadamente e tentamos novamente.'
                    },
                    {
                        topic: 'L\'Hôpital na Prática',
                        text: 'Usando L\'Hôpital, calcule:',
                        formula: 'lim(x→0)  sen(x) / x',
                        options: [
                            { text: '0', correct: false },
                            { text: '∞', correct: false },
                            { text: '1', correct: true },
                            { text: 'π', correct: false },
                        ],
                        explanation: 'Forma 0/0. Derivando: cos(x)/1. Em x = 0: cos(0)/1 = <strong>1</strong>. Este é um dos limites fundamentais do cálculo!'
                    },
                    {
                        topic: 'Limite com Raiz',
                        text: 'Qual é o valor do limite?',
                        formula: 'lim(x→4)  (√x − 2) / (x − 4)',
                        options: [
                            { text: '0', correct: false },
                            { text: '1/4', correct: true },
                            { text: '1/2', correct: false },
                            { text: 'Não existe', correct: false },
                        ],
                        explanation: 'Multiplicando pelo conjugado (√x+2)/(√x+2): (x−4)/[(x−4)(√x+2)] = 1/(√x+2). Em x=4: 1/(2+2) = <strong>1/4</strong>.'
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
                        text: 'Uma função f é contínua em x = a quando:',
                        formula: '',
                        options: [
                            { text: 'f(a) existe', correct: false },
                            { text: 'lim(x→a) f(x) existe', correct: false },
                            { text: 'Ambas anteriores + lim(x→a) f(x) = f(a)', correct: true },
                            { text: 'f é diferenciável em a', correct: false },
                        ],
                        explanation: 'Continuidade exige 3 condições: f(a) definida, limite existe, e <strong>lim(x→a) f(x) = f(a)</strong>. As três juntas!'
                    },
                    {
                        topic: 'Tipos de Descontinuidade',
                        text: 'Qual tipo de descontinuidade ocorre quando lim existe, mas ≠ f(a)?',
                        formula: '',
                        options: [
                            { text: 'Descontinuidade de salto', correct: false },
                            { text: 'Descontinuidade removível', correct: true },
                            { text: 'Descontinuidade essencial', correct: false },
                            { text: 'Descontinuidade assintótica', correct: false },
                        ],
                        explanation: '<strong>Descontinuidade removível</strong>: o limite existe, mas f(a) é indefinida ou diferente do limite. Pode ser "corrigida" redefinindo f(a).'
                    },
                    {
                        topic: 'Limite Fundamental Trigonométrico',
                        text: 'Calcule o limite fundamental:',
                        formula: 'lim(x→0)  (1 − cos x) / x',
                        options: [
                            { text: '1', correct: false },
                            { text: '0', correct: true },
                            { text: '1/2', correct: false },
                            { text: '∞', correct: false },
                        ],
                        explanation: 'Usando L\'Hôpital ou identidades: sen(x)/1 → 0 quando x→0. O resultado é <strong>0</strong>. (Compare com sen(x)/x = 1).'
                    },
                    {
                        topic: 'Assíntotas',
                        text: 'Se lim(x→∞) f(x) = 5, então a função possui:',
                        formula: '',
                        options: [
                            { text: 'Assíntota vertical em x = 5', correct: false },
                            { text: 'Assíntota horizontal em y = 5', correct: true },
                            { text: 'Ponto de inflexão em y = 5', correct: false },
                            { text: 'Máximo global de 5', correct: false },
                        ],
                        explanation: 'Quando lim(x→∞) f(x) = L, a reta <strong>y = L</strong> é assíntota horizontal. A função se aproxima desta reta ao "infinito".'
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
                        text: 'A derivada f\'(a) representa geometricamente:',
                        formula: '',
                        options: [
                            { text: 'A área sob a curva em a', correct: false },
                            { text: 'O valor máximo de f', correct: false },
                            { text: 'A inclinação da tangente à curva em a', correct: true },
                            { text: 'A distância entre a e f(a)', correct: false },
                        ],
                        explanation: 'A derivada f\'(a) é a <strong>inclinação (coeficiente angular) da reta tangente</strong> ao gráfico de f no ponto (a, f(a)).'
                    },
                    {
                        topic: 'Regra da Potência',
                        text: 'Qual é a derivada da função?',
                        formula: 'f(x) = x⁵',
                        options: [
                            { text: 'x⁴', correct: false },
                            { text: '5x⁴', correct: true },
                            { text: '5x⁵', correct: false },
                            { text: 'x⁶/6', correct: false },
                        ],
                        explanation: '<strong>Regra da potência</strong>: d/dx[xⁿ] = n·xⁿ⁻¹. Aqui: d/dx[x⁵] = 5x⁴.'
                    },
                    {
                        topic: 'Derivada de Constante',
                        text: 'Qual é a derivada?',
                        formula: 'f(x) = 7',
                        options: [
                            { text: '7', correct: false },
                            { text: 'x', correct: false },
                            { text: '0', correct: true },
                            { text: '7x', correct: false },
                        ],
                        explanation: 'A derivada de uma <strong>constante é sempre 0</strong>. Uma função constante tem inclinação zero — é uma reta horizontal!'
                    },
                    {
                        topic: 'Regra da Soma',
                        text: 'Derive a função:',
                        formula: 'f(x) = 3x² + 4x − 2',
                        options: [
                            { text: '6x + 4', correct: true },
                            { text: '3x + 4', correct: false },
                            { text: '6x² + 4', correct: false },
                            { text: '6x + 4x', correct: false },
                        ],
                        explanation: 'Regra da soma + potência: d/dx[3x²] = 6x, d/dx[4x] = 4, d/dx[−2] = 0. Logo f\'(x) = <strong>6x + 4</strong>.'
                    },
                    {
                        topic: 'Derivada de Exponencial',
                        text: 'Qual é a derivada?',
                        formula: 'f(x) = eˣ',
                        options: [
                            { text: 'x·eˣ⁻¹', correct: false },
                            { text: 'eˣ + 1', correct: false },
                            { text: 'eˣ', correct: true },
                            { text: 'e', correct: false },
                        ],
                        explanation: '<strong>eˣ é sua própria derivada</strong>! Esta é uma propriedade única da função exponencial: d/dx[eˣ] = eˣ.'
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
                        formula: 'f(x) = x² · eˣ',
                        options: [
                            { text: '2x · eˣ', correct: false },
                            { text: 'x² · eˣ + 2x · eˣ', correct: true },
                            { text: '2x + eˣ', correct: false },
                            { text: 'x² + eˣ', correct: false },
                        ],
                        explanation: '<strong>Regra do produto</strong>: (uv)\' = u\'v + uv\'. Aqui: (x²)\'eˣ + x²(eˣ)\' = 2x·eˣ + x²·eˣ = <strong>eˣ(2x + x²)</strong>.'
                    },
                    {
                        topic: 'Regra do Quociente',
                        text: 'Qual é a derivada?',
                        formula: 'f(x) = (x² + 1) / x',
                        options: [
                            { text: '2x / 1', correct: false },
                            { text: '(x² − 1) / x²', correct: true },
                            { text: '(x² + 1) / x²', correct: false },
                            { text: '2x − 1', correct: false },
                        ],
                        explanation: 'Regra do quociente (u/v)\' = (u\'v − uv\')/v². Numerador: 2x·x − (x²+1)·1 = x²−1. Dividindo por x²: <strong>(x²−1)/x²</strong>.'
                    },
                    {
                        topic: 'Regra da Cadeia',
                        text: 'Derive usando a regra da cadeia:',
                        formula: 'f(x) = (x² + 3)⁵',
                        options: [
                            { text: '5(x² + 3)⁴', correct: false },
                            { text: '10x(x² + 3)⁴', correct: true },
                            { text: '5x(x² + 3)⁴', correct: false },
                            { text: '2x · 5(x² + 3)⁵', correct: false },
                        ],
                        explanation: '<strong>Regra da cadeia</strong>: d/dx[g(u)] = g\'(u)·u\'. Aqui: 5(x²+3)⁴ · d/dx[x²+3] = 5(x²+3)⁴ · 2x = <strong>10x(x²+3)⁴</strong>.'
                    },
                    {
                        topic: 'Derivada de Seno',
                        text: 'Qual é a derivada?',
                        formula: 'f(x) = sen(3x)',
                        options: [
                            { text: 'cos(3x)', correct: false },
                            { text: '−3cos(3x)', correct: false },
                            { text: '3cos(3x)', correct: true },
                            { text: 'sen(3x)cos(3x)', correct: false },
                        ],
                        explanation: 'Pela cadeia: d/dx[sen(3x)] = cos(3x) · 3 = <strong>3cos(3x)</strong>. A derivada de sen é cos, multiplicada pela derivada interna.'
                    },
                    {
                        topic: 'Derivada de Logaritmo',
                        text: 'Derive:',
                        formula: 'f(x) = ln(x²)',
                        options: [
                            { text: '1/x²', correct: false },
                            { text: '2x/x²', correct: false },
                            { text: '2/x', correct: true },
                            { text: 'ln(2x)', correct: false },
                        ],
                        explanation: 'Cadeia: d/dx[ln(x²)] = (1/x²) · 2x = 2x/x² = <strong>2/x</strong>. Ou simplifique antes: ln(x²) = 2ln(x), então f\'(x) = 2/x.'
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
                        text: 'Para encontrar pontos de máximo ou mínimo locais, devemos:',
                        formula: '',
                        options: [
                            { text: 'Encontrar onde f(x) = 0', correct: false },
                            { text: 'Encontrar onde f\'(x) = 0 ou é indefinida', correct: true },
                            { text: 'Encontrar onde f\'\'(x) = 0', correct: false },
                            { text: 'Encontrar onde f(x) > 0', correct: false },
                        ],
                        explanation: 'Os <strong>pontos críticos</strong> são onde f\'(x) = 0 ou não existe. São candidatos a máximos, mínimos ou pontos de inflexão.'
                    },
                    {
                        topic: 'Crescimento e Decrescimento',
                        text: 'Se f\'(x) > 0 em um intervalo, a função é:',
                        formula: '',
                        options: [
                            { text: 'Decrescente nesse intervalo', correct: false },
                            { text: 'Côncava para cima', correct: false },
                            { text: 'Crescente nesse intervalo', correct: true },
                            { text: 'Constante nesse intervalo', correct: false },
                        ],
                        explanation: 'f\'(x) > 0 → f <strong>cresce</strong>. f\'(x) < 0 → f decresce. f\'(x) = 0 → ponto crítico. A derivada é a "velocidade de variação"!'
                    },
                    {
                        topic: 'Segunda Derivada',
                        text: 'Se f\'\'(x) > 0 em um ponto, a função é:',
                        formula: '',
                        options: [
                            { text: 'Crescente nesse ponto', correct: false },
                            { text: 'Côncava para baixo', correct: false },
                            { text: 'Côncava para cima (convexa)', correct: true },
                            { text: 'Decrescente nesse ponto', correct: false },
                        ],
                        explanation: 'f\'\'(x) > 0 → função côncava para <strong>cima</strong> (∪). f\'\'(x) < 0 → côncava para baixo (∩). A segunda derivada mede a "aceleração" da curva.'
                    },
                    {
                        topic: 'Ponto de Inflexão',
                        text: 'Um ponto de inflexão ocorre quando:',
                        formula: '',
                        options: [
                            { text: 'f\'(x) = 0', correct: false },
                            { text: 'f\'\'(x) muda de sinal', correct: true },
                            { text: 'f(x) = 0', correct: false },
                            { text: 'f\'\'(x) = 0 apenas', correct: false },
                        ],
                        explanation: 'Ponto de inflexão: onde a <strong>concavidade muda</strong>. f\'\'(x) = 0 é condição necessária mas não suficiente — é preciso que mude de sinal.'
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
                        text: 'A integral indefinida ∫f(x)dx representa:',
                        formula: '',
                        options: [
                            { text: 'A derivada de f(x)', correct: false },
                            { text: 'A área exata sob f(x)', correct: false },
                            { text: 'A família de antiderivadas de f(x)', correct: true },
                            { text: 'O valor de f em um ponto', correct: false },
                        ],
                        explanation: '∫f(x)dx é a <strong>família de antiderivadas</strong> F(x) + C, onde F\'(x) = f(x). O +C representa infinitas funções que se diferenciam por uma constante.'
                    },
                    {
                        topic: 'Regra da Potência (Integral)',
                        text: 'Calcule a integral:',
                        formula: '∫ x³ dx',
                        options: [
                            { text: '3x² + C', correct: false },
                            { text: 'x⁴ + C', correct: false },
                            { text: 'x⁴/4 + C', correct: true },
                            { text: '4x⁴ + C', correct: false },
                        ],
                        explanation: '<strong>∫xⁿdx = xⁿ⁺¹/(n+1) + C</strong>. Aqui: ∫x³dx = x⁴/4 + C. A integral é o inverso da derivada!'
                    },
                    {
                        topic: 'Integral de Constante',
                        text: 'Calcule:',
                        formula: '∫ 5 dx',
                        options: [
                            { text: '5', correct: false },
                            { text: '5x² + C', correct: false },
                            { text: '5x + C', correct: true },
                            { text: '0', correct: false },
                        ],
                        explanation: '∫ k dx = kx + C. Integrar uma constante <strong>5</strong> resulta em <strong>5x + C</strong>. Verificação: d/dx[5x + C] = 5. ✓'
                    },
                    {
                        topic: 'Integral da Soma',
                        text: 'Calcule:',
                        formula: '∫ (2x + 3) dx',
                        options: [
                            { text: 'x² + C', correct: false },
                            { text: 'x² + 3x', correct: false },
                            { text: 'x² + 3x + C', correct: true },
                            { text: '2 + C', correct: false },
                        ],
                        explanation: 'Integramos termo a termo: ∫2x dx + ∫3 dx = x² + 3x + C. <strong>Não esqueça o +C!</strong> Cada antiderivada tem uma constante de integração.'
                    },
                    {
                        topic: 'Integral de Exponencial',
                        text: 'Calcule:',
                        formula: '∫ eˣ dx',
                        options: [
                            { text: 'eˣ⁻¹ + C', correct: false },
                            { text: 'eˣ/x + C', correct: false },
                            { text: 'eˣ + C', correct: true },
                            { text: 'e + C', correct: false },
                        ],
                        explanation: '<strong>∫eˣdx = eˣ + C</strong>. A exponencial é sua própria integral (e derivada). Verificação: d/dx[eˣ + C] = eˣ. ✓'
                    },
                ]
            },
            {
                id: 'int-2',
                name: 'Integral Definida',
                level: 2,
                questions: [
                    {
                        topic: 'Teorema Fundamental',
                        text: 'O Teorema Fundamental do Cálculo relaciona:',
                        formula: '',
                        options: [
                            { text: 'Derivadas de segunda ordem', correct: false },
                            { text: 'Limites com derivadas', correct: false },
                            { text: 'Integral definida com antiderivada', correct: true },
                            { text: 'Limites com integrais impróprias', correct: false },
                        ],
                        explanation: 'O TFC afirma que <strong>∫[a,b] f(x)dx = F(b) − F(a)</strong>, ligando integração e diferenciação — a grande conexão do cálculo!'
                    },
                    {
                        topic: 'Integral Definida',
                        text: 'Calcule:',
                        formula: '∫₀² 2x dx',
                        options: [
                            { text: '2', correct: false },
                            { text: '4', correct: true },
                            { text: '8', correct: false },
                            { text: '0', correct: false },
                        ],
                        explanation: 'Antiderivada: x². Aplicando TFC: F(2) − F(0) = 4 − 0 = <strong>4</strong>. Geometricamente, é a área do triângulo com base 2 e altura 4: (1/2)(2)(4) = 4. ✓'
                    },
                    {
                        topic: 'Área sob a Curva',
                        text: 'Calcule a área entre f(x) = x² e o eixo x no intervalo [0, 3]:',
                        formula: '∫₀³ x² dx',
                        options: [
                            { text: '9', correct: true },
                            { text: '27', correct: false },
                            { text: '3', correct: false },
                            { text: '27/2', correct: false },
                        ],
                        explanation: 'Antiderivada: x³/3. TFC: [x³/3]₀³ = 27/3 − 0 = <strong>9</strong>. A integral definida dá a área (líquida) entre a curva e o eixo x.'
                    },
                    {
                        topic: 'Propriedades da Integral',
                        text: 'Qual é o valor da integral abaixo?',
                        formula: '∫ₐᵃ f(x) dx',
                        options: [
                            { text: 'f(a)', correct: false },
                            { text: '2f(a)', correct: false },
                            { text: '0', correct: true },
                            { text: 'F(a)', correct: false },
                        ],
                        explanation: 'Quando os limites de integração são iguais, a área é <strong>0</strong>: F(a) − F(a) = 0. Integramos em um intervalo de "largura zero".'
                    },
                    {
                        topic: 'Substituição (u-sub)',
                        text: 'Usando substituição u = x², calcule:',
                        formula: '∫ 2x · eˣ² dx',
                        options: [
                            { text: '2eˣ² + C', correct: false },
                            { text: 'eˣ² + C', correct: true },
                            { text: 'x²eˣ² + C', correct: false },
                            { text: 'eˣ²/2x + C', correct: false },
                        ],
                        explanation: 'Com u = x², du = 2x dx. A integral vira ∫eᵘdu = eᵘ + C = <strong>eˣ² + C</strong>. A substituição simplificou tudo!'
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
                        text: 'A área entre f(x) e g(x), com f(x) ≥ g(x), em [a,b] é dada por:',
                        formula: '',
                        options: [
                            { text: '∫[f(x) · g(x)]dx', correct: false },
                            { text: '∫[f(x) − g(x)]dx', correct: true },
                            { text: '∫[f(x) + g(x)]dx', correct: false },
                            { text: '∫f(x)dx · ∫g(x)dx', correct: false },
                        ],
                        explanation: 'Área entre curvas = <strong>∫[a,b] [f(x) − g(x)] dx</strong>. Subtraímos a curva inferior da superior para obter a altura do "fatiamento" retangular.'
                    },
                    {
                        topic: 'Área entre Curvas — Cálculo',
                        text: 'Qual é a área entre y = x² e y = x no intervalo [0,1]?',
                        formula: '∫₀¹ (x − x²) dx',
                        options: [
                            { text: '1/2', correct: false },
                            { text: '1/3', correct: false },
                            { text: '1/6', correct: true },
                            { text: '1/4', correct: false },
                        ],
                        explanation: '[x²/2 − x³/3]₀¹ = (1/2 − 1/3) − 0 = 3/6 − 2/6 = <strong>1/6</strong>. As parábolas se intersectam em x=0 e x=1, delimitando uma área pequena.'
                    },
                    {
                        topic: 'Integral Imprópria',
                        text: 'Quando chamamos uma integral de "imprópria"?',
                        formula: '',
                        options: [
                            { text: 'Quando o resultado é negativo', correct: false },
                            { text: 'Quando o resultado é irracional', correct: false },
                            { text: 'Quando os limites são infinitos ou a função é ilimitada', correct: true },
                            { text: 'Quando não tem antiderivada elementar', correct: false },
                        ],
                        explanation: 'Integral imprópria: <strong>limite(s) de integração infinitos</strong> (∫₁^∞) ou <strong>função com descontinuidade</strong> no intervalo. São calculadas como limites.'
                    },
                    {
                        topic: 'Integral Imprópria — Convergência',
                        text: 'A integral ∫₁^∞ (1/x²) dx é:',
                        formula: '∫₁^∞ x⁻² dx',
                        options: [
                            { text: 'Divergente (→ ∞)', correct: false },
                            { text: 'Convergente e igual a 1', correct: true },
                            { text: 'Convergente e igual a 2', correct: false },
                            { text: 'Indefinida', correct: false },
                        ],
                        explanation: 'lim(b→∞) [−1/x]₁ᵇ = lim(b→∞) (−1/b + 1) = 0 + 1 = <strong>1</strong>. A área infinita sob 1/x² converge para um valor finito!'
                    },
                ]
            },
        ]
    },
];