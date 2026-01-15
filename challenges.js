// Interactive challenges and games for statistical learning

const interactiveChallenges = {
    pValueDetective: {
        id: 'p-value-detective',
        title: 'P-value Detective',
        description: 'Master the art of interpreting p-values correctly',
        difficulty: 'medium',
        scenarios: [
            {
                scenario: "You test two website designs. Design B has 5% higher conversion rate than Design A. P-value = 0.03.",
                question: "What does this p-value mean?",
                options: [
                    "There's a 3% chance Design B is actually worse than Design A",
                    "Design B is definitely 5% better than Design A",
                    "If the designs were actually equal, you'd see a difference this large or larger only 3% of the time by chance",
                    "You should be 97% confident that Design B is better"
                ],
                correct: 2,
                explanation: "The p-value (0.03) tells you: if there were no real difference between designs, you'd observe a difference of 5% or more only 3% of the time due to random sampling variation. It does NOT tell you the probability that one design is better, nor does it tell you how confident to be."
            },
            {
                scenario: "You survey 10,000 users. Users who prefer dark mode have average satisfaction of 7.1, while others have 7.0. P-value = 0.001.",
                question: "What should you conclude?",
                options: [
                    "Dark mode causes higher satisfaction",
                    "This is a practically significant difference worth acting on",
                    "The difference is statistically significant but the effect size is tiny and may not matter",
                    "You've proven dark mode is important to users"
                ],
                correct: 2,
                explanation: "With 10,000 users, even a 0.1 point difference becomes statistically significant. But is a 0.1 point difference on a satisfaction scale meaningful? This is the difference between statistical and practical significance. Always consider effect size, not just p-values!"
            },
            {
                scenario: "You run an A/B test with 100 users per group. Design B shows 8% improvement, p = 0.15.",
                question: "What's the best interpretation?",
                options: [
                    "Design B doesn't work - the p-value proves it",
                    "You don't have enough evidence to conclude there's a real difference",
                    "There's an 85% chance Design B is better",
                    "Design B is definitely not 8% better"
                ],
                correct: 1,
                explanation: "P = 0.15 means you don't have enough evidence to reject the null hypothesis at the conventional 0.05 level. But this doesn't prove there's NO difference - it might just mean your sample was too small to detect the difference. You need more data or accept the uncertainty."
            },
            {
                scenario: "You test 20 different features and find one with p = 0.04. You're excited!",
                question: "Should you be?",
                options: [
                    "Yes! This feature is significantly better",
                    "Be cautious - with 20 tests, you'd expect 1 false positive even if nothing works",
                    "No, p = 0.04 is too high to be meaningful",
                    "Yes, because 0.04 < 0.05"
                ],
                correct: 1,
                explanation: "This is the multiple testing problem! With 20 tests at α = 0.05, you'd expect about 1 false positive (20 × 0.05 = 1) even if all features are truly equal. You need to adjust your significance threshold (e.g., Bonferroni correction: 0.05/20 = 0.0025) or use FDR control. Otherwise, you're likely chasing noise!"
            },
            {
                scenario: "Study 1: n=50, difference=10%, p=0.08. Study 2: n=500, difference=10%, p=0.01.",
                question: "What's going on here?",
                options: [
                    "Study 2 found a bigger effect",
                    "Study 1's methodology was flawed",
                    "Same effect size, but Study 2 had more power to detect it",
                    "The 10% difference is real in Study 2 but not Study 1"
                ],
                correct: 2,
                explanation: "Both studies found the same 10% difference! The p-value differs because Study 2 had 10x more participants, giving it more statistical power. P-values depend on both effect size AND sample size. This is why you should always report effect sizes and confidence intervals, not just p-values."
            }
        ]
    },

    confidenceIntervalGame: {
        id: 'confidence-interval-game',
        title: 'Confidence Interval Challenge',
        description: 'Test your understanding of confidence intervals and precision',
        difficulty: 'medium',
        scenarios: [
            {
                scenario: "You measure satisfaction: 7.5, 95% CI [7.2, 7.8]",
                question: "What does this CI tell you?",
                options: [
                    "There's a 95% chance the true mean is between 7.2 and 7.8",
                    "95% of users have satisfaction between 7.2 and 7.8",
                    "If you repeated this study many times, 95% of CIs would contain the true mean",
                    "You can be 95% certain that 7.5 is the correct answer"
                ],
                correct: 2,
                explanation: "The correct interpretation is about the procedure, not this specific interval. If you ran the study 100 times, about 95 of those confidence intervals would contain the true population mean. This specific interval either does or doesn't contain the true mean - we just don't know which!"
            },
            {
                scenario: "Design A: 45% conversion, 95% CI [42%, 48%]\nDesign B: 47% conversion, 95% CI [44%, 50%]",
                question: "Can you conclude B is better?",
                options: [
                    "Yes, 47% > 45%",
                    "No, the confidence intervals overlap substantially",
                    "Yes, because B's entire CI is above A's point estimate",
                    "Need to run a significance test first"
                ],
                correct: 1,
                explanation: "The CIs overlap substantially, which suggests the difference might not be statistically significant. When CIs overlap, you can't confidently claim one is better. You'd need either non-overlapping CIs or a formal hypothesis test. The overlap shows there's considerable uncertainty."
            },
            {
                scenario: "With 100 users: Satisfaction = 7.2, 95% CI [6.5, 7.9]. You want more precision.",
                question: "What should you do?",
                options: [
                    "Use a 90% CI instead of 95%",
                    "Increase sample size to 400 users",
                    "Use median instead of mean",
                    "Nothing - this is as precise as you can get"
                ],
                correct: 1,
                explanation: "To get a narrower CI (more precision), you need a larger sample. Doubling the sample size cuts the CI width in half. Using 90% instead of 95% would narrow the CI but you'd be less confident. The width is approximately proportional to 1/√n, so 4x the sample gives you 2x the precision."
            },
            {
                scenario: "Feature usage: 32% of users, 95% CI [30%, 34%]. Your goal was 35%.",
                question: "Did you hit your goal?",
                options: [
                    "Yes, 32% is close to 35%",
                    "No - the entire CI is below 35%, so you're confident you missed the goal",
                    "Maybe - need more data",
                    "Can't tell from a confidence interval"
                ],
                correct: 1,
                explanation: "Since the entire 95% CI [30%, 34%] falls below your 35% goal, you can be quite confident (>95%) that the true usage rate is below your target. This is one way CIs help with decision-making - if the entire interval is on one side of a meaningful threshold, you have your answer!"
            },
            {
                scenario: "You report: 'Average task time is 45 seconds.' Your colleague asks about precision.",
                question: "What's missing from your report?",
                options: [
                    "The median task time",
                    "A confidence interval or standard error",
                    "The p-value",
                    "Nothing - 45 seconds is complete"
                ],
                correct: 1,
                explanation: "You should ALWAYS report a measure of precision alongside your point estimate. A confidence interval shows the range of plausible values. '45 seconds, 95% CI [40, 50]' is much more informative than just '45 seconds' because it shows how certain you are about that estimate."
            }
        ]
    },

    effectSizeChallenge: {
        id: 'effect-size-challenge',
        title: 'Effect Size Master',
        description: 'Learn when differences actually matter in practice',
        difficulty: 'medium',
        scenarios: [
            {
                scenario: "Design A satisfaction: 7.0 (SD=2.0)\nDesign B satisfaction: 7.8 (SD=2.0)\nn=1000 per group, p < 0.001",
                question: "What's the Cohen's d effect size?",
                options: [
                    "d = 0.2 (small effect)",
                    "d = 0.4 (small-medium effect)",
                    "d = 0.8 (large effect)",
                    "d = 1.0 (very large effect)"
                ],
                correct: 1,
                explanation: "Cohen's d = (7.8 - 7.0) / 2.0 = 0.4. This is a small-to-medium effect. While the difference is highly statistically significant (p < 0.001) due to the large sample, the actual magnitude is moderate. This shows why you need both p-values AND effect sizes!"
            },
            {
                scenario: "A/B test: Control 20% conversion, Treatment 21% conversion (1 percentage point increase)\nn=10,000 per group, p = 0.001",
                question: "How should you describe this result to stakeholders?",
                options: [
                    "Huge win - highly significant improvement!",
                    "Statistically significant but small effect - 5% relative increase",
                    "Not significant - only 1% better",
                    "Need more data to know if it matters"
                ],
                correct: 1,
                explanation: "Be precise: it's statistically significant AND small. The absolute increase is 1 percentage point (20% → 21%), which is a 5% relative increase (1/20 = 0.05). Whether this matters depends on context - with millions of users, 1% absolute increase could be huge! Always separate statistical from practical significance."
            },
            {
                scenario: "New search algorithm: Time to find info drops from 45s (SD=15) to 40s (SD=15)\nn=200, p = 0.02",
                question: "What's the effect size and is it meaningful?",
                options: [
                    "d = 0.33, small effect - probably not worth implementing",
                    "d = 0.33, small effect - but 5 seconds is meaningful to users",
                    "d = 1.0, large effect - definitely implement",
                    "Can't determine meaning without more context"
                ],
                correct: 1,
                explanation: "Cohen's d = (45-40)/15 = 0.33, a small-to-medium effect statistically. BUT consider the user experience: 5 seconds faster on every search adds up! Effect size conventions (0.2=small, 0.5=medium, 0.8=large) are guidelines, not laws. Always interpret in context of user experience and business impact."
            },
            {
                scenario: "You correlate ease-of-use with satisfaction: r = 0.35, p < 0.001, n = 500",
                question: "How should you interpret this correlation?",
                options: [
                    "Strong relationship - ease-of-use determines satisfaction",
                    "Moderate positive relationship - ease-of-use explains ~12% of satisfaction variance",
                    "Weak correlation - basically no relationship",
                    "Perfect correlation - they measure the same thing"
                ],
                correct: 1,
                explanation: "r = 0.35 is a moderate correlation. R² = 0.35² = 0.12, meaning ease-of-use explains about 12% of variance in satisfaction. That's meaningful! But 88% of satisfaction variance comes from other factors. Also, correlation doesn't mean causation - perhaps satisfied users rate everything higher, including ease-of-use."
            },
            {
                scenario: "Feature A used by 40% of users, Feature B by 42% of users\nn=5000, p = 0.04",
                question: "Should you prioritize Feature B in your roadmap?",
                options: [
                    "Yes - it's statistically significant",
                    "No - the practical difference is tiny (2 percentage points)",
                    "Can't decide without knowing the business value",
                    "Yes - any significant result should drive decisions"
                ],
                correct: 2,
                explanation: "Statistical significance doesn't automatically mean practical importance! Yes, p=0.04 suggests a real difference. But a 2 percentage point difference in usage might be trivial or huge depending on: (1) What do these features enable? (2) What's the cost to improve each? (3) What's the strategic priority? Always combine statistical evidence with business context."
            }
        ]
    },

    statisticalTestSelector: {
        id: 'test-selector',
        title: 'Statistical Test Selector',
        description: 'Choose the right statistical test for different scenarios',
        difficulty: 'hard',
        scenarios: [
            {
                scenario: "You want to compare average satisfaction scores between users in USA, UK, Canada, and Australia.",
                question: "Which test should you use?",
                options: [
                    "Four separate t-tests comparing each pair",
                    "One-way ANOVA",
                    "Chi-square test",
                    "Linear regression"
                ],
                correct: 1,
                explanation: "Use one-way ANOVA to compare means across 3+ groups. Don't do multiple t-tests - that inflates your false positive rate (multiple testing problem). If ANOVA shows a significant difference, follow up with post-hoc tests (e.g., Tukey's HSD) to see which specific pairs differ."
            },
            {
                scenario: "You want to know if conversion rate differs between mobile (15%) and desktop (18%) users. You have 1000 users per platform.",
                question: "Which test should you use?",
                options: [
                    "T-test",
                    "Two-proportion z-test",
                    "ANOVA",
                    "Correlation"
                ],
                correct: 1,
                explanation: "Use a two-proportion z-test (or chi-square test, which gives the same result for 2x2 tables). You're comparing proportions (percentages), not means. A t-test is for comparing means of continuous variables. With n=1000 per group, you have plenty of power to detect this 3 percentage point difference."
            },
            {
                scenario: "You want to understand which factors (ease-of-use, features, speed, design) best predict overall satisfaction.",
                question: "Which analysis should you use?",
                options: [
                    "Multiple t-tests",
                    "Multiple regression",
                    "Chi-square test",
                    "ANOVA"
                ],
                correct: 1,
                explanation: "Multiple regression is perfect for this! It lets you see how much each predictor (ease, features, speed, design) contributes to satisfaction while controlling for the others. The coefficients show the relative importance of each factor. This is key driver analysis - a core skill for quant UXRs."
            },
            {
                scenario: "You measure task completion time before training (mean=60s) and after training (mean=45s) for the same 30 users.",
                question: "Which test should you use?",
                options: [
                    "Independent samples t-test",
                    "Paired samples t-test",
                    "ANOVA",
                    "Chi-square"
                ],
                correct: 1,
                explanation: "Use a paired t-test because you measured the SAME users twice (before and after). Each user serves as their own control, which is more powerful than comparing independent groups. An independent samples t-test would be wrong here - it assumes different people in each group."
            },
            {
                scenario: "You want to know if there's a relationship between age (continuous) and likelihood to recommend (0-10 scale).",
                question: "Which analysis should you use?",
                options: [
                    "T-test",
                    "Pearson correlation or linear regression",
                    "Chi-square test",
                    "ANOVA"
                ],
                correct: 1,
                explanation: "Use Pearson correlation or linear regression to examine the relationship between two continuous variables. Correlation (r) shows the strength and direction of the relationship. Regression gives you a coefficient showing how much NPS changes per year of age. Both are appropriate here."
            },
            {
                scenario: "You want to test if feature usage (yes/no) differs by user segment (free, basic, premium).",
                question: "Which test should you use?",
                options: [
                    "T-test",
                    "ANOVA",
                    "Chi-square test",
                    "Correlation"
                ],
                correct: 2,
                explanation: "Chi-square test of independence! You have two categorical variables (usage: yes/no, segment: free/basic/premium) and want to test if they're related. This creates a 2x3 contingency table. Chi-square tells you if the pattern of usage differs across segments more than you'd expect by chance."
            },
            {
                scenario: "You're testing 3 different onboarding flows and measuring binary outcome: activated within 7 days (yes/no).",
                question: "Which test should you use?",
                options: [
                    "ANOVA",
                    "Three separate chi-square tests",
                    "Chi-square test or logistic regression",
                    "Multiple t-tests"
                ],
                correct: 2,
                explanation: "Chi-square test works for comparing proportions across 3+ groups. Alternatively, logistic regression is even better - it gives you the magnitude of differences between groups and can handle covariates. Don't use ANOVA (that's for continuous outcomes) or multiple pairwise tests (multiple testing problem)."
            },
            {
                scenario: "You want to predict user retention (stay/leave) based on usage metrics, demographics, and satisfaction scores.",
                question: "Which analysis should you use?",
                options: [
                    "Linear regression",
                    "Logistic regression",
                    "ANOVA",
                    "Multiple t-tests"
                ],
                correct: 1,
                explanation: "Logistic regression! Your outcome is binary (stay/leave), so you need logistic not linear regression. It predicts the probability of retention based on your predictors and gives you odds ratios showing how each factor affects retention. This is a critical skill for understanding what drives user behavior."
            }
        ]
    },

    sampleSizeChallenge: {
        id: 'sample-size-challenge',
        title: 'Sample Size Wizard',
        description: 'Calculate and understand sample size requirements',
        difficulty: 'hard',
        scenarios: [
            {
                scenario: "You want to compare two designs. Current conversion is 10%. You want to detect a 2 percentage point increase (to 12%) with 80% power, α=0.05.",
                question: "Approximately how many users do you need per group?",
                options: [
                    "100 per group",
                    "400 per group",
                    "1,000 per group",
                    "3,850 per group"
                ],
                correct: 3,
                explanation: "You need about 3,850 users per group (7,700 total)! Detecting a 2 percentage point increase from a 10% baseline requires a large sample. Many people underestimate required sample sizes. Use a power calculator to verify. Key insight: smaller effect sizes need much larger samples."
            },
            {
                scenario: "Same scenario as above, but you'll accept 3 percentage point increase as minimum (10% → 13%).",
                question: "How does this change your sample size need?",
                options: [
                    "Need more users (larger effect requires more data)",
                    "Need fewer users (about 1,700 per group)",
                    "Same sample size",
                    "Can't determine without more info"
                ],
                correct: 1,
                explanation: "You need fewer users - about 1,700 per group! Larger effect sizes are easier to detect, so you need less data. This is the minimum detectable effect (MDE) concept. If you're willing to only detect bigger effects, you can run smaller studies. Trade-off: you might miss smaller but still valuable effects."
            },
            {
                scenario: "You're surveying users to estimate satisfaction (scale 1-10). You want ±0.3 margin of error at 95% confidence. Historical SD = 2.0.",
                question: "Approximately how many users do you need?",
                options: [
                    "100 users",
                    "170 users",
                    "400 users",
                    "700 users"
                ],
                correct: 1,
                explanation: "You need about 170 users. Formula: n = (1.96 × SD / margin)² = (1.96 × 2.0 / 0.3)² ≈ 170. The margin of error decreases with √n, so to cut it in half you'd need 4x the sample. To cut it by 1/3 (from 0.3 to 0.2), you'd need 2.25x more users (about 380)."
            },
            {
                scenario: "You want to compare satisfaction across 4 countries with 90% power. How should you think about sample size?",
                question: "What's the key consideration?",
                options: [
                    "Same sample size formula as two-group comparison",
                    "Need larger samples because you're doing multiple comparisons",
                    "Need smaller samples because ANOVA is more efficient",
                    "Can't do power analysis with more than 2 groups"
                ],
                correct: 1,
                explanation: "With 4 groups, you need more users than a simple two-group comparison because: (1) you need enough per group for stable estimates, and (2) multiple comparisons reduce power. Aim for at least 100-200 per group as a starting point, then use specialized ANOVA power calculators to refine based on your expected effect size."
            },
            {
                scenario: "You ran a study with 200 users per group and found a 3% difference (p=0.08). Your manager wants statistical significance.",
                question: "What should you do?",
                options: [
                    "Run it again with same sample size until you get p<0.05",
                    "Increase sample to ~600 per group to have 80% power for this effect",
                    "Change the significance threshold to 0.10",
                    "The result is fine - report the effect size and CI"
                ],
                correct: 3,
                explanation: "The best answer is to report the effect size, confidence interval, and accept the uncertainty. P=0.08 doesn't mean 'no effect' - it means you don't have strong evidence. Options: (1) collect more data if the decision is important enough, (2) accept the uncertainty and make a decision based on effect size and business judgment, or (3) both. Never run studies repeatedly until you get p<0.05 (p-hacking)!"
            },
            {
                scenario: "You want to detect a 'small' effect (d=0.3) with 80% power. Approximately how many users per group?",
                question: "What's your sample size need?",
                options: [
                    "50 per group",
                    "175 per group",
                    "350 per group",
                    "700 per group"
                ],
                correct: 2,
                explanation: "You need about 350 per group for Cohen's d=0.3 with 80% power at α=0.05. Small effects require large samples! This is why running underpowered studies is common - people don't realize how many users they need. With only 50 per group, you'd have maybe 20% power - you'd miss the effect 80% of the time."
            }
        ]
    }
};

// Challenge state
let currentChallenge = null;
let currentScenarioIndex = 0;
let challengeScore = 0;
let challengeAnswers = [];

// Initialize challenges
function initializeChallenges() {
    const container = document.getElementById('challengesContainer');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Create challenge cards
    Object.values(interactiveChallenges).forEach(challenge => {
        const card = createInteractiveChallengeCard(challenge);
        container.appendChild(card);
    });
}

function createInteractiveChallengeCard(challenge) {
    const card = document.createElement('div');
    card.className = 'challenge-card';

    const difficultyColors = {
        'easy': '#10b981',
        'medium': '#f59e0b',
        'hard': '#ef4444'
    };

    card.innerHTML = `
        <h3>${challenge.title}</h3>
        <p>${challenge.description}</p>
        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem;">
            <span style="padding: 0.25rem 0.75rem; background: ${difficultyColors[challenge.difficulty]}; color: white; border-radius: 1rem; font-size: 0.85rem;">
                ${challenge.difficulty.toUpperCase()}
            </span>
            <span style="color: var(--text-light);">${challenge.scenarios.length} scenarios</span>
        </div>
        <button class="btn btn-primary" style="margin-top: 1rem;">
            Start Challenge
        </button>
    `;

    const button = card.querySelector('button');
    button.addEventListener('click', () => {
        startChallenge(challenge);
    });

    return card;
}

function startChallenge(challenge) {
    currentChallenge = challenge;
    currentScenarioIndex = 0;
    challengeScore = 0;
    challengeAnswers = [];

    showChallengeModal();
    displayScenario();
}

function showChallengeModal() {
    const modal = document.getElementById('lessonModal');
    modal.classList.add('active');

    // Update modal buttons
    document.getElementById('prevLesson').style.display = 'none';
    document.getElementById('nextLesson').style.display = 'none';
    document.getElementById('completeLesson').style.display = 'none';
}

function displayScenario() {
    const scenario = currentChallenge.scenarios[currentScenarioIndex];
    const content = document.getElementById('lessonContent');

    content.innerHTML = `
        <div class="challenge-header">
            <h2>${currentChallenge.title}</h2>
            <div style="display: flex; gap: 2rem; margin: 1rem 0; padding: 1rem; background: var(--bg); border-radius: 0.5rem;">
                <div>
                    <strong>Progress:</strong> ${currentScenarioIndex + 1} / ${currentChallenge.scenarios.length}
                </div>
                <div>
                    <strong>Score:</strong> ${challengeScore} / ${currentScenarioIndex}
                </div>
            </div>
        </div>

        <div class="scenario-content" style="background: var(--surface); padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid var(--primary); margin: 1.5rem 0;">
            <h3>Scenario:</h3>
            <p style="white-space: pre-line; font-size: 1.05rem; line-height: 1.8;">${scenario.scenario}</p>
        </div>

        <div class="question-section">
            <h3>${scenario.question}</h3>
            <div class="options challenge-options" style="margin-top: 1rem;">
                ${scenario.options.map((option, i) => `
                    <div class="option challenge-option" data-option="${i}">
                        <span style="font-weight: bold; margin-right: 0.5rem;">${String.fromCharCode(65 + i)}.</span>
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>

        <div id="challengeFeedback" class="feedback" style="margin-top: 2rem;"></div>

        <div class="challenge-actions" style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button id="submitAnswer" class="btn btn-primary">Submit Answer</button>
            <button id="nextScenario" class="btn btn-secondary" style="display: none;">Next Scenario</button>
            <button id="finishChallenge" class="btn btn-primary" style="display: none;">See Results</button>
        </div>
    `;

    // Add click handlers
    const options = content.querySelectorAll('.challenge-option');
    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    document.getElementById('submitAnswer').addEventListener('click', () => {
        submitChallengeAnswer(scenario);
    });
}

function submitChallengeAnswer(scenario) {
    const selectedOption = document.querySelector('.challenge-option.selected');
    if (!selectedOption) {
        alert('Please select an answer first!');
        return;
    }

    const selectedIndex = parseInt(selectedOption.dataset.option);
    const isCorrect = selectedIndex === scenario.correct;

    if (isCorrect) {
        challengeScore++;
    }

    challengeAnswers.push({
        scenario: scenario.question,
        selected: selectedIndex,
        correct: scenario.correct,
        isCorrect: isCorrect
    });

    // Show feedback
    const feedback = document.getElementById('challengeFeedback');
    const options = document.querySelectorAll('.challenge-option');

    options.forEach(opt => opt.style.pointerEvents = 'none');

    if (isCorrect) {
        selectedOption.classList.add('correct');
        feedback.className = 'feedback show correct';
        feedback.innerHTML = `
            <strong>✓ Correct!</strong><br><br>
            ${scenario.explanation}
        `;
    } else {
        selectedOption.classList.add('incorrect');
        options[scenario.correct].classList.add('correct');
        feedback.className = 'feedback show incorrect';
        feedback.innerHTML = `
            <strong>✗ Incorrect</strong><br><br>
            ${scenario.explanation}
        `;
    }

    // Show navigation buttons
    document.getElementById('submitAnswer').style.display = 'none';

    if (currentScenarioIndex < currentChallenge.scenarios.length - 1) {
        const nextBtn = document.getElementById('nextScenario');
        nextBtn.style.display = 'block';
        nextBtn.onclick = () => {
            currentScenarioIndex++;
            displayScenario();
        };
    } else {
        const finishBtn = document.getElementById('finishChallenge');
        finishBtn.style.display = 'block';
        finishBtn.onclick = showChallengeResults;
    }
}

function showChallengeResults() {
    const content = document.getElementById('lessonContent');
    const percentage = Math.round((challengeScore / currentChallenge.scenarios.length) * 100);

    let message = '';
    let emoji = '';

    if (percentage >= 90) {
        message = 'Outstanding! You have mastered this concept!';
        emoji = '🏆';
    } else if (percentage >= 70) {
        message = 'Great job! You have a solid understanding!';
        emoji = '🎉';
    } else if (percentage >= 50) {
        message = 'Good effort! Review the explanations and try again.';
        emoji = '👍';
    } else {
        message = 'Keep learning! Review the related lessons and try again.';
        emoji = '📚';
    }

    content.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
            <h2>${currentChallenge.title} - Results</h2>
            <div style="font-size: 3rem; font-weight: bold; color: var(--primary); margin: 2rem 0;">
                ${challengeScore} / ${currentChallenge.scenarios.length}
            </div>
            <div style="font-size: 1.5rem; color: var(--text-light); margin-bottom: 2rem;">
                ${percentage}% Correct
            </div>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">${message}</p>

            <div class="progress-bar" style="height: 20px; margin: 2rem auto; max-width: 400px;">
                <div class="progress-fill" style="width: ${percentage}%;"></div>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="btn btn-primary" onclick="startChallenge(currentChallenge)">
                    Try Again
                </button>
                <button class="btn btn-secondary" onclick="document.getElementById('lessonModal').classList.remove('active')">
                    Close
                </button>
            </div>

            <div style="text-align: left; margin-top: 3rem; padding: 2rem; background: var(--bg); border-radius: 0.5rem;">
                <h3>Review Your Answers</h3>
                ${challengeAnswers.map((answer, i) => `
                    <div style="padding: 1rem; margin: 1rem 0; border-left: 4px solid ${answer.isCorrect ? 'var(--success)' : 'var(--danger)'}; background: var(--surface);">
                        <strong>Question ${i + 1}:</strong> ${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
