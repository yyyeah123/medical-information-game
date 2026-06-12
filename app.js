const questions = [
  {
    title: "半夜准点醒，表示睡眠“亮红灯”。",
    sourceTag: "小红书平台",
    source: "账号认证为“健康博主”，粉丝约 85 万。",
    summary: "视频称：如果最近总在后半夜固定时间醒来，说明睡眠已经亮起红灯。正常人睡觉应该一觉到天亮，中途醒来代表身体发出警告。",
    answer: false,
    evidence: [
      "发布者并非专业睡眠医学机构",
      "“正常人必须一觉睡到天亮”不符合睡眠医学常识",
      "未提供医学研究或权威来源"
    ],
    symptoms: ["歪曲常识", "制造焦虑", "标题党"],
    analysis: "偶尔半夜醒来是正常的生理现象，并不一定代表睡眠出了问题。\n\n健康成年人整夜睡眠中会经历 4~6 个完整睡眠周期，每个周期结束时可能发生短暂微觉醒。后半夜处于快速眼动睡眠与浅睡眠转换阶段时，人更容易醒来，所以不能仅凭“固定时间醒来”就判断身体出问题。",
    message: "看到涉及疾病判断的信息时，要警惕“一刀切”式结论。注意注意！人体存在个体差异，医学问题很少能仅凭一个症状下定论。"
  },
  {
    title: "关节“咔咔”响是因为缺钙。",
    sourceTag: "养生公众号",
    source: "文章标题：《关节一响，缺钙报警！》。",
    summary: "正文摘要：关节发出“咔咔”声，其实是身体缺钙的信号。如果不及时补钙，将来可能发展成骨质疏松。",
    answer: false,
    evidence: ["缺乏医学证据", "非正规医学公众号", "夸大事实"],
    symptoms: ["歪曲常识", "制造焦虑"],
    analysis: "关节“咔咔”响，即关节弹响，与是否缺钙没有直接关系。国内学者普遍认为，关节弹响可能由关节腔内气泡爆裂、关节液不足、关节韧带摩擦等情况引起。\n\n关节腔是一个密闭腔，当关节活动时，关节腔内负压增大，关节液会产生气泡；当关节恢复原位时，气泡爆裂，就可能发出“咔咔”声。长期缺乏活动也可能导致关节液分泌减少，突然活动时出现弹响。若长时间保持一个姿势，关节周围肌肉、韧带处于紧绷状态，活动时也可能发生摩擦并发出声响。\n\n如果只是偶尔弹响、没有疼痛和活动受限，一般不必过度焦虑；若伴随疼痛、肿胀或活动障碍，则应及时就医。",
    message: "健康谣言常把复杂问题简单化，例如将一种现象直接归因于某种疾病或营养缺乏。遇到“出现某症状＝患某病”的说法时，不妨多查阅正规医疗机构或医生的解释哟。"
  },
  {
    title: "抗过敏药物会上瘾，不能长期使用。",
    sourceTag: "微博热搜",
    source: "出镜者被称为“过敏专家陈教授”，但认证信息无法查询。",
    summary: "视频称：抗过敏药不能长期吃，吃久了会产生依赖性，导致离不开药。",
    answer: false,
    evidence: ["无明确的专业医学身份", "来源于微博", "缺乏医学证据"],
    validEvidenceIndex: [0, 2],
    symptoms: ["冒充权威", "歪曲常识"],
    analysis: "现在常用的抗过敏药物，如抗组胺药、鼻用激素，并不会让人产生成瘾性。过敏患者用药期间不宜自行停药，以免导致症状反复或加重。\n\n不过，长期用药仍需遵医嘱，因为部分抗组胺药可能导致嗜睡、注意力不集中等副作用。",
    message: "“专家说”“教授提醒”不一定代表权威。面对医疗建议，要关注是谁说的，也要看依据是什么。"
  },
  {
    title: "磁共振成像可预测心力衰竭风险。",
    sourceTag: "中国经济网",
    source: "研究成果发表于《欧洲心力衰竭杂志》。",
    summary: "摘要称：心脏 MRI 扫描结合人工智能，可估算心脏内部压力，其数值偏高者患心衰风险会增至 5 倍，能助力心衰预防、早筛与治疗。",
    answer: true,
    evidence: [],
    symptoms: [],
    analysis: "该信息为真实医疗资讯。相关研究显示，心脏 MRI 扫描结合人工智能技术，可能用于估算心脏内部压力，从而帮助预测心力衰竭风险。\n\n这类信息有明确媒体来源、研究机构和论文发表渠道，可信度高于无来源的网络传言。",
    message: "看到医学新进展时，可以关注信息是否说明研究机构、样本来源、论文出处和发布平台。"
  },
  {
    title: "微波炉加热食物会致癌。",
    sourceTag: "新闻截图",
    source: "文章标题：澎湃新闻证实：微波炉加热食物会致癌！正文引用了一张澎湃新闻截图。",
    summary: "网传截图称“炉微没有辐射，对人体危害大，加热的食物还会致癌”，但截图没有完整上下文。",
    answer: false,
    evidence: ["无明确医学证据", "截图没有截全，断章取义", "非官方渠道信息源"],
    symptoms: ["断章取义", "标题党"],
    analysis: "微波炉的加热原理是让食物中的水分子振荡，从而产生热量。在这个过程中，不会让食物元素变成放射性物质。\n\n食物如果加热过度、变糊，确实可能产生一些有害物质，但这属于温度或时间使用不当，并不等于“微波炉加热食物就会致癌”。",
    message: "截图不等于事实。遇到新闻截图、聊天记录、图片证据，最好寻找原始报道或完整内容核实。"
  },
  {
    title: "吃苹果抗癌。",
    sourceTag: "短视频平台",
    source: "短视频称：哈佛大学最新研究，每天吃 2 个苹果，癌症风险降低 80%。视频中没有论文编号和出处。",
    summary: "视频还标有“由 AI 生成”，但用“顶级大学最新研究”包装结论。",
    answer: false,
    evidence: ["视频中没有研究论文编号和出处", "视频标有“由 AI 生成”", "给出夸大数据"],
    symptoms: ["冒充权威", "数据夸大"],
    analysis: "苹果含有多种抗氧化成分和膳食纤维，可能通过调节炎症、减少氧化损伤等方式，辅助降低某些疾病风险，但无法直接“抗癌”。\n\n“癌症风险降低 80%”这类惊人数字，如果没有论文出处、研究设计和样本信息，很可能属于夸大宣传。",
    message: "当资讯出现“最新研究证明”“世界顶级大学发现”等表述，要继续追问：研究名称是什么？论文在哪里？样本有多少？"
  },
  {
    title: "肥胖会影响生育力。",
    sourceTag: "国家卫健委",
    source: "来源：国家卫健委相关科普信息。",
    summary: "信息称：肥胖会影响男性和女性生育力，也可能增加不良妊娠结局风险。",
    answer: true,
    evidence: [],
    symptoms: [],
    analysis: "该信息为真实医疗资讯。肥胖是导致男性生育力低下或不育的重要因素之一，可能使性激素水平异常，进而影响精子的形成与质量。\n\n肥胖也会增加女性不孕风险，肥胖女性怀孕后更容易出现不良妊娠结局。",
    message: "判断健康信息时，来自权威部门或正规医疗机构的信息通常更值得优先参考。"
  },
  {
    title: "与乙肝/丙肝患者日常接触会被传染。",
    sourceTag: "亲友提醒",
    source: "信息背景：家里亲戚叮嘱，不要和乙肝/丙肝患者接触，会被传染。",
    summary: "该说法来自亲友口耳相传，没有提供权威来源。",
    answer: false,
    evidence: ["传播者无医学背景", "此信息没有经过核实"],
    symptoms: ["道听途说", "未经核实"],
    analysis: "乙型肝炎病毒和丙型肝炎病毒主要通过血液传播、性传播和母婴传播。日常学习、工作和生活中的一般接触，如握手、拥抱、共用办公用品等，不会传染乙肝或丙肝。\n\n因此，不能因为疾病名称可怕，就把普通接触等同于感染风险。",
    message: "许多健康谣言来自经验传播和口耳相传。即使消息来自亲友，也不代表一定正确。"
  },
  {
    title: "注射进口药将从明年逐渐减少销售。",
    sourceTag: "朋友圈消息",
    source: "朋友圈消息称：国家药监局决定，注射进口药将从明年逐渐减少销售。",
    summary: "消息未附官方文件，也不是官方渠道发布，传播主体为个人。",
    answer: false,
    evidence: ["信息源非官方传播渠道", "未见官方文件", "传播主体为个人"],
    symptoms: ["恶意造谣", "道听途说"],
    analysis: "该信息涉及国家政策、药品管理和医疗行业，应先从国家药监局等官方渠道核实。目前这类朋友圈说法缺少官方文件和正规发布渠道支持，不应轻信或转发。\n\n面对这类关乎医疗行业的重要信息，应从官方正规渠道获取，也应提醒传播者停止散布未经证实的消息。",
    message: "凡是涉及国家政策、医保制度、药品管理等重大信息，都应以官方文件和官方发布渠道为准。"
  },
  {
    title: "“无管”手术重新定义“微创”。",
    sourceTag: "中国经济网",
    source: "报道标题：《损伤更小、恢复更快、费用更少：“无管”手术重新定义“微创”》。",
    summary: "摘要称：肺癌患者术中无气管插管、不置导尿管，术后几小时即可下床活动。",
    answer: true,
    evidence: [],
    symptoms: [],
    analysis: "该信息为真实医疗资讯。“无管”手术即 Tubeless 自主呼吸单孔镜手术，又称无管化技术，指在围手术期尽量避免插入气管插管、导尿管、中心静脉导管、胸腔闭式引流管等管路。\n\n该技术可以减少患者痛苦，并有助于加速康复，但是否适合具体患者仍需由专业医生评估。",
    message: "真实医疗资讯也不等于人人适用。遇到具体治疗方案，仍要结合医生诊断和个人病情判断。"
  }
];

let currentIndex = 0;
let score = 0;
let correctCount = 0;
let lastJudgeCorrect = false;
let waitingForEvidence = false;
let selectedEvidenceCorrect = null;

const patientImages = Array.from({ length: 10 }, (_, index) => `assets/characters/patient-${index + 1}.png`);

const $ = (id) => document.getElementById(id);

const homeScreen = $("homeScreen");
const gameScreen = $("gameScreen");
const resultScreen = $("resultScreen");

const startBtn = $("startBtn");
const introModal = $("introModal");
const introStartBtn = $("introStartBtn");
const bubbleBtn = $("bubbleBtn");
const bubbleText = $("bubbleText");
const questionCard = $("questionCard");
const patient = $("patient");
const patientImage = $("patientImage");

const caseProgress = $("caseProgress");
const scoreText = $("scoreText");
const sourceTag = $("sourceTag");
const caseLabel = $("caseLabel");
const questionTitle = $("questionTitle");
const questionSource = $("questionSource");
const questionSummary = $("questionSummary");

const trueBtn = $("trueBtn");
const falseBtn = $("falseBtn");

const evidenceModal = $("evidenceModal");
const evidenceOptions = $("evidenceOptions");
const evidenceTip = $("evidenceTip");
const submitEvidenceBtn = $("submitEvidenceBtn");
const closeEvidenceBtn = $("closeEvidenceBtn");

const diagnosisModal = $("diagnosisModal");
const judgeFeedback = $("judgeFeedback");
const diagnosisResult = $("diagnosisResult");
const symptomSection = $("symptomSection");
const symptoms = $("symptoms");
const analysisTitle = $("analysisTitle");
const diagnosisAnalysis = $("diagnosisAnalysis");
const doctorMessage = $("doctorMessage");
const nextBtn = $("nextBtn");

const finalScore = $("finalScore");
const correctCountEl = $("correctCount");
const accuracyText = $("accuracyText");
const rankTitle = $("rankTitle");
const rankComment = $("rankComment");
const restartBtn = $("restartBtn");
const shareBtn = $("shareBtn");
const copyTip = $("copyTip");

const bgmAudio = new Audio("assets/audio/bgm.mp3");
const paperAudio = new Audio("assets/audio/paper.mp3");
const achievementAudio = new Audio("assets/audio/achievement.mp3");

bgmAudio.loop = true;
bgmAudio.volume = 0.60;
paperAudio.volume = 0.40;
achievementAudio.volume = 0.78;

function startBgm() {
  bgmAudio.play().catch(() => {
    // 浏览器可能限制自动播放，等待下一次用户点击即可。
  });
}

function playSound(audio, { duckBgm = false } = {}) {
  try {
    audio.currentTime = 0;
    if (duckBgm) {
      bgmAudio.volume = 0.50;
      setTimeout(() => {
        bgmAudio.volume = 0.60;
      }, 2200);
    }
    audio.play().catch(() => {});
  } catch (error) {
    // 音频失败不影响游戏流程。
  }
}

function playBeep(type = "click") {
  // 无需音频文件，用浏览器自带 AudioContext 生成轻微提示音
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = type === "correct" ? 740 : type === "wrong" ? 220 : 520;
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.70, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.17);
  } catch (error) {
    // 如果浏览器限制音频，不影响游戏运行
  }
}

function switchScreen(screen) {
  [homeScreen, gameScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function initGame() {
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  lastJudgeCorrect = false;
  waitingForEvidence = false;
  selectedEvidenceCorrect = null;
  switchScreen(gameScreen);
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentIndex];

  caseProgress.textContent = `${currentIndex + 1}/${questions.length}`;
  scoreText.textContent = `${score} 分`;
  sourceTag.textContent = q.sourceTag;
  caseLabel.textContent = `病例 ${String(currentIndex + 1).padStart(2, "0")}`;
  questionTitle.textContent = q.title;
  questionSource.textContent = q.source;
  questionSummary.textContent = q.summary;

  questionCard.classList.add("hidden");
  bubbleText.textContent = "医师，我最近在网上看到一条消息，您帮我看看靠谱吗？";
  patient.className = `patient patient-${(currentIndex % 10) + 1} entering`;
  patientImage.src = patientImages[currentIndex % patientImages.length];
  patientImage.alt = `第 ${currentIndex + 1} 位就诊病人`;
  setTimeout(() => patient.classList.remove("entering"), 480);
}

function openQuestionCard() {
  playBeep("click");
  questionCard.classList.remove("hidden");
  bubbleText.textContent = "请帮我判断一下。";
}

function handleJudge(userAnswer) {
  const q = questions[currentIndex];
  lastJudgeCorrect = userAnswer === q.answer;

  if (lastJudgeCorrect) {
    score += 10;
    correctCount += 1;
    playBeep("correct");
  } else {
    playBeep("wrong");
  }

  scoreText.textContent = `${score} 分`;

  if (q.answer === false) {
    openEvidenceModal();
  } else {
    showDiagnosis();
  }
}

function openEvidenceModal() {
  const q = questions[currentIndex];
  waitingForEvidence = true;
  selectedEvidenceCorrect = null;
  evidenceTip.textContent = "";
  evidenceTip.className = "evidence-tip";
  evidenceOptions.innerHTML = "";

  q.evidence.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = "checkbox-item";
    label.innerHTML = `
      <input type="checkbox" value="${index}" />
      <span>${item}</span>
    `;
    evidenceOptions.appendChild(label);
  });

  evidenceModal.classList.remove("hidden");
}

function closeEvidenceAndDiagnose() {
  if (waitingForEvidence) {
    const checked = [...evidenceOptions.querySelectorAll("input:checked")].map((item) => Number(item.value));

    if (!checked.length) {
      evidenceTip.textContent = "请至少选择一条判断依据。";
      evidenceTip.className = "evidence-tip warning";
      return;
    }

    const q = questions[currentIndex];
    const valid = q.validEvidenceIndex ?? q.evidence.map((_, index) => index);
    selectedEvidenceCorrect = checked.length === valid.length && checked.every((item) => valid.includes(item));
    evidenceTip.textContent = selectedEvidenceCorrect ? "依据选择完整，已记录。" : "依据已记录，稍后请对照诊断书复盘。";
    evidenceTip.className = `evidence-tip ${selectedEvidenceCorrect ? "success" : "warning"}`;
  }

  evidenceModal.classList.add("hidden");
  waitingForEvidence = false;
  showDiagnosis();
}

function showDiagnosis() {
  const q = questions[currentIndex];

  judgeFeedback.className = `judge-feedback ${lastJudgeCorrect ? "correct" : "wrong"}`;
  judgeFeedback.textContent = lastJudgeCorrect ? "太棒了，诊断正确！" : "诊断错误，有点可惜哦，下次再努力～";

  diagnosisResult.textContent = q.answer ? "该信息为真实医疗资讯。" : "该信息属于虚假信息。";

  if (q.answer) {
    symptomSection.classList.add("hidden");
    analysisTitle.textContent = "二、诊断依据";
  } else {
    symptomSection.classList.remove("hidden");
    analysisTitle.textContent = "三、诊断依据";
    symptoms.innerHTML = "";
    q.symptoms.forEach((item) => {
      const span = document.createElement("span");
      span.className = "symptom";
      span.textContent = `✓ ${item}`;
      symptoms.appendChild(span);
    });

  if (selectedEvidenceCorrect === true) {
    const span = document.createElement("span");
    span.className = "symptom evidence-note ok";
    span.textContent = "✓ 判断依据完整";
    symptoms.appendChild(span);
  }
  }

  diagnosisAnalysis.textContent = q.analysis.replace(/\n{2,}/g, "\n");
  doctorMessage.textContent = q.message;
  diagnosisModal.classList.remove("hidden");
  playSound(paperAudio);
}

function nextQuestion() {
  diagnosisModal.classList.add("hidden");
  currentIndex += 1;

  if (currentIndex >= questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function showResult() {
  switchScreen(resultScreen);
  playSound(achievementAudio, { duckBgm: true });

  const accuracy = Math.round((correctCount / questions.length) * 100);
  finalScore.textContent = score;
  correctCountEl.textContent = `${correctCount}/${questions.length}`;
  accuracyText.textContent = `${accuracy}%`;

  let title = "";
  let comment = "";

  if (accuracy <= 30) {
    title = "见习鉴查助理";
    comment = "初次接触医疗信息，多多学习诊疗知识，下次一定进步！";
  } else if (accuracy <= 60) {
    title = "实习鉴查医师";
    comment = "具备基础辨别能力，仍需警惕伪装性强的虚假资讯哦。";
  } else if (accuracy <= 80) {
    title = "资深鉴查医师";
    comment = "眼光犀利，能够识破大部分虚假信息！";
  } else {
    title = "首席信息诊疗大师";
    comment = "火眼金睛，你就是专业的医疗信息鉴别达人！";
  }

  rankTitle.textContent = title;
  rankComment.textContent = comment;
}

function copyResult() {
  const accuracy = Math.round((correctCount / questions.length) * 100);
  const text = `我在《谣言诊疗室》中完成了 10 条医疗健康信息诊断，得分 ${score}/100，正确率 ${accuracy}%，获得称号：${rankTitle.textContent}！`;
  navigator.clipboard?.writeText(text).then(() => {
    copyTip.textContent = "成绩文案已复制。";
  }).catch(() => {
    copyTip.textContent = "复制失败，可手动截图保存成绩。";
  });
}

startBtn.addEventListener("click", () => {
  startBgm();
  playBeep("click");
  introModal.classList.remove("hidden");
});

introStartBtn.addEventListener("click", () => {
  startBgm();
  playBeep("click");
  introModal.classList.add("hidden");
  initGame();
});

bubbleBtn.addEventListener("click", openQuestionCard);
trueBtn.addEventListener("click", () => handleJudge(true));
falseBtn.addEventListener("click", () => handleJudge(false));

submitEvidenceBtn.addEventListener("click", closeEvidenceAndDiagnose);
closeEvidenceBtn.addEventListener("click", closeEvidenceAndDiagnose);
nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", () => {
  copyTip.textContent = "";
  startBgm();
  initGame();
});

shareBtn.addEventListener("click", copyResult);

// 防止用户误点弹窗背景关闭导致流程中断，这里不设置点击背景关闭。
