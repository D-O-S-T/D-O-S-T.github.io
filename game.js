const MAX_LIVES = 5;
const POINTS_CORRECT = 100;
const POINTS_PERFECT = 50;
const POINTS_PER_LIFE = 10;
const STORAGE_KEY = 'calcquest_save';
const RANKING_KEY = 'calcquest_ranking';

let state = {
    playerName: '',
    lives: MAX_LIVES,
    score: 0,
    progress: {},
};

let session = {
    phaseIdx: 0,
    subfaseIdx: 0,
    questions: [],
    qIndex: 0,
    correct: 0,
    answered: false,
};

function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { }
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) state = { ...state, ...JSON.parse(raw) };
    } catch (e) { }
}

function clearSave() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { }
}

function getRanking() {
    try { return JSON.parse(localStorage.getItem(RANKING_KEY)) || []; } catch (e) { return []; }
}

function saveToRanking(name, score) {
    const list = getRanking();
    list.push({ name, score, date: new Date().toLocaleDateString('pt-BR') });
    list.sort((a, b) => b.score - a.score);
    const top = list.slice(0, 10);
    try { localStorage.setItem(RANKING_KEY, JSON.stringify(top)); } catch (e) { }
}

function clearRanking() {
    try { localStorage.removeItem(RANKING_KEY); } catch (e) { }
    renderRanking();
    showToast('Ranking limpo!');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
}

function startGame() {
    const input = document.getElementById('player-name');
    const name = input.value.trim();
    if (!name) {
        input.focus();
        input.style.borderColor = 'var(--wrong)';
        input.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.2)';
        showToast('Digite seu nome para começar!');
        setTimeout(() => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }, 1500);
        return;
    }

    loadState();
    if (state.playerName !== name) {
        state = { playerName: name, lives: MAX_LIVES, score: 0, progress: {} };
    }
    state.playerName = name;
    saveState();

    renderMap();
    showScreen('screen-map');
}

function renderMap() {
    document.getElementById('hdr-player-name').textContent = state.playerName;
    document.getElementById('hdr-score').textContent = state.score;
    renderLives('lives-display');

    PHASES.forEach((phase, pi) => {
        const card = document.getElementById(`phase-card-${pi}`);
        const statusEl = document.getElementById(`phase-status-${pi}`);
        const subfasesEl = document.getElementById(`subfases-${pi}`);

        const unlocked = pi === 0 || isPhaseDone(pi - 1);
        card.classList.toggle('locked', !unlocked);

        const phaseDone = isPhaseDone(pi);
        const phasePerfect = isPhasePerfect(pi);
        statusEl.textContent = phasePerfect ? '⭐' : phaseDone ? '✅' : '';

        subfasesEl.innerHTML = '';
        phase.subfases.forEach((sf, si) => {
            const btn = document.createElement('button');
            btn.className = 'subfase-btn';

            const prevDone = si === 0 || isSubfaseDone(phase.subfases[si - 1].id);
            const sfDone = isSubfaseDone(sf.id);
            const sfPerfect = state.progress[sf.id] === 'perfect';

            if (!unlocked || (!prevDone && si > 0)) btn.disabled = true;
            if (sfPerfect) btn.classList.add('perfect');
            else if (sfDone) btn.classList.add('completed');

            btn.innerHTML = `
        <div class="subfase-num">Nível ${sf.level}</div>
        <div class="subfase-name">${sf.name}</div>
      `;
            btn.onclick = () => startSubfase(pi, si);
            subfasesEl.appendChild(btn);
        });
    });
}

function isSubfaseDone(sfId) {
    return state.progress[sfId] === 'completed' || state.progress[sfId] === 'perfect';
}

function isPhaseDone(pi) {
    return PHASES[pi].subfases.every(sf => isSubfaseDone(sf.id));
}

function isPhasePerfect(pi) {
    return PHASES[pi].subfases.every(sf => state.progress[sf.id] === 'perfect');
}

function isGameComplete() {
    return PHASES.every((_, i) => isPhaseDone(i));
}

function startSubfase(phaseIdx, subfaseIdx) {
    const phase = PHASES[phaseIdx];
    const subfase = phase.subfases[subfaseIdx];

    session = {
        phaseIdx,
        subfaseIdx,
        questions: shuffle([...subfase.questions]),
        qIndex: 0,
        correct: 0,
        answered: false,
    };

    document.getElementById('quiz-phase-label').textContent =
        `${phase.name} — ${subfase.name}`;
    document.getElementById('quiz-score').textContent = state.score;
    renderLives('quiz-lives-display');

    showScreen('screen-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = session.questions[session.qIndex];
    if (!q) return;

    session.answered = false;

    const total = session.questions.length;
    const pct = (session.qIndex / total) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent =
        `${session.qIndex + 1} / ${total}`;

    const card = document.getElementById('question-card');
    card.classList.remove('flip-in');
    void card.offsetWidth; // reflow
    card.classList.add('flip-in');

    document.getElementById('q-topic').textContent = q.topic || '';
    document.getElementById('q-text').textContent = q.text || '';
    document.getElementById('q-formula').textContent = q.formula || '';

    const grid = document.getElementById('options-grid');
    const letters = ['A', 'B', 'C', 'D'];
    const opts = shuffle([...q.options]);
    grid.innerHTML = '';

    opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[i]}.</span>${opt.text}`;
        btn.onclick = () => selectOption(btn, opt, opts);
        grid.appendChild(btn);
    });

    const fb = document.getElementById('feedback-panel');
    fb.className = 'feedback-panel hidden';
}

function selectOption(btn, chosen, allOpts) {
    if (session.answered) return;
    session.answered = true;

    const grid = document.getElementById('options-grid');
    grid.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

    const isCorrect = chosen.correct;

    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
        grid.querySelectorAll('.option-btn').forEach(b => {
            const text = b.textContent.slice(2).trim();
            const match = allOpts.find(o => o.text === text);
            if (match && match.correct) b.classList.add('correct');
        });
    }

    if (isCorrect) {
        session.correct++;
        const sfId = PHASES[session.phaseIdx].subfases[session.subfaseIdx].id;
        const alreadyDone = isSubfaseDone(sfId);
        if (!alreadyDone) {
            const pts = POINTS_CORRECT;
            state.score += pts;
            document.getElementById('quiz-score').textContent = state.score;
            document.getElementById('hdr-score').textContent = state.score;
            showScorePop(btn, `+${pts}`);
        }
    } else {
        loseLife();
    }

    showFeedback(isCorrect, session.questions[session.qIndex]);
}

function showFeedback(isCorrect, q) {
    const panel = document.getElementById('feedback-panel');
    panel.className = `feedback-panel ${isCorrect ? 'correct-panel' : 'wrong-panel'}`;

    document.getElementById('feedback-icon').textContent = isCorrect ? '🎉' : '💡';
    document.getElementById('feedback-title').textContent = isCorrect
        ? getRandomPraise()
        : 'Quase lá!';
    document.getElementById('feedback-msg').innerHTML = q.explanation || '';

    const isLast = session.qIndex >= session.questions.length - 1;
    document.getElementById('btn-next-label').textContent = isLast ? 'VER RESULTADO' : 'PRÓXIMA';
}

function nextQuestion() {
    session.qIndex++;
    if (session.qIndex >= session.questions.length) {
        endSubfase();
    } else {
        renderQuestion();
    }
}

function renderLives(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < MAX_LIVES; i++) {
        const span = document.createElement('span');
        span.className = 'life-heart' + (i < state.lives ? '' : ' lost');
        span.textContent = '❤️';
        el.appendChild(span);
    }
}

function loseLife() {
    state.lives = Math.max(0, state.lives - 1);
    saveState();
    renderLives('quiz-lives-display');
    renderLives('lives-display');

    const hearts = document.querySelectorAll('#quiz-lives-display .life-heart');
    const target = hearts[state.lives];
    if (target) {
        target.classList.add('shake');
        setTimeout(() => target.classList.remove('shake'), 500);
    }

    if (state.lives <= 0) {
        setTimeout(() => {
            document.getElementById('go-score').textContent = state.score;
            showScreen('screen-gameover');
        }, 800);
    }
}

function endSubfase() {
    const total = session.questions.length;
    const correct = session.correct;
    const isPerfect = correct === total;
    const sfId = PHASES[session.phaseIdx].subfases[session.subfaseIdx].id;
    const prevStatus = state.progress[sfId];
    const alreadyDone = isSubfaseDone(sfId);

    let bonusDesc = '';
    if (!alreadyDone) {

        const lifeBonus = state.lives * POINTS_PER_LIFE;
        state.score += lifeBonus;
        if (isPerfect) state.score += POINTS_PERFECT;
        bonusDesc = isPerfect
            ? `Bônus perfeição: +${POINTS_PERFECT} pts • Bônus vidas: +${lifeBonus} pts`
            : `Bônus vidas: +${lifeBonus} pts`;
    } else {
        bonusDesc = 'Subfase já concluída — sem pontos extras por repetição.';
    }

    if (isPerfect) {
        state.progress[sfId] = 'perfect';
    } else if (correct > 0 && !alreadyDone) {
        state.progress[sfId] = 'completed';
    }

    saveState();

    document.getElementById('res-correct').textContent = `${correct}/${total}`;
    document.getElementById('res-score').textContent = state.score;
    document.getElementById('res-lives').textContent = '❤️'.repeat(state.lives) || '—';

    if (isPerfect) {
        document.getElementById('result-trophy').textContent = '⭐';
        document.getElementById('result-title').textContent = 'PERFEITO!';
        document.getElementById('result-sub').textContent = bonusDesc;
    } else if (correct >= Math.ceil(total / 2)) {
        document.getElementById('result-trophy').textContent = '🏅';
        document.getElementById('result-title').textContent = 'BOM TRABALHO!';
        document.getElementById('result-sub').textContent = bonusDesc;
    } else {
        document.getElementById('result-trophy').textContent = '📚';
        document.getElementById('result-title').textContent = 'CONTINUE TENTANDO!';
        document.getElementById('result-sub').textContent = bonusDesc;
    }

    document.getElementById('res-btn-label').textContent =
        isGameComplete() ? 'VER VITÓRIA 🎓' : 'VOLTAR AO MAPA';

    const retryBtn = document.querySelector('#screen-result .btn-ghost');
    if (retryBtn) retryBtn.style.display = alreadyDone ? 'none' : '';

    showScreen('screen-result');
}

function continueAfterResult() {
    if (isGameComplete()) {
        showWinScreen();
    } else {
        renderMap();
        showScreen('screen-map');
    }
}

function retrySubfase() {
    startSubfase(session.phaseIdx, session.subfaseIdx);
}

function restartGame() {
    clearSave();
    state = { playerName: '', lives: MAX_LIVES, score: 0, progress: {} };
    document.getElementById('player-name').value = '';
    showScreen('screen-home');
}

function showWinScreen() {
    document.getElementById('win-score').textContent = state.score;
    saveToRanking(state.playerName, state.score);
    clearSave();
    spawnConfetti();
    showScreen('screen-win');
}

function saveAndGoRanking() {
    renderRanking();
    showScreen('screen-ranking');
}

function spawnConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#00f5c4', '#ff6b6b', '#ffd93d', '#a78bfa', '#fff', '#4ade80'];
    for (let i = 0; i < 80; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${10 + Math.random() * 14}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${2 + Math.random() * 3}s;
      animation-delay: ${Math.random() * 1.5}s;
    `;
        container.appendChild(el);
    }
}

function renderRanking() {
    const list = getRanking();
    const el = document.getElementById('ranking-list');
    const medals = ['🥇', '🥈', '🥉'];

    if (list.length === 0) {
        el.innerHTML = '<div class="rank-empty">Nenhuma pontuação ainda.<br>Complete o jogo para entrar no ranking!</div>';
        return;
    }

    el.innerHTML = list.map((entry, i) => `
    <div class="rank-item">
      <div class="rank-pos">${medals[i] || (i + 1)}</div>
      <div class="rank-name">${escapeHtml(entry.name)}</div>
      <div class="rank-score">${entry.score} pts</div>
      <div class="rank-date">${entry.date}</div>
    </div>
  `).join('');
}

function confirmHome() {
    openModal('Voltar ao menu inicial?', () => {
        showScreen('screen-home');
    });
}

function confirmExit() {
    openModal('Sair da rodada? O progresso desta subfase não será salvo.', () => {
        renderMap();
        showScreen('screen-map');
    });
}

function openModal(msg, onConfirm) {
    document.getElementById('modal-msg').textContent = msg;
    document.getElementById('modal-confirm').onclick = () => {
        closeModal();
        onConfirm();
    };
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getRandomPraise() {
    const praises = [
        'Correto! 🔥', 'Excelente!', 'Muito bem!', 'Arrasou!',
        'Show de bola!', 'Perfeito!', 'Isso mesmo!', 'Genial!',
    ];
    return praises[Math.floor(Math.random() * praises.length)];
}

function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.add('hidden'), 2200);
}

function showScorePop(anchorEl, text) {
    const rect = anchorEl.getBoundingClientRect();
    const pop = document.createElement('div');
    pop.className = 'score-pop';
    pop.textContent = text;
    pop.style.left = `${rect.left + rect.width / 2 - 20}px`;
    pop.style.top = `${rect.top + window.scrollY - 10}px`;
    document.body.appendChild(pop);
    pop.addEventListener('animationend', () => pop.remove());
}

(function init() {
    loadState();
    if (state.playerName) {
        document.getElementById('player-name').value = state.playerName;
    }
    document.getElementById('player-name').addEventListener('keydown', e => {
        if (e.key === 'Enter') startGame();
    });
    renderRanking();
})();