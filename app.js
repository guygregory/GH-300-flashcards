const STUDY_GUIDE = "https://learn.microsoft.com/en-gb/credentials/certifications/resources/study-guides/gh-300";
const SOURCES = {
  responsible: "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/",
  principles: "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai",
  prompts: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices",
  flow: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow",
  data: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data",
  llm: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/5-github-copilot-large-language-models",
  intro: "https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/",
  productivity: "https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/",
  improvements: "https://learn.microsoft.com/en-us/training/modules/implement-code-improvements-using-github-copilot-tools/",
  management: "https://learn.microsoft.com/en-us/training/modules/github-copilot-management-and-customizations/"
};

const cards = [
  {
    id: "rai-definition",
    category: "Responsible AI",
    weight: "15–20%",
    question: "What does responsible AI mean?",
    answer: ["Develop, assess, and deploy AI in a <strong>safe, trustworthy, and ethical</strong> way.", "Keep people and their goals central while respecting fairness, reliability, privacy, and transparency."],
    source: SOURCES.responsible
  },
  {
    id: "rai-principles",
    category: "Responsible AI",
    weight: "15–20%",
    question: "What are Microsoft and GitHub’s six responsible AI principles?",
    answer: ["<strong>Fairness</strong>", "<strong>Reliability and safety</strong>", "<strong>Privacy and security</strong>", "<strong>Inclusiveness</strong>", "<strong>Transparency</strong>", "<strong>Accountability</strong>"],
    source: SOURCES.principles
  },
  {
    id: "rai-risk",
    category: "Responsible AI",
    weight: "15–20%",
    question: "How should organizations mitigate generative AI risks?",
    answer: ["Use robust governance frameworks.", "Make AI processes transparent.", "Keep meaningful human oversight.", "Continuously monitor outcomes for bias, privacy violations, and unintended harm."],
    source: SOURCES.responsible
  },
  {
    id: "rai-fairness",
    category: "Responsible AI",
    weight: "15–20%",
    question: "How can teams put AI fairness into practice?",
    answer: ["Review training data and test with balanced demographic samples.", "Monitor performance across user segments.", "Add controls that can override unfair outcomes."],
    source: SOURCES.principles
  },
  {
    id: "rai-accountability",
    category: "Responsible AI",
    weight: "15–20%",
    question: "Who is accountable for AI-generated output?",
    answer: ["<strong>People remain accountable.</strong>", "Creators and users should validate output, monitor performance, disclose limitations, and mitigate risks rather than treating Copilot as an authority."],
    source: SOURCES.principles
  },
  {
    id: "features-surfaces",
    category: "Copilot features",
    weight: "25–30%",
    question: "What are the core ways to interact with GitHub Copilot?",
    answer: ["Use inline suggestions as you type.", "Ask questions or request changes in Copilot Chat.", "Work from the command line with Copilot CLI.", "Delegate multi-step work through agent mode."],
    source: STUDY_GUIDE
  },
  {
    id: "features-inline-chat",
    category: "Copilot features",
    weight: "25–30%",
    question: "Inline suggestions or Chat: when should you use each?",
    answer: ["Use <strong>inline suggestions</strong> for completions in the current editing flow.", "Use <strong>Chat</strong> for explanations, broader questions, generation, debugging, and iterative requests."],
    source: SOURCES.intro
  },
  {
    id: "features-agent",
    category: "Copilot features",
    weight: "25–30%",
    question: "What distinguishes agent mode from a single chat response?",
    answer: ["Agent mode can plan and carry out a multi-step task, inspect context, edit files, and use tools.", "You still review its plan, changes, commands, and final result."],
    source: STUDY_GUIDE
  },
  {
    id: "features-mcp",
    category: "Copilot features",
    weight: "25–30%",
    question: "What role does MCP play in Copilot workflows?",
    answer: ["The <strong>Model Context Protocol</strong> connects Copilot to external tools and data sources.", "It expands the context and actions available to an agent beyond the editor and repository."],
    source: STUDY_GUIDE
  },
  {
    id: "features-cli",
    category: "Copilot features",
    weight: "25–30%",
    question: "Why use GitHub Copilot CLI?",
    answer: ["Get coding help without leaving the terminal.", "Use interactive sessions, generate scripts, explain commands, and manage files while keeping terminal context close at hand."],
    source: STUDY_GUIDE
  },
  {
    id: "features-review",
    category: "Copilot features",
    weight: "25–30%",
    question: "What is the right workflow for Copilot code review?",
    answer: ["Ask Copilot to identify quality, reliability, performance, and security issues.", "Treat feedback as suggestions: verify each finding, apply valid fixes, then run the project’s tests and checks."],
    source: SOURCES.improvements
  },
  {
    id: "features-instructions",
    category: "Copilot features",
    weight: "25–30%",
    question: "Why use instruction and prompt files?",
    answer: ["Instructions communicate reusable project standards and review expectations.", "Prompt files make common prompts repeatable, improving consistency without restating the same context each time."],
    source: STUDY_GUIDE
  },
  {
    id: "features-management",
    category: "Copilot features",
    weight: "25–30%",
    question: "What can organization administrators manage?",
    answer: ["Policies and feature availability across IDEs and GitHub.com.", "Copilot code review settings, subscriptions, content exclusions, and audit log visibility."],
    source: STUDY_GUIDE
  },
  {
    id: "features-spaces",
    category: "Copilot features",
    weight: "25–30%",
    question: "What should you remember about Spaces, Spark, and PR summaries?",
    answer: ["<strong>Spaces</strong> organize context for focused collaboration.", "<strong>Spark</strong> supports creating applications from natural language.", "PR summaries help reviewers understand proposed changes faster."],
    source: STUDY_GUIDE
  },
  {
    id: "architecture-context",
    category: "Data & architecture",
    weight: "10–15%",
    question: "What context can Copilot gather before generating a suggestion?",
    answer: ["Code before and after the cursor.", "Filename and file type.", "Adjacent open tabs.", "Project structure, paths, languages, and frameworks."],
    source: SOURCES.flow
  },
  {
    id: "architecture-fim",
    category: "Data & architecture",
    weight: "10–15%",
    question: "What is Fill-in-the-Middle (FIM) preprocessing?",
    answer: ["FIM gives the model code from <strong>both before and after</strong> the cursor.", "This broader context helps Copilot generate a completion that fits the surrounding code."],
    source: SOURCES.flow
  },
  {
    id: "architecture-inbound",
    category: "Data & architecture",
    weight: "10–15%",
    question: "What is the inbound prompt flow?",
    answer: ["Secure HTTPS transmission and context gathering.", "Proxy protection against prompt manipulation.", "Content and personal-data filtering.", "Filtered prompt sent to an LLM for generation."],
    source: SOURCES.flow
  },
  {
    id: "architecture-outbound",
    category: "Data & architecture",
    weight: "10–15%",
    question: "What happens after the LLM creates a response?",
    answer: ["Post-processing checks harmful content, common vulnerabilities, and—when configured—matches to public code.", "Only responses that pass filtering are delivered to the user."],
    source: SOURCES.flow
  },
  {
    id: "architecture-window",
    category: "Data & architecture",
    weight: "10–15%",
    question: "Why does the context window matter?",
    answer: ["A model can process only a limited amount of code and conversation at once.", "Focused prompts, relevant snippets, and smaller tasks reduce noise and improve the chance of a useful answer."],
    source: SOURCES.data
  },
  {
    id: "architecture-llm",
    category: "Data & architecture",
    weight: "10–15%",
    question: "Why can an LLM produce a confident but incorrect answer?",
    answer: ["An LLM predicts likely text from learned patterns; it does not possess human understanding or guarantee correctness.", "Always validate generated logic, dependencies, security, and factual claims."],
    source: SOURCES.llm
  },
  {
    id: "prompt-four-s",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "What are the 4 S’s of effective prompting?",
    answer: ["<strong>Single:</strong> one well-defined task.", "<strong>Specific:</strong> explicit, detailed instructions.", "<strong>Short:</strong> concise and focused.", "<strong>Surround:</strong> provide useful nearby context."],
    source: SOURCES.prompts
  },
  {
    id: "prompt-context",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "How can you improve the context available to Copilot?",
    answer: ["Use descriptive filenames and keep relevant files open.", "Reference exact code, constraints, languages, frameworks, and expected output.", "Break broad problems into focused requests."],
    source: SOURCES.prompts
  },
  {
    id: "prompt-shots",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "Zero-shot, one-shot, and few-shot: what is the difference?",
    answer: ["<strong>Zero-shot:</strong> no example.", "<strong>One-shot:</strong> one example establishes a pattern.", "<strong>Few-shot:</strong> several examples clarify conventions, scenarios, and edge cases."],
    source: SOURCES.prompts
  },
  {
    id: "prompt-iterate",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "What should you do when the first response misses the mark?",
    answer: ["Iterate instead of starting over.", "Add missing constraints, context, and examples; state what was wrong; then ask Copilot to revise the response."],
    source: SOURCES.prompts
  },
  {
    id: "prompt-history",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "How should you manage a long Copilot Chat history?",
    answer: ["Summarize prior context when a thread grows lengthy.", "Start a focused conversation for a new feature.", "Use concise references instead of carrying irrelevant history forward."],
    source: SOURCES.prompts
  },
  {
    id: "prompt-role",
    category: "Prompt engineering",
    weight: "10–15%",
    question: "What is role prompting?",
    answer: ["Ask Copilot to approach a task from a relevant expert perspective, such as security, performance, or testing.", "Pair the role with concrete requirements; a role never replaces validation."],
    source: SOURCES.prompts
  },
  {
    id: "productivity-sdlc",
    category: "Productivity & quality",
    weight: "10–15%",
    question: "Where can Copilot help across the SDLC?",
    answer: ["Planning and learning.", "Code generation, explanation, refactoring, and documentation.", "Testing, review, debugging, security improvement, and modernization."],
    source: SOURCES.productivity
  },
  {
    id: "productivity-testing",
    category: "Productivity & quality",
    weight: "10–15%",
    question: "How should Copilot support testing?",
    answer: ["Generate unit and integration test drafts.", "Ask for happy paths, boundaries, invalid inputs, failures, and meaningful assertions.", "Review generated tests and run them—coverage is not correctness."],
    source: STUDY_GUIDE
  },
  {
    id: "productivity-refactor",
    category: "Productivity & quality",
    weight: "10–15%",
    question: "What makes an AI-assisted refactor safe?",
    answer: ["State the intended behavior and constraints.", "Request small, reviewable changes.", "Inspect the diff and validate quality, reliability, performance, security, and tests after every change."],
    source: SOURCES.improvements
  },
  {
    id: "productivity-measure",
    category: "Productivity & quality",
    weight: "10–15%",
    question: "How should a team evaluate Copilot’s productivity impact?",
    answer: ["Measure outcomes across the workflow, not suggestion volume alone.", "Balance speed and reduced context switching with quality, security, developer experience, and the effort required to review AI output."],
    source: SOURCES.productivity
  },
  {
    id: "privacy-exclusion",
    category: "Privacy & safeguards",
    weight: "10–15%",
    question: "What do content exclusions do?",
    answer: ["Administrators can configure files or repositories that Copilot should not use as context.", "Exclusions reduce unintended exposure, but teams must understand feature-specific limitations and still avoid placing secrets in prompts."],
    source: SOURCES.management
  },
  {
    id: "privacy-public-code",
    category: "Privacy & safeguards",
    weight: "10–15%",
    question: "What does the public-code matching filter do?",
    answer: ["When enabled, it can block suggestions over roughly 150 characters that closely match public code on GitHub.", "It is a safeguard—not a substitute for reviewing provenance, licenses, and suitability."],
    source: SOURCES.flow
  },
  {
    id: "privacy-data-min",
    category: "Privacy & safeguards",
    weight: "10–15%",
    question: "Which data practices support privacy and security?",
    answer: ["Obtain consent and explain data use.", "Collect only necessary data.", "Anonymize personal data where possible.", "Encrypt sensitive data and tightly control access and keys."],
    source: SOURCES.principles
  },
  {
    id: "privacy-ownership",
    category: "Privacy & safeguards",
    weight: "10–15%",
    question: "What responsibility comes with using Copilot output?",
    answer: ["Users are responsible for reviewing whether output is correct, secure, and appropriate to use.", "Check organizational policy, contractual protections, public-code matches, and applicable licenses."],
    source: SOURCES.management
  },
  {
    id: "privacy-troubleshoot",
    category: "Privacy & safeguards",
    weight: "10–15%",
    question: "What should you check when Copilot suggestions are unavailable?",
    answer: ["Confirm access, subscription, extension sign-in, and feature policy.", "Check editor settings, network connectivity, content exclusions, and whether the language or environment is supported."],
    source: SOURCES.management
  }
];

const elements = {
  card: document.querySelector("#card"),
  question: document.querySelector("#question"),
  answer: document.querySelector("#answer"),
  topicFront: document.querySelector("#topic-front"),
  topicBack: document.querySelector("#topic-back"),
  weight: document.querySelector("#weight"),
  source: document.querySelector("#source"),
  category: document.querySelector("#category"),
  previous: document.querySelector("#previous"),
  next: document.querySelector("#next"),
  shuffle: document.querySelector("#shuffle"),
  position: document.querySelector("#position"),
  seen: document.querySelector("#seen"),
  progress: document.querySelector("#progress"),
  announcement: document.querySelector("#announcement")
};

let deck = [...cards];
let currentIndex = 0;
let startX = 0;
let startY = 0;
let moved = false;
const seenCards = new Set(readSeenCards());

function readSeenCards() {
  try {
    return JSON.parse(localStorage.getItem("gh300-seen") || "[]");
  } catch {
    return [];
  }
}

function saveSeenCards() {
  try {
    localStorage.setItem("gh300-seen", JSON.stringify([...seenCards]));
  } catch {
    // Studying still works when storage is unavailable.
  }
}

function populateCategories() {
  [...new Set(cards.map((card) => card.category))].forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.category.append(option);
  });
}

function appendAnswerItem(container, content) {
  const strongPattern = /<strong>(.*?)<\/strong>/g;
  let cursor = 0;
  let match = strongPattern.exec(content);

  while (match) {
    container.append(document.createTextNode(content.slice(cursor, match.index)));
    const strong = document.createElement("strong");
    strong.textContent = match[1];
    container.append(strong);
    cursor = strongPattern.lastIndex;
    match = strongPattern.exec(content);
  }

  container.append(document.createTextNode(content.slice(cursor)));
}

function renderCard({ announce = false } = {}) {
  const card = deck[currentIndex];
  elements.card.classList.remove("flipped");
  elements.question.textContent = card.question;
  elements.topicFront.textContent = card.category;
  elements.topicBack.textContent = card.category;
  elements.weight.textContent = card.weight;
  elements.answer.replaceChildren();

  const list = document.createElement("ul");
  card.answer.forEach((item) => {
    const entry = document.createElement("li");
    appendAnswerItem(entry, item);
    list.append(entry);
  });
  elements.answer.append(list);

  elements.source.href = card.source;
  elements.position.textContent = `Card ${currentIndex + 1} of ${deck.length}`;
  const studiedInDeck = deck.filter((item) => seenCards.has(item.id)).length;
  elements.seen.textContent = `${studiedInDeck} studied`;
  elements.progress.style.width = `${((currentIndex + 1) / deck.length) * 100}%`;
  if (announce) {
    elements.announcement.textContent = `Category: ${card.category}. Position: card ${currentIndex + 1} of ${deck.length}. Question: ${card.question}`;
  }
}

function flipCard() {
  const isFlipped = elements.card.classList.toggle("flipped");
  if (isFlipped) {
    seenCards.add(deck[currentIndex].id);
    saveSeenCards();
    elements.seen.textContent = `${deck.filter((item) => seenCards.has(item.id)).length} studied`;
    elements.announcement.textContent = "Answer revealed";
  } else {
    elements.announcement.textContent = "Question shown";
  }
}

function move(direction) {
  currentIndex = (currentIndex + direction + deck.length) % deck.length;
  renderCard({ announce: true });
}

function filterDeck() {
  const selected = elements.category.value;
  deck = selected === "all" ? [...cards] : cards.filter((card) => card.category === selected);
  currentIndex = 0;
  renderCard({ announce: true });
}

function shuffleDeck() {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
  currentIndex = 0;
  renderCard();
  elements.announcement.textContent = `${deck.length} cards shuffled`;
}

elements.card.addEventListener("click", (event) => {
  if (!moved && !event.target.closest("a")) {
    flipCard();
  }
});

elements.card.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    flipCard();
  }
});

elements.card.addEventListener("pointerdown", (event) => {
  startX = event.clientX;
  startY = event.clientY;
  moved = false;
});

elements.card.addEventListener("pointerup", (event) => {
  const differenceX = event.clientX - startX;
  const differenceY = event.clientY - startY;
  if (Math.abs(differenceX) > 55 && Math.abs(differenceX) > Math.abs(differenceY)) {
    moved = true;
    move(differenceX < 0 ? 1 : -1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("select, a, button")) {
    return;
  }
  if (event.key === "ArrowRight") {
    move(1);
  }
  if (event.key === "ArrowLeft") {
    move(-1);
  }
});

elements.previous.addEventListener("click", () => move(-1));
elements.next.addEventListener("click", () => move(1));
elements.shuffle.addEventListener("click", shuffleDeck);
elements.category.addEventListener("change", filterDeck);

populateCategories();
renderCard();
