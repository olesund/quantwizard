// Comprehensive curriculum for quantitative UX research training

const curriculum = {
    surveys: [
        {
            id: 'survey-1',
            title: 'Introduction to Survey Design',
            duration: '15 min',
            description: 'Learn the fundamentals of designing effective surveys',
            content: `
                <h2>Introduction to Survey Design</h2>

                <h3>What is Survey Research?</h3>
                <p>Survey research is a systematic method of gathering information from a sample of individuals to understand opinions, behaviors, attitudes, or characteristics of a population. In UX research, surveys help us understand user needs at scale.</p>

                <h3>When to Use Surveys</h3>
                <ul>
                    <li><strong>Generalize findings</strong> - Validate qualitative insights across larger populations</li>
                    <li><strong>Measure attitudes</strong> - Track user satisfaction, preferences, or perceptions</li>
                    <li><strong>Compare segments</strong> - Understand differences between user groups</li>
                    <li><strong>Quantify behaviors</strong> - Measure frequency or patterns of actions</li>
                </ul>

                <div class="key-point">
                    <strong>Key Point:</strong> Surveys are most powerful when you know what questions to ask. Use qualitative research first to discover the right questions.
                </div>

                <h3>Survey Design Principles</h3>
                <ol>
                    <li><strong>Clear objectives</strong> - Know what you're trying to learn</li>
                    <li><strong>Target audience</strong> - Define who you need to survey</li>
                    <li><strong>Keep it short</strong> - Respect respondent time (5-10 minutes ideal)</li>
                    <li><strong>Logical flow</strong> - Start broad, then narrow; group related questions</li>
                    <li><strong>Avoid bias</strong> - Use neutral language and balanced scales</li>
                </ol>

                <div class="example">
                    <strong>Example:</strong> Instead of asking "Don't you think our new feature is useful?", ask "How useful do you find the new feature?" with a balanced scale from "Not at all useful" to "Extremely useful".
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://carljpearson.com/what-does-a-quantitative-ux-researcher-do/" target="_blank">What does a quantitative UX researcher do? - Carl Pearson</a>
                    <a href="https://www.nngroup.com/articles/qualitative-surveys/" target="_blank">Qualitative Surveys in UX Research - Nielsen Norman Group</a>
                </div>
            `,
            exercises: [
                {
                    question: 'When is the best time to use a survey in your research process?',
                    options: [
                        'At the very beginning to discover user needs',
                        'After qualitative research to validate findings at scale',
                        'Instead of any other research method',
                        'Only when you have no other options'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! Surveys work best after qualitative research has helped you understand what questions to ask.',
                        incorrect: 'Not quite. Surveys are most effective after qualitative research has identified the key questions to validate at scale.'
                    }
                }
            ]
        },
        {
            id: 'survey-2',
            title: 'Writing Great Survey Questions',
            duration: '20 min',
            description: 'Master the art of crafting clear, unbiased survey questions',
            content: `
                <h2>Writing Great Survey Questions</h2>

                <h3>Types of Survey Questions</h3>
                <p><strong>Multiple Choice</strong> - Respondents select from predefined options</p>
                <ul>
                    <li>Best for: categorical data, easy analysis</li>
                    <li>Watch out for: missing options, overlap between choices</li>
                </ul>

                <p><strong>Likert Scales</strong> - Agreement or frequency on a 5 or 7-point scale</p>
                <ul>
                    <li>Best for: attitudes, opinions, satisfaction</li>
                    <li>Watch out for: acquiescence bias, unclear labels</li>
                </ul>

                <p><strong>Open-Ended</strong> - Free text responses</p>
                <ul>
                    <li>Best for: exploratory insights, unexpected feedback</li>
                    <li>Watch out for: time burden, difficult analysis at scale</li>
                </ul>

                <h3>Question Writing Rules</h3>

                <div class="key-point">
                    <strong>Rule #1: Use Simple Language</strong><br>
                    Bad: "How would you characterize your utilization of our platform?"<br>
                    Good: "How often do you use our platform?"
                </div>

                <div class="key-point">
                    <strong>Rule #2: Ask One Thing at a Time</strong><br>
                    Bad: "Is our product easy to use and valuable?"<br>
                    Good: "Is our product easy to use?" + "Is our product valuable?" (separate questions)
                </div>

                <div class="key-point">
                    <strong>Rule #3: Avoid Leading Questions</strong><br>
                    Bad: "How much do you love our amazing new feature?"<br>
                    Good: "What is your opinion of our new feature?"
                </div>

                <div class="key-point">
                    <strong>Rule #4: Provide Balanced Response Options</strong><br>
                    Bad: Excellent, Good, Fair, Poor<br>
                    Good: Strongly Agree, Agree, Neither, Disagree, Strongly Disagree
                </div>

                <div class="key-point">
                    <strong>Rule #5: Include "Prefer not to answer" When Appropriate</strong><br>
                    For sensitive questions (income, demographics), always give an opt-out.
                </div>

                <h3>Scale Best Practices</h3>
                <p><strong>5-point vs 7-point scales:</strong> Research shows 5-point scales work well for most purposes. Use 7-point when you need more granularity and have a sophisticated audience.</p>

                <p><strong>Number of scale points:</strong> Research suggests using an odd number (5 or 7) to provide a neutral midpoint, unless you specifically want to force a choice.</p>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/survey-questions/" target="_blank">10 Rules for Better Survey Questions - MeasuringU</a>
                    <a href="https://www.surveygizmo.com/resources/blog/survey-question-types/" target="_blank">Survey Question Types - SurveyGizmo</a>
                </div>
            `,
            exercises: [
                {
                    question: 'Which question is written correctly?',
                    options: [
                        'How easy and valuable is our product?',
                        'Don\'t you think our product is difficult to use?',
                        'How easy is our product to use?',
                        'How would you characterize your utilization patterns with our sophisticated platform?'
                    ],
                    correct: 2,
                    feedback: {
                        correct: 'Correct! This question is simple, clear, neutral, and asks only one thing.',
                        incorrect: 'Look for a question that is simple, clear, neutral, and asks only one thing at a time.'
                    }
                }
            ]
        },
        {
            id: 'survey-3',
            title: 'Sampling & Representativeness',
            duration: '20 min',
            description: 'Understand sampling methods and how to get representative data',
            content: `
                <h2>Sampling & Representativeness</h2>

                <h3>Why Sampling Matters</h3>
                <p>You rarely can survey your entire population, so you need a sample. The goal is to select a sample that accurately represents your population of interest.</p>

                <div class="key-point">
                    <strong>Key Concept:</strong> A representative sample allows you to make valid inferences about your entire population based on a subset of users.
                </div>

                <h3>Common Sampling Methods</h3>

                <p><strong>1. Simple Random Sampling</strong></p>
                <ul>
                    <li>Every member has equal chance of selection</li>
                    <li>Best for: homogeneous populations</li>
                    <li>Tool: random number generators, randomization features in survey platforms</li>
                </ul>

                <p><strong>2. Stratified Sampling</strong></p>
                <ul>
                    <li>Divide population into subgroups (strata), then randomly sample from each</li>
                    <li>Best for: ensuring representation of key segments</li>
                    <li>Example: Sample equally from iOS and Android users if that split matters</li>
                </ul>

                <p><strong>3. Convenience Sampling</strong></p>
                <ul>
                    <li>Survey whoever is easiest to reach</li>
                    <li>Fast and cheap, but potentially biased</li>
                    <li>Use when: exploratory research, budget/time constraints</li>
                </ul>

                <p><strong>4. Intercept Sampling</strong></p>
                <ul>
                    <li>Survey users at a specific point in their journey</li>
                    <li>Example: Pop-up survey after completing a task</li>
                    <li>Best for: in-the-moment feedback about specific experiences</li>
                </ul>

                <h3>Sample Size Considerations</h3>
                <p>How many responses do you need? It depends on:</p>
                <ul>
                    <li><strong>Population size</strong> - Smaller populations need fewer responses</li>
                    <li><strong>Desired precision</strong> - Tighter margins require larger samples</li>
                    <li><strong>Confidence level</strong> - 95% is standard; 90% or 99% sometimes used</li>
                    <li><strong>Expected variance</strong> - More diverse populations need larger samples</li>
                    <li><strong>Subgroup analysis</strong> - Need enough responses per segment</li>
                </ul>

                <div class="example">
                    <strong>Rule of Thumb:</strong> For most UX surveys with populations over 10,000, aim for 300-400 responses for 5% margin of error at 95% confidence. For subgroup comparisons, target 100+ per group.
                </div>

                <h3>Non-Response Bias</h3>
                <p>Not everyone completes your survey. Those who do may differ systematically from those who don't.</p>

                <p><strong>Mitigation strategies:</strong></p>
                <ul>
                    <li>Keep surveys short (under 10 minutes)</li>
                    <li>Offer incentives appropriately</li>
                    <li>Send reminders (but not too many)</li>
                    <li>Check if respondents differ from non-respondents on known characteristics</li>
                </ul>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.surveygizmo.com/resources/blog/survey-sample-size/" target="_blank">Survey Sample Size Guide - SurveyGizmo</a>
                    <a href="https://measuringu.com/sample-size/" target="_blank">Sample Size in UX Research - MeasuringU</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You want to compare attitudes between new users (10% of population) and experienced users (90% of population). What sampling method should you use?',
                    options: [
                        'Simple random sampling - let chance determine the split',
                        'Convenience sampling - survey whoever responds first',
                        'Stratified sampling - deliberately sample from both groups',
                        'Intercept sampling - survey users at random points'
                    ],
                    correct: 2,
                    feedback: {
                        correct: 'Correct! Stratified sampling ensures you get enough new users to make valid comparisons, even though they are a small part of the population.',
                        incorrect: 'With simple random sampling, you might not get enough new users (only 10% of population) for meaningful analysis. Stratified sampling ensures adequate representation of both groups.'
                    }
                }
            ]
        },
        {
            id: 'survey-4',
            title: 'Survey Weighting',
            duration: '25 min',
            description: 'Learn how to weight survey data to match population characteristics',
            content: `
                <h2>Survey Weighting</h2>

                <h3>What is Survey Weighting?</h3>
                <p>Survey weighting adjusts your data so that your sample better matches the characteristics of your target population. It corrects for over- or under-representation of certain groups.</p>

                <div class="example">
                    <strong>Example:</strong> Your user base is 60% women and 40% men, but your survey respondents are 50/50. Weighting would give more weight to women's responses and less to men's to match the true population.
                </div>

                <h3>When to Use Weighting</h3>
                <ul>
                    <li>Your sample differs from your population on known characteristics</li>
                    <li>You oversampled certain groups intentionally (for subgroup analysis)</li>
                    <li>Non-response bias affects certain demographics differently</li>
                    <li>You need to make population-level estimates</li>
                </ul>

                <div class="key-point">
                    <strong>Important:</strong> Only weight on variables that: (1) you know the true population distribution for, and (2) are related to the outcomes you're measuring.
                </div>

                <h3>How Weighting Works</h3>
                <p><strong>Step 1: Identify weighting variables</strong></p>
                <p>Common choices: demographics (age, gender, geography), user tenure, device type, subscription status</p>

                <p><strong>Step 2: Calculate weights</strong></p>
                <p>Weight = (Population proportion) / (Sample proportion)</p>

                <div class="example">
                    <strong>Example Calculation:</strong><br>
                    Population: 60% women, 40% men<br>
                    Sample: 50% women, 50% men<br>
                    <br>
                    Weight for women = 0.60 / 0.50 = 1.2<br>
                    Weight for men = 0.40 / 0.50 = 0.8<br>
                    <br>
                    Each woman's response counts as 1.2, each man's as 0.8
                </div>

                <p><strong>Step 3: Apply weights to analysis</strong></p>
                <p>Most statistical software (R, SPSS, Stata) has built-in weighting functions. Survey platforms like Qualtrics can also apply weights.</p>

                <h3>Types of Weighting</h3>
                <p><strong>Post-stratification:</strong> Weight to match population on one or more variables independently</p>
                <p><strong>Raking/Iterative proportional fitting:</strong> Weight to match population on multiple variables simultaneously while maintaining marginal distributions</p>
                <p><strong>Propensity weighting:</strong> Weight based on likelihood of survey completion</p>

                <h3>Weighting Best Practices</h3>
                <ul>
                    <li>Check weight distributions - extreme weights (>3 or <0.3) may indicate problems</li>
                    <li>Trim extreme weights to reduce variance</li>
                    <li>Report both weighted and unweighted results when stakes are high</li>
                    <li>Document your weighting methodology clearly</li>
                    <li>Don't weight on too many variables simultaneously (increases variance)</li>
                </ul>

                <div class="key-point">
                    <strong>Trade-off:</strong> Weighting reduces bias but increases variance. Use it when bias is a bigger concern than precision.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://en.wikipedia.org/wiki/Weighting" target="_blank">Survey Weighting - Wikipedia</a>
                    <a href="https://www.pewresearch.org/methods/2018/01/26/how-different-weighting-methods-work/" target="_blank">How Different Weighting Methods Work - Pew Research</a>
                </div>
            `
        },
        {
            id: 'survey-5',
            title: 'MaxDiff Analysis',
            duration: '20 min',
            description: 'Use MaxDiff to prioritize features or understand preferences',
            content: `
                <h2>MaxDiff Analysis</h2>

                <h3>What is MaxDiff?</h3>
                <p>MaxDiff (Maximum Difference Scaling) is a survey technique that asks respondents to make trade-offs between options, revealing which items are most and least important or preferred.</p>

                <div class="key-point">
                    <strong>The Power of MaxDiff:</strong> Instead of rating 20 features on a scale (which often yields "everything is important"), MaxDiff forces prioritization through repeated comparisons.
                </div>

                <h3>How MaxDiff Works</h3>
                <ol>
                    <li>Present respondents with 4-5 items from a larger list</li>
                    <li>Ask: "Which is MOST important/preferred?" and "Which is LEAST important/preferred?"</li>
                    <li>Repeat with different combinations of items</li>
                    <li>Statistical analysis reveals relative importance scores for all items</li>
                </ol>

                <div class="example">
                    <strong>Example:</strong> You're prioritizing features. Show users:<br>
                    • Dark mode<br>
                    • Offline access<br>
                    • Social sharing<br>
                    • Export to PDF<br>
                    <br>
                    Ask: "Which feature is MOST important to you?" and "Which is LEAST important?"
                </div>

                <h3>When to Use MaxDiff</h3>
                <ul>
                    <li>Prioritizing features for a roadmap</li>
                    <li>Understanding brand attributes or positioning</li>
                    <li>Ranking customer needs or pain points</li>
                    <li>Comparing design concepts</li>
                    <li>Any time you need to understand relative importance of 5+ items</li>
                </ul>

                <h3>MaxDiff Best Practices</h3>
                <p><strong>Design considerations:</strong></p>
                <ul>
                    <li>Test 8-25 items (fewer = simple rating; more = too complex)</li>
                    <li>Show 4-5 items per screen</li>
                    <li>Each item should appear ~3-5 times across all screens</li>
                    <li>Randomize which items appear together</li>
                    <li>Keep item descriptions short and parallel in structure</li>
                </ul>

                <p><strong>Analysis approach:</strong></p>
                <ul>
                    <li>Most tools (Qualtrics, Sawtooth) calculate scores automatically</li>
                    <li>Scores show relative importance (sum to 100 or average to 0)</li>
                    <li>Can segment by user type to see if priorities differ</li>
                    <li>Can calculate "utility ranges" to understand discrimination</li>
                </ul>

                <div class="key-point">
                    <strong>Tip:</strong> MaxDiff works well after qualitative research identifies the list of items to test. Don't use MaxDiff to discover what matters - use it to prioritize known items.
                </div>

                <h3>Interpreting Results</h3>
                <p>Higher scores = more important/preferred. Look for:</p>
                <ul>
                    <li>Clear winners and losers</li>
                    <li>Clusters of similar importance</li>
                    <li>Differences across segments</li>
                </ul>

                <div class="example">
                    <strong>Sample Results:</strong><br>
                    Dark mode: 15.2<br>
                    Offline access: 12.8<br>
                    Export to PDF: 8.4<br>
                    Social sharing: 3.6<br>
                    <br>
                    Interpretation: Dark mode and offline access are clear priorities; social sharing is lowest priority.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.qualtrics.com/experience-management/research/maxdiff-analysis/" target="_blank">MaxDiff Analysis - Qualtrics</a>
                    <a href="https://sawtoothsoftware.com/resources/technical-papers/maxdiff-analysis" target="_blank">MaxDiff Technical Papers - Sawtooth Software</a>
                </div>
            `
        }
    ],

    statistics: [
        {
            id: 'stats-1',
            title: 'Fundamentals of Statistics',
            duration: '20 min',
            description: 'Build intuition for statistical concepts and reasoning',
            content: `
                <h2>Fundamentals of Statistics</h2>

                <h3>What is Statistics?</h3>
                <p>Statistics is the science of collecting, analyzing, and drawing conclusions from data. It helps us make decisions under uncertainty and distinguish signal from noise.</p>

                <h3>Descriptive vs Inferential Statistics</h3>
                <p><strong>Descriptive Statistics:</strong> Summarize and describe your data</p>
                <ul>
                    <li>Measures of central tendency: mean, median, mode</li>
                    <li>Measures of spread: standard deviation, range, IQR</li>
                    <li>Visualizations: histograms, box plots, scatter plots</li>
                </ul>

                <p><strong>Inferential Statistics:</strong> Make conclusions about populations from samples</p>
                <ul>
                    <li>Hypothesis testing: Is this difference real or due to chance?</li>
                    <li>Confidence intervals: What's the range of plausible values?</li>
                    <li>Prediction: What will happen in new situations?</li>
                </ul>

                <h3>Key Concepts</h3>

                <div class="key-point">
                    <strong>Population vs Sample</strong><br>
                    Population = All members of the group you care about<br>
                    Sample = The subset you actually measure<br>
                    <br>
                    Goal: Use sample to learn about population
                </div>

                <div class="key-point">
                    <strong>Variability</strong><br>
                    Data varies! Not everyone is the same. Statistical methods help us understand whether observed differences are meaningful or just random variation.
                </div>

                <div class="key-point">
                    <strong>Distribution</strong><br>
                    How values are spread out. Many natural phenomena follow a normal (bell curve) distribution. Understanding distributions helps you choose the right statistical tests.
                </div>

                <h3>Mean, Median, and Mode</h3>
                <p><strong>Mean:</strong> Average (sum divided by count)</p>
                <ul>
                    <li>Sensitive to outliers</li>
                    <li>Use when: data is roughly symmetric</li>
                </ul>

                <p><strong>Median:</strong> Middle value when data is sorted</p>
                <ul>
                    <li>Resistant to outliers</li>
                    <li>Use when: data is skewed or has outliers</li>
                </ul>

                <p><strong>Mode:</strong> Most common value</p>
                <ul>
                    <li>Use when: you care about what's typical</li>
                </ul>

                <div class="example">
                    <strong>Example:</strong> Task completion times: 10s, 12s, 13s, 11s, 95s<br>
                    Mean = 28.2s (heavily influenced by outlier)<br>
                    Median = 12s (better represents typical experience)<br>
                    <br>
                    In UX research, median is often more meaningful for time-based metrics!
                </div>

                <h3>Standard Deviation</h3>
                <p>Measures how spread out data is from the mean. Small SD = values clustered near mean. Large SD = values widely spread.</p>

                <p>In a normal distribution:</p>
                <ul>
                    <li>68% of data falls within ±1 SD of mean</li>
                    <li>95% within ±2 SD</li>
                    <li>99.7% within ±3 SD</li>
                </ul>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Statistics and Probability - Khan Academy</a>
                    <a href="https://measuringu.com/descriptive-inferential/" target="_blank">Descriptive vs Inferential Statistics - MeasuringU</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You measure task completion times and get: 5s, 6s, 5s, 7s, 45s. Which measure of central tendency best represents typical user experience?',
                    options: [
                        'Mean (13.6s) - it accounts for all data points',
                        'Median (6s) - it\'s not affected by the outlier',
                        'Mode (5s) - it\'s the most common value',
                        'They are all equally valid'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! The median of 6s better represents typical experience, while the mean is pulled up by one slow outlier.',
                        incorrect: 'With outliers present, the median is usually more representative of typical experience than the mean.'
                    }
                }
            ]
        },
        {
            id: 'stats-2',
            title: 'Statistical Significance & P-values',
            duration: '25 min',
            description: 'Understand what statistical significance really means',
            content: `
                <h2>Statistical Significance & P-values</h2>

                <h3>What is Statistical Significance?</h3>
                <p>Statistical significance helps you determine whether an observed difference is likely real or just due to random chance.</p>

                <div class="key-point">
                    <strong>Core Question:</strong> If there were actually no difference in the population, how often would I see a difference this large (or larger) in my sample just by chance?
                </div>

                <h3>Understanding P-values</h3>
                <p>The p-value is the probability of seeing your results (or more extreme) if the null hypothesis were true.</p>

                <p><strong>Common Misconceptions:</strong></p>
                <ul>
                    <li>❌ P-value is NOT the probability the null hypothesis is true</li>
                    <li>❌ P-value is NOT the probability you've made a mistake</li>
                    <li>✅ P-value IS the probability of seeing this data if no real effect exists</li>
                </ul>

                <div class="example">
                    <strong>Example:</strong> You test two designs. Design B has a 5% higher conversion rate than Design A.<br>
                    P-value = 0.03<br>
                    <br>
                    Interpretation: If the designs actually perform the same, you'd see a difference this large only 3% of the time due to random chance. This suggests the difference is likely real.
                </div>

                <h3>The 0.05 Threshold</h3>
                <p>Commonly, p < 0.05 is considered "statistically significant," but this is just a convention, not a law of nature!</p>

                <p><strong>What 0.05 means:</strong> You're accepting a 5% chance of a false positive (Type I error) - claiming a difference exists when it doesn't.</p>

                <div class="key-point">
                    <strong>Important:</strong> The 0.05 threshold is arbitrary. Consider the stakes of your decision. Medical device? Maybe use 0.01. Exploratory research? Maybe 0.10 is fine.
                </div>

                <h3>Type I and Type II Errors</h3>
                <p><strong>Type I Error (False Positive):</strong> Concluding there's a difference when there isn't</p>
                <ul>
                    <li>Controlled by significance level (α, often 0.05)</li>
                    <li>Risk: waste resources on ineffective changes</li>
                </ul>

                <p><strong>Type II Error (False Negative):</strong> Missing a real difference</p>
                <ul>
                    <li>Controlled by statistical power (often target 80%)</li>
                    <li>Risk: miss out on valuable improvements</li>
                </ul>

                <h3>Statistical vs Practical Significance</h3>
                <p>A result can be statistically significant but not practically meaningful!</p>

                <div class="example">
                    <strong>Example:</strong> With 100,000 users, you detect that Design B is 0.1% better than Design A (p < 0.001).<br>
                    <br>
                    Statistically significant? Yes!<br>
                    Worth implementing? Maybe not - the improvement is tiny.<br>
                    <br>
                    Always consider effect size alongside significance!
                </div>

                <h3>Common Tests</h3>
                <p><strong>T-test:</strong> Compare means of two groups</p>
                <p><strong>ANOVA:</strong> Compare means of 3+ groups</p>
                <p><strong>Chi-square test:</strong> Compare proportions or test independence</p>
                <p><strong>Correlation test:</strong> Assess relationship between variables</p>

                <div class="key-point">
                    <strong>Best Practice:</strong> Report exact p-values (p = 0.03) rather than just "p < 0.05". Provide confidence intervals and effect sizes for full context.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/statistical-significance/" target="_blank">Understanding Statistical Significance - MeasuringU</a>
                    <a href="https://www.nature.com/articles/d41586-019-00857-9" target="_blank">Scientists Rise Up Against Statistical Significance - Nature</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You compare two designs. Design B has 3% higher conversion rate (p = 0.04). What can you conclude?',
                    options: [
                        'There\'s a 4% chance Design B is actually worse',
                        'Design B is definitely better than Design A',
                        'If designs were actually equal, you\'d see this difference only 4% of the time by chance',
                        'You have a 96% confidence that Design B is better'
                    ],
                    correct: 2,
                    feedback: {
                        correct: 'Correct! The p-value tells you how often you\'d see this result if there were no real difference.',
                        incorrect: 'The p-value (0.04) means: if the designs were actually equal, you\'d observe a difference this large or larger only 4% of the time due to random sampling variation.'
                    }
                }
            ]
        },
        {
            id: 'stats-3',
            title: 'Confidence Intervals',
            duration: '20 min',
            description: 'Learn to calculate and interpret confidence intervals',
            content: `
                <h2>Confidence Intervals</h2>

                <h3>What is a Confidence Interval?</h3>
                <p>A confidence interval (CI) gives you a range of plausible values for a population parameter, based on your sample data.</p>

                <div class="key-point">
                    <strong>Interpretation:</strong> A 95% CI means that if you repeated your study many times, 95% of the calculated intervals would contain the true population value.
                </div>

                <div class="example">
                    <strong>Example:</strong> You measure satisfaction score = 7.2, with 95% CI [6.8, 7.6]<br>
                    <br>
                    Interpretation: You're 95% confident the true population satisfaction score is between 6.8 and 7.6.
                </div>

                <h3>Why Confidence Intervals Matter</h3>
                <p>CIs provide more information than p-values alone:</p>
                <ul>
                    <li><strong>Precision:</strong> Narrow CI = precise estimate; wide CI = imprecise</li>
                    <li><strong>Effect size:</strong> Shows magnitude of difference, not just significance</li>
                    <li><strong>Practical significance:</strong> Helps assess if difference matters</li>
                </ul>

                <div class="example">
                    <strong>Example Comparison:</strong><br>
                    Design A conversion: 10%, 95% CI [9%, 11%]<br>
                    Design B conversion: 11%, 95% CI [10%, 12%]<br>
                    <br>
                    The CIs barely overlap, suggesting a real difference. Both the statistical significance AND practical magnitude are clear.
                </div>

                <h3>Factors Affecting CI Width</h3>
                <ol>
                    <li><strong>Sample size:</strong> Larger sample = narrower CI = more precision</li>
                    <li><strong>Variability:</strong> More variable data = wider CI</li>
                    <li><strong>Confidence level:</strong> 99% CI is wider than 95% CI</li>
                </ol>

                <div class="key-point">
                    <strong>Trade-off:</strong> You can be more confident (99% instead of 95%), but you pay for it with a wider, less precise interval.
                </div>

                <h3>Common Confidence Intervals in UX</h3>

                <p><strong>For proportions (conversion rates, completion rates):</strong></p>
                <p>CI = p ± 1.96 × √[p(1-p)/n]</p>
                <p>Where p = proportion, n = sample size, 1.96 for 95% CI</p>

                <p><strong>For means (satisfaction scores, task times):</strong></p>
                <p>CI = x̄ ± t × (s/√n)</p>
                <p>Where x̄ = mean, s = standard deviation, n = sample size, t from t-distribution</p>

                <div class="example">
                    <strong>Quick Calculation:</strong> For proportions near 50% with moderate sample sizes:<br>
                    <br>
                    Margin of Error ≈ 1/√n<br>
                    <br>
                    n = 100: margin ≈ ±10%<br>
                    n = 400: margin ≈ ±5%<br>
                    n = 1000: margin ≈ ±3%
                </div>

                <h3>Interpreting Overlapping CIs</h3>
                <p><strong>CIs don't overlap:</strong> Definitely statistically significant</p>
                <p><strong>CIs overlap slightly:</strong> May or may not be significant (need formal test)</p>
                <p><strong>CIs overlap substantially:</strong> Likely not significant</p>

                <div class="key-point">
                    <strong>Best Practice:</strong> Always report both the point estimate (mean, proportion) AND the confidence interval. Never report a single number without indicating precision!
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/ci-10things/" target="_blank">10 Things to Know About Confidence Intervals - MeasuringU</a>
                    <a href="https://www.surveygizmo.com/resources/blog/confidence-intervals/" target="_blank">Confidence Intervals Explained - SurveyGizmo</a>
                </div>
            `
        },
        {
            id: 'stats-4',
            title: 'Effect Sizes',
            duration: '20 min',
            description: 'Measure the practical importance of differences',
            content: `
                <h2>Effect Sizes</h2>

                <h3>What is an Effect Size?</h3>
                <p>Effect size measures the magnitude or practical importance of a difference or relationship. Unlike p-values, effect sizes are not influenced by sample size.</p>

                <div class="key-point">
                    <strong>Why It Matters:</strong> With large samples, tiny meaningless differences become statistically significant. Effect sizes tell you if the difference actually matters.
                </div>

                <h3>Common Effect Size Measures</h3>

                <p><strong>Cohen's d (for comparing means):</strong></p>
                <p>d = (Mean₁ - Mean₂) / Pooled SD</p>
                <ul>
                    <li>Small effect: d = 0.2</li>
                    <li>Medium effect: d = 0.5</li>
                    <li>Large effect: d = 0.8</li>
                </ul>

                <div class="example">
                    <strong>Example:</strong> Design A satisfaction = 6.0 (SD=2.0), Design B = 7.0 (SD=2.0)<br>
                    Cohen's d = (7.0 - 6.0) / 2.0 = 0.5 (medium effect)<br>
                    <br>
                    Design B is half a standard deviation better - a noticeable improvement.
                </div>

                <p><strong>Percentage Point Difference (for proportions):</strong></p>
                <p>Simply report the difference: 45% vs 50% = 5 percentage point increase</p>

                <p><strong>Relative Difference (for proportions):</strong></p>
                <p>Percent change: (50% - 45%) / 45% = 11% relative increase</p>

                <div class="key-point">
                    <strong>Be Careful:</strong> "50% increase" sounds bigger than "5 percentage point increase" but they're the same thing! Be clear which you're reporting.
                </div>

                <p><strong>Correlation (r) for relationships:</strong></p>
                <ul>
                    <li>Small: r = 0.1</li>
                    <li>Medium: r = 0.3</li>
                    <li>Large: r = 0.5</li>
                </ul>

                <p><strong>R² (variance explained):</strong></p>
                <p>In regression, R² tells you what percentage of variance in the outcome your model explains.</p>

                <h3>Minimum Detectable Effect (MDE)</h3>
                <p>Before running a study, determine the smallest effect size that would be practically meaningful. This drives your sample size calculation.</p>

                <div class="example">
                    <strong>Example:</strong> You're testing a new checkout flow. You decide a 2 percentage point improvement in conversion is the minimum that justifies development effort. This 2% is your MDE - use it to calculate required sample size.
                </div>

                <h3>Reporting Effect Sizes</h3>
                <p><strong>Complete reporting includes:</strong></p>
                <ul>
                    <li>Point estimates for each group</li>
                    <li>Confidence intervals</li>
                    <li>P-value (for significance test)</li>
                    <li>Effect size with interpretation</li>
                </ul>

                <div class="example">
                    <strong>Good Reporting:</strong><br>
                    "Design B (M=7.2, SD=1.8) had significantly higher satisfaction than Design A (M=6.5, SD=2.0), t(198)=2.38, p=.018, d=0.37, 95% CI for difference [0.1, 1.3]. This represents a small-to-medium effect."
                </div>

                <div class="key-point">
                    <strong>Best Practice:</strong> Always interpret effect sizes in context. A "small" effect size for customer satisfaction might be huge for a business. Consider practical implications, not just statistical conventions.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/effect-size/" target="_blank">Understanding Effect Sizes - MeasuringU</a>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3444174/" target="_blank">Effect Sizes: Why, When, and How - PMC</a>
                </div>
            `
        },
        {
            id: 'stats-5',
            title: 'Regression Analysis Basics',
            duration: '25 min',
            description: 'Understand relationships between variables with regression',
            content: `
                <h2>Regression Analysis Basics</h2>

                <h3>What is Regression?</h3>
                <p>Regression helps you understand and quantify relationships between variables. It answers questions like: "What factors predict user satisfaction?" or "How does feature usage relate to retention?"</p>

                <h3>Simple Linear Regression</h3>
                <p>Predicts an outcome (Y) from one predictor (X).</p>

                <p><strong>Equation:</strong> Y = a + bX</p>
                <ul>
                    <li>a = intercept (Y when X=0)</li>
                    <li>b = slope (change in Y for each unit increase in X)</li>
                </ul>

                <div class="example">
                    <strong>Example:</strong> Satisfaction = 3.2 + 0.8 × (Ease of Use)<br>
                    <br>
                    Interpretation: For each 1-point increase in ease of use, satisfaction increases by 0.8 points on average.
                </div>

                <h3>Multiple Regression</h3>
                <p>Predicts an outcome from multiple predictors simultaneously.</p>

                <p><strong>Equation:</strong> Y = a + b₁X₁ + b₂X₂ + b₃X₃...</p>

                <div class="example">
                    <strong>Example:</strong> Satisfaction = 1.5 + 0.6×(Ease) + 0.4×(Features) + 0.3×(Speed)<br>
                    <br>
                    Interpretation: Each factor contributes to satisfaction, with ease of use having the largest effect (0.6), controlling for the others.
                </div>

                <div class="key-point">
                    <strong>Power of Multiple Regression:</strong> It lets you see each variable's effect while controlling for others. This helps identify the most important drivers.
                </div>

                <h3>Key Concepts</h3>

                <p><strong>Coefficient (b):</strong> The effect of that variable</p>
                <ul>
                    <li>Larger absolute value = stronger effect</li>
                    <li>Positive = positive relationship; Negative = negative relationship</li>
                    <li>Each coefficient is tested for significance (has a p-value)</li>
                </ul>

                <p><strong>R² (R-squared):</strong> Proportion of variance in Y explained by your model</p>
                <ul>
                    <li>Range: 0 to 1 (or 0% to 100%)</li>
                    <li>R² = 0.30 means your predictors explain 30% of variance in outcome</li>
                    <li>In UX research, R² of 0.2-0.4 is common (human behavior is complex!)</li>
                </ul>

                <p><strong>Standardized coefficients (Beta):</strong> Coefficients on a common scale</p>
                <ul>
                    <li>Use these to compare relative importance of predictors</li>
                    <li>Larger absolute Beta = more important predictor</li>
                </ul>

                <h3>Common Applications in UX</h3>

                <p><strong>Key Driver Analysis:</strong></p>
                <p>Identify what aspects of your product most strongly predict overall satisfaction or likelihood to recommend.</p>

                <div class="example">
                    <strong>Example:</strong> Regress overall satisfaction on: ease of use, features, design, speed, support<br>
                    <br>
                    Results show ease of use (β=0.45) and speed (β=0.38) are top drivers. Focus improvements there for maximum impact on satisfaction.
                </div>

                <p><strong>Predicting behavior:</strong></p>
                <p>Predict retention, upgrade likelihood, or usage from user characteristics and behaviors.</p>

                <h3>Assumptions and Limitations</h3>
                <ul>
                    <li><strong>Linearity:</strong> Relationship between X and Y is approximately linear</li>
                    <li><strong>Independence:</strong> Observations are independent</li>
                    <li><strong>Normality:</strong> Residuals are approximately normal</li>
                    <li><strong>Correlation ≠ causation:</strong> Regression shows relationships, not causes</li>
                </ul>

                <div class="key-point">
                    <strong>Important:</strong> Regression shows associations, not causation. Just because X predicts Y doesn't mean X causes Y. For causal claims, you need experimental designs.
                </div>

                <h3>Logistic Regression</h3>
                <p>When your outcome is binary (yes/no, convert/don't convert), use logistic regression instead of linear regression.</p>

                <p><strong>Outputs:</strong> Odds ratios or predicted probabilities</p>

                <div class="example">
                    <strong>Example:</strong> Predict likelihood of upgrading from free to paid based on usage patterns, feature adoption, and tenure.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/regression-basics/" target="_blank">Regression Basics for UX - MeasuringU</a>
                    <a href="https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data" target="_blank">Regression - Khan Academy</a>
                </div>
            `
        },
        {
            id: 'stats-6',
            title: 'Multiple Regression Deep Dive',
            duration: '30 min',
            description: 'Master regression coefficients, model fit, assumptions, and diagnostics',
            content: `
                <h2>Multiple Regression Deep Dive</h2>

                <h3>The Regression Equation</h3>
                <p>Multiple regression predicts an outcome Y from several predictors at once:</p>
                <div class="key-point">
                    <strong>Y' = b₀ + b₁X₁ + b₂X₂ + b₃X₃ + ε</strong><br>
                    b₀ = intercept (predicted Y when all Xs = 0)<br>
                    b₁...bₖ = regression coefficients (slopes)<br>
                    ε = residual (Y observed − Y predicted)
                </div>

                <div class="example">
                    <strong>Real example (NELS data):</strong><br>
                    Math₁₂ = 39.7 + 0.28(SES) + 0.15(FamilySize) − 0.45(EnglishUnits) + 3.64(MathUnits)<br><br>
                    Interpretation: Each additional math class taken predicts a 3.64-point increase in 12th grade math achievement, controlling for the other variables.
                </div>

                <h3>b vs β (Unstandardized vs Standardized)</h3>
                <p><strong>b (unstandardized):</strong> Slope in the original units. "A 1-unit increase in X predicts a b-unit change in Y."</p>
                <p><strong>β (standardized Beta):</strong> What b would be if all variables were converted to z-scores first. Lets you compare the relative importance of predictors with different scales.</p>

                <div class="key-point">
                    <strong>Rule of thumb:</strong> Report b in applied research (concrete interpretation). Report β when comparing relative predictor importance in theoretical research.
                </div>

                <h3>R² and Adjusted R²</h3>
                <p><strong>R²</strong> is the proportion of variance in Y explained by the model (0 to 1). R² = 0.30 means your predictors explain 30% of variance in the outcome.</p>
                <p><strong>Adjusted R²</strong> corrects for the number of predictors and sample size. R² is biased upward; adjusted R² is the better statistic to report. The two converge when N is large relative to the number of predictors.</p>

                <h3>Three Types of Multiple Regression</h3>

                <p><strong>Standard (Forced):</strong> All predictors entered simultaneously. Default and most common. Interpret both R² and individual coefficients.</p>

                <p><strong>Sequential (Hierarchical):</strong> Predictors entered in theoretically-motivated blocks. You explicitly test whether each block improves model fit via ΔR² and its significance. Use when you want to test incremental contributions.</p>

                <div class="example">
                    <strong>Sequential example:</strong> Predicting 12th grade science achievement<br>
                    Block 1: Academic variables (English units, Math units, etc.) → R² = 0.18<br>
                    Block 2: Add non-academic variables (SES, family size, etc.) → R²change = 0.021, F(7, 401) = 2.66, p = .011<br><br>
                    Conclusion: Non-academic factors add a small but significant 2.1% of explained variance beyond academic factors.
                </div>

                <p><strong>Stepwise (Statistical):</strong> Computer decides which variables to include based on statistical criteria. Use only for exploratory work — it's sample-dependent and can produce ungeneralizable results. Avoid when you have theory.</p>

                <h3>Regression Assumptions</h3>
                <p>Check these by inspecting a scatterplot of predicted scores (Y') against residuals (Y − Y'):</p>
                <ul>
                    <li><strong>Normality:</strong> Residuals should be normally distributed. If not, predictions are biased in one direction.</li>
                    <li><strong>Linearity:</strong> Residuals should show no pattern (shapeless blob). A curved pattern suggests you need a non-linear term.</li>
                    <li><strong>Homoscedasticity:</strong> Residuals should have equal spread at all predicted values. A funnel shape indicates heteroscedasticity, which weakens (but doesn't invalidate) results.</li>
                </ul>

                <h3>Multicollinearity</h3>
                <p>Occurs when predictors are highly correlated with each other. This destabilizes individual regression coefficients (huge standard errors, wide CIs) — but doesn't sabotage the overall R².</p>
                <p>Diagnose with <strong>Tolerance</strong> (how much of a predictor's variance is NOT shared with others). Tolerance &lt; .20 is a red flag. VIF = 1/Tolerance; high VIF = collinearity problem.</p>
                <p>Fix by: removing redundant variables, creating composite scores, or using Factor Analysis first.</p>

                <h3>Outliers</h3>
                <p><strong>Cook's Distance</strong> measures how influential each case is on the regression model. Cook's D > 1 flags a problematic outlier. Investigate: run the analysis with and without that case to see how much the results change.</p>

                <div class="key-point">
                    <strong>Best practice:</strong> Always inspect the predicted vs. residual plot, check Cook's distances, and report adjusted R² with its significance test from the ANOVA table.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data" target="_blank">Regression - Khan Academy</a>
                    <a href="https://measuringu.com/regression-basics/" target="_blank">Regression Basics for UX - MeasuringU</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You run a regression with R² = 0.28. Then you add 10 more noise predictors (all uncorrelated with the outcome) and R² rises to 0.31. What should you report and why?',
                    options: [
                        'R² = 0.31, because more explained variance is always better',
                        'Adjusted R², because it penalizes for adding predictors that don\'t genuinely improve the model',
                        'R² = 0.28, because you should use the simpler model',
                        'Neither — both R² values are invalid'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! Adjusted R² corrects for the number of predictors. Adding meaningless variables will always inflate raw R², but adjusted R² will drop if the new variables don\'t help.',
                        incorrect: 'Raw R² is biased upward when you add predictors. Adjusted R² penalizes for model complexity, making it the better statistic to report.'
                    }
                },
                {
                    question: 'Two predictors have standardized Betas of β = 0.45 (ease of use) and β = 0.12 (color scheme). What does this tell you?',
                    options: [
                        'Ease of use increases satisfaction by 0.45 points per unit',
                        'Ease of use is a stronger predictor of satisfaction than color scheme, controlling for other variables',
                        'Color scheme has no effect on satisfaction',
                        'The two predictors explain 57% of variance combined'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! Standardized Betas put all predictors on a common scale (standard deviations), so you can compare their relative importance. Ease of use has about 3.75× the predictive importance of color scheme.',
                        incorrect: 'Standardized Betas allow you to compare relative predictor importance across variables measured on different scales.'
                    }
                }
            ]
        },
        {
            id: 'stats-7',
            title: 'Categorical Predictors & Moderation',
            duration: '30 min',
            description: 'Use dummy coding for categorical variables and test interaction effects',
            content: `
                <h2>Categorical Predictors & Moderation</h2>

                <h3>Dichotomous Predictors</h3>
                <p>Regression can handle categorical predictors. For a <strong>two-level</strong> (dichotomous) variable, just code the groups as 0 and 1.</p>

                <div class="example">
                    <strong>Example:</strong> Gender coded as M = 1, F = 0<br>
                    Y' = 2 + 5(Gender)<br>
                    Predicted score for males: 2 + 5(1) = 7<br>
                    Predicted score for females: 2 + 5(0) = 2<br><br>
                    The coefficient (5) is the difference between groups. Coding 0/1 (not 1/2) makes the intercept meaningful — it's the predicted value for the reference group (0).
                </div>

                <h3>Dummy Coding (3+ Categories)</h3>
                <p>For a categorical variable with <strong>j levels</strong>, create <strong>j − 1 dummy variables</strong>. Each dummy codes membership in one group vs. a reference group (always coded 0).</p>

                <div class="example">
                    <strong>Example:</strong> Favorite NBC comedy (4 shows = 3 dummies):<br>
                    D1 = 1 if The Office, 0 otherwise<br>
                    D2 = 1 if Parks &amp; Rec, 0 otherwise<br>
                    D3 = 1 if 30 Rock, 0 otherwise<br>
                    Reference group: Community (all dummies = 0)<br><br>
                    Each coefficient is the predicted difference between that show's fans and Community fans.
                </div>

                <div class="key-point">
                    <strong>Key rule:</strong> One level is always the reference group. Coefficients for dummy variables represent that group's predicted difference from the reference. Never omit the reference group — that would create perfect multicollinearity.
                </div>

                <h3>Moderation (Interaction Effects)</h3>
                <p>Moderation tests whether the effect of X on Y <em>depends on</em> another variable M. This is an interaction — the regression coefficient for X changes at different values of M.</p>

                <div class="example">
                    <strong>Concept:</strong> Does water consumption predict urgency to use the restroom differently for people who have recently evacuated vs. not?<br><br>
                    Model without moderation: Y' = b₀ + b₁(water) + b₂(evacuated)<br>
                    Model with moderation: Y' = b₀ + b₁(water) + b₂(evacuated) + b₃(water × evacuated)<br><br>
                    b₃ tests whether the water → urgency relationship is different across the two groups. If b₃ is significant, moderation is present.
                </div>

                <h3>Creating the Interaction Term</h3>
                <p>Multiply the two variables together to create the interaction term. For a continuous × dichotomous interaction this is straightforward: when the dichotomous variable = 0, the interaction term = 0; when it = 1, the interaction term equals the continuous variable.</p>

                <h3>Interpreting Moderation</h3>
                <p>When moderation is present, the coefficient for the focal predictor (b₁) becomes its <strong>simple effect</strong> — the effect of X when the moderator M = 0.</p>

                <div class="example">
                    <strong>Example:</strong><br>
                    Y' = 2.19 + 0.007(water) + 1.96(evacuated) − 0.005(water × evacuated)<br><br>
                    When evacuated = 0: Y' = 2.19 + 0.007(water) → each mL of water increases urgency by 0.007<br>
                    When evacuated = 1: Y' = 4.15 + 0.002(water) → each mL increases urgency by only 0.002<br><br>
                    Conclusion: Water consumption matters more for predicting urgency when the person hasn't recently evacuated.
                </div>

                <h3>Centering</h3>
                <p>When you have interaction or non-linear terms, <strong>center</strong> your continuous predictors by subtracting a meaningful reference value (usually the mean or a round number near the mean). Centering:</p>
                <ul>
                    <li>Makes the intercept meaningful (Y' when X is at its average)</li>
                    <li>Can reduce collinearity between X and the X² or interaction term</li>
                    <li>Does NOT change R², overall model fit, or the significance of the centered variable itself</li>
                </ul>

                <h3>PROCESS Macro</h3>
                <p>For complex moderation models (especially with continuous moderators), use Andrew Hayes' PROCESS macro. It automatically calculates the interaction term, uses bootstrapping for robust inference, and reports conditional effects at meaningful values of the moderator.</p>

                <div class="key-point">
                    <strong>When to use moderation:</strong> You have a theoretical reason to believe the relationship between two variables changes across levels of a third. Don't go hunting for interactions without theory — with multiple tests, you'll find spurious ones.
                </div>
            `,
            exercises: [
                {
                    question: 'You have a 4-level categorical variable (device type: phone, tablet, laptop, desktop). How many dummy variables do you need to include in the regression?',
                    options: [
                        '4 dummy variables',
                        '3 dummy variables',
                        '2 dummy variables',
                        '1 dummy variable'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! For j levels, you need j − 1 = 4 − 1 = 3 dummy variables. One level becomes the reference group (coded 0 on all dummies), and each dummy codes whether a case is in that group vs. the reference.',
                        incorrect: 'For a categorical variable with j levels, you create j − 1 dummy variables. One level serves as the reference group and is always 0.'
                    }
                },
                {
                    question: 'In a moderation analysis, the coefficient for variable X (b₁) has a different meaning than in a simple main-effects model. In the moderation model, b₁ represents:',
                    options: [
                        'The average effect of X across all values of the moderator',
                        'The simple effect of X when the moderator M = 0',
                        'The combined effect of X and M on Y',
                        'The interaction between X and M'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! With an interaction term in the model, b₁ is the effect of X specifically when M = 0 (the reference value). This is why centering matters — it controls what "M = 0" actually means.',
                        incorrect: 'In a moderation model, b₁ is no longer the average effect of X. It\'s the simple effect of X when M = 0 — which is why centering around a meaningful value is so important.'
                    }
                }
            ]
        },
        {
            id: 'stats-8',
            title: 'Non-linear Regression',
            duration: '25 min',
            description: 'Model curved relationships by adding polynomial terms',
            content: `
                <h2>Non-linear Regression</h2>

                <h3>When Linear Models Fail</h3>
                <p>Linear regression assumes a straight-line relationship. But many real-world relationships are curved. You can detect this by inspecting a plot of predicted values vs. residuals — if the residuals show a curved pattern (higher errors in the middle, lower at the extremes), a linear model is missing something.</p>

                <h3>Polynomial Regression</h3>
                <p>Non-linear models are actually still <em>linear models</em> — just with non-linear predictors. You add a squared (or higher-power) version of a predictor:</p>

                <div class="key-point">
                    <strong>Linear:</strong> Y' = b₀ + b₁X<br>
                    <strong>Quadratic (non-linear):</strong> Y' = b₀ + b₁X + b₂X²<br><br>
                    To create X², z-transform X first (standardize it), then square the z-score. This reduces collinearity between X and X².
                </div>

                <h3>The Yerkes-Dodson Law</h3>
                <p>A classic example of an inverted-U relationship: performance increases with arousal/motivation up to an optimal point, then decreases as stress becomes debilitating. This can't be captured by a straight line.</p>

                <div class="example">
                    <strong>Study example:</strong> Rock Band drummers played a difficult song with varying financial incentives ($1 to $1,000,000).<br><br>
                    Linear model: R² = .004, p = .657 — terrible fit<br>
                    Adding motivation²: R²change = .853, F(1,47) = 218.80, p &lt; .001<br><br>
                    Centered model: Performance' = 79 − 0.4(motivation) − 18.8(motivation²)<br>
                    At average motivation: predicted 79% accuracy<br>
                    At ±1 SD from average: performance drops to about 60%
                </div>

                <h3>Sequential Testing Strategy</h3>
                <p>Start with the linear model. If residuals show a curved pattern, add the squared term in a <strong>sequential regression</strong> (Block 1 = X, Block 2 = X²). The ΔR² and its significance tell you whether the quadratic term meaningfully improves model fit.</p>

                <h3>Interpreting Non-linear Models</h3>
                <p>Individual beta weights for quadratic models are non-intuitive (the sign of b₁ alone doesn't tell you much). <strong>Always graph the relationship.</strong> The significance of the squared term justifies presenting a curved pattern in a plot.</p>

                <p>Centering is especially important here: the intercept should reflect the predicted value at an average (or meaningful) level of the predictor, not when X = 0.</p>

                <h3>APA Write-up</h3>
                <div class="example">
                    "A sequential regression examined whether the relationship between motivation and performance was non-linear (quadratic). The linear model fit was poor, R² = .004, F(1,48) = 0.20, p = .657. Adding the squared term significantly improved fit, R²change = .853, F(1,47) = 218.80, p &lt; .001. As shown in Figure 1, an inverted-U pattern describes the data — extremely low and high motivation levels produced poorer performance than moderate motivation."
                </div>

                <div class="key-point">
                    <strong>Practical tip:</strong> In UX, non-linear relationships appear in: engagement vs. notification frequency (too many notifications reduce engagement), task complexity vs. satisfaction, feature density vs. usability. Always check the scatter plot before assuming a linear relationship.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data" target="_blank">Regression - Khan Academy</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You plot predicted values vs. residuals for a regression and notice that residuals are large and negative at low and high predicted values, but near zero in the middle. What does this suggest?',
                    options: [
                        'The model is a perfect fit',
                        'There is heteroscedasticity and you should transform the outcome',
                        'A linear model is under-predicting at the extremes — a non-linear (quadratic) term might help',
                        'You have too many outliers and should remove them'
                    ],
                    correct: 2,
                    feedback: {
                        correct: 'Correct! A U-shaped or inverted-U pattern in the residuals suggests the true relationship is curved, not straight. Adding a squared term (quadratic) is the appropriate fix.',
                        incorrect: 'A curved pattern in the residuals (not a funnel) is a sign of non-linearity. Adding a squared predictor term to the model is the correct approach.'
                    }
                },
                {
                    question: 'Why is it recommended to z-transform (standardize) a variable before squaring it for use in a quadratic model?',
                    options: [
                        'To make the coefficient for X² always equal to 1',
                        'To reduce multicollinearity between X and X², and to make the intercept represent the predicted value at the mean',
                        'Because SPSS can only handle standardized inputs',
                        'To ensure R² cannot exceed 1'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! When X is on its original scale, X and X² will be highly correlated (collinear). Z-transforming first centers the variable at zero, which makes X and X² uncorrelated and gives the intercept a meaningful interpretation.',
                        incorrect: 'Z-transforming centers the predictor at zero, which reduces the correlation between X and X² (a collinearity problem) and makes the intercept represent the predicted value at the mean of X.'
                    }
                }
            ]
        },
        {
            id: 'stats-9',
            title: 'Logistic Regression',
            duration: '30 min',
            description: 'Predict binary outcomes using odds ratios and logistic models',
            content: `
                <h2>Logistic Regression</h2>

                <h3>When to Use Logistic Regression</h3>
                <p>Use logistic regression when your <strong>outcome variable is categorical</strong> (binary = two groups; multinomial = 3+ groups). Predicting whether a user converts, churns, clicks, or completes a task are all binary outcomes.</p>

                <p>Why not just use regular regression on a 0/1 variable? Two problems:</p>
                <ul>
                    <li>Linear regression can produce predicted "probabilities" outside the 0–1 range</li>
                    <li>A dichotomous outcome violates the linearity assumption of linear regression</li>
                </ul>

                <h3>Probability vs Odds</h3>
                <p>Logistic regression works with <strong>odds</strong>, not raw probabilities.</p>

                <div class="key-point">
                    <strong>Probability:</strong> P(Y) — ranges from 0 to 1<br>
                    <strong>Odds:</strong> P(Y) / (1 − P(Y)) — ranges from 0 to ∞<br><br>
                    If P(Y) = 0.80, odds = 0.80/0.20 = 4 (or "4 to 1")<br>
                    If P(Y) = 0.50, odds = 1 (equal likelihood)<br>
                    Odds &gt; 1 = outcome more likely; odds &lt; 1 = outcome less likely
                </div>

                <div class="example">
                    <strong>Example (mock jury data):</strong><br>
                    Males: 40/50 guilty verdicts → P(guilty) = .80, odds = 40/10 = 4.0<br>
                    Females: 30/50 guilty verdicts → P(guilty) = .60, odds = 30/20 = 1.5<br><br>
                    Odds Ratio (OR) = 4.0 / 1.5 = 2.67<br>
                    Interpretation: The odds of a guilty verdict are 2.67 times higher for males than females.
                </div>

                <h3>Interpreting Coefficients (Exp(B) = Odds Ratio)</h3>
                <p>In logistic regression output, the regression coefficient B is on the log-odds scale (difficult to interpret). Report <strong>Exp(B)</strong>, which is the odds ratio:</p>
                <ul>
                    <li><strong>Exp(B) &gt; 1:</strong> That predictor increases the odds of the outcome</li>
                    <li><strong>Exp(B) = 1:</strong> No effect</li>
                    <li><strong>Exp(B) &lt; 1:</strong> That predictor decreases the odds</li>
                    <li>For a continuous predictor: Exp(B) is the change in odds for each 1-unit increase in the predictor</li>
                </ul>

                <div class="example">
                    <strong>Murder trial example:</strong><br>
                    Evidence strength (weak vs. strong) → Exp(B) = 10.25<br>
                    Interpretation: The odds of a guilty verdict are 10.25 times greater with strong evidence than with weak evidence.
                </div>

                <h3>Model Fit</h3>
                <p>Unlike linear regression, logistic regression doesn't use R². Instead:</p>
                <ul>
                    <li><strong>Nagelkerke R²:</strong> Pseudo-R² ranging 0–1. Higher = better fit. Interpreted similarly to R² (but not technically % variance explained).</li>
                    <li><strong>Model chi-square:</strong> Tests whether the model with predictors fits better than a model with no predictors (the baseline). Significant = your predictors help.</li>
                    <li><strong>Hosmer-Lemeshow test:</strong> Tests whether your model fits the observed data. You want a non-significant result (p &gt; .05), meaning model and data are consistent.</li>
                    <li><strong>Classification accuracy:</strong> What % of cases does the model correctly classify? Compare to baseline (% in the majority group).</li>
                </ul>

                <h3>Assumptions</h3>
                <ul>
                    <li>Adequate expected cell frequencies (all &gt; 1, at least 80% &gt; 5) — especially important when all predictors are categorical</li>
                    <li>No complete/quasi-complete separation (if predictors perfectly predict the outcome, the model becomes unstable)</li>
                    <li>No severe multicollinearity among predictors</li>
                </ul>

                <h3>Reporting</h3>
                <div class="example">
                    Report: Nagelkerke R², model chi-square (df and p), and for each significant predictor: B, SE, Exp(B), and 95% CI for Exp(B).<br><br>
                    "A binary logistic regression examined predictors of guilty verdicts. The model fit significantly, χ²(2) = 78.3, p &lt; .001, Nagelkerke R² = .32. Evidence strength was a significant predictor (B = 2.33, SE = 0.35, Exp(B) = 10.25, 95% CI [5.14, 20.43]), with the odds of a guilty verdict being 10.25 times higher with strong vs. weak evidence."
                </div>

                <div class="key-point">
                    <strong>UX applications:</strong> Logistic regression is ideal for predicting conversion (purchased/not), churn (churned/retained), task completion (success/failure), or feature adoption (adopted/not) from user characteristics or behavior data.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Statistics and Probability - Khan Academy</a>
                </div>
            `,
            exercises: [
                {
                    question: 'In logistic regression, what does Exp(B) = 0.25 mean for a predictor?',
                    options: [
                        'The predictor reduces the probability of the outcome by 25%',
                        'The predictor reduces the odds of the outcome to one-quarter (the outcome is 4× less likely)',
                        'The predictor is not statistically significant',
                        'The model explains 25% of variance'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! Exp(B) is the odds ratio. 0.25 means the odds of the outcome are 0.25× as large (i.e., 4 times smaller) for each unit increase in that predictor. The odds decrease by 75%.',
                        incorrect: 'Exp(B) is the odds ratio. When Exp(B) < 1, the predictor decreases the odds. Exp(B) = 0.25 means the odds are one-quarter as large — the outcome is 4 times less likely per unit increase.'
                    }
                },
                {
                    question: 'Your logistic regression has Nagelkerke R² = .35, model chi-square p < .001, but Hosmer-Lemeshow p = .03. What\'s the concern?',
                    options: [
                        'None — all values indicate an excellent model',
                        'The Hosmer-Lemeshow test suggests the model\'s predicted values don\'t match the observed data well — poor calibration',
                        'The model has too many predictors',
                        'Nagelkerke R² of .35 is too low to be useful'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! Hosmer-Lemeshow tests whether the model\'s predictions match observed frequencies. You want p > .05 (non-significant). A significant result (p = .03) means the model is miscalibrated — its predicted probabilities don\'t match the data well.',
                        incorrect: 'Hosmer-Lemeshow is a goodness-of-fit test where you want a non-significant result (p > .05). A significant p = .03 indicates poor calibration — the model\'s predicted probabilities don\'t align with actual outcomes.'
                    }
                }
            ]
        },
        {
            id: 'stats-10',
            title: 'Factor Analysis & PCA',
            duration: '35 min',
            description: 'Reduce many variables into meaningful underlying factors',
            content: `
                <h2>Factor Analysis & PCA</h2>

                <h3>The Problem: Too Many Variables</h3>
                <p>Sometimes you have far more variables than you need — survey items, behavioral metrics, test scores. Using them all in regression creates collinearity problems and overfitting. Factor Analysis (FA) / Principal Components Analysis (PCA) provides a solution: <strong>data reduction</strong>.</p>

                <p>Goals:</p>
                <ul>
                    <li>Discover the underlying structure (latent variables) in a set of measured variables</li>
                    <li>Reduce k correlated variables into fewer, uncorrelated factors that still explain most of the variance</li>
                    <li>Fix multicollinearity by replacing correlated predictors with uncorrelated factor scores</li>
                </ul>

                <h3>How It Works</h3>
                <p>Given k variables, PCA creates k new uncorrelated <strong>components (factors)</strong> that explain the same total variance — but redistributed. The first factor captures as much shared variance (communality) as possible, the second captures the next most, and so on.</p>

                <div class="key-point">
                    <strong>Communality:</strong> How much of a variable's variance is shared with the other variables. PCA extracts and consolidates this communality into a small number of high-value factors. What's left (unique variance) goes into low-value factors that are discarded.
                </div>

                <h3>Factor Loadings</h3>
                <p>A <strong>factor loading</strong> is the correlation between an original variable and a factor. High loadings (e.g., |r| > .40) indicate that variable strongly contributes to — and is well explained by — that factor.</p>

                <div class="example">
                    <strong>NELS data example (16 academic variables → 3 factors):</strong><br><br>
                    Factor 1 (Academic Achievement): High loadings from all reading, math, science, social studies scores<br>
                    Factor 2 (Self-Concept): High loadings from self-concept measures at all three grade levels<br>
                    Factor 3 (Income Expectations): High loading from expected income at age 30<br><br>
                    These 3 factors collectively explain 68.7% of the variance across all 16 original variables.
                </div>

                <h3>How Many Factors to Keep?</h3>
                <p>The most common rule (Kaiser criterion): retain factors with <strong>eigenvalue &gt; 1</strong>. An eigenvalue of 1 means the factor explains as much variance as one average original variable — anything less isn't an improvement.</p>

                <p>Eigenvalue = total variance explained by that factor. With k variables, an eigenvalue of 1 = 1/k of total variance.</p>

                <h3>Checking Assumptions</h3>
                <p><strong>KMO (Kaiser-Meyer-Olkin):</strong> Measures sampling adequacy. Range: 0–1. Overall KMO &gt; .5 is the minimum; &gt; .8 is good. Check the diagonal of the anti-image correlation matrix for individual variable KMOs — anything &lt; .5 should be removed.</p>

                <p><strong>Bartlett's Test of Sphericity:</strong> Tests whether there are meaningful correlations between the variables. You want significance (p &lt; .05) — this confirms the variables share enough correlation to make factor analysis worthwhile.</p>

                <h3>Rotation</h3>
                <p>By default, Factor 1 tends to explain a moderate amount of many variables — making interpretation messy. <strong>Rotation</strong> redistributes the loadings to create a "simple structure": each variable loads high on one factor and low on others.</p>

                <p><strong>Varimax rotation</strong> (orthogonal): Factors remain uncorrelated. Good default. Maximizes high and low loadings within each factor.</p>

                <p>Rotation does NOT change eigenvalues or communalities — only factor loadings.</p>

                <h3>Saving Factor Scores</h3>
                <p>Once you've decided on the number of factors, save each case's <strong>score</strong> on each factor (use Anderson-Rubin method — scores will be standardized, M=0, SD=1, and uncorrelated with each other). These factor scores can then be used as predictors in regression.</p>

                <div class="example">
                    <strong>Why this is powerful:</strong> Instead of a regression with 16 correlated predictors (collinearity nightmare, R² = .30), use the 3 uncorrelated factor scores as predictors. You get similar R², zero collinearity, and easily interpretable coefficients.
                </div>

                <h3>APA Reporting</h3>
                <div class="example">
                    "A principal component analysis (PCA) was conducted on 16 items with orthogonal rotation (Varimax). KMO = .91 confirmed sampling adequacy; all individual KMO values exceeded .5. Bartlett's test was significant, χ²(120) = 5322.4, p &lt; .001. Three components with eigenvalues &gt; 1 were retained, collectively explaining 68.7% of variance. After rotation, Component 1 represented academic achievement, Component 2 self-esteem, and Component 3 income expectations."
                </div>

                <div class="key-point">
                    <strong>UX applications:</strong> Factor analysis is used in survey research to validate scales (e.g., do 10 satisfaction items really measure one construct, or several?), identify key dimensions of user experience, and create reliable composite scores from multiple correlated items.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://measuringu.com/factor-analysis/" target="_blank">Factor Analysis in Survey Research - MeasuringU</a>
                    <a href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Statistics Foundation - Khan Academy</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You run a PCA on 20 survey items. The Kaiser criterion (eigenvalue > 1) suggests retaining 4 factors, which explain 72% of total variance. What should you do with the remaining 16 factors?',
                    options: [
                        'Include all 20 factors since more is better',
                        'Discard them — they each explain less variance than a single average original item, and most variance is accounted for by the 4 retained factors',
                        'Rotate them to improve interpretability',
                        'Only retain 2 factors to keep the model simple'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! The remaining 16 factors each have eigenvalues < 1, meaning they explain less than what a single original variable would. Retaining only the 4 high-value factors gives you most of the variance (72%) with far fewer, uncorrelated variables.',
                        incorrect: 'Factors with eigenvalues < 1 explain less variance than a single original variable — they\'re not useful. Discard them. The retained factors capture the communality (shared variance); the rest is mostly unique variance from individual items.'
                    }
                },
                {
                    question: 'After running PCA, you use Varimax rotation. Which of the following does rotation change?',
                    options: [
                        'The total variance explained and eigenvalues',
                        'The communalities for each variable',
                        'The factor loadings, making them easier to interpret',
                        'The number of factors extracted'
                    ],
                    correct: 2,
                    feedback: {
                        correct: 'Correct! Rotation only redistributes the factor loadings to create a simpler structure (high loadings for some variables, near-zero for others). Total variance explained, eigenvalues, and communalities remain unchanged.',
                        incorrect: 'Rotation changes only the factor loadings — it rearranges which variables load on which factors to improve interpretability. Eigenvalues, communalities, and total variance explained are all preserved.'
                    }
                }
            ]
        }
    ],

    programming: [
        {
            id: 'prog-1',
            title: 'Introduction to SQL',
            duration: '20 min',
            description: 'Learn to query databases to retrieve data for analysis',
            content: `
                <h2>Introduction to SQL</h2>

                <h3>What is SQL?</h3>
                <p>SQL (Structured Query Language) is the standard language for working with relational databases. As a quant UXR, you'll use SQL to extract user behavior data, event logs, and other data for analysis.</p>

                <h3>Why SQL Matters for UXRs</h3>
                <ul>
                    <li>Access behavioral data directly without waiting for data team</li>
                    <li>Query event logs to understand user actions</li>
                    <li>Join user characteristics with behavior data</li>
                    <li>Create datasets for surveys (sample selection) or analysis</li>
                </ul>

                <h3>Basic SQL Structure</h3>
                <p>Most SQL queries follow this pattern:</p>

                <div class="example">
                    <code>
                    SELECT columns<br>
                    FROM table<br>
                    WHERE conditions<br>
                    GROUP BY grouping_columns<br>
                    ORDER BY sorting_columns
                    </code>
                </div>

                <h3>SELECT: Choose Columns</h3>
                <p>SELECT specifies which columns you want to retrieve.</p>

                <div class="example">
                    <code>
                    -- Get all columns<br>
                    SELECT * FROM users;<br>
                    <br>
                    -- Get specific columns<br>
                    SELECT user_id, signup_date, country FROM users;
                    </code>
                </div>

                <h3>WHERE: Filter Rows</h3>
                <p>WHERE lets you filter data based on conditions.</p>

                <div class="example">
                    <code>
                    -- Users who signed up in 2024<br>
                    SELECT * FROM users<br>
                    WHERE signup_date >= '2024-01-01';<br>
                    <br>
                    -- Active users from USA<br>
                    SELECT * FROM users<br>
                    WHERE country = 'USA' AND status = 'active';
                    </code>
                </div>

                <h3>Common Operators</h3>
                <ul>
                    <li><strong>=, !=, <, >, <=, >=</strong> - Comparison operators</li>
                    <li><strong>AND, OR, NOT</strong> - Logical operators</li>
                    <li><strong>IN</strong> - Check if value is in a list</li>
                    <li><strong>LIKE</strong> - Pattern matching (% = wildcard)</li>
                    <li><strong>BETWEEN</strong> - Range checking</li>
                </ul>

                <div class="example">
                    <code>
                    -- Users from specific countries<br>
                    SELECT * FROM users<br>
                    WHERE country IN ('USA', 'Canada', 'UK');<br>
                    <br>
                    -- Emails containing 'gmail'<br>
                    SELECT * FROM users<br>
                    WHERE email LIKE '%gmail%';
                    </code>
                </div>

                <h3>Aggregation Functions</h3>
                <p>Summarize data with COUNT, SUM, AVG, MIN, MAX.</p>

                <div class="example">
                    <code>
                    -- Count total users<br>
                    SELECT COUNT(*) FROM users;<br>
                    <br>
                    -- Average satisfaction score<br>
                    SELECT AVG(satisfaction) FROM surveys;
                    </code>
                </div>

                <h3>GROUP BY: Aggregate by Category</h3>
                <p>GROUP BY lets you calculate statistics for each group.</p>

                <div class="example">
                    <code>
                    -- Count users by country<br>
                    SELECT country, COUNT(*) as user_count<br>
                    FROM users<br>
                    GROUP BY country<br>
                    ORDER BY user_count DESC;
                    </code>
                </div>

                <div class="key-point">
                    <strong>UXR Tip:</strong> Start simple! Write queries incrementally. First SELECT what you need, then add WHERE to filter, then GROUP BY to aggregate. Test at each step.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://sqlbolt.com/" target="_blank">SQLBolt - Interactive SQL Tutorial</a>
                    <a href="https://mode.com/sql-tutorial/" target="_blank">SQL Tutorial - Mode Analytics</a>
                    <a href="https://www.w3schools.com/sql/" target="_blank">SQL Reference - W3Schools</a>
                </div>
            `
        },
        {
            id: 'prog-2',
            title: 'SQL Joins',
            duration: '25 min',
            description: 'Combine data from multiple tables',
            content: `
                <h2>SQL Joins</h2>

                <h3>Why Joins Matter</h3>
                <p>Real-world data is split across multiple tables. Joins let you combine them. For UXR, you'll often join user data with behavioral logs, survey responses, or experiment assignments.</p>

                <h3>Types of Joins</h3>

                <p><strong>INNER JOIN</strong> - Only rows that match in both tables</p>
                <div class="example">
                    <code>
                    SELECT users.user_id, users.country, events.event_name<br>
                    FROM users<br>
                    INNER JOIN events ON users.user_id = events.user_id;
                    </code>
                    <br>
                    <p>Returns: Only users who have events recorded</p>
                </div>

                <p><strong>LEFT JOIN</strong> - All rows from left table, matched rows from right</p>
                <div class="example">
                    <code>
                    SELECT users.user_id, users.country, surveys.response<br>
                    FROM users<br>
                    LEFT JOIN surveys ON users.user_id = surveys.user_id;
                    </code>
                    <br>
                    <p>Returns: All users, with survey responses where available (NULL if they didn't respond)</p>
                </div>

                <p><strong>RIGHT JOIN</strong> - All rows from right table, matched rows from left</p>
                <p>Less common in practice - you can usually rewrite as LEFT JOIN</p>

                <p><strong>FULL OUTER JOIN</strong> - All rows from both tables</p>
                <p>Rarely needed in UX research</p>

                <h3>Practical UXR Examples</h3>

                <div class="example">
                    <strong>Example 1: Survey response rate by segment</strong><br>
                    <code>
                    SELECT <br>
                    &nbsp;&nbsp;users.segment,<br>
                    &nbsp;&nbsp;COUNT(DISTINCT users.user_id) as total_users,<br>
                    &nbsp;&nbsp;COUNT(DISTINCT surveys.user_id) as responded,<br>
                    &nbsp;&nbsp;COUNT(DISTINCT surveys.user_id) * 100.0 / COUNT(DISTINCT users.user_id) as response_rate<br>
                    FROM users<br>
                    LEFT JOIN surveys ON users.user_id = surveys.user_id<br>
                    GROUP BY users.segment;
                    </code>
                </div>

                <div class="example">
                    <strong>Example 2: Feature usage by user characteristics</strong><br>
                    <code>
                    SELECT <br>
                    &nbsp;&nbsp;users.tenure_bucket,<br>
                    &nbsp;&nbsp;COUNT(DISTINCT feature_usage.user_id) as users_using_feature,<br>
                    &nbsp;&nbsp;COUNT(DISTINCT feature_usage.user_id) * 100.0 / COUNT(DISTINCT users.user_id) as adoption_rate<br>
                    FROM users<br>
                    LEFT JOIN feature_usage <br>
                    &nbsp;&nbsp;ON users.user_id = feature_usage.user_id <br>
                    &nbsp;&nbsp;AND feature_usage.feature_name = 'dark_mode'<br>
                    GROUP BY users.tenure_bucket;
                    </code>
                </div>

                <h3>Join Best Practices</h3>
                <ul>
                    <li><strong>Specify join keys clearly:</strong> Always use ON to define the relationship</li>
                    <li><strong>Use table aliases:</strong> Makes queries more readable (users u, events e)</li>
                    <li><strong>Think about which join type:</strong> INNER when you only want matches, LEFT when you need all from one table</li>
                    <li><strong>Check for duplicates:</strong> Joins can create duplicate rows if relationships aren't 1:1</li>
                </ul>

                <div class="key-point">
                    <strong>Common Pitfall:</strong> If you join users to events without aggregating, you'll get one row per event per user, potentially inflating your user counts! Use COUNT(DISTINCT user_id) to get unique users.
                </div>

                <h3>Multiple Joins</h3>
                <p>You can chain multiple joins together:</p>

                <div class="example">
                    <code>
                    SELECT <br>
                    &nbsp;&nbsp;u.user_id, <br>
                    &nbsp;&nbsp;u.country,<br>
                    &nbsp;&nbsp;s.satisfaction,<br>
                    &nbsp;&nbsp;COUNT(e.event_id) as event_count<br>
                    FROM users u<br>
                    LEFT JOIN surveys s ON u.user_id = s.user_id<br>
                    LEFT JOIN events e ON u.user_id = e.user_id<br>
                    GROUP BY u.user_id, u.country, s.satisfaction;
                    </code>
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.w3schools.com/sql/sql_join.asp" target="_blank">SQL Joins - W3Schools</a>
                    <a href="https://mode.com/sql-tutorial/sql-joins/" target="_blank">SQL Joins Tutorial - Mode</a>
                </div>
            `
        },
        {
            id: 'prog-3',
            title: 'Introduction to Python for Data',
            duration: '25 min',
            description: 'Get started with Python for data analysis',
            content: `
                <h2>Introduction to Python for Data</h2>

                <h3>Why Python for UX Research?</h3>
                <p>Python is powerful for data manipulation, statistical analysis, and visualization. It's widely used in data science and has excellent libraries for research.</p>

                <h3>Key Libraries</h3>
                <ul>
                    <li><strong>pandas:</strong> Data manipulation and analysis (like Excel but more powerful)</li>
                    <li><strong>numpy:</strong> Numerical computing</li>
                    <li><strong>matplotlib/seaborn:</strong> Data visualization</li>
                    <li><strong>scipy/statsmodels:</strong> Statistical tests and models</li>
                    <li><strong>scikit-learn:</strong> Machine learning</li>
                </ul>

                <h3>Working with DataFrames (pandas)</h3>
                <p>A DataFrame is like a spreadsheet - rows and columns of data.</p>

                <div class="example">
                    <strong>Import and load data:</strong><br>
                    <code>
                    import pandas as pd<br>
                    <br>
                    # Read CSV file<br>
                    df = pd.read_csv('survey_data.csv')<br>
                    <br>
                    # View first few rows<br>
                    df.head()<br>
                    <br>
                    # Basic info about data<br>
                    df.info()<br>
                    df.describe()
                    </code>
                </div>

                <h3>Selecting and Filtering Data</h3>
                <div class="example">
                    <code>
                    # Select specific columns<br>
                    df[['user_id', 'satisfaction', 'country']]<br>
                    <br>
                    # Filter rows<br>
                    df[df['satisfaction'] > 7]<br>
                    <br>
                    # Multiple conditions<br>
                    df[(df['country'] == 'USA') & (df['satisfaction'] > 7)]
                    </code>
                </div>

                <h3>Aggregation and Grouping</h3>
                <div class="example">
                    <code>
                    # Calculate means<br>
                    df['satisfaction'].mean()<br>
                    <br>
                    # Group by and aggregate<br>
                    df.groupby('country')['satisfaction'].mean()<br>
                    <br>
                    # Multiple aggregations<br>
                    df.groupby('country').agg({<br>
                    &nbsp;&nbsp;'satisfaction': ['mean', 'std', 'count'],<br>
                    &nbsp;&nbsp;'nps_score': 'mean'<br>
                    })
                    </code>
                </div>

                <h3>Creating New Variables</h3>
                <div class="example">
                    <code>
                    # Create new column<br>
                    df['high_satisfaction'] = df['satisfaction'] > 7<br>
                    <br>
                    # Apply function to column<br>
                    df['country_code'] = df['country'].apply(lambda x: x[:2].upper())<br>
                    <br>
                    # Conditional logic<br>
                    df['segment'] = pd.cut(df['satisfaction'], <br>
                    &nbsp;&nbsp;bins=[0, 5, 7, 10], <br>
                    &nbsp;&nbsp;labels=['Low', 'Medium', 'High'])
                    </code>
                </div>

                <h3>Basic Visualization</h3>
                <div class="example">
                    <code>
                    import matplotlib.pyplot as plt<br>
                    import seaborn as sns<br>
                    <br>
                    # Histogram<br>
                    df['satisfaction'].hist()<br>
                    plt.xlabel('Satisfaction Score')<br>
                    plt.ylabel('Frequency')<br>
                    plt.show()<br>
                    <br>
                    # Bar chart of means by group<br>
                    df.groupby('country')['satisfaction'].mean().plot(kind='bar')<br>
                    <br>
                    # Scatterplot<br>
                    plt.scatter(df['ease_of_use'], df['satisfaction'])<br>
                    plt.xlabel('Ease of Use')<br>
                    plt.ylabel('Satisfaction')
                    </code>
                </div>

                <h3>Statistical Tests</h3>
                <div class="example">
                    <code>
                    from scipy import stats<br>
                    <br>
                    # T-test<br>
                    group_a = df[df['condition'] == 'A']['satisfaction']<br>
                    group_b = df[df['condition'] == 'B']['satisfaction']<br>
                    t_stat, p_value = stats.ttest_ind(group_a, group_b)<br>
                    print(f'p-value: {p_value}')<br>
                    <br>
                    # Correlation<br>
                    correlation = df['ease_of_use'].corr(df['satisfaction'])<br>
                    print(f'Correlation: {correlation}')
                    </code>
                </div>

                <div class="key-point">
                    <strong>Learning Tip:</strong> Don't try to memorize all commands. Keep documentation handy and learn by doing. Start with simple tasks and gradually build complexity.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://pandas.pydata.org/docs/getting_started/index.html" target="_blank">Pandas Getting Started - Official Docs</a>
                    <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science" target="_blank">Intro to Python for Data Science - DataCamp</a>
                    <a href="https://jakevdp.github.io/PythonDataScienceHandbook/" target="_blank">Python Data Science Handbook</a>
                </div>
            `
        },
        {
            id: 'prog-4',
            title: 'Introduction to R',
            duration: '25 min',
            description: 'Learn R for statistical analysis',
            content: `
                <h2>Introduction to R</h2>

                <h3>Why R for UX Research?</h3>
                <p>R is designed specifically for statistics and has excellent packages for survey analysis, modeling, and visualization. Many quant UXRs prefer R for statistical rigor.</p>

                <h3>Key Packages</h3>
                <ul>
                    <li><strong>tidyverse:</strong> Suite of packages for data manipulation (dplyr, ggplot2, tidyr)</li>
                    <li><strong>survey:</strong> Survey data analysis with weights</li>
                    <li><strong>lme4:</strong> Mixed-effects models</li>
                    <li><strong>psych:</strong> Psychometrics and scale development</li>
                </ul>

                <h3>Working with Data in R</h3>
                <div class="example">
                    <code>
                    # Install and load packages<br>
                    install.packages("tidyverse")<br>
                    library(tidyverse)<br>
                    <br>
                    # Read data<br>
                    df <- read_csv("survey_data.csv")<br>
                    <br>
                    # View data<br>
                    head(df)<br>
                    summary(df)
                    </code>
                </div>

                <h3>dplyr for Data Manipulation</h3>
                <div class="example">
                    <code>
                    # Select columns<br>
                    df %>% select(user_id, satisfaction, country)<br>
                    <br>
                    # Filter rows<br>
                    df %>% filter(satisfaction > 7)<br>
                    <br>
                    # Create new variables<br>
                    df <- df %>%<br>
                    &nbsp;&nbsp;mutate(high_sat = satisfaction > 7)<br>
                    <br>
                    # Group and summarize<br>
                    df %>%<br>
                    &nbsp;&nbsp;group_by(country) %>%<br>
                    &nbsp;&nbsp;summarise(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;mean_sat = mean(satisfaction),<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;sd_sat = sd(satisfaction),<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;n = n()<br>
                    &nbsp;&nbsp;)
                    </code>
                </div>

                <div class="key-point">
                    <strong>The Pipe Operator (%>%):</strong> Chains operations together, reading left to right. Makes code more readable: "Take data, then filter, then group, then summarize."
                </div>

                <h3>ggplot2 for Visualization</h3>
                <p>ggplot2 is one of the most powerful visualization tools available.</p>

                <div class="example">
                    <code>
                    # Histogram<br>
                    ggplot(df, aes(x = satisfaction)) +<br>
                    &nbsp;&nbsp;geom_histogram(bins = 10) +<br>
                    &nbsp;&nbsp;labs(title = "Satisfaction Distribution",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = "Satisfaction Score",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;y = "Count")<br>
                    <br>
                    # Bar chart by group<br>
                    df %>%<br>
                    &nbsp;&nbsp;group_by(country) %>%<br>
                    &nbsp;&nbsp;summarise(mean_sat = mean(satisfaction)) %>%<br>
                    &nbsp;&nbsp;ggplot(aes(x = country, y = mean_sat)) +<br>
                    &nbsp;&nbsp;geom_col() +<br>
                    &nbsp;&nbsp;coord_flip()<br>
                    <br>
                    # Scatterplot with trend line<br>
                    ggplot(df, aes(x = ease_of_use, y = satisfaction)) +<br>
                    &nbsp;&nbsp;geom_point() +<br>
                    &nbsp;&nbsp;geom_smooth(method = "lm")
                    </code>
                </div>

                <h3>Statistical Tests in R</h3>
                <div class="example">
                    <code>
                    # T-test<br>
                    t.test(satisfaction ~ condition, data = df)<br>
                    <br>
                    # Correlation<br>
                    cor.test(df$ease_of_use, df$satisfaction)<br>
                    <br>
                    # ANOVA<br>
                    aov_result <- aov(satisfaction ~ country, data = df)<br>
                    summary(aov_result)<br>
                    <br>
                    # Linear regression<br>
                    model <- lm(satisfaction ~ ease_of_use + features + speed, data = df)<br>
                    summary(model)
                    </code>
                </div>

                <h3>Working with Survey Weights</h3>
                <div class="example">
                    <code>
                    library(survey)<br>
                    <br>
                    # Create survey design object<br>
                    svy_design <- svydesign(<br>
                    &nbsp;&nbsp;ids = ~1,<br>
                    &nbsp;&nbsp;weights = ~weight,<br>
                    &nbsp;&nbsp;data = df<br>
                    )<br>
                    <br>
                    # Weighted mean<br>
                    svymean(~satisfaction, svy_design)<br>
                    <br>
                    # Weighted proportions by group<br>
                    svyby(~satisfaction, ~country, svy_design, svymean)
                    </code>
                </div>

                <h3>R vs Python</h3>
                <p><strong>Choose R when:</strong></p>
                <ul>
                    <li>Primary focus is statistical analysis</li>
                    <li>Working with survey data and weights</li>
                    <li>Need advanced statistical models</li>
                    <li>Creating publication-quality visualizations</li>
                </ul>

                <p><strong>Choose Python when:</strong></p>
                <ul>
                    <li>Integrating with engineering systems</li>
                    <li>Working with large-scale data pipelines</li>
                    <li>Using machine learning extensively</li>
                    <li>Your team already uses Python</li>
                </ul>

                <div class="key-point">
                    <strong>Reality Check:</strong> Many quant UXRs use both! Python for data extraction and cleaning, R for statistical analysis. Pick the best tool for each task.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://r4ds.had.co.nz/" target="_blank">R for Data Science (free book)</a>
                    <a href="https://swirlstats.com/" target="_blank">Learn R in R with Swirl</a>
                    <a href="https://ggplot2.tidyverse.org/" target="_blank">ggplot2 Documentation</a>
                </div>
            `
        },
        {
            id: 'prog-5',
            title: 'Data Visualization Best Practices',
            duration: '20 min',
            description: 'Create clear, effective visualizations',
            content: `
                <h2>Data Visualization Best Practices</h2>

                <h3>Why Visualization Matters</h3>
                <p>Good visualizations make insights instantly clear. Bad ones confuse or mislead. As a quant UXR, your ability to visualize data effectively is crucial for communicating findings.</p>

                <h3>Choosing the Right Chart Type</h3>

                <p><strong>Bar Charts:</strong> Compare categories</p>
                <ul>
                    <li>Use for: comparing means/counts across groups</li>
                    <li>Example: satisfaction by country, feature adoption by segment</li>
                    <li>Tip: Order bars by value (highest to lowest) unless there's a natural order</li>
                </ul>

                <p><strong>Line Charts:</strong> Show trends over time</p>
                <ul>
                    <li>Use for: tracking metrics over time</li>
                    <li>Example: satisfaction scores by month, user growth</li>
                    <li>Tip: Don't use lines for categorical data (use bars instead)</li>
                </ul>

                <p><strong>Scatterplots:</strong> Show relationships between two variables</p>
                <ul>
                    <li>Use for: exploring correlations, identifying patterns</li>
                    <li>Example: ease of use vs satisfaction, usage vs retention</li>
                    <li>Tip: Add a trend line to make relationship clearer</li>
                </ul>

                <p><strong>Box Plots:</strong> Show distribution and outliers</p>
                <ul>
                    <li>Use for: comparing distributions across groups</li>
                    <li>Example: task completion times by design variant</li>
                    <li>Tip: Explain what box plots show - not everyone knows!</li>
                </ul>

                <p><strong>Histograms:</strong> Show distribution of single variable</p>
                <ul>
                    <li>Use for: understanding shape of data</li>
                    <li>Example: distribution of satisfaction scores</li>
                </ul>

                <h3>Design Principles</h3>

                <div class="key-point">
                    <strong>Principle 1: Maximize Data-Ink Ratio</strong><br>
                    Remove unnecessary elements. Every pixel should convey information. Remove gridlines, reduce colors, eliminate chart junk.
                </div>

                <div class="key-point">
                    <strong>Principle 2: Use Color Purposefully</strong><br>
                    • Use color to highlight key findings<br>
                    • Limit to 2-3 colors per chart<br>
                    • Ensure colorblind-friendly palettes<br>
                    • Don't use color as only way to distinguish groups (use labels too)
                </div>

                <div class="key-point">
                    <strong>Principle 3: Start Y-Axis at Zero (Usually)</strong><br>
                    For bar charts showing counts or proportions, always start at zero. For line charts showing trends, sometimes you can truncate to show detail - but be transparent about it.
                </div>

                <div class="key-point">
                    <strong>Principle 4: Label Clearly</strong><br>
                    • Descriptive title that states the finding<br>
                    • Clear axis labels with units<br>
                    • Direct labels on lines/bars (better than legends when possible)<br>
                    • Include sample sizes
                </div>

                <div class="key-point">
                    <strong>Principle 5: Show Uncertainty</strong><br>
                    Include error bars (confidence intervals or standard errors) when comparing groups. Helps viewers assess whether differences are meaningful.
                </div>

                <h3>Common Mistakes to Avoid</h3>

                <p>❌ <strong>Pie charts:</strong> Hard to compare slices. Use bar charts instead.</p>
                <p>❌ <strong>3D effects:</strong> Distort perception. Stick to 2D.</p>
                <p>❌ <strong>Dual y-axes:</strong> Can be misleading. Use separate charts.</p>
                <p>❌ <strong>Too much data:</strong> One chart, one clear message. Break complex data into multiple simple charts.</p>
                <p>❌ <strong>Chartjunk:</strong> Remove decorative elements that don't convey information.</p>

                <h3>Examples: Before and After</h3>

                <div class="example">
                    <strong>Before:</strong> 3D pie chart with 8 slices, rainbow colors, no labels<br>
                    <strong>After:</strong> Horizontal bar chart showing top 5 categories, ordered by size, direct labels on bars<br>
                    <strong>Impact:</strong> Insight is immediately clear
                </div>

                <div class="example">
                    <strong>Before:</strong> Line chart with 10 different colored lines, tiny legend<br>
                    <strong>After:</strong> Same data but highlight the 2-3 most important lines in color, rest in gray<br>
                    <strong>Impact:</strong> Viewer knows what to focus on
                </div>

                <h3>Visualization Tools</h3>
                <ul>
                    <li><strong>R (ggplot2):</strong> Most powerful, steepest learning curve</li>
                    <li><strong>Python (matplotlib, seaborn):</strong> Very flexible</li>
                    <li><strong>Tableau:</strong> Great for interactive dashboards</li>
                    <li><strong>Google Sheets/Excel:</strong> Quick and accessible</li>
                    <li><strong>Datawrapper:</strong> Simple, clean charts for reports</li>
                </ul>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.edwardtufte.com/tufte/books_vdqi" target="_blank">The Visual Display of Quantitative Information - Tufte</a>
                    <a href="https://clauswilke.com/dataviz/" target="_blank">Fundamentals of Data Visualization (free book)</a>
                    <a href="https://www.storytellingwithdata.com/" target="_blank">Storytelling with Data - Cole Nussbaumer Knaflic</a>
                </div>
            `
        }
    ],

    researchDesign: [
        {
            id: 'rd-1',
            title: 'Introduction to Research Design',
            duration: '20 min',
            description: 'Learn how to design rigorous studies',
            content: `
                <h2>Introduction to Research Design</h2>

                <h3>What is Research Design?</h3>
                <p>Research design is your overall strategy for answering a research question. It's about making deliberate choices to ensure your findings are valid, reliable, and useful.</p>

                <div class="key-point">
                    <strong>Core Goal:</strong> Design studies that minimize bias and maximize validity, so you can be confident in your conclusions.
                </div>

                <h3>Types of Research Questions</h3>

                <p><strong>Descriptive:</strong> What is happening?</p>
                <ul>
                    <li>Example: What percentage of users have tried the new feature?</li>
                    <li>Method: Surveys, behavioral data analysis</li>
                </ul>

                <p><strong>Relational:</strong> How are things related?</p>
                <ul>
                    <li>Example: Is ease of use related to satisfaction?</li>
                    <li>Method: Correlational studies, regression analysis</li>
                </ul>

                <p><strong>Causal:</strong> Does X cause Y?</p>
                <ul>
                    <li>Example: Does the new onboarding flow increase activation?</li>
                    <li>Method: Experiments (A/B tests), quasi-experiments</li>
                </ul>

                <h3>Experimental vs Observational Studies</h3>

                <p><strong>Experiments:</strong></p>
                <ul>
                    <li>Researcher manipulates variables (e.g., randomly assign users to conditions)</li>
                    <li>Can establish causation</li>
                    <li>Example: A/B test with random assignment</li>
                </ul>

                <p><strong>Observational Studies:</strong></p>
                <ul>
                    <li>Researcher observes without manipulating</li>
                    <li>Can only establish association, not causation</li>
                    <li>Example: Survey asking about feature usage and satisfaction</li>
                </ul>

                <div class="key-point">
                    <strong>Remember:</strong> Only experiments (with random assignment) can prove causation. Observational studies show associations, which can be suggestive but not definitive.
                </div>

                <h3>Key Design Principles</h3>

                <p><strong>1. Define Clear Research Questions</strong></p>
                <p>Vague question: "Is our product good?"<br>
                Better: "Do users rate our product higher in satisfaction than our main competitor?"</p>

                <p><strong>2. Operationalize Your Variables</strong></p>
                <p>Define exactly how you'll measure abstract concepts.</p>
                <div class="example">
                    "User engagement" could mean:<br>
                    • Days active per week<br>
                    • Time spent in app<br>
                    • Number of key actions completed<br>
                    <br>
                    Choose one based on your research question.
                </div>

                <p><strong>3. Consider Confounds</strong></p>
                <p>Confounds are variables that might explain your results instead of (or in addition to) your variable of interest.</p>

                <div class="example">
                    You find power users are more satisfied. But is it because they use the product more (usage causes satisfaction), or because satisfied users become power users (satisfaction causes usage), or because a third factor (e.g., they have more time) causes both?
                </div>

                <p><strong>4. Think About Generalizability</strong></p>
                <p>Will your findings apply beyond your specific sample and context?</p>

                <h3>Internal vs External Validity</h3>

                <p><strong>Internal Validity:</strong> Are your conclusions correct for this study?</p>
                <ul>
                    <li>Threats: confounds, measurement error, selection bias</li>
                    <li>Maximize with: random assignment, control groups, reliable measures</li>
                </ul>

                <p><strong>External Validity:</strong> Do findings generalize beyond this study?</p>
                <ul>
                    <li>Threats: convenience samples, artificial settings</li>
                    <li>Maximize with: representative sampling, realistic conditions</li>
                </ul>

                <div class="key-point">
                    <strong>Trade-off:</strong> Tightly controlled lab studies have high internal validity but may lack external validity. Field studies are more generalizable but harder to control.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://conjointly.com/kb/research-design/" target="_blank">Research Design Guide - Conjointly</a>
                    <a href="https://socialresearchmethods.net/kb/" target="_blank">Research Methods Knowledge Base</a>
                </div>
            `,
            exercises: [
                {
                    question: 'You observe that users who enable dark mode have higher retention rates. Can you conclude that dark mode causes higher retention?',
                    options: [
                        'Yes, the data clearly shows dark mode improves retention',
                        'No, this is observational data - many confounds could explain the pattern',
                        'Yes, if the difference is statistically significant',
                        'No, but only because the sample size is too small'
                    ],
                    correct: 1,
                    feedback: {
                        correct: 'Correct! This is observational data. Perhaps users who care enough to customize settings are more engaged for other reasons. You\'d need an experiment with random assignment to establish causation.',
                        incorrect: 'This is observational data showing an association, not causation. Users who enable dark mode might differ in other ways (e.g., more engaged, more technical) that explain retention differences. You\'d need random assignment to claim causation.'
                    }
                }
            ]
        },
        {
            id: 'rd-2',
            title: 'Experimental Design & A/B Testing',
            duration: '25 min',
            description: 'Design and analyze randomized experiments',
            content: `
                <h2>Experimental Design & A/B Testing</h2>

                <h3>What Makes It an Experiment?</h3>
                <p>True experiments have three key features:</p>
                <ol>
                    <li><strong>Manipulation:</strong> Researcher controls the independent variable</li>
                    <li><strong>Random assignment:</strong> Participants randomly assigned to conditions</li>
                    <li><strong>Control:</strong> Hold other variables constant or control for them</li>
                </ol>

                <div class="key-point">
                    <strong>The Power of Random Assignment:</strong> By randomizing, you ensure groups are equivalent on average at the start. Any differences that emerge can be attributed to your manipulation.
                </div>

                <h3>A/B Testing in UX</h3>
                <p>A/B testing is the most common experimental method in UX. Compare two versions (A and B) by randomly assigning users to each.</p>

                <p><strong>When to use A/B tests:</strong></p>
                <ul>
                    <li>Testing design changes (layouts, colors, copy)</li>
                    <li>Evaluating new features</li>
                    <li>Optimizing conversion funnels</li>
                    <li>When you can easily randomize and have enough traffic</li>
                </ul>

                <h3>Designing an A/B Test</h3>

                <p><strong>Step 1: Define Your Hypothesis</strong></p>
                <div class="example">
                    Bad: "Let's test the new button"<br>
                    Good: "The larger CTA button will increase click-through rate by at least 2 percentage points"
                </div>

                <p><strong>Step 2: Choose Your Metrics</strong></p>
                <ul>
                    <li><strong>Primary metric:</strong> The key outcome you care about (e.g., conversion rate)</li>
                    <li><strong>Secondary metrics:</strong> Additional outcomes of interest</li>
                    <li><strong>Guardrail metrics:</strong> Metrics that shouldn't get worse (e.g., page load time)</li>
                </ul>

                <p><strong>Step 3: Calculate Sample Size</strong></p>
                <p>Determine how many users you need to detect your minimum effect size with adequate power.</p>

                <div class="example">
                    To detect a 2 percentage point increase in conversion (from 10% to 12%) with 80% power at α=0.05, you need approximately 3,850 users per group (7,700 total).
                </div>

                <div class="key-point">
                    <strong>Minimum Detectable Effect (MDE):</strong> The smallest effect size you care about detecting. Use this for sample size calculation. Smaller MDE requires larger sample.
                </div>

                <p><strong>Step 4: Run the Test</strong></p>
                <ul>
                    <li>Randomly assign users to A or B</li>
                    <li>Keep assignment consistent (same user sees same version)</li>
                    <li>Run until you reach your planned sample size</li>
                    <li>Don't peek! Checking results early increases false positives</li>
                </ul>

                <p><strong>Step 5: Analyze Results</strong></p>
                <ul>
                    <li>Compare primary metric between groups</li>
                    <li>Report point estimates, confidence intervals, p-values, effect sizes</li>
                    <li>Check secondary and guardrail metrics</li>
                    <li>Look for segment differences (but be careful about multiple testing)</li>
                </ul>

                <h3>Common Pitfalls</h3>

                <p><strong>1. Peeking:</strong> Checking results before reaching planned sample size</p>
                <ul>
                    <li>Problem: Inflates false positive rate</li>
                    <li>Solution: Pre-commit to sample size, use sequential testing methods if you must peek</li>
                </ul>

                <p><strong>2. Multiple Testing:</strong> Testing many variants or outcomes</p>
                <ul>
                    <li>Problem: More tests = more chances for false positives</li>
                    <li>Solution: Adjust significance threshold (Bonferroni correction) or use FDR control</li>
                </ul>

                <p><strong>3. SUTVA Violations:</strong> Stable Unit Treatment Value Assumption</p>
                <ul>
                    <li>Problem: Users in different groups affect each other (network effects)</li>
                    <li>Example: Social features where treatment users interact with control users</li>
                    <li>Solution: Randomize at appropriate unit (e.g., by geographic region or social network)</li>
                </ul>

                <p><strong>4. Novelty Effects:</strong> Initial excitement wears off</p>
                <ul>
                    <li>Problem: Short-term gains may not persist</li>
                    <li>Solution: Run tests long enough to see if effects stabilize</li>
                </ul>

                <h3>Beyond Simple A/B Tests</h3>

                <p><strong>Multivariate Testing:</strong> Test multiple elements simultaneously</p>
                <ul>
                    <li>Example: Test button color AND button text together</li>
                    <li>Challenge: Requires much larger samples</li>
                </ul>

                <p><strong>Multi-armed Bandits:</strong> Dynamically allocate traffic to best-performing variant</p>
                <ul>
                    <li>Trade-off: Faster optimization but harder to get clean statistical inference</li>
                </ul>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.exp-platform.com/Documents/2013-02-EBAY-ExP-PlatformTutorial.pdf" target="_blank">A/B Testing at Scale - Microsoft/eBay</a>
                    <a href="https://www.evanmiller.org/ab-testing/" target="_blank">AB Testing Resources - Evan Miller</a>
                </div>
            `
        },
        {
            id: 'rd-3',
            title: 'Threats to Validity',
            duration: '20 min',
            description: 'Identify and mitigate threats to research validity',
            content: `
                <h2>Threats to Validity</h2>

                <h3>Why This Matters</h3>
                <p>Even well-intentioned studies can produce misleading results. Understanding threats to validity helps you design better studies and critically evaluate research (yours and others').</p>

                <h3>Threats to Internal Validity</h3>
                <p>Internal validity: Can you be confident that X caused Y in your study?</p>

                <p><strong>1. Selection Bias</strong></p>
                <p>Groups differ at baseline (not due to random assignment).</p>
                <div class="example">
                    You compare new users (who see new onboarding) to existing users (who saw old onboarding). But new and existing users differ in many ways beyond onboarding! Use random assignment or matching to address this.
                </div>

                <p><strong>2. History</strong></p>
                <p>External events occur during your study that affect results.</p>
                <div class="example">
                    Your satisfaction survey coincides with negative press coverage about your company. Satisfaction drops, but is it due to what you're studying or the news? Include control group or control variables.
                </div>

                <p><strong>3. Maturation</strong></p>
                <p>Participants naturally change over time.</p>
                <div class="example">
                    You measure learning curve over weeks. Users improve, but is it due to your design or just practice? Include control group experiencing same time period.
                </div>

                <p><strong>4. Testing Effects</strong></p>
                <p>Taking a pre-test changes how people respond to treatment or post-test.</p>
                <div class="example">
                    Asking about feature awareness before exposing users to a feature might prime them to notice it more. Consider post-test only design or Solomon four-group design.
                </div>

                <p><strong>5. Instrumentation</strong></p>
                <p>Measurement tool changes during study.</p>
                <div class="example">
                    You update your satisfaction question midway through data collection. Changes in scores might reflect wording change, not true satisfaction change. Keep measures consistent.
                </div>

                <p><strong>6. Attrition</strong></p>
                <p>Participants drop out differentially across conditions.</p>
                <div class="example">
                    In a difficult-to-use design, frustrated users drop out. Remaining users are self-selected for patience. Your data overestimates usability. Track and report attrition rates; conduct sensitivity analyses.
                </div>

                <h3>Threats to External Validity</h3>
                <p>External validity: Do findings generalize beyond your specific study?</p>

                <p><strong>1. Sample Representativeness</strong></p>
                <div class="example">
                    You recruit participants from a tech forum. They're more tech-savvy than your general user base. Findings may not generalize. Use representative sampling when possible.
                </div>

                <p><strong>2. Setting</strong></p>
                <div class="example">
                    Usability test in a quiet lab may not reflect real-world multitasking environment. Consider in-situ testing or field studies when ecological validity matters.
                </div>

                <p><strong>3. Time</strong></p>
                <div class="example">
                    Your study is conducted during the holiday season. Behavior patterns may differ at other times. Consider whether timing affects generalizability.
                </div>

                <h3>Threats to Construct Validity</h3>
                <p>Construct validity: Are you measuring what you think you're measuring?</p>

                <p><strong>1. Inadequate Operationalization</strong></p>
                <div class="example">
                    You measure "engagement" with daily active users, but this misses users who engage deeply once a week. Choose measures that match your construct definition.
                </div>

                <p><strong>2. Mono-method Bias</strong></p>
                <div class="example">
                    You only use self-report measures. Social desirability bias may skew results. Use multiple methods (self-report + behavioral data).
                </div>

                <p><strong>3. Hypothesis Guessing</strong></p>
                <div class="example">
                    Participants figure out what you're testing and change their behavior. Use deception carefully or measure awareness.
                </div>

                <h3>Mitigation Strategies</h3>

                <ul>
                    <li><strong>Random assignment:</strong> Addresses selection bias</li>
                    <li><strong>Control groups:</strong> Addresses history, maturation, testing effects</li>
                    <li><strong>Blinding:</strong> Addresses expectancy effects</li>
                    <li><strong>Replication:</strong> Test if findings hold across contexts</li>
                    <li><strong>Triangulation:</strong> Use multiple methods/measures</li>
                    <li><strong>Pre-registration:</strong> Commit to analysis plan before seeing data</li>
                </ul>

                <div class="key-point">
                    <strong>Reality Check:</strong> No study is perfect. The goal is to be aware of limitations and design studies that minimize the most critical threats for your research question.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://socialresearchmethods.net/kb/intval.php" target="_blank">Internal Validity - Research Methods KB</a>
                    <a href="https://conjointly.com/kb/threats-to-validity/" target="_blank">Threats to Validity - Conjointly</a>
                </div>
            `
        },
        {
            id: 'rd-4',
            title: 'Quasi-Experimental Designs',
            duration: '20 min',
            description: 'Study causality when randomization is not possible',
            content: `
                <h2>Quasi-Experimental Designs</h2>

                <h3>What Are Quasi-Experiments?</h3>
                <p>Quasi-experiments try to establish causality without random assignment. They're useful when you can't randomize but still want to make causal inferences.</p>

                <div class="key-point">
                    <strong>Key Difference:</strong> In experiments, you randomly assign. In quasi-experiments, assignment is determined by other factors (user choice, policy, timing, etc.). This makes causal inference harder but not impossible.
                </div>

                <h3>When to Use Quasi-Experiments</h3>
                <ul>
                    <li>Ethical or practical constraints prevent randomization</li>
                    <li>Studying effects of features users opt into</li>
                    <li>Evaluating natural changes or rollouts</li>
                    <li>When A/B tests aren't feasible</li>
                </ul>

                <h3>Common Quasi-Experimental Designs</h3>

                <p><strong>1. Difference-in-Differences (DiD)</strong></p>
                <p>Compare change over time in treatment group to change in control group.</p>

                <div class="example">
                    <strong>Scenario:</strong> New feature rolled out in Europe but not US yet.<br>
                    <br>
                    <strong>Approach:</strong> Compare (Europe after - Europe before) to (US after - US before)<br>
                    <br>
                    <strong>Logic:</strong> US serves as counterfactual for what would have happened in Europe without the feature. Differences in time trends get "differenced out."<br>
                    <br>
                    <strong>Assumption:</strong> Parallel trends - Europe and US would have followed similar trends without treatment.
                </div>

                <p><strong>Key advantages:</strong></p>
                <ul>
                    <li>Controls for stable differences between groups</li>
                    <li>Controls for time trends affecting both groups</li>
                </ul>

                <p><strong>Key limitations:</strong></p>
                <ul>
                    <li>Requires parallel trends assumption (check with pre-treatment data)</li>
                    <li>Can't control for group-specific trends</li>
                </ul>

                <p><strong>2. Regression Discontinuity Design (RDD)</strong></p>
                <p>When treatment assignment is based on a cutoff, compare users just above and below the cutoff.</p>

                <div class="example">
                    <strong>Scenario:</strong> Premium features available to users with >50 connections.<br>
                    <br>
                    <strong>Approach:</strong> Compare outcomes for users with 49 vs 51 connections (just below/above threshold)<br>
                    <br>
                    <strong>Logic:</strong> Users near the threshold are very similar except for premium access.
                </div>

                <p><strong>Key advantages:</strong></p>
                <ul>
                    <li>Strong causal inference when properly executed</li>
                    <li>Users near cutoff are quasi-randomly assigned</li>
                </ul>

                <p><strong>Key limitations:</strong></p>
                <ul>
                    <li>Only applies to users near threshold (local effect)</li>
                    <li>Requires large samples near cutoff</li>
                    <li>Can be gamed if users know about cutoff</li>
                </ul>

                <p><strong>3. Interrupted Time Series</strong></p>
                <p>Track metric over time, look for change at point of intervention.</p>

                <div class="example">
                    <strong>Scenario:</strong> New pricing introduced at time T<br>
                    <br>
                    <strong>Approach:</strong> Examine trend before and after time T. Did level or slope change?<br>
                    <br>
                    <strong>Logic:</strong> Sudden change at intervention point suggests causal effect.
                </div>

                <p><strong>Key advantages:</strong></p>
                <ul>
                    <li>Works when everyone receives treatment (no control group needed)</li>
                    <li>Many pre-intervention observations strengthen inference</li>
                </ul>

                <p><strong>Key limitations:</strong></p>
                <ul>
                    <li>Can't rule out confounding events at same time</li>
                    <li>Needs long time series to establish baseline trend</li>
                </ul>

                <p><strong>4. Propensity Score Matching</strong></p>
                <p>Match treatment and control users who are similar on observed characteristics.</p>

                <div class="example">
                    <strong>Scenario:</strong> Users opt-in to beta feature. Compare adopters to non-adopters.<br>
                    <br>
                    <strong>Problem:</strong> Self-selection - adopters differ systematically.<br>
                    <br>
                    <strong>Approach:</strong> Calculate propensity score (probability of adoption given user characteristics). Match adopters to non-adopters with similar propensity scores. Compare matched pairs.
                </div>

                <p><strong>Key advantages:</strong></p>
                <ul>
                    <li>Controls for observed confounds</li>
                    <li>Creates comparable groups retrospectively</li>
                </ul>

                <p><strong>Key limitations:</strong></p>
                <ul>
                    <li>Can't control for unobserved confounds</li>
                    <li>Requires rich data on user characteristics</li>
                    <li>Assumes no unmeasured confounding (strong assumption!)</li>
                </ul>

                <h3>Strengthening Causal Inference</h3>

                <p><strong>1. Multiple comparison groups</strong></p>
                <p>Include several control groups to rule out alternative explanations.</p>

                <p><strong>2. Dose-response relationship</strong></p>
                <p>If more treatment leads to more effect, this strengthens causal claim.</p>

                <p><strong>3. Temporal precedence</strong></p>
                <p>Ensure cause precedes effect.</p>

                <p><strong>4. Rule out plausible alternatives</strong></p>
                <p>Explicitly test and refute alternative explanations.</p>

                <div class="key-point">
                    <strong>Important:</strong> Quasi-experiments are stronger than pure observational studies but weaker than true experiments. Be transparent about assumptions and limitations. Don't overstate causal claims.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://www.difference-in-differences.com/" target="_blank">Difference-in-Differences Resources</a>
                    <a href="https://journals.sagepub.com/doi/10.1177/1536867X0800800403" target="_blank">Regression Discontinuity Designs - Stata Journal</a>
                </div>
            `
        },
        {
            id: 'rd-5',
            title: 'Mixed Methods Research',
            duration: '20 min',
            description: 'Integrate qualitative and quantitative approaches',
            content: `
                <h2>Mixed Methods Research</h2>

                <h3>What Is Mixed Methods?</h3>
                <p>Mixed methods research combines qualitative and quantitative approaches in a single study or research program to provide a fuller understanding than either method alone.</p>

                <div class="key-point">
                    <strong>The Power of Integration:</strong> Qualitative helps you understand the "why" and discover unexpected insights. Quantitative helps you measure the "what" and "how much" at scale. Together, they're powerful.
                </div>

                <h3>Why Mixed Methods?</h3>
                <ul>
                    <li><strong>Triangulation:</strong> Converging evidence from multiple sources is more convincing</li>
                    <li><strong>Complementarity:</strong> One method elaborates or clarifies findings from another</li>
                    <li><strong>Development:</strong> Use one method to inform design of another</li>
                    <li><strong>Expansion:</strong> Extend breadth and depth of inquiry</li>
                </ul>

                <h3>Common Mixed Methods Designs</h3>

                <p><strong>1. Sequential Exploratory (QUAL → QUANT)</strong></p>
                <p>Start with qualitative, then follow up with quantitative.</p>

                <div class="example">
                    <strong>Phase 1:</strong> Conduct 15 interviews to understand pain points<br>
                    <strong>Phase 2:</strong> Design survey based on interview themes to measure prevalence of each pain point across 1,000 users<br>
                    <br>
                    <strong>Use when:</strong> Exploring new territory, developing measures, or need to understand context before quantifying
                </div>

                <p><strong>2. Sequential Explanatory (QUANT → QUAL)</strong></p>
                <p>Start with quantitative, then use qualitative to explain or explore findings.</p>

                <div class="example">
                    <strong>Phase 1:</strong> Survey shows satisfaction is lowest among users in their first month<br>
                    <strong>Phase 2:</strong> Interview new users to understand why they're dissatisfied<br>
                    <br>
                    <strong>Use when:</strong> Quantitative reveals unexpected patterns or you need to understand mechanisms behind numbers
                </div>

                <p><strong>3. Convergent Parallel</strong></p>
                <p>Collect qualitative and quantitative data simultaneously, then merge findings.</p>

                <div class="example">
                    <strong>Simultaneously:</strong><br>
                    • Survey measuring feature importance (quantitative)<br>
                    • Focus groups discussing feature needs (qualitative)<br>
                    <br>
                    <strong>Integration:</strong> Compare which features rank highest in survey vs what themes emerge in groups<br>
                    <br>
                    <strong>Use when:</strong> Want to validate findings across methods or have tight timeline
                </div>

                <p><strong>4. Embedded</strong></p>
                <p>Nest one method within a predominantly other-method study.</p>

                <div class="example">
                    <strong>Primary:</strong> Large-scale experiment (quantitative)<br>
                    <strong>Embedded:</strong> Interviews with subset of participants to understand their experience<br>
                    <br>
                    <strong>Use when:</strong> One method plays a supporting role to answer secondary questions
                </div>

                <h3>Integration Strategies</h3>

                <p><strong>During data collection:</strong></p>
                <ul>
                    <li>Use qualitative findings to develop quantitative measures</li>
                    <li>Use quantitative results to select qualitative participants (e.g., interview outliers)</li>
                </ul>

                <p><strong>During analysis:</strong></p>
                <ul>
                    <li>Transform qualitative data into quantitative (code and count themes)</li>
                    <li>Use qualitative data to explain quantitative patterns</li>
                </ul>

                <p><strong>During interpretation:</strong></p>
                <ul>
                    <li>Compare convergent/divergent findings</li>
                    <li>Use one method to contextualize other</li>
                    <li>Develop comprehensive narrative integrating both</li>
                </ul>

                <h3>Practical Examples in UX Research</h3>

                <div class="example">
                    <strong>Product Satisfaction Study:</strong><br>
                    1. Qualitative interviews reveal 5 key satisfaction drivers<br>
                    2. Develop survey measuring those 5 drivers<br>
                    3. Survey 500 users to quantify importance of each<br>
                    4. Run regression to identify top 2 drivers<br>
                    5. Interview high/low satisfaction users to understand why those drivers matter<br>
                    <br>
                    Result: Identified and understood key satisfaction drivers
                </div>

                <div class="example">
                    <strong>Feature Discovery Study:</strong><br>
                    1. Behavioral data shows only 20% use advanced features<br>
                    2. Survey finds users unaware features exist<br>
                    3. Usability tests reveal discoverability issues<br>
                    4. A/B test improved UI showing 30% adoption<br>
                    <br>
                    Result: Diagnosed and solved discovery problem using multiple methods
                </div>

                <h3>Challenges and Solutions</h3>

                <p><strong>Challenge:</strong> Resource intensive (time, budget)</p>
                <p><strong>Solution:</strong> Prioritize key questions, use lighter-weight methods (e.g., brief follow-up questions in survey), phased approach</p>

                <p><strong>Challenge:</strong> Different paradigms/worldviews</p>
                <p><strong>Solution:</strong> Embrace paradigmatic pluralism - methods are tools, use what works for your question</p>

                <p><strong>Challenge:</strong> Integrating disparate data types</p>
                <p><strong>Solution:</strong> Plan integration from the start, create visual displays (joint displays) showing both data types, be transparent about process</p>

                <div class="key-point">
                    <strong>Best Practice:</strong> Don't just put methods side-by-side. True integration means findings from one method inform or illuminate the other. Tell a cohesive story that leverages both.
                </div>

                <div class="resources">
                    <h4>Learn More:</h4>
                    <a href="https://us.sagepub.com/en-us/nam/designing-and-conducting-mixed-methods-research/book241842" target="_blank">Designing and Conducting Mixed Methods Research - Creswell & Clark</a>
                    <a href="https://www.nngroup.com/articles/mixed-methods-and-triangulation/" target="_blank">Mixed Methods and Triangulation - Nielsen Norman Group</a>
                </div>
            `
        }
    ]
};

// Practice exercises
const practiceExercises = [
    {
        id: 'practice-1',
        title: 'Survey Question Critique',
        description: 'Identify issues with survey questions and suggest improvements',
        questions: [
            {
                prompt: 'What is wrong with this question: "Don\'t you agree that our new feature is useful and easy to use?"',
                options: [
                    'Nothing - it\'s a clear question',
                    'It\'s a leading question AND asks two things at once',
                    'It\'s too short',
                    'It doesn\'t provide enough response options'
                ],
                correct: 1,
                explanation: 'This question has two major problems: (1) it\'s leading ("Don\'t you agree"), and (2) it asks about two different things (useful AND easy to use) in one question.'
            }
        ]
    },
    {
        id: 'practice-2',
        title: 'Sample Size Calculator',
        description: 'Practice calculating required sample sizes',
        interactive: true
    },
    {
        id: 'practice-3',
        title: 'Statistical Test Selection',
        description: 'Choose the right statistical test for different research scenarios',
        questions: [
            {
                prompt: 'You want to compare average satisfaction scores across 4 different countries. Which test should you use?',
                options: [
                    'T-test',
                    'ANOVA',
                    'Chi-square test',
                    'Correlation'
                ],
                correct: 1,
                explanation: 'ANOVA is the right choice for comparing means across 3+ groups. T-test only works for 2 groups.'
            }
        ]
    }
];

// Challenges and games
const challenges = [
    {
        id: 'challenge-1',
        title: 'P-value Detective',
        description: 'Interpret p-values correctly in different scenarios',
        type: 'quiz',
        difficulty: 'medium'
    },
    {
        id: 'challenge-2',
        title: 'Sample Size Speedrun',
        description: 'Calculate sample sizes as fast as you can',
        type: 'timed',
        difficulty: 'hard'
    },
    {
        id: 'challenge-3',
        title: 'Spot the Bias',
        description: 'Identify bias in research scenarios',
        type: 'game',
        difficulty: 'medium'
    },
    {
        id: 'challenge-4',
        title: 'SQL Challenge',
        description: 'Write SQL queries to answer research questions',
        type: 'coding',
        difficulty: 'hard'
    }
];
