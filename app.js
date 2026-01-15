// Main application logic for Quant UX Academy

// State management
let currentLesson = null;
let currentLessonIndex = 0;
let currentCategory = '';
let progress = loadProgress();

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    renderLessons();
    renderPracticeExercises();
    renderChallenges();
    initializeChallenges(); // New interactive challenges
    updateProgressDisplay();
    setupModalHandlers();
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);

            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Render lessons
function renderLessons() {
    const categories = ['surveys', 'statistics', 'programming', 'researchDesign'];

    categories.forEach(category => {
        const container = document.getElementById(`${category}Lessons`);
        const lessons = curriculum[category];

        lessons.forEach((lesson, index) => {
            const card = createLessonCard(lesson, category, index);
            container.appendChild(card);
        });
    });
}

function createLessonCard(lesson, category, index) {
    const card = document.createElement('div');
    card.className = 'lesson-card';

    // Add completed class if lesson is completed
    if (progress.completedLessons.includes(lesson.id)) {
        card.classList.add('completed');
    }

    card.innerHTML = `
        <h4>${lesson.title}</h4>
        <p>${lesson.description}</p>
        <div class="duration">⏱️ ${lesson.duration}</div>
    `;

    card.addEventListener('click', () => {
        openLesson(lesson, category, index);
    });

    return card;
}

function openLesson(lesson, category, index) {
    currentLesson = lesson;
    currentCategory = category;
    currentLessonIndex = index;

    const modal = document.getElementById('lessonModal');
    const content = document.getElementById('lessonContent');

    content.innerHTML = lesson.content;

    // Add interactive exercises if they exist
    if (lesson.exercises) {
        const exerciseSection = document.createElement('div');
        exerciseSection.innerHTML = '<h3>Check Your Understanding</h3>';

        lesson.exercises.forEach((exercise, idx) => {
            const exerciseEl = createExerciseElement(exercise, idx);
            exerciseSection.appendChild(exerciseEl);
        });

        content.appendChild(exerciseSection);
    }

    modal.classList.add('active');

    // Update navigation button states
    updateLessonNavButtons();
}

function createExerciseElement(exercise, index) {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
        <p><strong>Question ${index + 1}:</strong> ${exercise.question}</p>
        <div class="options" data-exercise="${index}">
            ${exercise.options.map((option, i) => `
                <div class="option" data-option="${i}">
                    ${option}
                </div>
            `).join('')}
        </div>
        <div class="feedback" id="feedback-${index}"></div>
    `;

    // Add click handlers to options
    const options = div.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.addEventListener('click', () => {
            handleExerciseAnswer(exercise, i, options, index);
        });
    });

    return div;
}

function handleExerciseAnswer(exercise, selectedIndex, options, exerciseIndex) {
    const isCorrect = selectedIndex === exercise.correct;

    // Clear previous selections
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });

    // Mark selected option
    options[selectedIndex].classList.add('selected');

    // Show feedback
    const feedback = document.getElementById(`feedback-${exerciseIndex}`);
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? exercise.feedback.correct : exercise.feedback.incorrect;

    // Highlight correct/incorrect
    if (isCorrect) {
        options[selectedIndex].classList.add('correct');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[exercise.correct].classList.add('correct');
    }
}

// Modal handlers
function setupModalHandlers() {
    const modal = document.getElementById('lessonModal');
    const closeBtn = document.getElementById('closeModal');
    const completeBtn = document.getElementById('completeLesson');
    const prevBtn = document.getElementById('prevLesson');
    const nextBtn = document.getElementById('nextLesson');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    completeBtn.addEventListener('click', () => {
        completeLesson();
    });

    prevBtn.addEventListener('click', () => {
        navigateLesson(-1);
    });

    nextBtn.addEventListener('click', () => {
        navigateLesson(1);
    });
}

function updateLessonNavButtons() {
    const prevBtn = document.getElementById('prevLesson');
    const nextBtn = document.getElementById('nextLesson');

    const lessons = curriculum[currentCategory];

    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessons.length - 1;

    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
}

function navigateLesson(direction) {
    const lessons = curriculum[currentCategory];
    const newIndex = currentLessonIndex + direction;

    if (newIndex >= 0 && newIndex < lessons.length) {
        openLesson(lessons[newIndex], currentCategory, newIndex);
    }
}

function completeLesson() {
    if (!currentLesson) return;

    // Add to completed lessons
    if (!progress.completedLessons.includes(currentLesson.id)) {
        progress.completedLessons.push(currentLesson.id);
        saveProgress();
        updateProgressDisplay();

        // Update lesson card
        const cards = document.querySelectorAll('.lesson-card');
        cards.forEach(card => {
            if (card.textContent.includes(currentLesson.title)) {
                card.classList.add('completed');
            }
        });

        // Show celebration
        alert('🎉 Lesson completed! Keep up the great work!');
    }
}

// Progress management
function loadProgress() {
    const saved = localStorage.getItem('quantUxProgress');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        completedLessons: [],
        completedExercises: [],
        completedChallenges: []
    };
}

function saveProgress() {
    localStorage.setItem('quantUxProgress', JSON.stringify(progress));
}

function updateProgressDisplay() {
    // Calculate overall progress
    const totalLessons = Object.values(curriculum).flat().length;
    const completed = progress.completedLessons.length;
    const percentage = Math.round((completed / totalLessons) * 100);

    document.getElementById('overallProgress').textContent = `${percentage}% Complete (${completed}/${totalLessons} lessons)`;

    // Update track-specific progress
    Object.keys(curriculum).forEach(track => {
        const trackLessons = curriculum[track];
        const trackCompleted = trackLessons.filter(lesson =>
            progress.completedLessons.includes(lesson.id)
        ).length;
        const trackPercentage = Math.round((trackCompleted / trackLessons.length) * 100);

        const progressBar = document.querySelector(`.progress-fill[data-track="${track}"]`);
        if (progressBar) {
            progressBar.style.width = `${trackPercentage}%`;
        }
    });
}

// Practice exercises
function renderPracticeExercises() {
    const container = document.getElementById('practiceContainer');

    if (practiceExercises.length === 0) {
        container.innerHTML = '<p>Practice exercises coming soon!</p>';
        return;
    }

    practiceExercises.forEach(exercise => {
        const card = createPracticeCard(exercise);
        container.appendChild(card);
    });
}

function createPracticeCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card';

    card.innerHTML = `
        <h3>${exercise.title}</h3>
        <p>${exercise.description}</p>
    `;

    if (exercise.questions) {
        exercise.questions.forEach((q, idx) => {
            const questionEl = createExerciseElement(q, idx);
            card.appendChild(questionEl);
        });
    } else if (exercise.interactive) {
        card.innerHTML += '<p><em>Interactive exercise coming soon!</em></p>';
    }

    return card;
}

// Challenges - old static ones (kept for reference)
function renderChallenges() {
    // Challenges are now rendered by initializeChallenges() in challenges.js
    // This function is kept for backward compatibility
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lessonModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        } else if (e.key === 'ArrowLeft') {
            navigateLesson(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLesson(1);
        }
    }
});

// Service worker for offline support (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker here when ready
    });
}
