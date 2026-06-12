export const characterNameEnglish = {
  anhunqu: "Anhunqu",
  baicang: "Bai Cang",
  fadiya: "Fadiya",
  hasuoer: "Hasuoer",
  jiuyuan: "Jiuyuan",
  mint: "Mint",
  nanally: "Nanally",
  xiaozhi: "Xiaozhi",
  xun: "Xun"
};

export const characterEnglish = {
  anhunqu: {
    description:
      "Anhunqu is a Dark on-field DoT carry built around Nightmare damage, dual-form pressure and sustained field time.",
    role: "On-field DPS / DoT",
    element: "Dark",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Anhunqu is a Dark damage dealer who prefers stable field time and repeated damage-over-time pressure instead of a single short burst. Build her when your account needs a dedicated Dark carry and can support her with survival, grouping or damage amplification.</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li><strong>Nightmare DoT:</strong> keep the damage-over-time state active before committing the main damage window.</li>
        <li><strong>Dual-form play:</strong> swap forms according to the current window instead of spending every skill as soon as it is ready.</li>
        <li><strong>Team support:</strong> she benefits from teammates who keep enemies grouped and stable long enough for DoT value to accumulate.</li>
      </ul>
      <h2>Build Advice</h2>
      <p>Prioritize Dark damage, crit, attack and the skills that maintain her core damage cycle. Avoid spreading resources across too many carries before Anhunqu reaches a comfortable clearing line.</p>
      <h2>Teams</h2>
      <p>Use Anhunqu with a survival slot, a support or debuffer, and a flexible sub-DPS or grouping unit. Accounts with Fadiya-style protection or strong utility supports can make her field time much safer.</p>
    `
  },
  baicang: {
    description:
      "Bai Cang is an S-rank Curse burst DPS. She uses Scarlet Veil to mark enemies, stacks Camellia marks, then detonates them with a heavy burst window.",
    role: "Burst DPS / Curse",
    element: "Curse",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Bai Cang is built as a Curse burst carry. Her damage comes from preparing marks, entering a strong burst window, and detonating Camellia stacks rather than staying on field forever. She is a good choice when your account needs a focused single-target or elite-killing core.</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li><strong>Camellia marks:</strong> keep marks active before spending major cooldowns. Most of her burst value depends on whether the target is properly prepared.</li>
        <li><strong>Scarlet Veil:</strong> use her shift skill to set up the damage window, then chain the finisher while the enemy is controlled or vulnerable.</li>
        <li><strong>Burst timing:</strong> do not press every skill as soon as it is ready. Bai Cang rewards planned rotations around buffs, enemy toughness breaks and mark detonation.</li>
      </ul>
      <h2>Skill Priority</h2>
      <p>Upgrade her finisher first, then the shift skill, then basic attacks and assist skill. If resources are tight, stop after the key burst skills are comfortable and return later for minor multipliers.</p>
      <h2>Arc Plate and Modules</h2>
      <p><strong>Camellia Banquet</strong> is the preferred signature option because it directly supports her burst pattern. Budget alternatives should provide crit rate, crit damage, Curse damage or attack. For modules, use the best Curse/burst set you own and prioritize correct main stats before chasing perfect sub-stats.</p>
      <h2>Stats</h2>
      <ul>
        <li><strong>Main stats:</strong> crit rate or crit damage, Curse damage, attack percentage.</li>
        <li><strong>Sub stats:</strong> crit rate = crit damage &gt; damage bonus &gt; attack percentage.</li>
        <li><strong>Avoid:</strong> over-investing in defensive or energy stats if they do not help her burst cycle.</li>
      </ul>
      <h2>Awakening</h2>
      <p>Awakening 1 is the best early breakpoint because it improves the core burst flow. Awakening 6 raises her ceiling for committed players. Later nodes are optional and should be compared against pulling new characters or support pieces.</p>
      <h2>Teams</h2>
      <p>The standard Curse burst team uses Bai Cang as the main damage source, one support or debuffer, one reaction/enabler slot and one survival slot. In Disruption-style teams, she can act as the windowed nuke after teammates prepare the field. Newer accounts can pair her with free support and protection units until stronger buffers are available.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Apply team buffs, debuffs and grouping first.</li>
        <li>Swap to Bai Cang and apply her mark setup.</li>
        <li>Use shift skill to enter the burst sequence.</li>
        <li>Spend the finisher during the buff and toughness-break window.</li>
        <li>Leave the field after the burst and rebuild the next setup with teammates.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Invest in Bai Cang when you want a dedicated Curse burst carry. She performs best with clear windows and good support timing, so her value rises as your account gains better grouping, buffs and enemy-control tools.</p>
    `
  },
  fadiya: {
    description:
      "Fadiya is an S-rank survival and utility character who shares damage, stabilizes difficult fights and can pivot into a sub-DPS build when invested.",
    role: "Survival / Utility",
    element: "Disruption",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Fadiya is a defensive utility character with unusual team-protection mechanics. Her value is not measured only by personal damage: she reduces failure rates in high-pressure commissions, protects long field-time carries, and gives teams more room to execute their rotations.</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li><strong>Damage sharing:</strong> Fadiya spreads incoming pressure so one on-field character is less likely to collapse during a mistake.</li>
        <li><strong>Ruin experience:</strong> this mechanic defines her support identity and should be kept active when facing bosses or elite packs.</li>
        <li><strong>Enemy-God state:</strong> use this window to stabilize the team, then decide whether to continue supporting or spend damage skills.</li>
        <li><strong>Threshold play:</strong> her best results come from timing protection before danger, not after the carry has already fallen low.</li>
      </ul>
      <h2>Skill Priority</h2>
      <p>For pure support, raise the skills that improve mitigation, sharing and uptime first. For sub-DPS, prioritize the finisher and the shift skill after the core survival tools are reliable. Basic attacks are a low priority unless you are deliberately playing her on field.</p>
      <h2>Arc Plate</h2>
      <p><strong>Eternal Waltz</strong> is the premium option for her complete kit. Defensive alternatives should improve uptime, survival or team utility. Offensive alternatives are only worth using if your account already has enough protection and wants Fadiya to contribute meaningful damage.</p>
      <h2>Module Sets</h2>
      <p><strong>Little Big Adventure</strong> suits the pure support route because it reinforces team safety. <strong>Quiet Villa</strong> is better for the sub-DPS route. Choose the set according to the job you need from her, not only by rarity.</p>
      <h2>Stats</h2>
      <p>Support builds prefer survivability, uptime and utility stats. Sub-DPS builds want crit, attack and damage bonuses after minimum survival is secured. Avoid building her half-defensive and half-offensive if that leaves both jobs weak.</p>
      <h2>Awakening and Builds</h2>
      <p>Awakening 1 is the key quality-of-life breakpoint. A pure support build emphasizes damage sharing and safety; a sub-DPS build converts extra investment into damage; a flexible build keeps enough survival while using offensive pieces only when they do not break her protection role.</p>
      <h2>Teams</h2>
      <p>Fadiya fits Disruption teams, Haiyue-centered teams and budget progression teams that need a reliable defensive slot. She is especially useful when your main carry has long field time or when anomaly bosses punish missed dodges.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Start with Fadiya's defensive setup before the dangerous phase begins.</li>
        <li>Swap to the main carry and execute the damage cycle under protection.</li>
        <li>Return to Fadiya when mitigation expires or a new boss pattern is about to start.</li>
        <li>Use the finisher either to stabilize the fight or to add damage after the team is safe.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Build Fadiya if your teams lose time to deaths, revives or interrupted rotations. Her ceiling is less flashy than a pure carry, but she can make hard content much more consistent.</p>
    `
  },
  hasuoer: {
    description:
      "Hasuoer is a Phase burst attacker focused on quick windows, heavy impact and repeated short rotations.",
    role: "Burst DPS / Quick Swap",
    element: "Phase",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Hasuoer is a fast burst unit for players who prefer compact damage windows. She enters, spends her shift and finisher pressure, then leaves the field so supports and sub-DPS characters can rebuild the next cycle.</p>
      <h2>Core Mechanics</h2>
      <p>Her strength is concentrated in short windows. You should line up grouping, buffs and enemy toughness breaks before committing the finisher. If the enemy moves away or the buff window expires, her practical damage drops quickly.</p>
      <h2>Skills</h2>
      <ul>
        <li><strong>Basic attack:</strong> filler and minor damage, upgraded after core burst skills.</li>
        <li><strong>Shift skill:</strong> the main entry tool and a key part of her burst sequence.</li>
        <li><strong>Finisher:</strong> top upgrade priority because most of her high-value damage comes from this window.</li>
      </ul>
      <h2>Skill Priority</h2>
      <p>Finisher &gt; shift skill &gt; basic attack / assist. If you only use her as a quick-swap burst unit, do not spend early resources on long field-time basics.</p>
      <h2>Arc Plate and Modules</h2>
      <p><strong>Raging Flame Sprint</strong> is the preferred premium plate. Budget plates should supply crit, attack and burst damage. <strong>Street Fighter</strong> four-piece is the cleanest module direction; strong two-piece combinations are acceptable until your main stats are correct.</p>
      <h2>Stats</h2>
      <p>Build crit rate, crit damage, Phase damage and attack percentage. Since her windows are short, consistency matters: a balanced crit ratio is usually better than chasing a very high crit-damage number with poor crit rate.</p>
      <h2>Awakening</h2>
      <p>Awakening 4 improves repeated burst play, while Awakening 6 raises the window ceiling. Casual players can stop earlier and prioritize team supports; committed Hasuoer players can chase the later breakpoints.</p>
      <h2>Teams</h2>
      <p>Use her in Phase burst teams, Light/Phase hybrid teams or quick-swap teams that can feed her a clean damage window. She likes teammates who group enemies, apply buffs quickly and do not demand excessive field time.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Apply buffs and grouping with teammates.</li>
        <li>Swap to Hasuoer and use the shift skill to enter the window.</li>
        <li>Spend the finisher while the enemy is controlled or broken.</li>
        <li>Use a short follow-up if needed, then swap out.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Hasuoer is worth building when your account needs a clean quick-swap damage unit. She feels best when the team can create reliable windows rather than forcing her to chase scattered enemies.</p>
    `
  },
  jiuyuan: {
    description:
      "Jiuyuan is a Spirit quick-swap sub-DPS with grouping, Rose Pact marks and execution burst.",
    role: "Grouping Sub DPS / Spirit",
    element: "Spirit",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Jiuyuan is not just an off-field damage unit. She groups enemies, applies Deadly Rose Pact marks, triggers execution damage and improves Spirit teams' area coverage. She is valuable in both progression and harder content because she turns scattered fights into clean damage windows.</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li><strong>Deadly Rose Pact:</strong> mark enemies first, then wait for the state to mature before cashing out.</li>
        <li><strong>Grouping:</strong> hold the shift skill to pull targets together so the main carry can hit more enemies.</li>
        <li><strong>Execution burst:</strong> the finisher is strongest after marks have entered the correct state.</li>
      </ul>
      <h2>Skills</h2>
      <p>Raise Q and E first. Q controls execution burst, while E controls grouping and mark application. Basic attack and assist skill are lower priority unless you are using her for extra field time.</p>
      <h2>Arc Plate and Modules</h2>
      <p><strong>Reality Shelter</strong> is her best dedicated plate. Alternatives should provide damage, Spirit synergy or rotation comfort. For modules, <strong>Forest Firefly Heart</strong> four-piece is the preferred endgame set because it supports the Spirit-team game plan.</p>
      <h2>Stats</h2>
      <p>Prioritize crit rate, crit damage, Spirit damage and attack percentage. If she is used mainly as utility, correct main stats and skill levels matter more than perfect sub-stats.</p>
      <h2>Awakening</h2>
      <p>Awakening 2 is the most balanced early breakpoint. Awakening 3 helps boss pushing, and Awakening 4 improves multi-target clearing. Choose breakpoints based on whether your account needs boss damage or overworld speed.</p>
      <h2>Teams</h2>
      <p>The premium direction is Nanally + Jiuyuan + protagonist Zero + a support slot, where Jiuyuan groups and marks before Nanally takes the field. Budget teams can use her as the main grouping tool for any carry that struggles against scattered enemies. She also works as a plug-in for Xiaozhi or Bai Cang teams that need better crowd control.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Hold E to group enemies and apply Rose Pact.</li>
        <li>Let the mark mature instead of instantly spending the finisher.</li>
        <li>Use Q to trigger execution when the targets are still grouped.</li>
        <li>Swap to the main carry for the buffed damage window.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Jiuyuan's value depends on respecting mark timing. Treat her as a functional burst unit and she will add more than raw damage: she improves targeting, team rhythm and clear speed.</p>
    `
  },
  mint: {
    description:
      "Mint is a budget-friendly Spirit support and sub-DPS who provides frequent hits, early progression comfort and team utility.",
    role: "Support / Sub DPS",
    element: "Spirit",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Mint is an accessible A-rank character for early progression and second-team planning. She does not need premium investment to contribute: frequent hits, simple rotations and flexible Spirit synergy make her useful while your account is still building core S-rank units.</p>
      <h2>Core Mechanics</h2>
      <p>Mint works by keeping the team cycle moving. Use her skills to add quick damage, trigger synergy and fill downtime between main-carry windows. She is not meant to take all field time from a stronger carry.</p>
      <h2>Skills</h2>
      <p>Prioritize the shift skill and finisher, then basic attacks. Her value comes from quick contribution and support damage, so do not over-invest in low-impact parts before your main DPS is complete.</p>
      <h2>Arc Plate and Modules</h2>
      <p><strong>Swift Wool</strong> is the cleanest first choice. Use plates with crit, attack or team utility if you do not own it. <strong>Forest Firefly Heart</strong> is the preferred set for Spirit synergy; transitional mixed sets are fine if the main stats are better.</p>
      <h2>Stats</h2>
      <p>Use crit rate, crit damage, Spirit damage and attack for a sub-DPS build. If she is mostly a utility slot, prioritize comfortable rotation and usable main stats before min-maxing.</p>
      <h2>Awakening</h2>
      <p>Awakening 1 is the best early progression breakpoint because it improves practical comfort. Later nodes are optional and should not steal resources from your main carry during the first month.</p>
      <h2>Teams</h2>
      <p>Mint fits beginner Spirit teams, Nanally transition teams and budget second teams. She can bridge the gap until you own stronger grouping or support pieces, and she remains useful when a team needs a cheap quick-swap slot.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Apply support effects or grouping from teammates.</li>
        <li>Swap to Mint for quick skill damage and Spirit synergy.</li>
        <li>Use finisher when it aligns with the team's damage window.</li>
        <li>Return field time to the main carry.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Mint is excellent for accounts that need a low-cost functional character. Build her to a useful line, then stop and invest deeply only if she remains part of your long-term Spirit team.</p>
    `
  },
  nanally: {
    description:
      "Nanally is a Spirit on-field main DPS with stable basic-attack output, coordinated follow-ups and strong launch-version progression value.",
    role: "Main DPS / Spirit",
    element: "Spirit",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Nanally is one of the safest main DPS choices in the launch environment. Her strengths are stable on-field output, high basic-attack frequency, coordinated follow-ups and clear build priorities. She also brings useful exploration comfort, making her valuable beyond pure combat.</p>
      <h2>Core Mechanics</h2>
      <p>Build her around basic attacks, Spirit damage and reliable crit. She wants teammates to group enemies, provide buffs and keep her safe while she completes full on-field cycles. Her damage is consistent, but scattered enemies or constant interruptions reduce her practical output.</p>
      <h2>Skill Priority</h2>
      <p>For general play and exploration, raise basic-attack related skills and the main damage skills first. For coordinated-follow-up builds, prioritize the skills that directly improve follow-up frequency and damage. Do not spread books across every skill during early progression.</p>
      <h2>Arc Plate</h2>
      <p><strong>Pre-Ready</strong> is her best dedicated plate. Secondary options should provide crit rate, crit damage, attack or Spirit damage. A lower-rarity plate with the right stats can outperform a mismatched high-rarity option during progression.</p>
      <h2>Modules</h2>
      <p><strong>Forest Firefly Heart</strong> four-piece is the endgame direction. Early on, prioritize correct main stats and a working set bonus. Perfect sub-stats can wait until the team is already clearing daily and event content comfortably.</p>
      <h2>Stats</h2>
      <ul>
        <li><strong>Main stats:</strong> crit rate, Spirit damage and attack percentage.</li>
        <li><strong>Sub stats:</strong> crit rate = crit damage &gt; damage bonus &gt; attack percentage.</li>
        <li><strong>Progression rule:</strong> stabilize crit rate before chasing high crit damage.</li>
      </ul>
      <h2>Teams</h2>
      <p>The high-end launch team pairs Nanally with Jiuyuan, protagonist Zero and a flexible support slot. Jiuyuan groups enemies and improves Spirit-team flow, while Zero adds reaction coverage. Budget teams can use Mint or other accessible supports until premium units are available.</p>
      <h2>Awakening and Potential</h2>
      <p>Combat awakenings that improve her core damage cycle are more important than comfort nodes if you focus on abyss or boss content. Exploration and movement value is still useful, but should not outrank damage breakpoints for combat-focused players.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Group enemies and apply buffs with teammates.</li>
        <li>Swap to Nanally during the buff window.</li>
        <li>Complete a full basic-attack and follow-up cycle.</li>
        <li>Dodge only when needed, then return to attack range quickly.</li>
        <li>Refresh team buffs before starting the next long field window.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Nanally is worth concentrated investment. Give her levels, skill books and correct modules before spreading resources to a second carry. Once she can clear daily content smoothly, expand the team around her weaknesses: grouping and survival.</p>
    `
  },
  xiaozhi: {
    description:
      "Xiaozhi is a Light main DPS and progression-friendly carry with useful city-life and operation value.",
    role: "Main DPS / Light",
    element: "Light",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Xiaozhi is a practical Light carry for players who want a straightforward damage unit with extra account utility. She can drive early teams, handle everyday combat and contribute to city-operation efficiency without demanding a complicated rotation.</p>
      <h2>Core Mechanics</h2>
      <p>Her kit rewards stable field time, correct Light-damage setup and basic burst windows. She is less dependent on elaborate mark systems than some S-rank carries, which makes her comfortable during progression.</p>
      <h2>Skills</h2>
      <p>Raise her main damage skill and finisher first, then basic attacks. Assist or utility skills can wait until her core damage is comfortable. If she is only used for operations, keep combat investment modest.</p>
      <h2>Arc Plate and Modules</h2>
      <p>Use her dedicated high-value plate if available; otherwise choose plates with crit, attack or Light damage. A Light-damage four-piece set is the preferred direction. Transitional sets are acceptable as long as the main stats are correct.</p>
      <h2>Stats</h2>
      <p>Crit rate, crit damage, Light damage and attack percentage are the main goals. During early progression, correct main stats and skill levels beat perfect sub-stats.</p>
      <h2>Awakening</h2>
      <p>Early awakenings improve comfort and damage enough for most players. Mid-to-late breakpoints are only worth chasing if Xiaozhi remains your long-term carry or you enjoy her operation value.</p>
      <h2>Teams</h2>
      <p>Budget teams can use Xiaozhi as the main on-field damage source with a support, a reaction slot and a survival unit. Light/Phase hybrid teams can improve her burst windows. High-end quick-swap teams use her when she can spend a compact damage window and leave.</p>
      <h2>Rotation</h2>
      <ol>
        <li>Apply buffs and control with teammates.</li>
        <li>Swap to Xiaozhi and use the shift skill to start the damage window.</li>
        <li>Spend the finisher and main damage sequence.</li>
        <li>Refresh support effects before repeating.</li>
      </ol>
      <h2>Build Advice</h2>
      <p>Xiaozhi is a strong practical investment for players who need a dependable Light carry. Push her to a comfortable clearing line first, then decide whether to keep investing based on your later S-rank roster.</p>
    `
  },
  xun: {
    description:
      "Xun is a Light S-rank burst sub-DPS and utility character who records ally skills with the Non-Closed Clock, then replays them during a time-stop burst window.",
    role: "Burst Sub DPS / Utility",
    element: "Light",
    weapon: "Arc Plate",
    html: `
      <h2>Role</h2>
      <p>Xun is a distinctive Light S-rank character. She does not play around a normal energy cycle; instead she uses the Non-Closed Clock, which caps at 120 and naturally recovers over time. Her job is to record high-value ally shift or assist skills, stop time, replay those recorded skills and finish the window with katana-form burst damage.</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li><strong>E skill:</strong> spends 60 Clock points and records up to three ally shift or assist skills used during the next five seconds.</li>
        <li><strong>Q finisher:</strong> spends 120 Clock points, stops time for ten seconds, replays recorded skills and switches Xun into katana form.</li>
        <li><strong>Damage logic:</strong> her ceiling depends on the quality of recorded skills, katana hits during the time stop and the team benefits created by replaying ally skills.</li>
      </ul>
      <h2>Skill and Awakening Priority</h2>
      <p>Upgrade Q first, then E, then basic attack and assist. Q has the highest value because katana attacks during time stop are counted into the finisher's damage share. For awakenings, prioritize 1, then 6, then 2 and 5 if you continue investing.</p>
      <h2>Arc Plate and Tapes</h2>
      <p><strong>Marching Beyond Time</strong> is the best dedicated plate. <strong>Fearless Wool</strong> is a strong battle-pass alternative, while <strong>World-Tilting Rain</strong> and <strong>Hethereau's Peace</strong> can work as transitional choices. For tapes, use <strong>Lost Light</strong> four-piece to support Light damage and defense ignore after her finisher.</p>
      <h2>Stats</h2>
      <p>Prioritize crit rate, then Light damage or crit damage. Sub-stats should be crit rate = crit damage &gt; general damage &gt; attack percentage. Do not build energy recharge: the Clock naturally recovers and extra recharge has very low value.</p>
      <h2>Teams</h2>
      <p>The premium Creation team is Xun + Nanally + Jiuyuan + protagonist Zero. Xun can replay Nanally and Zero skills to improve stacking and burst ceiling, while Jiuyuan supports grouping and Spirit synergy. High-difficulty burst teams use strong E-skill characters such as Zaowu, Haniya or Fadiya. Budget teams can use Mint, protagonist Zero and a survival slot.</p>
      <h2>Standard Rotation</h2>
      <ol>
        <li>Wait until Xun has at least 60 Clock points.</li>
        <li>Use Xun E and enter the five-second recording state.</li>
        <li>Swap through three teammates and use their best shift or assist skills.</li>
        <li>Return to Xun and wait until the Clock reaches 120.</li>
        <li>Use Q, trigger the ten-second time stop and replay recorded skills.</li>
        <li>During time stop, complete two full five-hit katana strings, then finish with the closing damage.</li>
        <li>After the window ends, rebuild Clock and repeat.</li>
      </ol>
      <h2>Quick-Swap Burst</h2>
      <p>For speed clears or tight rotations, you can skip recording and simply wait for 120 Clock points before using Q. This loses ally-skill replay damage but still gives the full ten-second katana burst. The cycle is roughly 25 seconds and works when Xun is only filling a sub-DPS window.</p>
      <h2>Advanced Tips</h2>
      <ul>
        <li>Cancel heavy-attack recovery by back-dodging without a direction input, then chain the next heavy attack.</li>
        <li>Fit jump attacks between katana strings if you can still complete the core ten hits.</li>
        <li>Re-record only if the first recording captured poor skills, because doing so costs another 60 Clock points and can disrupt the rotation.</li>
      </ul>
      <h2>Premium Key Sequence</h2>
      <p>With Xun + Nanally + Jiuyuan + protagonist Zero, use: Xun E -> Jiuyuan E -> Zero E -> Nanally E and burst -> back to Xun until 120 Clock -> Xun Q -> replay all three skills -> land ten katana hits during time stop -> swap out after the window. Mastering record, time stop and katana finish lets Xun act as a reliable high-difficulty burst core.</p>
    `
  }
};

export const beginnerEnglish = `
  <h2>Three Progression Rules</h2>
  <ol>
    <li>Build one complete team first instead of raising several main DPS characters evenly.</li>
    <li>Spend stamina on ascension, skill materials and weapon or Arc Plate upgrades before random sub-stat farming.</li>
    <li>Save pull currency for limited banners that clearly improve your team's ceiling or fix a real account weakness.</li>
  </ol>
  <h2>Daily Route</h2>
  <p>Clear daily tasks first, then farm character ascension materials, then fill weapon and plate material gaps. If survival is not a problem, invest in the main DPS damage threshold before spreading resources to secondary characters.</p>
  <h2>Common Mistakes</h2>
  <p>Do not chase perfect sub-stats too early. During progression, a correct main stat usually gives more practical value than an extreme sub-stat roll on the wrong piece.</p>
`;

export const guideEnglish = {
  "version-hotspot-briefing": {
    category: "Version Hotspots",
    tag: "Briefing",
    time: "8 min",
    title: "Version 1.1 Hotspot Briefing",
    description: "A practical snapshot of current banners, strength notes, codes and resource priorities for Version 1.1."
  },
  "version-1-1-banner-planning": {
    category: "Version Hotspots",
    tag: "1.1 Banner",
    time: "8 min",
    title: "Version 1.1 Banner Planning",
    description: "Compare Lacrimosa, Chaos, signature Arcs and future banners before spending your pull budget."
  },
  "june-2026-codes-rewards-route": {
    category: "Version Hotspots",
    tag: "Codes",
    time: "7 min",
    title: "June 2026 Codes and Reward Route",
    description: "Track June codes, mail unlocks and reward-claiming order before using the resources."
  },
  "character-tier-list": {
    category: "Character Growth",
    tag: "Priority",
    time: "6 min",
    title: "Character Investment Priority",
    description: "Decide who to build first by role, team cost and progression value."
  },
  "team-comps": {
    category: "Character Growth",
    tag: "Teams",
    time: "7 min",
    title: "Team Template Library",
    description: "Use ready-made team directions and replacement logic for progression and harder fights."
  },
  "team-building": {
    category: "Character Growth",
    tag: "Rotation",
    time: "5 min",
    title: "Team Building and Rotation Basics",
    description: "Check main DPS, sub DPS, survival and utility slots when your team feels unstable."
  },
  "arc-module-substats": {
    category: "Character Growth",
    tag: "Stats",
    time: "8 min",
    title: "Arc Plate and Module Sub-Stat Guide",
    description: "Plan main stats, set bonuses and sub-stat farming around each character role."
  },
  "growth-material-route": {
    category: "Pull Resources",
    tag: "Growth",
    time: "6 min",
    title: "Growth Material Route",
    description: "Prioritize stamina, Fons, skill books, Arc materials and module resources."
  },
  "shop-exchange-priority": {
    category: "Pull Resources",
    tag: "Shop",
    time: "7 min",
    title: "Shop Exchange Priority",
    description: "Choose which event, permanent and Fons shop resources are worth buying first."
  },
  "banner-analysis-framework": {
    category: "Pull Resources",
    tag: "Banner",
    time: "6 min",
    title: "Banner Analysis Framework",
    description: "Review base copy value, Arc dependency, awakenings and next-banner budget before pulling."
  },
  "gacha-budget": {
    category: "Pull Resources",
    tag: "Budget",
    time: "5 min",
    title: "Pull Budget and Stop Line Planning",
    description: "Calculate pity, risk and growth cost before spending on character, standard or Arc banners."
  },
  beginner: {
    category: "Beginner",
    tag: "Start",
    time: "6 min",
    title: "Beginner Guide and Resource Planning",
    description: "Start with stamina, Fons, character growth and daily priorities when you are unsure what to do first.",
    body: beginnerEnglish
  },
  "first-30-days-route": {
    category: "Beginner",
    tag: "30 Days",
    time: "7 min",
    title: "First 30 Days Progression Route",
    description: "A staged route for story progress, stamina use, pull saving, exploration and second-team planning."
  },
  "daily-weekly-priority": {
    category: "Beginner",
    tag: "Daily",
    time: "5 min",
    title: "Daily, Weekly and Event Priority",
    description: "Use limited play time well by ordering dailies, weeklies, stamina, events and cleanup routes."
  },
  faq: {
    category: "Beginner",
    tag: "FAQ",
    time: "4 min",
    title: "Frequently Asked Questions",
    description: "Quick answers for pulls, stamina, character growth, Arc Plates, modules and exploration progress."
  },
  "boss-combat-guide": {
    category: "Exploration Combat",
    tag: "Boss",
    time: "6 min",
    title: "Boss and Hard-Combat Basics",
    description: "Improve boss attempts by watching warnings, toughness windows, survival skills and burst timing."
  },
  "exploration-checklist": {
    category: "Exploration Combat",
    tag: "Cleanup",
    time: "6 min",
    title: "100% Exploration Cleanup Checklist",
    description: "Check phone booths, oracle stones, rooftops, under-bridge layers, night anomalies and hidden chests."
  },
  "anomaly-commission-checklist": {
    category: "Exploration Combat",
    tag: "Anomaly",
    time: "5 min",
    title: "Anomaly Commission Checklist",
    description: "Troubleshoot entry conditions, spatial routes, puzzles and combat preparation for anomaly commissions."
  },
  "systems-overview": {
    category: "Systems",
    tag: "Systems",
    time: "6 min",
    title: "Core Systems Overview",
    description: "Build a basic mental model for Arc Plates, modules, toughness, anomalies, vehicles and operations."
  },
  "version-review-checklist": {
    category: "Systems",
    tag: "Version",
    time: "5 min",
    title: "Version Update Review Checklist",
    description: "After an update, recheck announcements, banners, character strength, event value, maps and shops."
  }
};

export function guideFallbackBody(guide) {
  return `
    <h2>What This Guide Covers</h2>
    <p>${guide.description}</p>
    <h2>How To Use It</h2>
    <p>Start from the account problem named in the title, then compare the advice against your current roster, stamina, pull budget and version schedule. If a rule has changed in game, use the latest in-game notice as the source of truth.</p>
    <h2>Review Checklist</h2>
    <ul>
      <li>Confirm whether the recommendation solves a real account bottleneck.</li>
      <li>Check update dates and current event windows before committing resources.</li>
      <li>Keep character growth, pull budget and exploration cleanup as separate plans.</li>
    </ul>
  `;
}

export const mapEnglish = {
  "skytower-route": {
    title: "Wertheimer Towers and Full-Map Unlock Route",
    description:
      "A tower-first exploration route for unlocking the map, phone booths, anomaly commissions and regional access after the first month.",
    region: "Full Map Route",
    priority: "Activate towers first, then phone booths, then clear oracle stones, anomaly commissions and hidden chests by district.",
    route: [
      "Open the world map, zoom out, and head for gray tower icons first.",
      "After activating a Wertheimer Tower, follow the main roads and unlock nearby phone booths.",
      "In each district, clear teleport points and commission entrances before chasing 100% completion.",
      "Return to high-threat anomalies and hidden chests after your main DPS and survival slot are ready."
    ],
    checklist: [
      "Wertheimer Tower activation",
      "ReroRero phone booth teleport network",
      "Regional anomaly commission entrances",
      "Oracle stones, hidden chests and photo spots",
      "World boss, weekly boss and special teleport entrances"
    ],
    events: [
      "Towers make regional routing and anomaly commission planning much easier.",
      "Phone booths are the core efficiency points for materials, housing, side quests and exploration cleanup."
    ],
    warnings: [
      "Do not chase single hidden points at the start; building the teleport network gives better returns.",
      "Mark high-difficulty anomalies and return later after your carry and survival role are built.",
      "For the final 5%-10% exploration, use a filtered checklist to avoid random wandering."
    ],
    body: `
      <h2>Area Role</h2>
      <p>Wertheimer Towers are the starting point of full-map exploration. They define regional outlines, reveal commissions and dramatically improve route planning. One month after launch, the common problem is not combat power but missing teleport points that force repeated driving.</p>
      <h2>Clearing Logic</h2>
      <p>Use the order: towers -> phone booths -> commissions -> collectibles. This lets you switch quickly between story, events, material farming and anomaly commissions without wasting travel time.</p>
      <h2>Cleanup Focus</h2>
      <p>If only a small amount of exploration remains, check phone booths, photo spots and anomaly commission follow-ups first. Hidden chests are less obvious than teleport points, but they often appear near building edges, under bridges and in areas changed after anomalies are resolved.</p>
    `
  },
  "new-herland": {
    title: "New Herland Phone Booths and Commercial Street Cleanup",
    description:
      "New Herland exploration route covering commercial streets, the car dealer, plaza, rooftops, phone booths and operation-related points.",
    region: "New Herland",
    priority: "Unlock phone booths around the commercial street, car dealer and plaza first because later operations, vehicle purchases and material routes return here often.",
    route: [
      "Start from the main commercial-street phone booth and sweep shop entrances, vending machines and alley mouths on both sides.",
      "Move to the car dealer and parking area; check ramps, underground spaces and the backs of staircases.",
      "Circle the plaza to pick up photo spots, city check-ins and rooftop entrances.",
      "Finish with back streets, high platforms and quest NPC areas."
    ],
    checklist: [
      "Commercial Street ReroRero phone booth",
      "Car dealer, parking lot and vehicle interactions",
      "Plaza photo spots and hidden chests",
      "Shop operation, housing and city-life entrances",
      "Rooftop platforms and high-edge collectibles"
    ],
    events: [
      "Commercial-street anomalies often involve crowds, neon lights or interactions near shop doors.",
      "Some operation and side-quest points only appear during daytime or after story progress."
    ],
    warnings: [
      "Markers are dense in the commercial street, so use filters and clear them one by one.",
      "Check your gacha and growth budget before buying cars or upgrading shops, or Fons may run short.",
      "For high platforms, do not rely only on the minimap; many entrances are on back-street stairs."
    ],
    body: `
      <h2>Area Role</h2>
      <p>New Herland is one of the districts players revisit most after early progression. It connects commerce, vehicles, operations and city-life systems, so its exploration value is not only Annulith and chests but also long-term route efficiency.</p>
      <h2>Clearing Logic</h2>
      <p>Build the phone-booth network first, then use a vehicle to sweep the outer main roads. The commercial street is marker-heavy, so it is better to return for a dedicated cleanup after basic teleport points are unlocked.</p>
      <h2>Cleanup Focus</h2>
      <p>The most commonly missed points are parking ramps, alleys behind shops and rooftop platforms. When the marker height does not match your character, look for stairs, elevators or vehicle ramps before circling the same street.</p>
    `
  },
  "district-a": {
    title: "New Port Hidden Collectibles and Anomaly Events",
    description:
      "A New Port route for phone booths, rooftop collectibles, elevated-road layers, anomaly events and cleanup order.",
    region: "New Port",
    priority: "Activate phone booths and main-road teleports first, then clear elevated roads, rooftops and underground entrances.",
    route: [
      "Start from the subway entrance or main-road phone booth and unlock teleports and shop entrances around the commercial outer loop.",
      "Check pillars, parking areas and ramp corners under the elevated road, taking low-level collectibles first.",
      "Return to the neon plaza and enter rooftop clusters from fire escapes or adjacent buildings.",
      "Finish with abandoned platform entrances, underground passages and night anomaly spawn points."
    ],
    checklist: [
      "ReroRero phone booths and main-road fast travel",
      "Data chips, supply boxes and investigation logs under elevated roads",
      "Rooftop anomaly fragments and photo spots around the neon plaza",
      "Hidden investigation objects near abandoned station entrances",
      "Night abnormal lights, signal noise and spatial-distortion interactions"
    ],
    events: [
      "Night patrols from 20:00-04:00 are better for abnormal lights and street noise.",
      "When you see small spatial distortions, circle the area for the investigation point instead of leaving immediately."
    ],
    warnings: [
      "Elevated roads are easy to misread vertically; if a marker is above you, find stairs or ramps first.",
      "For rooftops, sweep from high to low to avoid repeated climbing.",
      "Anomaly events can spawn elites, so bring at least one survival character."
    ],
    body: `
      <h2>Hidden Collectibles</h2>
      <p>New Port's collectibles are highly vertical. The main roads look open, but the easy misses are under elevated roads, along rooftop edges and near subway entrance corners. Build the teleport network first, then clean in the order: low roads -> elevated underside -> rooftop groups -> underground entrances.</p>
      <h2>Anomaly Events</h2>
      <p>Patrol between 20:00 and 04:00 for better anomaly efficiency. If streetlights flicker, signals distort or a small space warp appears, do not only inspect the center. The interactable point is often beside street furniture, alley mouths or behind staircases.</p>
      <h2>Route Advice</h2>
      <p>After one month, most players have vehicles and multiple booths. There is no need to walk New Port from scratch. Use phone booths as nodes and clear one block at a time, checking exploration progress after each block so one rooftop marker does not waste your final cleanup.</p>
    `
  },
  "ekorai-town": {
    title: "Ekorai Town Anomaly Commissions and Rooftop Route",
    description:
      "Ekorai Town exploration covering Image Haunted House, rooftop collectibles, narrow-alley investigation points, anomaly commissions and night patrols.",
    region: "Ekorai Town",
    priority: "Clear story and anomaly entrances first, then split rooftop and narrow-alley collectibles by layer.",
    route: [
      "Teleport to the main-street phone booth and confirm anomaly commission and side-quest entrances.",
      "Patrol alleys around Suinarashi Avenue and clear visible investigation points.",
      "Enter rooftops from taller buildings and sweep clockwise.",
      "Return to ground level for narrow alleys, signboard backs and hidden objects near shop doors."
    ],
    checklist: [
      "Image Haunted House and Hidden Alley Mansion anomaly entrances",
      "Rooftop oracle stones, anomaly fragments and hidden chests",
      "Alley investigation logs, abnormal light rings and interactable projectors",
      "Photo spots and exploration cleanup points"
    ],
    events: [
      "Some anomaly commissions require hunter level and story progress.",
      "Projector puzzles require distinguishing between playing to the red zone and shutting the projector off directly."
    ],
    warnings: [
      "Ekorai rooftops are winding; clear from high to low.",
      "If an anomaly-space device does not change, check whether you selected play or shut-off incorrectly.",
      "Heal and prepare before the boss room, because puzzle completion can flow directly into combat."
    ],
    body: `
      <h2>Area Role</h2>
      <p>Ekorai Town focuses on anomaly commissions and layered rooftops. Exploration is not a simple road loop: many points sit on high buildings, in narrow alley corners or inside anomaly spaces.</p>
      <h2>Clearing Logic</h2>
      <p>Do anomaly commissions before ordinary cleanup. Once an anomaly is resolved, nearby hidden rewards or new interactions may appear, which reduces repeated travel.</p>
      <h2>Cleanup Focus</h2>
      <p>If exploration is stuck above 90%, inspect rooftop edges, deep alleys and leftover chests inside mission spaces. Ekorai has obvious height differences, so flat minimap markers can easily mislead you.</p>
    `
  },
  "bridge-crossings": {
    title: "Bridge Crossings Elevated Roads and Inter-District Routes",
    description:
      "Bridge Crossings exploration guide for bridge teleports, upper/lower layers, road corners, vehicle routes and anomaly event order.",
    region: "Bridge Crossings",
    priority: "Unlock inter-district teleports and bridgehead booths first, then clear bridge decks, undersides and ramp layers.",
    route: [
      "Start from a bridgehead phone booth and confirm teleports and main-road links at both ends.",
      "Clear visible collectibles and photo spots on the bridge deck before jumping to lower layers.",
      "Enter underside spaces from ramps or stairs and inspect pillars, riverbanks and platform shadows.",
      "Use a vehicle to run the outer roads and finish roadside anomaly events."
    ],
    checklist: [
      "Bridgehead ReroRero phone booths",
      "Bridge-deck photo spots and visible chests",
      "Under-bridge pillars, platforms and riverbank collectibles",
      "Ramp-layer investigation logs",
      "Inter-district road anomaly events"
    ],
    events: [
      "Bridge anomalies often involve vehicle chases, roadblocks or environmental damage.",
      "Some underside points require entering from a distant ramp rather than dropping from the marker."
    ],
    warnings: [
      "The height gap between bridge deck and underside is large; find entrances before chasing markers.",
      "Fast vehicles can skip roadside interactions, so slow down during cleanup.",
      "For high-threat events, clear small enemies before elites to avoid terrain traps."
    ],
    body: `
      <h2>Area Role</h2>
      <p>Bridge Crossings connect multiple districts, so teleport and vehicle-route value is high. The collectible density is moderate, but the upper/lower structure makes position mistakes common.</p>
      <h2>Clearing Logic</h2>
      <p>Clear the bridge deck first, then the underside, then the outer roads. The deck gives good visibility and direction; underside pillars and ramp layers are the main late-stage cleanup targets.</p>
      <h2>Cleanup Focus</h2>
      <p>When a marker sits near the bridge edge, do not immediately jump down. Many points require entering from bridgehead ramps, and dropping directly only increases the return trip.</p>
    `
  }
};

export const newsEnglish = {
  "20": {
    category: "Version Hotspot",
    title: "Version 1.1 Hotspot Briefing: Current Banner, Strength Snapshot and Resource Priority",
    excerpt:
      "A June 2026 briefing that compresses current banners, character strength, redeem codes and pity rules into a practical pull decision.",
    readTime: "8 min",
    overview:
      "As of June 11, 2026, Lacrimosa remains the first-half banner in Version 1.1, Chaos will follow on June 24, and Version 1.2 is already confirmed to bring Shinku and Iroi. The main question is not what the community is excited about, but whether the current banner solves your roster gap and how much budget you should preserve for future banners.",
    requirements: [
      ["Current banner", "Lacrimosa runs from June 3 to June 24, 2026"],
      ["Upcoming banner", "Chaos runs from June 24 to July 8, 2026; Shinku and Iroi are confirmed for Version 1.2"],
      ["Resource focus", "Redeem codes, mail rewards, event rewards, Annulith and Tri-Keys"]
    ],
    stepsTitle: "Hotspot Decision Order",
    stepsNote: "Need first, hype second",
    steps: [
      ["Identify the roster gap", "Decide whether you need a main carry, survival, support or a second team slot.", "Pull value starts with your account needs. Without a clear gap, version hype can easily push you into impulse spending."],
      ["Check whether the current banner fits", "Treat Lacrimosa's base copy as the first decision, not her signature Arc.", "If you need a character that can enter your team immediately, the base copy has the highest priority. Signature Arcs and cosmetic nodes only matter after the base kit is secured."],
      ["Claim free resources first", "Redeem codes, claim mail and collect event rewards before budgeting.", "Free Annulith, Fons and growth materials directly affect your stop-loss line. Claiming them first gives you a realistic pull budget."],
      ["Reserve future budget", "Keep room for Chaos and Version 1.2.", "If your main team is already stable, avoid emptying the version on the first banner. Saving budget preserves later options."],
      ["Use tier lists as a reference only", "Strong characters still need a roster fit.", "The public strength snapshot includes Fadia, Haniel, Hotori, Lacrimosa, Nanally, Sakiri and Zero, but the right choice still depends on what your account lacks."]
    ],
    challengeLabel: "Version Misread",
    boss: {
      name: "Treating a hotspot as a mandatory pull",
      summary:
        "A version hotspot tells you what is being discussed, not what your account must chase. The biggest mistake is reading hype as a purchase order.",
      tips: [
        "Keep character, Arc and cosmetic budgets separate.",
        "Claim codes and mail before calculating your real pull count.",
        "If you already have a stable main team, saving for Chaos or Version 1.2 is often safer."
      ]
    },
    rewards: ["Current banner judgment", "Strength snapshot", "Code rewards", "Budget stop-loss", "Future flexibility"],
    closing:
      "The safest 1.1 hotspot approach is to check your roster gap first, then decide whether Lacrimosa is a real need, and only after that fold in free resources and future banner plans.",
    paragraphs: [
      "The main 1.1 topics right now are Lacrimosa, Chaos, Version 1.2, redeem codes and the current strength snapshot.",
      "The public strength list is useful as a reference, but it should not become a universal pull command.",
      "Claiming codes and mailbox rewards before budgeting gives you a much more accurate view of how much you can actually spend.",
      "For stable accounts, Lacrimosa is often a nice upgrade rather than a necessity. For accounts missing a true carry, she is much more relevant.",
      "A good hotspot guide should preserve choice, not remove it."
    ]
  },
  "19": {
    category: "Version Start",
    title: "Version 1.1 Day-One Route: Sunward Island, Corridor of Echoes, Codes and Event Priority",
    excerpt:
      "A day-one checklist for Version 1.1 covering redeem codes, mail, Lacrimosa trial, new-area teleports, Sunward Travelogue, The Long Dream and daily stamina.",
    readTime: "11 min",
    overview:
      "As of June 1, 2026, Version 1.1 Dreamwalk Corridor is confirmed for June 3. It adds the Dreamwalk Corridor episode, Sunward Island, Corridor of Echoes, Lacrimosa's limited board, and events including What's Baking, Underground Circuit, Sunward Travelogue and The Long Dream. The clean day-one route is to claim irreversible rewards, redeem DREAMWALK0603, TOMATO100 and RACENOLIMIT, open long-term event entries, unlock key new-area teleports, then decide Lacrimosa pull depth after trial and live testing.",
    requirements: [
      ["Version timing", "Version 1.1 Dreamwalk Corridor is expected on June 3, 2026"],
      ["Day-one focus", "Redeem codes, mail, event entries, new-area teleports and Lacrimosa trial"],
      ["Risk note", "Unreleased hidden routes, enemy details and character strength should defer to the live build"]
    ],
    stepsTitle: "June 3 Day-One Route",
    stepsNote: "Limited entries before deep exploration",
    steps: [
      ["Clear account entries first", "Claim mail, compensation, login rewards and event alerts.", "The easiest day-one miss is a reward entry, not a combat stage. Check mail, event pages, free shop items and pass tasks before story or pulls."],
      ["Redeem the 1.1 codes immediately", "Use DREAMWALK0603, TOMATO100 and RACENOLIMIT first.", "The announced codes expire June 25, but redeeming on day one prevents forgetfulness and updates your Lacrimosa and Chaos budget."],
      ["Open long-term event tracks", "Confirm What's Baking, Underground Circuit, Sunward Travelogue and The Long Dream.", "These are expected to last until July 8. Open their entries, read daily or weekly rules and complete any minimum daily progress."],
      ["Push story to new teleports", "Prioritize key movement points on Sunward Island and Corridor of Echoes.", "Day one should establish the travel network: main story nodes, teleports, event-required locations and repeat routes. Save 100% cleanup for later."],
      ["Trial Lacrimosa before deep pulls", "Check feel, team needs, Arc dependence and event fit.", "Lacrimosa runs June 3-24. Trial and early live data should guide whether to pull only the base copy, signature Arc or cosmetic milestones."]
    ],
    challengeLabel: "Day-One Pitfall",
    boss: {
      name: "Missing limited value because new content is distracting",
      summary:
        "Version 1.1 launches story, areas, banners, events, codes and vehicle content together. Pulling or chasing map completion too early can hide mail, code, daily and teleport priorities.",
      tips: [
        "On June 3, handle account rewards, codes and event entries before the new map.",
        "Do only story, teleports and event-required points on Sunward Island first.",
        "Separate Lacrimosa's base copy and signature Arc decisions."
      ]
    },
    rewards: ["1.1 codes", "Compensation", "Event progress", "New teleports", "Lacrimosa trial decision", "Chaos budget preservation"],
    closing:
      "The best Version 1.1 opening sorts tasks by expiry risk: claim and redeem first, open events, unlock teleports, then explore deeply and pull. This keeps short-term value safe while preserving later decisions.",
    paragraphs: [
      "Dreamwalk Corridor is the first major post-launch version, so day one will be denser than a normal event patch.",
      "Start with account-level cleanup: mail, compensation, login rewards, free packs, event pages and redeem codes.",
      "The long events should be opened early, but they do not need to be finished immediately.",
      "For exploration, prioritize main route, teleports and event-required points before hidden collectible cleanup.",
      "Lacrimosa is the first-half focus, but live testing should decide how deep you go."
    ]
  },
  "18": {
    category: "Vehicle Gameplay",
    title: "Underground Circuit and Porsche 918 Week-One Guide: Tuning, Racing and Fons Planning",
    excerpt:
      "A week-one plan for Underground Circuit, Porsche 918 Spyder, higher tuning caps and the June 8-15 Fons Rush economy window.",
    readTime: "10 min",
    overview:
      "Version 1.1 adds Underground Circuit, the Porsche 918 Spyder collaboration vehicle, higher vehicle tuning caps, baseline handling changes, auto-drive and third-person vehicle camera improvements. Since Underground Circuit runs June 3-July 8 and Fons Rush runs June 8-15, the first week should avoid dumping all Fons into cosmetics or unnecessary max tuning. Complete event goals, test track demands, then invest in acceleration, handling, durability or cosmetics based on actual needs.",
    requirements: [
      ["Gameplay window", "Underground Circuit is expected from June 3 to July 8, 2026"],
      ["Collaboration", "Porsche Collaboration and Porsche 918 Spyder arrive in Version 1.1"],
      ["Economy window", "Fons Rush runs June 8-15, 2026 and is a good time to refill Fons"]
    ],
    stepsTitle: "Week-One Vehicle Plan",
    stepsNote: "Meet goals first, max later",
    steps: [
      ["Test default handling first", "Do not max-tune a new or old car immediately.", "Version 1.1 adjusts vehicle feel. Run city roads and entry Underground Circuit races with low investment before spending heavily."],
      ["Tune by track type", "Handling for tight turns, acceleration for straights, durability for chase pressure.", "Top speed is not always the answer. Narrow city routes and obstacles often reward control more than raw speed."],
      ["Budget Porsche 918 separately", "Separate vehicle, cosmetic, tuning and pull resources.", "Whatever the final acquisition route is, do not let Porsche spending consume Lacrimosa, Chaos or signature Arc budgets."],
      ["Keep a Fons buffer before June 8", "Use Fons Rush to refill large economy gaps.", "If characters, vehicles, housing and city systems all need money, avoid spending everything on June 3. Save big refills for the double-Fons window."],
      ["Prioritize event rewards over perfect times", "Claim milestones, shop currency and daily goals first.", "Underground Circuit lasts a while. Stable rewards should come before leaderboard pushing or full tuning."]
    ],
    challengeLabel: "Vehicle Economy Risk",
    boss: {
      name: "Treating racing as mandatory day-one max tuning",
      summary:
        "Vehicle gameplay can quietly consume Fons, tuning parts, cosmetics, collaboration spending and character pull budget at the same time.",
      tips: [
        "Clear basic event goals with low investment before adding more tuning.",
        "Keep vehicle spending separate from character pulls, especially the second-half Chaos budget.",
        "When Fons are tight, prioritize character growth and required event upgrades before cosmetics."
      ]
    },
    rewards: ["Underground Circuit rewards", "Porsche 918 plan", "Tuning efficiency", "Fons Rush value", "Protected character budget"],
    closing:
      "The key to Version 1.1 vehicle content is not maxing a car on day one. Test tracks, claim stable rewards, then use Fons Rush to support deeper upgrades without slowing character growth.",
    paragraphs: [
      "Version 1.1 vehicle content is larger than one Porsche 918 Spyder. It also includes Underground Circuit and multiple driving quality-of-life changes.",
      "The first week should identify track demands before committing expensive tuning.",
      "Fons planning matters because characters, vehicles, housing and city systems all compete for the same economy.",
      "Treat Porsche 918 as a separate spending track rather than part of your character pull budget.",
      "Underground Circuit lasts until July 8, so stable rewards come before leaderboard pushing."
    ]
  },
  "17": {
    category: "Pull Planning",
    title: "1.1 Pull Budget: Lacrimosa, Chaos, Signature Arcs and the 200-Pull Outfit Trap",
    excerpt:
      "A practical 1.1 budget guide for Lacrimosa, Chaos, signature Arcs, pity carryover and the 50/120/200-pull cosmetic milestones.",
    readTime: "12 min",
    overview:
      "Version 1.1 Dreamwalk Corridor starts on June 3, 2026. Lacrimosa's Fading Reverie banner runs June 3-24, and Chaos's Forsaken Path banner runs June 24-July 8. Limited character banners have no traditional 50/50: an S-Class pull is the featured limited character, with soft pity around 70 pulls, hard pity at 90, and pity carryover between limited character banners. Arc banners are a separate Tri-Key budget with S-Class Arc pity at 60 pulls and featured Arc guarantee at 80. For most players, the order should be character copy first, signature Arc only for long-term cores, and cosmetic milestones last.",
    requirements: [
      ["First half", "Lacrimosa: June 3-24, 2026; Chaos attribute, Liquid Arc compatibility"],
      ["Second half", "Chaos: June 24-July 8, 2026; Lakshana attribute, Condensate Arc compatibility"],
      ["Budget rule", "Character copy first, signature Arc second, 50/120/200-pull cosmetics last"]
    ],
    stepsTitle: "Pull Decision Order",
    stepsNote: "Preserve choice first",
    steps: [
      ["Record pity and currency", "Separate character, standard and Arc banner progress.", "Limited character pity carries to later limited banners, but it is not standard-banner or Arc-banner progress. Record Hotori pity, Annulith, Solid Dice, Tri-Keys and claimable event income before June 3."],
      ["Evaluate Lacrimosa by base copy value", "Prioritize if you lack a carry or a Chaos damage core.", "Lacrimosa arrives first and is most attractive for accounts needing a new damage anchor or Liquid-based setup. If your DPS roster is already stable, wait for rotation, energy and team data."],
      ["Keep a separate Chaos budget", "Do not spend the entire version in the first half.", "Chaos arrives on June 24 and has a shorter window. Unless Lacrimosa is a must-pull, keep enough budget for second-half information and decisions."],
      ["Use Tri-Keys only for core characters", "Avoid Arc banners unless you can approach the 80-pull guarantee.", "Arc banners can be much more expensive than character copies in practice. Signature Arcs are best for characters you are sure will stay in your main roster."],
      ["Treat cosmetics as a luxury track", "50, 120 and 200 pulls are bonus nodes, not baseline power goals.", "Cosmetic milestones can be valuable only if you were already pulling that deep. Do not let the 200-pull outfit consume your second-half character budget."]
    ],
    challengeLabel: "Budget Trap",
    boss: {
      name: "Reading a friendly character banner as a cheap whole system",
      summary:
        "The character banner is clear, but Arc banners, cosmetic milestones and split-half scheduling can still drain the version budget quickly.",
      tips: [
        "Track limited character banners, Arc banners and standard banners separately.",
        "Wait for Lacrimosa testing before committing Tri-Keys to her signature Arc.",
        "Cosmetic nodes are extra value only when they align with a planned pull count."
      ]
    },
    rewards: ["Lacrimosa budget", "Chaos budget", "Tri-Key plan", "Cosmetic milestone discipline", "Second-half flexibility"],
    closing:
      "Label every pull by purpose: character power, Arc investment or cosmetic spending. Tight budgets should prioritize character copies over signature Arcs, and signature Arcs over 200-pull cosmetics.",
    paragraphs: [
      "As of May 27, 2026, the banner dates are firm enough for budgeting, but unreleased character strength should still wait for testing.",
      "The limited character banner is friendly because there is no normal 50/50 and hard pity is clear. The expensive part is what happens after the copy: signature Arcs and cosmetic milestones.",
      "For combat value, most accounts should secure a long-term base copy first. Signature Arcs are for confirmed core characters, not every new release.",
      "Players with Hotori, Nanally or another finished carry do not need to pull Lacrimosa on day one. Trial runs, event fit and team requirements should drive the decision.",
      "Chaos should be judged with second-half information. Saving budget is not hesitation; it keeps the ability to react to the actual 1.1 environment."
    ]
  },
  "16": {
    category: "End-of-Version Checklist",
    title: "May 27 Closing Checklist: Hotori Banner, Whisker Patrol, Codes and Must-Do Tasks Before June 3",
    excerpt:
      "A final-week checklist for Version 1.0 covering Hotori, Marching Beyond Time, Whisker Patrol, redeem codes, stamina and exploration cleanup.",
    readTime: "10 min",
    overview:
      "Starting May 27, 2026, Version 1.0 has three overlapping countdowns: Whisker Patrol opens at 12:00 and ends June 3 at 04:59 (UTC+8); Hotori's limited board and the Marching Beyond Time S-Class Arc Research run until June 3 at 05:59; Version 1.1 Dreamwalk Corridor follows on June 3. The final-week priority is not what can be farmed forever, but what expires: event points, mail, codes, banner pity records, shops, teleports and universal materials.",
    requirements: [
      ["Event window", "Whisker Patrol: May 27, 2026 12:00 to June 3, 2026 04:59 (UTC+8)"],
      ["Banner window", "Hotori and Marching Beyond Time end June 3, 2026 05:59 (UTC+8)"],
      ["Version goal", "Clear limited rewards and preserve 1.1 pull and growth resources"]
    ],
    stepsTitle: "Final-Week Checklist",
    stepsNote: "Sort by expiry time",
    steps: [
      ["Cap Whisker Patrol first each day", "Solo first, stop when capped.", "The event resets at 05:00 and allows up to 150 points per day. Multiplayer ordinary enemies only score for the final-hit player, and high-risk anomalies give no event points in multiplayer."],
      ["Record Hotori banner status", "Whether you pull or skip, write down limited-banner pity.", "Hotori ends on June 3 at 05:59. Skippers should carry the record into Lacrimosa planning; pullers should finish decisions before the version switch."],
      ["Confirm the Arc banner calmly", "Do not chase Marching Beyond Time just because the banner is ending.", "If Hotori is a long-term core and your Tri-Keys are near guarantee, consider it. Otherwise, keeping Tri-Keys for 1.1 is usually safer."],
      ["Handle codes in two batches", "Redeem current codes now, then claim 1.1 codes before June 25.", "Use the phone menu redemption entry and claim rewards from mail. DREAMWALK0603, TOMATO100 and RACENOLIMIT are announced 1.1 codes that expire June 25."],
      ["Move stamina to universal stock", "Ascension, skills, weapons, Fons and EXP first.", "Before 1.1 lands, avoid over-farming unconfirmed new-character materials. Universal resources are the safest final-week stamina target."]
    ],
    challengeLabel: "Closing Risk",
    boss: {
      name: "Mixing several June 3 deadlines",
      summary:
        "Whisker Patrol ends at 04:59, Hotori and the current Arc Research end at 05:59, and 1.1 content follows. Leaving everything to the final morning is the easiest way to miss rewards.",
      tips: [
        "Do a full limited-reward sweep on the evening of June 2.",
        "Make pull decisions one day early; use the last day only for confirmation.",
        "Check mail, event pages, shops, code redemption, Arc Research and the limited board separately."
      ]
    },
    rewards: ["150 daily points", "Hotori pity record", "Arc-banner stop-loss", "Redeem-code value", "1.1 universal stock"],
    closing:
      "The clean final-week route is simple: cap Whisker Patrol daily, finish Hotori and Arc decisions before June 3, and spend pre-version stamina on universal resources.",
    paragraphs: [
      "May 27 is when the 1.0 closing schedule tightens. Whisker Patrol adds a daily 150-point task while Hotori and the current signature Arc approach their June 3 cutoff.",
      "Whisker Patrol should be the first daily task because it has a short duration and daily cap. Solo routes are more reliable than multiplayer scoring.",
      "Skipping Hotori still requires action: record your limited-banner progress because it affects the Lacrimosa budget. Players who own Hotori should not automatically chase her signature Arc unless the budget supports it.",
      "Separate current usable codes from 1.1 livestream codes. DREAMWALK0603, TOMATO100 and RACENOLIMIT should be redeemed after the update and before June 25.",
      "Use final-week stamina conservatively. Ascension, skill books, weapon upgrades, EXP and Fons are low-risk; unconfirmed specialized farming can wait for 1.1 implementation."
    ]
  },
  "15": {
    category: "Limited Event",
    title: "Whisker Patrol Starts May 27: 150 Daily Points, Multiplayer Last-Hit Rules and Pre-1.1 Stamina Plan",
    excerpt:
      "A dense event plan for Whisker Patrol from May 27 to June 3, covering point caps, multiplayer risks, high-risk anomaly rules and pre-1.1 resource timing.",
    readTime: "9 min",
    overview:
      "Whisker Patrol runs from May 27, 2026 at 12:00 to June 3 at 04:59 (UTC+8). Players earn points by defeating anomalies, Garuda members and high-risk anomalies, with a 150-point daily cap and milestone rewards including Annulith, Expansion Cores and Fons. Because multiplayer points depend on last hits for ordinary targets and high-risk anomalies do not grant event points in multiplayer, the safest plan is to cap 150 points solo each day before spending time on regular stamina and 1.1 preparation.",
    requirements: [
      ["Event window", "May 27, 2026 12:00 to June 3, 2026 04:59 (UTC+8)"],
      ["Daily cap", "Up to 150 event points per day, resetting at 05:00 server time"],
      ["Main rewards", "Annulith, Expansion Cores, Fons and milestone rewards"]
    ],
    stepsTitle: "Daily 150-Point Route",
    stepsNote: "Limited rewards before permanent farming",
    steps: [
      ["Check the point bar first", "Confirm today's remaining points and claimed milestones.", "Milestone rewards can be claimed once. Check the remaining daily point allowance before farming so you do not spend time after the cap."],
      ["Clear anomalies solo first", "Use dense routes near teleports and main roads.", "Ordinary anomalies and Garuda members are the best base route. Minimize travel and raise points quickly before doing normal tasks."],
      ["Use multiplayer only as backup", "Expect points only if you land the final hit.", "In multiplayer, only the Appraiser who lands the final blow on an anomaly or Garuda member gets points. It is fast but unreliable for personal capping."],
      ["Handle high-risk anomalies solo if possible", "Multiplayer high-risk anomaly kills do not grant event points.", "If the goal is Whisker Patrol points, solo is safer. If the target is too slow or hard, switch to ordinary enemies to finish the cap."],
      ["Swap to stamina priorities after capping", "Return to universal materials, skills and Fons planning.", "Once the 150 points are done, spend stamina on ascension, skills, Arc Plates, weapons, teleports and pre-June 3 pull budgeting."]
    ],
    challengeLabel: "Event Pitfalls",
    boss: {
      name: "Last-hit rules and cap waste",
      summary:
        "The event is mostly about efficiency, not hard combat. Multiplayer last hits, daily caps, reset time and high-risk scoring rules all affect real rewards.",
      tips: [
        "Start a new point cycle after the 05:00 reset instead of farming on a capped account.",
        "Coordinate last hits in multiplayer or your personal points may barely move.",
        "The event ends on June 3 at 04:59, so do not leave the final day until the maintenance window."
      ]
    },
    rewards: ["Annulith", "Expansion Cores", "Fons", "Milestone rewards", "Pre-1.1 resource buffer"],
    closing:
      "Treat Whisker Patrol as a short daily priority: cap 150 points solo, claim milestones, then return to broader 1.1 preparation. Do not trade scoring certainty for multiplayer speed, and do not spend prime time farming after the daily cap.",
    paragraphs: [
      "Whisker Patrol has a short window, clear rewards and a hard daily point cap, right before Version 1.1. That makes it a priority task, not an all-day grind.",
      "Point sources include anomalies, Garuda members and high-risk anomalies, but multiplayer changes the math. Ordinary enemies only award points to the final-hit player, while high-risk anomaly multiplayer kills do not grant event points.",
      "The clean route is to finish 150 points first every day, then move to normal dailies. After the cap, the same combat only gives ordinary value, so universal materials, Fons and exploration cleanup become better uses of time.",
      "The final day is tight: Whisker Patrol closes on June 3 at 04:59, while the current Hotori banner and Arc Research end at 05:59 (UTC+8). Clear points and shops before the update window."
    ]
  },
  "14": {
    category: "Version Calendar",
    title: "Version 1.1 Dreamwalk Corridor Calendar: Lacrimosa, Chaos, Sunward Island, Underground Circuit and Fons Rush",
    excerpt:
      "A practical calendar for Version 1.1 events, banners, exploration, city hobbies and double-Fons priorities from June 3 to July 8.",
    readTime: "13 min",
    overview:
      "Version 1.1 Dreamwalk Corridor is planned for June 3, 2026. Announced content includes the Dreamwalk Corridor episode, Sunward Island, Corridor of Echoes, S-Class characters Lacrimosa and Chaos, Porsche 918 Spyder collaboration, Pegasus Residence, Bagel SNS, Fight Club, Underground Circuit, Mist Pursuit and multiple events. Because many activities overlap, the key is to separate expiring rewards, pull decisions, exploration and double-income windows by date.",
    requirements: [
      ["Version start", "June 3, 2026"],
      ["First-half banner", "Lacrimosa from June 3 to June 24"],
      ["Second-half banner", "Chaos from June 24 to July 8"]
    ],
    stepsTitle: "1.1 Priority Calendar",
    stepsNote: "Let closing dates decide priority",
    steps: [
      ["June 3: claim codes and open events", "Redeem DREAMWALK0603, TOMATO100 and RACENOLIMIT.", "The revealed codes expire on June 25. On day one, claim mail, compensation, event entries and early teleports before deep farming."],
      ["June 3-24: test Lacrimosa before pulling deep", "Use trials, story experience and early feedback first.", "Lacrimosa is a Chaos-attribute damage character with Liquid Arc compatibility. She is higher priority for accounts lacking a new carry, but conservative players should wait for rotation and Arc data."],
      ["June 3-8: unlock long-term event tracks", "Open What’s Baking, Underground Circuit, Sunward Travelogue and The Long Dream.", "These last until July 8, so do not rush full completion on day one. Unlock entries, daily or weekly goals and Sunward Island teleports first."],
      ["June 8-15: prioritize Fons Rush", "Spend City Stamina on high-value Hethereau Hobbies during the double-Fons window.", "This is a short, clearly valuable economy window. Save some city stamina and route your money needs around it."],
      ["June 24-July 8: reassess for Chaos and second-half events", "Use first-half pull results to decide Chaos, Fight Champions and Pixel Surge.", "If Lacrimosa consumed your budget, focus on event rewards and universal resources. If you saved, evaluate whether Chaos fixes a real team gap."]
    ],
    challengeLabel: "Version Resource Risk",
    boss: {
      name: "Too many events, no priority",
      summary:
        "Version 1.1 stacks story, areas, banners, vehicle collaboration, city systems and events. Without a calendar, players can miss codes, double income and second-half choices.",
      tips: [
        "Codes, mail, event shops and limited entries outrank exploration cleanup.",
        "Budget separately for June 3-24 and June 24-July 8 instead of spending all Annulith on day one.",
        "Fons Rush runs June 8-15, so prepare City Stamina and high-profit hobbies ahead of time."
      ]
    },
    rewards: ["Redeem codes", "Lacrimosa budget", "Chaos budget", "Sunward Island exploration", "Double Fons", "Underground Circuit", "Porsche collaboration"],
    closing:
      "The best 1.1 opening is to claim irreversible rewards first, open long-term event tracks, and decide pull depth after practical testing. June 8-15 Fons Rush and the June 24 second-half banner both need resources left over.",
    paragraphs: [
      "Dreamwalk Corridor is the first major post-launch version and contains more than a normal event patch. Story, areas, banners, Porsche content, racing, Fight Club, Bagel SNS and multi-stage rewards all compete for time.",
      "On June 3, use a fixed sequence: claim mail and compensation, redeem codes, open event entries, then progress story and Sunward Island teleports. This prevents early exploration or pulling from hiding time-limited rewards.",
      "Pull planning should split the version into two halves. Lacrimosa arrives first and suits accounts needing a new damage core; Chaos arrives later and rewards players who keep enough budget for second-half information.",
      "Fons Rush from June 8 to June 15 is the clearest economy spike. Fons are used by leveling, vehicles, housing and operations, so the double window is worth planning around.",
      "For Sunward Island and Corridor of Echoes, do only the main route, teleports and event-required points first. Save 100% cleanup until routes and hidden-point information mature."
    ]
  },
  "13": {
    category: "Version Preview",
    title: "1.1 Dreamwalk Corridor Preview: Resource Stockpiling, Team Prep and Priorities Before June 3",
    excerpt:
      "A conservative preparation guide for the publicly announced 1.1 Dreamwalk Corridor update, covering resources, teams, stamina and exploration progress.",
    readTime: "10 min",
    overview:
      "Version 1.1, Dreamwalk Corridor, was publicly previewed in late May 2026 and is planned for June 3, 2026. Because the content is still unreleased, this guide does not treat leaked or unimplemented details as confirmed. It uses the known 1.0 growth structure, launch resource flow and normal pre-patch preparation logic to recommend the safest plan from late May to early June.",
    requirements: [
      ["Timeframe", "May 24, 2026 until the 1.1 release"],
      ["Main goal", "Keep pull currency, finish your main team and stock universal materials"],
      ["Risk note", "Unreleased content should always defer to final official notices and in-game implementation"]
    ],
    stepsTitle: "Pre-Version Preparation Order",
    stepsNote: "Secure the floor before chasing the ceiling",
    steps: [
      ["Claim limited rewards and mail", "Check Annulith, pull tickets, stamina items and event currency first.", "Compensation, login rewards and event shops often expire. Before 1.1, review mail, event pages and exchange shops so convertible resources do not disappear unused."],
      ["Keep at least one character-banner budget", "Do not sink resources into low-priority awakenings unless the current banner directly fixes your main team.", "For most players, keeping enough pulls for new characters, new Arc Plates or strong utility roles is safer than chasing a small damage increase before patch information is complete."],
      ["Build one team that clears dailies", "Main DPS, functional sub-DPS, survival slot and reaction/enabler slot should be usable.", "New versions often add event stages or challenge objectives. A stable first team is more valuable than several half-built characters."],
      ["Clean the teleport network early", "Activate Wertheimer Towers, phone booths and world-boss teleports.", "If 1.1 quests require cross-district travel, a complete teleport network saves significant time. Late May is a good point to finish teleports, photo side quests and key exploration points."],
      ["Spend stamina on universal materials", "Farm ascension, skill books, weapon upgrades and currency.", "New-character exclusive materials may not be pre-farmable, but universal materials are almost always consumed. Avoid gambling stamina on narrow materials before official data is final."]
    ],
    challengeLabel: "Common Pre-Version Mistake",
    boss: {
      name: "Resource anxiety and misread information",
      summary:
        "The biggest preview-period problem is planning around unconfirmed data. New character numbers, event multipliers and reward pools should be finalized only after they are visible in game.",
      tips: [
        "Do not dismantle your current 1.0 team because of rumors.",
        "Do not convert all stamina into one attribute material before new requirements are confirmed.",
        "Track official launch dates, maintenance compensation, event duration and shop closing time."
      ]
    },
    rewards: ["Annulith plan", "Saved pull tickets", "Universal ascension materials", "Exploration progress", "Faster event entry"],
    closing:
      "The best pre-1.1 plan is simple: keep pull currency flexible, invest stamina into universal growth, and finish enough map progress that new quests do not stall. Whether Dreamwalk Corridor leans combat, exploration or story, this reduces last-minute catch-up costs.",
    paragraphs: [
      "As of May 24, 2026, the key confirmed point is that 1.1 Dreamwalk Corridor has been announced and is planned for June 3, 2026. This is a preparation window, not a reason to write unreleased character values or enemy mechanics as facts.",
      "For free-to-play and monthly-card players, late May is about stopping low-return spending. If your main DPS already clears dailies and story content, chasing small awakenings is usually less valuable than keeping one full budget for new information.",
      "Stamina planning should stay conservative. Character ascension, skill materials, weapon upgrades, Fons and experience items are unlikely to be wasted, while unconfirmed attribute materials can easily be over-farmed.",
      "Exploration progress is also worth finishing. Missing phone booths, Wertheimer Towers and world-boss teleports can slow patch quests more than weak sub-stats. Clean the infrastructure first, then chase random stat upgrades."
    ]
  },
  "12": {
    category: "Character Building",
    title: "May 2026 Launch Character Priority: S-Rank Selector, Nanally, Jiuyuan and Stable Teams",
    excerpt:
      "A launch-month character investment guide for choosing your S-rank selector, main DPS, sub-DPS, survival slot and resource boundaries.",
    readTime: "12 min",
    overview:
      "In the May 2026 launch environment, account strength depends more on forming one complete team quickly than on owning many S-rank characters. Nanally and Jiuyuan are high-value because they improve output or multi-target flow, but the real difference comes from resource focus, clear team roles and correct skill priority.",
    requirements: [
      ["Target players", "Launch players, unused S-rank selector users and players who just unlocked core systems"],
      ["Evaluation standard", "Can the team clear dailies, material stages, anomaly commissions and exploration fights?"],
      ["Resource rule", "Build one team first, then a second team; main DPS first, then key utility"]
    ],
    stepsTitle: "Investment Priority",
    stepsNote: "Avoid even investment",
    steps: [
      ["Choose the main DPS first", "Nanally, Xiaozhi, Bai Cang and other on-field carries take priority.", "The main DPS determines clear speed. During progression, one over-leveled carry feels better than several evenly raised characters."],
      ["Add sub-DPS and grouping", "Jiuyuan-style quick-swap grouping improves multi-target fights.", "Many overworld fights are hard because enemies spread out. Grouping, marking and burst support let the main carry hit the full rotation."],
      ["Keep a survival slot", "Bring at least one shield, healer or damage-reduction character.", "In bosses and anomaly commissions, survival saves revive time and resets. Once damage is enough, stability becomes efficiency."],
      ["Upgrade skills by value", "Main DPS core skills first; sub-DPS finisher or utility skills second.", "Skill books are tight early. Upgrade only skills that directly affect rotation, damage, control or survival."],
      ["Delay the second team", "Unless content requires two teams, keep the second team at a usable line.", "A second team needs a full resource chain. During the first month, finish the first team before spreading materials."]
    ],
    challengeLabel: "Investment Trap",
    boss: {
      name: "Many characters, no complete unit",
      summary:
        "Multiple high-rarity pulls do not equal a strong account. Without levels, skills, weapons and usable stats, an S-rank character can perform worse than a finished lower-rarity unit.",
      tips: [
        "Use the S-rank selector to fix a team gap, not only to pick a popular solo unit.",
        "Do not spend many skill books on low-field-time characters before the main DPS is ready.",
        "Correct main stats matter before perfect sub-stats during progression."
      ]
    },
    rewards: ["Finished main DPS", "Grouping sub-DPS", "Stable survival", "Saved materials", "Faster progression"],
    closing:
      "The safest May route is main DPS ahead, sub-DPS for function, survival as insurance. Once one team clears dailies and events consistently, use 1.1 information to decide second-team and deep-investment plans.",
    paragraphs: [
      "New players often ask which S-rank is strongest, but practical performance depends more on team structure and resource concentration. One 80% finished team usually beats three 40% finished high-rarity characters.",
      "If Nanally is your core, support her on-field basic-attack cycle with Spirit damage, crit and teammates who group enemies. Jiuyuan is a strong partner because she improves multi-target consistency.",
      "The S-rank selector should solve the current account problem. Pick a main DPS if you lack damage, a grouping or sub-DPS unit if wave clear is weak, or a survival slot if hard content keeps killing the team.",
      "Do not chase full graduation for every character in the first month. Correct main stats, core skill levels and smooth rotations are more important than perfect sub-stats."
    ]
  },
  "11": {
    category: "Pull Planning",
    title: "Complete Pull Resource Plan: Annulith, Pity and Banner Choices from 1.0 to Pre-1.1",
    excerpt:
      "A conservative launch-period guide to pull income, pity mindset, character versus weapon priority and whether to stop before 1.1.",
    readTime: "11 min",
    overview:
      "Pull planning in NTE is not only about single-banner odds. It must account for account gaps and version timing. Late May 2026 sits between launch 1.0 and the 1.1 preview period, so players can easily overspend on marginal upgrades and enter the new version with no budget.",
    requirements: [
      ["Stage", "After 1.0 launch and before 1.1 release"],
      ["Core question", "Does the current banner fix more than the value of keeping future choice?"],
      ["Recommended for", "F2P, monthly-card, light spenders and returning players"]
    ],
    stepsTitle: "Pull Decision Flow",
    stepsNote: "Ask whether each step solves a real problem",
    steps: [
      ["Identify the account gap", "Is the issue damage, survival, grouping or reaction flow?", "Do not pull only because a ranking says a unit is strong. Different problems need different banner targets."],
      ["Calculate pity distance", "Record current pity, tickets and expected Annulith.", "Include mail, events, exploration, dailies and monthly-card income before deciding whether a target is realistic."],
      ["Characters before weapons", "Expand team function before chasing signature ceilings.", "Most early accounts lack team structure. A weapon raises one unit's ceiling, while a character can add an entire role."],
      ["Keep choice before a version update", "Do not empty all resources before 1.1 information is clear.", "A new version can bring new characters, shops and environment changes. Saving resources lets you act after full information."],
      ["Set a stop line", "Stop when the target or budget cap is reached.", "The most common loss comes from adding weapon or awakening pulls after already getting the main target."]
    ],
    challengeLabel: "Pull Risk",
    boss: {
      name: "Sunk cost",
      summary:
        "Already spent pulls are not a reason to continue. Compare the next pull's expected value with the opportunity cost of future banners.",
      tips: [
        "If the current team already clears target content, lower the priority of more configuration pulls.",
        "Weapon banners are better after your long-term carry is fixed.",
        "Do not convert all pre-version resources into irreversible low-priority upgrades."
      ]
    },
    rewards: ["Annulith budget", "Pity control", "Banner choice", "Weapon boundary", "Version flexibility"],
    closing:
      "Pull planning means putting limited resources where they solve the biggest problem. In late May, be conservative: pull roles if your main team is incomplete, save if it is stable, and wait for more complete 1.1 data before deep investment.",
    paragraphs: [
      "Probability tables are useful, but ordinary players need decision boundaries. Start by naming the account gap, then decide whether the current banner addresses it.",
      "May 2026 is unusual because 1.0 is still being digested while 1.1 is already previewed. This makes conservative pulling more valuable than normal.",
      "Weapon banners usually rank below character banners early. A signature weapon raises a unit's ceiling; a character can unlock a missing function.",
      "Write your stop line before pulling: base copy only, one pity maximum, no weapon banner, or another clear limit. A clear rule prevents luck from changing the plan mid-session."
    ]
  },
  "10": {
    category: "Map Exploration",
    title: "Hethereau 100% Exploration Route: Phone Booths, Towers, Oracle Stones and Hidden Teleports",
    excerpt:
      "A May 2026 exploration checklist for region reveal, phone booths, oracle stones, anomaly commissions and hidden teleports.",
    readTime: "13 min",
    overview:
      "Hethereau exploration is hard because of routing, not because of one collectible. Activate regions and teleports first, then clear oracle stones, photos, anomaly commissions and hidden chests. This is much more efficient than picking up whatever you see first.",
    requirements: [
      ["Recommended progress", "Main districts unlocked with free driving and teleport access"],
      ["Useful tools", "Motorcycle or fast vehicle, plus an existing phone-booth network"],
      ["Target rewards", "Exploration progress, Annulith, growth materials, hidden chests and teleport efficiency"]
    ],
    stepsTitle: "100% Exploration Route",
    stepsNote: "Advance by district, not by random markers",
    steps: [
      ["Activate Wertheimer Towers", "Turn gray regions into readable maps.", "Each new district should start with the tower so roads, vertical layers and nearby teleports are easier to understand."],
      ["Build phone-booth coverage", "Unlock booths along main roads, bridges, business areas and elevated-road entrances.", "Run one vehicle loop around major roads before detailed rooftop or indoor cleanup."],
      ["Clear low-level oracle stones", "Handle street-level and roadside points first.", "This quickly raises exploration and helps identify which remaining markers are above or below you."],
      ["Clean high layers and gaps", "Check rooftops, billboards, underpasses and underground passages.", "Late exploration misses are usually vertical. Look for stairs, elevators, pipes and parking entrances."],
      ["Finish anomaly commissions", "Handle combat, puzzles and hidden chests together.", "Commissions are longer, so clear them after teleports are ready. They often unlock nearby chests or remove abnormal zones."]
    ],
    challengeLabel: "Cleanup Focus",
    boss: {
      name: "Vertical map misreads",
      summary:
        "Hethereau is a layered city. A marker close on the minimap may be on a roof, underground, indoors or on an elevated road.",
      tips: [
        "If a point hugs a building edge, search for stairs, fire escapes, elevators or climbable exteriors.",
        "For elevated roads and tunnels, the entrance may be on the other side of the block.",
        "When stuck above 95%, check photo spots and post-anomaly chests first."
      ]
    },
    rewards: ["Annulith", "Oracle stone exchange", "Hidden chests", "Anomaly rewards", "Teleports", "Exploration percent"],
    closing:
      "The time-saving route is tower, phone booth, low layer, high layer, then commissions. Use that order before relying on an interactive map for the final hidden points.",
    paragraphs: [
      "Open-world exploration efficiency comes from route design. If you pick up every visible item first, you often lack teleports later and repeat the same district many times.",
      "Wertheimer Towers are the regional map switches. They make the map readable and help identify road layers and nearby functions.",
      "Phone booths are the second core. Unlock booths around commercial streets, bridges, elevated-road entrances, residential edges and dungeon entrances.",
      "Late exploration is about height, not flat position. Hethereau places content on rooftops, underground paths, skybridges, parking structures and interiors."
    ]
  },
  "9": {
    category: "Mode Guide",
    title: "Advanced Pinkpaw Heist Profit Route: Backpack Choices for Million-Fons Extractions",
    excerpt:
      "An advanced guide to exits, three-layer routing, keycards, backpack value density and high-value loot priority.",
    readTime: "12 min",
    overview:
      "Pinkpaw Heist rewards extraction judgment more than combat volume. In the May version, stable million-Fons runs depend on confirming exits early, choosing how deep to go and filtering low-value loot by backpack value density.",
    requirements: [
      ["Mode goal", "Loot high-value items and extract through red phone booths"],
      ["Key tools", "Keycards, mystery cores, backpack expansion and recovery items"],
      ["Profit rule", "Prioritize value density and avoid greed for cheap loot"]
    ],
    stepsTitle: "Advanced Extraction Flow",
    stepsNote: "Profit comes from choosing what to skip",
    steps: [
      ["Mark exits immediately", "Remember routes whenever you see an active phone booth.", "Do not wait until your bag is full. Confirm at least two exit directions early to avoid dying to enemies, surveillance or getting lost."],
      ["Use LG1 as transition", "Take keycards, supplies and medium-high value items.", "The office layer is safer but not the richest. Its main value is key items, not low-price filler."],
      ["Prioritize display cases on LG2", "Check gems, paintings, safes and laser rooms.", "The collection layer is the stable-profit core. Good LG2 routing can support a strong run without forcing LG3."],
      ["Enter LG3 only with conditions", "Go deeper only with keycard, time and an exit route.", "The vault has the highest ceiling and highest risk. If time or exit position is poor, fill with LG2 valuables and leave."],
      ["Stop looting at one minute", "Begin extraction whether the bag is full or not.", "The biggest loss is timing out with a full backpack. After expensive loot is secured, extraction chance beats another search room."]
    ],
    challengeLabel: "Failure Points",
    boss: {
      name: "Greed and broken routes",
      summary:
        "Most failures happen after players already have valuable loot but keep searching to fill the last slots.",
      tips: [
        "Re-evaluate the route immediately after finding a high-value collectible.",
        "Pick low-value items only when the bag is empty and the exit route is safe.",
        "If you do not know the map well, skip deeper layers instead of pathfinding in the final half of the timer."
      ]
    },
    rewards: ["Fons", "Paw coins", "Gems", "Paintings", "Gold bars", "High-value collectibles"],
    closing:
      "Advanced Pinkpaw play is not about emptying the map. It is about extracting high-value loot quickly and safely. Stable average profit beats rare all-in jackpot runs for long-term growth.",
    paragraphs: [
      "The mode is interesting because every minute asks a question: is another room worth it, should a backpack slot be saved, and is the current exit safe?",
      "Backpack value density is the core concept. A cheap one-slot item becomes a loss if it blocks a gem, painting or premium collectible.",
      "Do not force LG3 every run. Keycard, mystery core, time, health and exit position all matter. If one condition is missing, LG2 extraction often wins in long-term average profit.",
      "Use a hard extraction rule: stop looting at 60 seconds, be on the route by 40 seconds, and abandon detours if no booth is visible by 20 seconds."
    ]
  },
  "8": {
    category: "Anomaly Commission",
    title: "Image Haunted House Puzzle Review: Projector Order, Top Floor Door and No-Hit Spider Tips",
    excerpt:
      "A logic-based review of the Image Haunted House projector puzzle, route memory and boss handling.",
    readTime: "9 min",
    overview:
      "Image Haunted House looks like a puzzle commission, but it mainly tests whether you understand how each projector changes the space. Many failures come from treating every projector as the same device.",
    requirements: [
      ["Recommended level", "Hunter level 28 or above"],
      ["Location", "Alleys around Suinarashi Avenue in Ekorai Town"],
      ["Team advice", "Bring toughness-break damage and a stable survival slot"]
    ],
    stepsTitle: "Projector Logic",
    stepsNote: "Understand what the scene change does",
    steps: [
      ["Entrance device opens the door", "Choose Open Gate.", "This projector only lets you enter the anomaly space. No timing bar is needed."],
      ["Hall device repairs stairs", "Play the film and stop in the red zone.", "The hall projector changes stair state. The red zone is the key frame for the route to the second floor."],
      ["Second-floor device removes a wall", "Shut it off directly.", "This node is not solved by playing the film. Repeatedly dragging the progress bar here prevents progress."],
      ["Inner-room device creates stairs", "Play the film and stop in the red zone.", "This uses the key-frame logic again and creates the temporary stairs upward."],
      ["Top-floor device unlocks the boss room", "Investigate the blue light first, then shut off the projector.", "Without the investigation trigger, the device can look correct while the door stays locked."]
    ],
    challengeLabel: "Boss Handling",
    boss: {
      name: "Bookshelf Spider",
      summary:
        "The spider's danger comes from red-circle pounces and repeated web attacks. If you avoid greed, break toughness first and burst during stagger, it is easier than the puzzle.",
      tips: [
        "When a red circle appears, dodge sideways rather than straight backward.",
        "Use toughness-break skills after the boss pauses or turns, reducing missed skills.",
        "Save burst skills for stagger windows instead of casting during movement."
      ]
    },
    rewards: ["Annulith", "Growth materials", "Anomaly containment reward", "Ekorai exploration progress"],
    closing:
      "The key is separating three actions: play, shut off and investigate. Once you know what each projector changes, the mansion stops feeling like a memory test.",
    paragraphs: [
      "If you only memorize the sequence, similar devices will still cause trouble later. Understand projector types instead: entrance, key-frame scene change, blocker removal and investigation-gated unlock.",
      "The hall and inner room both need the red zone because they alter the scene structure. The second-floor projector is the opposite: shutting it off removes the blocker.",
      "The blue investigation point on the top floor is easy to miss. If the door does not react, the issue is often the missing investigation, not the projector order.",
      "The boss is manageable if you keep moving sideways, respect red circles and burst after stagger rather than rushing damage."
    ]
  },
  "7": {
    category: "Character Guide",
    title: "Nanally Spirit Main DPS Deep Guide: Basic-Attack Cycle, Jiuyuan Synergy and May Teams",
    excerpt:
      "A full May 2026 Nanally guide covering on-field damage, basic-attack rhythm, Spirit teams, Jiuyuan synergy and stat choices.",
    readTime: "14 min",
    overview:
      "Nanally is one of the best Spirit on-field carries for May progression and long-term investment. She offers stable damage rhythm, high basic-attack value and straightforward team requirements. Build around basic-attack cycles, crit and Spirit damage.",
    requirements: [
      ["Role", "Spirit on-field main DPS / high-frequency basic attacks"],
      ["Team needs", "Grouping sub-DPS, damage support, survival or reaction/enabler slot"],
      ["Build focus", "Basic-attack skills, crit rate, crit damage and Spirit damage"]
    ],
    stepsTitle: "Nanally Build Route",
    stepsNote: "Center the team around on-field output",
    steps: [
      ["Raise core damage skills", "Basic attacks and main damage skills first.", "Nanally depends on sustained field time. Skill books should go into basic chains, coordinated follow-ups and the main damage sequence."],
      ["Pair with Jiuyuan", "Group and mark with Jiuyuan before Nanally takes field.", "Nanally dislikes scattered enemies. Jiuyuan's hold-E grouping makes her attacks and area follow-ups hit more targets."],
      ["Secure crit consistency", "Reach enough crit rate before stacking crit damage.", "High-frequency attackers feel unstable with poor crit rate. After correct main stats, prioritize double crit sub-stats."],
      ["Control field time", "Spend a full cycle after receiving buffs.", "Nanally should not stay forever. Support duration, grouping windows and enemy toughness state should define her active time."],
      ["Adjust survival by content", "Daily content can lean damage; hard content needs shield or healing.", "Long field time means she can take repeated hits. A survival slot can raise practical damage by preventing interruption."]
    ],
    challengeLabel: "Practical Difficulty",
    boss: {
      name: "Multi-target hit consistency",
      summary:
        "Nanally is stable on one target, but group fights need teammates to create positioning. Grouping, control and toughness management directly affect real damage.",
      tips: [
        "Do not start a full cycle while small enemies are scattered.",
        "In boss fights, dodge and quickly return to attack distance so the chain does not break.",
        "Apply support buffs before on-field time, not after."
      ]
    },
    rewards: ["Spirit main DPS", "Stable progression", "High-frequency output", "Jiuyuan synergy", "Long-term value"],
    closing:
      "Nanally's strength is stable cycling with the right team. In the May version, once grouping and survival are solved, she is a very reliable main DPS.",
    paragraphs: [
      "Nanally is good for progression because her output is intuitive and her build path is clear. She does not require an overly complex swap pattern to function.",
      "Jiuyuan is one of her most comfortable partners. Grouping and Spirit sub-DPS value let Nanally's on-field time hit more targets, especially in wave content.",
      "Do not chase extreme stats too early. Correct main stats, enough crit rate and skill levels beat a high crit-damage piece with the wrong main stat.",
      "Her weakness is long field time. In high-pressure boss fights, shields, healing or damage reduction may increase output more than another pure damage stat."
    ]
  },
  "6": {
    category: "Character Guide",
    title: "Jiuyuan Advanced Grouping Sub-DPS Guide: Rose Pact, Execution and Spirit-Team Role",
    excerpt:
      "A guide to Jiuyuan's May value, Rose Pact execution rhythm, quick-swap cycle and common timing mistakes.",
    readTime: "13 min",
    overview:
      "Jiuyuan is a functional damage slot with grouping, marking, execution burst and Spirit synergy. Her May value is highest in multi-target comfort and quick-swap burst, especially beside Nanally and other on-field carries.",
    requirements: [
      ["Role", "Spirit quick-swap sub-DPS / grouping / execution burst"],
      ["Core mechanic", "Deadly Rose Pact matures from bud to rose before execution"],
      ["Team environment", "Spirit teams, Creation teams or any main-DPS team that needs group control"]
    ],
    stepsTitle: "Jiuyuan Damage Cycle",
    stepsNote: "Do not rush the finisher",
    steps: [
      ["Open with hold E", "Group enemies and apply Deadly Rose Pact.", "Hold-E is her main multi-target value. Pull enemies together before the main carry or Jiuyuan finisher spends damage."],
      ["Wait for mark maturity", "Do not execute during the bud stage.", "Deadly Rose Pact needs to enter the executable state. Early finishers waste the burst window."],
      ["Use Q to execute", "Cast the finisher after the rose state appears.", "Q gives the best return on executable targets. Keep enemies inside the grouped area."],
      ["Add heavy attack or swap", "Choose based on remaining enemy health.", "Finish small enemies with a quick follow-up, but switch to the main carry in boss or elite fights."],
      ["Return to support flow", "Wait for the next E/Q window.", "Jiuyuan is not a long-field unit. After grouping, execution and quick damage, give field time back to the carry."]
    ],
    challengeLabel: "Common Mistake",
    boss: {
      name: "Executing before the mark matures",
      summary:
        "Her most common damage loss is wrong window timing. A marked enemy is not automatically ready for execution.",
      tips: [
        "Group before using Q so the finisher hits more than one target.",
        "In boss fights, prioritize mark state and Q accuracy over greedy basic attacks.",
        "As a sub-DPS, skill priority is Q and E."
      ]
    },
    rewards: ["Grouping efficiency", "Spirit sub-DPS", "Execution burst", "Nanally synergy", "Comfortable progression"],
    closing:
      "A good Jiuyuan rotation respects mark maturity and quick-swap rhythm. Treat her as a functional burst unit, not a forced on-field carry.",
    paragraphs: [
      "Jiuyuan is easy to start but rewards understanding Deadly Rose Pact. If her damage feels inconsistent, the execution window is usually misaligned.",
      "Her grouping is extremely valuable in the open world, where scattered enemies cause Nanally, Mint and similar units to miss damage.",
      "Do not keep Jiuyuan on field too long. Use E, Q, execution and a short follow-up, then rotate back to the main DPS.",
      "Resource priority is Q and E. Q controls execution damage; E controls grouping and mark application. Other skills can wait."
    ]
  },
  "5": {
    category: "Resource Planning",
    title: "Daily Stamina and Material Priority: May 2026 Launch Farming Table",
    excerpt:
      "A launch-stage guide to stamina, Fons, experience, ascension materials, skill books and stat farming priority.",
    readTime: "10 min",
    overview:
      "Stamina is one of the scarcest launch resources. The safest May logic is to secure character levels and core skills before farming random stat pieces. Early perfect-stat farming can delay ascension, skill and weapon growth.",
    requirements: [
      ["Target players", "Story progression, newly unlocked material stages or unfinished first team"],
      ["Core resources", "Character EXP, ascension materials, skill books, weapon materials and Fons"],
      ["Not recommended", "Heavy random sub-stat farming too early"]
    ],
    stepsTitle: "Daily Stamina Allocation",
    stepsNote: "Stable growth before random stats",
    steps: [
      ["Main DPS ascension first", "Farm immediately when level cap blocks progress.", "Main DPS level affects base stats and stage pressure. Other farming loses value if level caps are holding the team back."],
      ["Core skill books second", "Upgrade only skills that affect rotation and damage.", "Skill books are expensive. Prioritize main DPS core skills, sub-DPS finishers, grouping and survival tools."],
      ["Keep weapon or Arc Plate levels current", "Main gear should not lag far behind character level.", "Stable gear levels usually beat early random sub-stat farming."],
      ["Patch Fons shortages early", "Do not wait until all materials are ready to discover you cannot pay upgrades.", "Fons are the base cost for almost all growth. Farm currency before the chain breaks."],
      ["Farm sub-stats last", "Correct main stats are enough for progression.", "Random stat farming has high variance. Save heavy investment for after the first team is stable."]
    ],
    challengeLabel: "Resource Trap",
    boss: {
      name: "Random stat obsession",
      summary:
        "Many players spend all stamina on stats, then find character level, skills and weapons are behind. Random returns should come after stable growth.",
      tips: [
        "Do not farm deep sub-stats before the main DPS is ascended.",
        "Do not spend large stamina on sub-stats while key skill levels are missing.",
        "List resource gaps before entering a recommended stage."
      ]
    },
    rewards: ["Stamina efficiency", "Finished first team", "Skill upgrades", "Fons stock", "Gear transition"],
    closing:
      "Launch planning is about stable growth first. Make characters able to fight, skills able to rotate and gear usable, then invest remaining stamina into stat optimization.",
    paragraphs: [
      "Stamina planning determines account growth speed. The common early mistake is farming a perfect-looking set while ascension and skills remain blocked.",
      "Main DPS level is the first hard gate. Levels, ascension, weapons and core skills provide visible stable gains; random sub-stats may consume stamina with no result.",
      "Fons should be included in the plan. Many players farm materials first and only later realize the upgrade cost is missing.",
      "Stat stages are not bad, but they belong after first-team basics. Correct main stats and a functioning set can clear most early content."
    ]
  },
  "4": {
    category: "Beginner Guide",
    title: "7-Day Beginner Route: Story, Exploration, Pulls, Materials and Team Formation",
    excerpt:
      "A first-week route for May 2026 players, covering story progression, reward claiming, team setup and exploration cleanup.",
    readTime: "15 min",
    overview:
      "The first seven days are not about maxing every system. Your goals are unlocking core functions, forming one team, building the teleport network and preserving pull choice. This route suits new players and returning players catching up before 1.1.",
    requirements: [
      ["Target players", "New, returning or alt-account players in May 2026"],
      ["Core goals", "First team, story progress, daily unlocks and teleport network"],
      ["Base rule", "Do not evenly raise many characters or farm perfect stats too early"]
    ],
    stepsTitle: "7-Day Progression Route",
    stepsNote: "Each day has one main goal",
    steps: [
      ["Day 1: Push story and claim rewards", "Unlock mail, events, gacha and basic dailies.", "Do not get lost in side quests. Push main story until core systems are open and claim all launch rewards."],
      ["Day 2: Choose a main DPS", "Use pulls and selector results to define the team core.", "Once chosen, feed that character EXP, ascension and skill materials first."],
      ["Day 3: Add sub-DPS and survival", "Make the team include damage, grouping/reaction and protection.", "A complete team is more stable than one solo carry."],
      ["Day 4: Run phone booths and towers", "Build the Hethereau teleport network.", "Early teleports save time on story, side quests and material routes."],
      ["Day 5: Farm ascension and skills", "Bring the main team to the current comfort line.", "When stages feel hard, patch stable growth first. Do not delay levels for sub-stats."],
      ["Day 6: Clear anomalies and events", "Prioritize limited rewards and exploration-impact tasks.", "Events give concentrated rewards, and anomaly commissions provide progress, Annulith and materials."],
      ["Day 7: Review account direction", "Decide whether to pull now or save for 1.1.", "After one week you can judge the team gap more rationally than on day one."]
    ],
    challengeLabel: "Beginner Trap",
    boss: {
      name: "Too many systems, no focus",
      summary:
        "Systems unlock quickly, so new players often touch everything but finish nothing: story stalls, teams stay weak and stamina goes into random stats.",
      tips: [
        "For the first three days, focus on one main DPS.",
        "For exploration, unlock teleports before chasing 100%.",
        "Limited events and rewards outrank permanent material stages."
      ]
    },
    rewards: ["Story progress", "Launch rewards", "First team", "Teleport network", "Annulith", "Stamina efficiency"],
    closing:
      "If the first week unlocks core systems, builds one usable team and establishes the teleport network, the account enters stable growth. Use 1.1 information later to decide pull and second-team direction.",
    paragraphs: [
      "Beginners need priority more than complicated tables. Story, gacha, exploration, anomalies, vehicles and material stages all appear quickly, and without a route progress becomes scattered.",
      "The first week should focus on system unlocks and one team. Story opens functions, dailies provide resources, the main DPS clears content and teleports save time.",
      "Do not spend all pull currency immediately. Day-seven account review is usually more rational than day-one impulse pulls.",
      "Explore in phases: towers and booths first, oracle stones second, hidden chests and photo cleanup later."
    ]
  },
  "3": {
    category: "Map Exploration",
    title: "Ultimate Full-Map Running and Collection Guide: Exploring Hethereau from Zero",
    excerpt:
      "A complete route for towers, ReroRero phone booths, oracle stones, collection rewards and special teleport points.",
    readTime: "12 min",
    overview:
      "Hethereau exploration rewards come from region reveal, phone booths, oracle stones, anomaly commissions and photo spots. Build the teleport network first, then clear collectibles by district to reduce repeated travel.",
    requirements: [
      ["Main goal", "Reveal regional outlines, activate phone booths and raise exploration progress"],
      ["Main rewards", "Arc Plates, jade, exploration EXP, hidden chests and anomaly commission rewards"],
      ["Recommended vehicle", "Buy the 250,000-Fons motorcycle in New Herland early for strong mobility and easy summoning"]
    ],
    stepsTitle: "Efficient Hethereau Route",
    stepsNote: "Unlock teleports before collectibles",
    steps: [
      ["Activate Wertheimer Towers", "Use the zoomed-out map and go to gray tower icons.", "Talk to the NPC under the tower to reveal the region and unlock related commissions and teleport access."],
      ["Activate ReroRero phone booths", "Interact with red phone booths when nearby.", "Phone booths are the most important fast-travel points and should be unlocked while progressing."],
      ["Collect oracle stones along the way", "Check rooftops, high ground and building edges first.", "Oracle stones can be exchanged for resources and EXP at the Witch House. Use crystal-ball scanning if many are missing."],
      ["Clear anomaly commissions", "Progress from low star to high star.", "After towers are activated, commissions can be accepted. They clear red fog and often unlock hidden chests."],
      ["Finish photo spots", "Follow photo side quests while moving through districts.", "Photo points are spread out, so completing them with side quests saves travel time."]
    ],
    challengeLabel: "Exploration Pitfalls",
    boss: {
      name: "Special teleports and hidden systems",
      summary:
        "Beyond ordinary booths, maps include dungeons, world bosses, housing and abyss-like entrances. Unlocking them early improves farming and cleanup efficiency.",
      tips: [
        "The phone booth on top of Diamond Tower is easy to miss; unlock it early for later quests.",
        "World boss teleports can be found from anomaly commission entries, including major boss portals.",
        "Some side quests or anomalies require special weather. If stuck, try switching to rainy weather before revisiting."
      ]
    },
    rewards: ["Oracle exchange resources", "Arc Plates and growth items", "Hidden anomaly chests", "Photo rewards", "Gift of 21", "Boss and weekly teleports", "100% exploration"],
    closing:
      "Exploration efficiency is about order: towers first, phone booths second, then oracle stones, anomaly commissions and photo points by district.",
    paragraphs: [
      "Efficient exploration is both fun and a major source of growth resources.",
      "During progression, activate towers first to reveal regions and commissions, then unlock phone booths along the way.",
      "Exploration progress mainly comes from oracle stones, anomaly commissions, Gift of 21 and photo spots. Do them alongside story and side quests instead of forcing 100% immediately.",
      "Special teleports include dungeons, world bosses, housing and off-track realms. Unlocking them early makes later farming and challenges smoother."
    ]
  },
  "2": {
    category: "Mode Guide",
    title: "Pinkpaw Heist Complete Beginner Guide: From Entry to Million-Fons Extraction",
    excerpt:
      "A step-by-step guide to high-value loot, three floor layers, red phone booth exits and common failure points.",
    readTime: "11 min",
    overview:
      "Pinkpaw Heist is a high-risk, high-reward extraction mode. Backpack space, route planning and exit judgment determine your profit ceiling. The core rule is to take high-value loot and remember active exits early.",
    requirements: [
      ["Mode type", "Infiltration, combat, looting and extraction"],
      ["Core profit", "Fons, Paw coins, gems, gold bars, paintings and high-value collectibles"],
      ["Clear goal", "Extract through a red phone booth before the timer ends"]
    ],
    stepsTitle: "Looting and Extraction Flow",
    stepsNote: "Choose exits before going deeper",
    steps: [
      ["Confirm extraction routes first", "Watch for active red phone booths.", "Six red booths are randomly activated each run and do not dynamically close. Remember them before looting deep."],
      ["Office layer LG1", "Search locked rooms, desks and transition supplies.", "Monster density is moderate. Prioritize keycards because they open high-value rooms."],
      ["Collection layer LG2", "Check display cases, safes and laser rooms first.", "This is the densest high-value layer with gems, jade, paintings and purple collectibles."],
      ["Vault layer LG3", "Enter only with keycards and mystery cores.", "The vault has the highest profit and the boss Mammon, but also the highest risk."],
      ["Extract at one minute remaining", "Stop looting and head to the nearest safe booth.", "Once the backpack holds valuable loot, securing it is more important than filling every slot."]
    ],
    challengeLabel: "Extraction Strategy",
    boss: {
      name: "Common failure points",
      summary:
        "Most losses come from greed, getting lost and missing the exit window. Route planning matters more than raw combat.",
      tips: [
        "Observe surveillance and red-circle patterns before crossing; jump or detour if needed.",
        "If you cannot find the boss keycard, stop wasting time in LG3 and extract after open safes.",
        "When holding Eternal Heart or Crimson Ruby, prioritize the closest active booth."
      ]
    },
    rewards: ["Eternal Heart: about 660,000 Fons", "Crimson Ruby: above 130,000 Fons", "Gems and jade: about 80,000-100,000 Fons", "Gold bars", "Paintings and antiques", "Paw coins"],
    closing:
      "Pinkpaw profit comes from discipline. Take high-value items, confirm exits early and retreat decisively at one minute for stable million-Fons runs.",
    paragraphs: [
      "Pinkpaw Heist asks players to infiltrate, fight, loot and extract within a limited timer.",
      "Loot priority is Eternal Heart, Crimson Ruby, gems, jade and gold bars. Keycards are also high priority because they open valuable rooms.",
      "The map is divided into office, collection and vault layers. Go deeper only when key items, time and exit routes are good.",
      "Red phone booths are the extraction core. Memorize active booths early and leave around one minute remaining."
    ]
  },
  "1": {
    category: "Anomaly Commission",
    title: "Image Haunted House Full Walkthrough: Projector Puzzle and Bookshelf Spider Boss",
    excerpt:
      "A complete walkthrough for the Image Haunted House anomaly commission, projector order, top-floor door and boss strategy.",
    readTime: "10 min",
    overview:
      "The Image Haunted House is difficult mainly because of multiple space-time projectors, not because of combat. Following the route below opens the mansion, reaches the boss room and completes anomaly containment consistently.",
    requirements: [
      ["Level requirement", "Hunter level 28 or above"],
      ["Story progress", "Main story has unlocked the full Ekorai Town area"],
      ["Start location", "Accept Hidden Alley Mansion from anomaly commissions and go to alleys around Suinarashi Avenue"]
    ],
    stepsTitle: "Space-Time Projector Puzzle",
    stepsNote: "Follow the order to avoid repeat running",
    steps: [
      ["Entrance projector", "Choose Open Gate.", "This opens the mansion entrance and lets you enter the anomaly interior."],
      ["First-floor hall projector", "Choose Play Film and stop the bar in the red zone.", "This restores the staircase and opens the route to the second floor."],
      ["Second-floor transfer projector", "Choose Shut Off directly.", "This removes the invisible wall and opens the inner-room route."],
      ["Inner-room projector", "Choose Play Film and stop in the red zone.", "A full bar is not needed. Hitting the red zone creates simple stairs to the top floor."],
      ["Top-floor projector", "Investigate the blue light ring first, then shut off the projector.", "This final device unlocks the boss-room door."]
    ],
    challengeLabel: "Boss Fight",
    boss: {
      name: "Bookshelf Spider",
      summary:
        "The fight has straightforward mechanics. Dodge red circles, break toughness and burst during stagger.",
      tips: [
        "When red warning circles appear, dodge or move sideways to avoid pounce and web damage.",
        "Use strong toughness-break characters to trigger stagger quickly.",
        "Spend major burst skills after the boss is staggered for better efficiency."
      ]
    },
    rewards: ["Annulith", "Character and weapon growth materials", "Ekorai exploration progress", "Anomaly containment reward"],
    closing:
      "If the level requirement is met and the projectors are handled in order, Image Haunted House is not very hard. If stuck, check whether the second-floor and top-floor devices were played or shut off incorrectly.",
    paragraphs: [
      "In Ekorai Town, the Image Haunted House anomaly commission often blocks players because the projectors change the mansion structure.",
      "The unlock requirement is hunter level 28 or higher and enough story progress to access the full region. Accept the commission, then interact with the abnormal projector in the alley.",
      "Open the entrance, play the hall projector to the red zone, shut off the second-floor projector, play the inner-room projector to the red zone and then solve the top floor after the blue-light investigation.",
      "The final boss is the Bookshelf Spider. Watch red circles, break toughness and burst during stagger to finish the containment and claim rewards."
    ]
  }
};
