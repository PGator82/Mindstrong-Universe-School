// Boss Battle Questions — one battle per lesson key
// Each battle has 10 moves. Every move must be correct or the student restarts.
// Questions are real-life situations that require understanding WHAT and WHY.

const BATTLES = {

  /* ── NUMBER SENSE ── */

  "m1-l1": {
    title: "Numbers Are Stories",
    boss: "The Blank Counter",
    bossDesc: "This boss strips numbers of their meaning. Beat it by proving every number tells a real story.",
    xp: 100,
    moves: [
      {
        situation: "You're babysitting 3 kids tonight. Your neighbor asks how many children you're watching.",
        question: "What story does the number 3 tell here?",
        choices: [
          "It's just a digit — it doesn't mean anything specific",
          "Three real children you are responsible for right now",
          "The third house on your street",
          "An estimate of how many kids might be around"
        ],
        correct: 1,
        why: "Numbers always represent real quantities. 3 means three actual children — not an estimate, not a label."
      },
      {
        situation: "A recipe needs 2 cups of flour. You measure carefully and pour exactly 2.",
        question: "Why does the number 2 matter here — not 1, not 3?",
        choices: [
          "Because recipes always use small numbers",
          "2 is just a suggestion — close enough is fine",
          "Because 2 represents two exact, equal portions of flour that create the right result",
          "Numbers in recipes are decoration"
        ],
        correct: 2,
        why: "Numbers in real life have precision. 2 cups means two — not approximately two. The story is about an exact quantity."
      },
      {
        situation: "Your basketball team scored 14 points. The other team scored 19. The scoreboard shows both.",
        question: "What real story do these two numbers tell together?",
        choices: [
          "Your team is losing by 5 points and needs 5 more to tie",
          "14 and 19 are just labels for the two teams",
          "Your team scored more because 14 comes before 19",
          "The numbers don't relate to each other"
        ],
        correct: 0,
        why: "Numbers tell stories in relation to each other. 19 − 14 = 5. Your team needs exactly 5 more points to tie — that's the real situation."
      },
      {
        situation: "Your lunch costs $6. You have $10 in your pocket.",
        question: "What story do $6 and $10 tell you about your real situation?",
        choices: [
          "You don't have enough money for lunch",
          "You have more than enough — specifically $4 left after buying lunch",
          "You need to borrow $4 from a friend",
          "The numbers are unrelated price tags"
        ],
        correct: 1,
        why: "$10 − $6 = $4. Numbers tell the story of what's possible: you can buy lunch AND have $4 remaining."
      },
      {
        situation: "There are 28 students in your class. The teacher wants groups of 4.",
        question: "What does the number 28 tell you about making equal groups?",
        choices: [
          "28 students can't be split evenly — it's too many",
          "You'll need 28 groups of 4",
          "28 represents exactly 7 equal groups of 4 real students",
          "28 is just the headcount, it has nothing to do with grouping"
        ],
        correct: 2,
        why: "28 ÷ 4 = 7. The number 28 is telling a story about 7 perfect equal groups. Understanding this prevents chaos."
      },
      {
        situation: "You walk 5 blocks to school. Your friend walks 8 blocks. You leave at the same time.",
        question: "What real-life story do 5 and 8 tell you?",
        choices: [
          "Your friend should leave earlier because 8 blocks takes more time than 5",
          "Both numbers are about the same distance",
          "Your friend lives closer to school",
          "The block numbers are addresses, not distances"
        ],
        correct: 0,
        why: "8 > 5. Your friend travels a greater real distance. That story means your friend needs more time — and should leave earlier."
      },
      {
        situation: "Apples cost $3 a bag. Oranges cost $5 a bag. You have $7.",
        question: "What does $7 tell you about your shopping options?",
        choices: [
          "You can buy both bags because 7 is a big number",
          "You can afford either bag but not both — $3 + $5 = $8 which is more than $7",
          "You should only buy the cheaper item",
          "You need exactly $1 more to buy everything"
        ],
        correct: 1,
        why: "$3 + $5 = $8. You only have $7. The story: you must choose one. Numbers reveal real limits."
      },
      {
        situation: "Your phone battery is at 15%. You need it to last 3 more hours.",
        question: "What story does 15% tell you about your real situation?",
        choices: [
          "15% means you have plenty of battery left",
          "15% is just a display number with no practical meaning",
          "15% means only a small fraction remains — likely not enough for 3 hours without charging",
          "15% means your phone will last exactly 15 more minutes"
        ],
        correct: 2,
        why: "15% out of 100% means only a small portion remains. Numbers tell you about proportion — and this proportion tells you to find a charger."
      },
      {
        situation: "Your class has a 100-page reading challenge. You've read 23 pages.",
        question: "What story do 23 and 100 tell about your progress?",
        choices: [
          "You've read more than half the book",
          "You've completed 23 real pages and have 77 to go — less than a quarter done",
          "You need to read 77 more pages today",
          "23 and 100 are just page numbers"
        ],
        correct: 1,
        why: "100 − 23 = 77 remaining. 23/100 < 25%. The story: you're just starting. Knowing the real numbers keeps you honest about where you stand."
      },
      {
        situation: "It's 2:30 PM. School ends at 3:15 PM.",
        question: "What real story do 2:30 and 3:15 tell you?",
        choices: [
          "School ends in 30 minutes",
          "School ends in 1 hour and 15 minutes",
          "There are 45 real minutes left before school ends",
          "School ends at 15 minutes past the hour, which means nothing specific"
        ],
        correct: 2,
        why: "3:15 − 2:30 = 45 minutes. Numbers tell stories about time. 45 minutes is long enough to finish your assignment — or short enough to panic if you haven't started."
      }
    ]
  },

  "m1-l2": {
    title: "Place Value Is a Volume Knob",
    boss: "The Digit Scrambler",
    bossDesc: "This boss rearranges digits to confuse their value. Prove you know what each position really means.",
    xp: 100,
    moves: [
      {
        situation: "A store has 342 items in stock. A new shipment adds 600 more.",
        question: "In 342, what does the 3 actually represent?",
        choices: [
          "3 individual items",
          "3 groups of 10 items",
          "3 groups of 100 items — three hundred",
          "The third shelf in the store"
        ],
        correct: 2,
        why: "In 342, the 3 is in the hundreds place. It means 300 — three groups of one hundred. Position determines value."
      },
      {
        situation: "Your city has a population of 5,280 people. The mayor says 'we have over 5,000 residents.'",
        question: "Which digit tells you the mayor's statement is accurate?",
        choices: [
          "The 2, because 2 means more than zero",
          "The 5, because it's in the thousands place — meaning 5,000",
          "The 8, because 8 is the largest digit",
          "The 0, because zeros don't count"
        ],
        correct: 1,
        why: "The 5 sits in the thousands place. Its value is 5,000. That's what makes the mayor's claim true."
      },
      {
        situation: "You score 1,047 points in a game. Your friend scores 1,470. Who won?",
        question: "Which place value determines the winner when the thousands digits are the same?",
        choices: [
          "The ones place — always look at the smallest digit first",
          "The hundreds place — 0 vs 4 means your friend has 400 more in that position",
          "The number of digits — they both have 4 so it's a tie",
          "The tens place — 4 vs 7"
        ],
        correct: 1,
        why: "When thousands are equal (both have 1), compare hundreds. You have 0 hundreds, friend has 4 hundreds. 400 > 0. Friend wins."
      },
      {
        situation: "A price tag shows $2,309. The cashier types $2,039 by mistake.",
        question: "Which place value error did the cashier make, and what's the real difference?",
        choices: [
          "The ones place — the difference is $1",
          "The hundreds place — swapped 3 and 0, creating a $270 mistake",
          "The thousands place — they typed the wrong price entirely",
          "There is no mistake, both numbers look similar"
        ],
        correct: 1,
        why: "$2,309 has 3 in the hundreds place (=300) and 0 in the tens. $2,039 has 0 in hundreds and 3 in tens (=30). Difference: 300−30 = $270 error."
      },
      {
        situation: "A runner finished a race in 3,542 seconds. Another runner finished in 3,524 seconds.",
        question: "Which place value tells you who was faster?",
        choices: [
          "Thousands — but they're equal, so check the next place",
          "Hundreds — both have 5, so check the next place",
          "Tens — 4 vs 2. The runner with 3,524 was faster because 2 tens < 4 tens",
          "Ones — 2 vs 4"
        ],
        correct: 2,
        why: "Thousands match. Hundreds match. Tens: 3,542 has 4 tens (40), 3,524 has 2 tens (20). 3,524 < 3,542. Lower time = faster runner."
      },
      {
        situation: "A school orders 4,000 pencils. They receive two boxes: one with 3,000 and one with 1,000.",
        question: "How does place value confirm the order is complete?",
        choices: [
          "Count all the pencils one by one to be sure",
          "3 thousands + 1 thousand = 4 thousands = 4,000 — the place values add up exactly",
          "3,000 and 1,000 look different so the order must be wrong",
          "You need a third box to complete any order"
        ],
        correct: 1,
        why: "Place value makes large numbers manageable. 3,000 + 1,000 = 4,000. Three thousands plus one thousand equals four thousands."
      },
      {
        situation: "You deposit $50 in your savings. Your account now shows $350.",
        question: "What changed in place value terms?",
        choices: [
          "The hundreds digit changed from 2 to 3",
          "The tens digit changed from 0 to 5",
          "The ones digit increased by 50",
          "The tens digit — adding 5 tens (50) increased the tens from 0 to 5, changing $300 to $350"
        ],
        correct: 3,
        why: "$300 had 0 in the tens place. Adding 5 tens ($50) gives 5 in the tens place. $350 = 3 hundreds + 5 tens + 0 ones."
      },
      {
        situation: "A number has 7 in the ones place, 0 in the tens, 4 in the hundreds, and 2 in the thousands.",
        question: "What is the full number?",
        choices: [
          "7,042",
          "2,047",
          "2,407",
          "4,207"
        ],
        correct: 2,
        why: "Read place values left to right: 2 thousands + 4 hundreds + 0 tens + 7 ones = 2,407."
      },
      {
        situation: "You want to write 'five thousand, sixty-two' as a number. You write 5,620.",
        question: "What place value mistake did you make?",
        choices: [
          "No mistake — 5,620 is correct",
          "The thousands digit is wrong",
          "You put 6 in the hundreds place instead of the tens place — the correct number is 5,062",
          "You need to add a zero at the end"
        ],
        correct: 2,
        why: "Five thousand, sixty-two = 5,000 + 60 + 2 = 5,062. Sixty goes in the TENS place (6 tens), not hundreds. 5,620 would be 'five thousand, six hundred twenty.'"
      },
      {
        situation: "A building has 1,200 windows. Workers replace 200 of them. How many original windows remain?",
        question: "Which place value changes, and what's the result?",
        choices: [
          "The ones place changes — 1,200 becomes 1,000",
          "The thousands place changes — 1,200 becomes 200",
          "The hundreds place changes — 12 hundreds minus 2 hundreds = 10 hundreds = 1,000",
          "No place value changes because 200 is too small to matter"
        ],
        correct: 2,
        why: "1,200 = 12 hundreds. Subtract 2 hundreds: 12 − 2 = 10 hundreds = 1,000. Place value arithmetic is precise and powerful."
      }
    ]
  },

  "m1-l3": {
    title: "Expanded Form",
    boss: "The Compressor",
    bossDesc: "This boss collapses all numbers into meaningless blobs. Prove you can break any number into its true parts.",
    xp: 100,
    moves: [
      { situation: "You have $4,725 in a bank account.", question: "What is 4,725 in expanded form?", choices: ["4,000 + 700 + 20 + 5","4,000 + 725","400 + 70 + 25","4 + 7 + 2 + 5"], correct: 0, why: "Expanded form shows each digit's true value by place: 4 thousands + 7 hundreds + 2 tens + 5 ones = 4,000 + 700 + 20 + 5." },
      { situation: "A stadium holds 52,308 fans.", question: "Which expanded form is correct?", choices: ["5,000 + 2,000 + 300 + 8","50,000 + 2,000 + 300 + 8","50,000 + 2,300 + 8","52,000 + 308"], correct: 1, why: "5 is in the ten-thousands place (50,000). 2 is in thousands (2,000). 3 in hundreds (300). 0 in tens (0). 8 in ones (8)." },
      { situation: "A train traveled 6,040 miles on a route.", question: "What does the 0 in expanded form represent?", choices: ["Nothing — zeros are skipped in expanded form","0 tens — a real quantity of zero groups of ten","A placeholder with no value","The 4th digit only"], correct: 1, why: "6,040 = 6,000 + 0 + 40 + 0. The zero in the hundreds place means ZERO hundreds — a real, meaningful quantity of nothing in that position." },
      { situation: "You write 3,000 + 500 + 7 on paper.", question: "What standard number does this represent?", choices: ["3,507","3,570","35,007","3,057"], correct: 0, why: "3,000 + 500 + 7 = 3,507. Hundreds place is 5, tens place is 0 (not written), ones place is 7." },
      { situation: "A factory makes 80,000 + 3,000 + 200 + 60 + 1 parts per year.", question: "How many parts is that?", choices: ["83,261","80,361","83,621","830,261"], correct: 0, why: "80,000 + 3,000 + 200 + 60 + 1 = 83,261. Add each place value in order." },
      { situation: "A student writes 700 + 4,000 + 30 + 5. Their teacher says the order doesn't matter.", question: "Is the teacher right?", choices: ["No — expanded form must go from largest to smallest","Yes — addition is commutative, the sum is still 4,735 regardless of order","No — you must always start with ones","Yes but only for 4-digit numbers"], correct: 1, why: "Addition order doesn't change the result. 700 + 4,000 + 30 + 5 = 4,735 just like 4,000 + 700 + 30 + 5 = 4,735." },
      { situation: "Two cities are 5,280 feet apart. You want to show each digit's contribution.", question: "What is 5,280 in expanded form?", choices: ["5,000 + 280","5,000 + 200 + 80","5,000 + 200 + 80 + 0","500 + 200 + 80"], correct: 1, why: "5,280 = 5,000 + 200 + 80. The zero in ones place contributes nothing, so it's not written (though writing + 0 is also acceptable)." },
      { situation: "You compare 6,032 and 6,302 using expanded form.", question: "Which expanded forms prove 6,302 is larger?", choices: ["6,000+30+2 vs 6,000+300+2 — the hundreds digit is larger in 6,302","Both numbers expand the same way","6,032 is larger because it has more digits after the comma","The ones digit determines size"], correct: 0, why: "6,032 = 6,000+0+30+2. 6,302 = 6,000+300+0+2. In hundreds: 300 > 0. Expanded form reveals exactly where and why 6,302 is larger." },
      { situation: "A school collects 10,000 + 400 + 50 + 3 canned goods for charity.", question: "How is this written as a standard number?", choices: ["1,453","10,453","14,053","10,043"], correct: 1, why: "10,000 + 400 + 50 + 3 = 10,453. Ten thousands place has 1, hundreds has 4, tens has 5, ones has 3." },
      { situation: "You score 47,829 points. Your friend scores forty-seven thousand, eight hundred two.", question: "Who scored more, and how does expanded form prove it?", choices: ["You scored more: 47,829 vs 47,802 — the tens place (20 vs 0) proves it","Your friend scored more","They scored the same","You can't tell without a calculator"], correct: 0, why: "47,829 = 40,000+7,000+800+20+9. 47,802 = 40,000+7,000+800+0+2. Tens: 20 > 0. Ones: 9 > 2. You scored more." }
    ]
  },

  "geo-angles": {
    title: "Angles & Lines",
    boss: "The Crooked One",
    bossDesc: "This boss bends all straight thinking. Prove you can identify and measure real angles in real situations.",
    xp: 100,
    moves: [
      { situation: "A door is opened halfway — exactly perpendicular to the wall.", question: "What angle has the door formed with the wall?", choices: ["45 degrees","90 degrees — a right angle","180 degrees","60 degrees"], correct: 1, why: "A door perpendicular to its wall forms a 90° right angle. Perpendicular lines always meet at exactly 90°." },
      { situation: "A pizza is cut into 4 equal slices from the center.", question: "What angle does each slice form at the center?", choices: ["45°","60°","90°","120°"], correct: 2, why: "360° ÷ 4 slices = 90° per slice. Each slice is a right angle at the center." },
      { situation: "You're looking straight ahead. You turn your head all the way to your right shoulder.", question: "Approximately what angle did you turn?", choices: ["180°","45°","90°","360°"], correct: 2, why: "Turning your head from straight-ahead to directly right is a quarter turn = 90°." },
      { situation: "A ramp for a wheelchair makes a very gentle slope. The angle with the ground is small.", question: "Which angle makes a ramp safe and usable — small or large?", choices: ["Large angle (steep) — more efficient","Small angle (gentle slope) — easier to push up","90° — straight up is strongest","180° — flat is useless"], correct: 1, why: "Small angles make gentle slopes. A wheelchair ramp must be a small angle (like 5°) so it's navigable. Large angles = dangerous steep ramps." },
      { situation: "A clock shows exactly 3:00.", question: "What angle do the hour and minute hands form?", choices: ["90°","180°","45°","120°"], correct: 0, why: "At 3:00, the minute hand points up (12) and hour hand points right (3). That's exactly a quarter of a circle = 90°." },
      { situation: "Two streets intersect and form an X shape. All four corners look equal.", question: "What angle does each corner measure?", choices: ["45°","180°","90°","60°"], correct: 2, why: "When two straight streets cross and form equal corners, each angle is 90°. Four 90° angles = 360° total. Perpendicular streets." },
      { situation: "An architect draws two parallel walls. A hallway cuts across both at an angle.", question: "What is true about the angles formed on each wall?", choices: ["All angles are different","The angles on each wall are equal — parallel lines cut by a transversal create equal corresponding angles","The hallway creates 90° angles on both walls","You can't determine anything about the angles"], correct: 1, why: "Parallel lines cut by a transversal create equal corresponding angles. This is why buildings stay structurally consistent." },
      { situation: "You open a book to exactly halfway — the spine is at the bottom, both covers flat on the table.", question: "What angle does one cover make with the table surface?", choices: ["90°","180°","360°","45°"], correct: 1, why: "When a book is fully open flat, both covers form a straight line = 180°. A straight line is a 180° angle." },
      { situation: "A triangle has one 90° angle and one 45° angle. What is the third angle?", choices: ["90°","55°","45°","60°"], question: "The third angle must be:", correct: 2, why: "All angles in a triangle add up to 180°. 90 + 45 + ? = 180. ? = 180 − 90 − 45 = 45°." },
      { situation: "A slide at a playground is steep. The slide makes a 60° angle with the ground.", question: "Is this slide steep, moderate, or gentle — and how do you know?", choices: ["Gentle — 60° is a small number","Steep — 60° is more than 45° (halfway between flat and straight up)","Moderate — 60° is exactly average","It cannot be determined without measuring the slide"], correct: 1, why: "90° is straight up. 0° is flat. 60° is 2/3 of the way from flat to vertical — that's steep. Kids fly down it fast." }
    ]
  },

  "alg-equations": {
    title: "Equations",
    boss: "The Unbalancer",
    bossDesc: "This boss tips the scales and breaks all balance. Prove every equation must stay equal on both sides.",
    xp: 100,
    moves: [
      { situation: "You split $24 equally among some friends. Each person gets $6.", question: "Which equation represents this situation?", choices: ["24 + x = 6","24 ÷ x = 6","x − 6 = 24","6x = 24"], correct: 3, why: "Each of x friends gets $6, total is $24. So 6 times x equals 24: 6x = 24. Divide both sides by 6: x = 4 friends." },
      { situation: "A bag of apples weighs some amount. You add 3 more pounds and now it weighs 11 pounds.", question: "Which equation finds the original weight?", choices: ["x + 3 = 11","x − 3 = 11","3x = 11","x + 11 = 3"], correct: 0, why: "Original weight plus 3 more pounds equals 11. x + 3 = 11. Subtract 3 from both sides: x = 8 pounds." },
      { situation: "You solve x + 5 = 12 by trying x = 6.", question: "How do you prove whether x = 6 is correct?", choices: ["It looks right because 6 is close to 7","Substitute: 6 + 5 = 11, not 12. So x = 6 is wrong","Just guess and check later","x = 6 must be right because 5 + 6 = 11"], correct: 1, why: "To check any solution, substitute it back. 6 + 5 = 11 ≠ 12. Wrong. The real answer is x = 7, because 7 + 5 = 12. ✓" },
      { situation: "A store sells shirts for $15 each. You spend $90 total.", question: "Set up and solve the equation to find how many shirts you bought.", choices: ["15 + x = 90, so x = 75 shirts","15x = 90, so x = 6 shirts","x ÷ 15 = 90, so x = 1,350 shirts","90 − x = 15, so x = 75 shirts"], correct: 1, why: "$15 per shirt times x shirts = $90 total. 15x = 90. Divide both sides by 15: x = 6 shirts." },
      { situation: "You have some money. You spend $22 and have $38 left.", question: "Which equation finds how much you started with?", choices: ["x + 22 = 38","x − 22 = 38","22 − x = 38","x ÷ 22 = 38"], correct: 1, why: "Started with x, spent 22, left with 38. x − 22 = 38. Add 22 to both sides: x = 60. You started with $60." },
      { situation: "Both sides of an equation must stay equal. You add 7 to the left side.", question: "What MUST you do to the right side?", choices: ["Subtract 7 from the right side","Nothing — only one side needs to change","Add 7 to the right side too","Multiply the right side by 7"], correct: 2, why: "An equation is a balance. Whatever you do to one side, you MUST do to the other. Add 7 left = add 7 right. Always." },
      { situation: "3x = 27. You need to isolate x.", question: "What operation undoes multiplication by 3?", choices: ["Add 3 to both sides","Subtract 3 from both sides","Divide both sides by 3","Multiply both sides by 3"], correct: 2, why: "Multiplication is undone by division. Divide both sides by 3: 3x ÷ 3 = 27 ÷ 3. x = 9." },
      { situation: "A school orders x boxes of 12 crayons each. They receive 156 crayons total.", question: "Solve for x.", choices: ["x = 156 − 12 = 144","x = 156 ÷ 12 = 13 boxes","x = 156 × 12 = 1,872","x = 12 + 156 = 168"], correct: 1, why: "12 crayons per box × x boxes = 156 total. 12x = 156. x = 156 ÷ 12 = 13 boxes." },
      { situation: "You check your solution x = 5 in the equation 2x + 3 = 13.", question: "Is x = 5 correct?", choices: ["No — 2(5) + 3 = 13 is false","Yes — 2(5) + 3 = 10 + 3 = 13 ✓","No — you need to add 5 + 3 first","Yes but only if x is positive"], correct: 1, why: "Substitute: 2(5) + 3 = 10 + 3 = 13. That equals 13. ✓ The equation balances. x = 5 is correct." },
      { situation: "A car travels at 60 miles per hour. You need to know how long to travel 240 miles.", question: "Which equation and solution is correct?", choices: ["60 + t = 240, t = 180 hours","60t = 240, t = 4 hours","t ÷ 60 = 240, t = 14,400 hours","240 − t = 60, t = 180 hours"], correct: 1, why: "Speed × time = distance. 60 × t = 240. Divide both sides by 60: t = 4 hours. Always set up the equation from the real situation first." }
    ]
  }

  /* ── NUMBER SENSE (continued) ── */

  "m1-l4": {
    title: "Compare Without Guessing",
    boss: "The Guesser",
    bossDesc: "This boss substitutes gut feelings for real comparisons. Defeat it by proving every comparison with actual numbers.",
    xp: 100,
    moves: [
      {
        situation: "You want to buy a jacket. Store A charges $47. Store B charges $52. You have $50.",
        question: "Which store can you actually afford, and how do you know without guessing?",
        choices: [
          "Store B — $52 feels close to $50",
          "Store A — $47 < $50, so you have enough; $52 > $50, so you don't",
          "Both stores — $50 is enough for anything around that price",
          "You can't tell without trying both stores"
        ],
        correct: 1,
        why: "Compare precisely: $47 < $50 (affordable), $52 > $50 (not affordable). Comparing means asking which is greater — not estimating."
      },
      {
        situation: "Two runners finished a race. Runner A: 4 minutes 38 seconds. Runner B: 4 minutes 43 seconds.",
        question: "Who was faster, and which place value do you compare first?",
        choices: [
          "Runner B — 43 is larger than 38",
          "Runner A — 38 seconds is less than 43 seconds, and both have the same 4 minutes",
          "It's a tie because both finished in 4 minutes",
          "You need to convert both to seconds first before any comparison is valid"
        ],
        correct: 1,
        why: "Minutes match (both = 4). Compare seconds: 38 < 43. Fewer seconds = faster. Runner A wins. Compare the significant digit that differs."
      },
      {
        situation: "You're filling a water bottle. You've filled 3/4 of it. Your friend filled 2/3 of theirs.",
        question: "Who has more water in their bottle?",
        choices: [
          "Your friend — 3 is smaller than 4, so 3/4 is less",
          "You — 3/4 = 0.75 and 2/3 ≈ 0.667, so 3/4 > 2/3",
          "Equal — both used fractions of the same bottle",
          "Can't tell — the bottles might be different sizes"
        ],
        correct: 1,
        why: "3/4 = 0.75. 2/3 ≈ 0.667. 0.75 > 0.667. You have more. Convert fractions to decimals to compare them accurately."
      },
      {
        situation: "A car gets 32 miles per gallon. A truck gets 18 miles per gallon. Gas costs $4 a gallon.",
        question: "For a 100-mile trip, which vehicle uses less gas and how much less?",
        choices: [
          "The car uses less — about 3.125 gallons vs 5.56 gallons, saving about 2.4 gallons",
          "The truck uses less because it's heavier and more powerful",
          "They use the same — both travel 100 miles",
          "You need the tank size to compare"
        ],
        correct: 0,
        why: "Car: 100 ÷ 32 ≈ 3.1 gal. Truck: 100 ÷ 18 ≈ 5.6 gal. 5.6 − 3.1 = 2.5 gallons saved. Compare real calculated values."
      },
      {
        situation: "Your test score was 84 out of 100. Your classmate scored 21 out of 25.",
        question: "Who scored higher — and can you compare these directly?",
        choices: [
          "You — 84 is a bigger number than 21",
          "Your classmate — 21/25 = 84/100 = 84%, so it's actually equal",
          "You need to convert both to the same scale: 84/100 = 84% and 21/25 = 84%. They are equal.",
          "Your classmate — 25 is a harder test"
        ],
        correct: 2,
        why: "You cannot compare 84 and 21 directly — they're out of different totals. Convert: 84/100 = 84%. 21/25 × 4 = 84/100 = 84%. Equal scores. Always use the same scale."
      },
      {
        situation: "Box A contains 24 chocolates and costs $6. Box B contains 40 chocolates and costs $9.",
        question: "Which box gives you more chocolate per dollar?",
        choices: [
          "Box A — it costs less so it must be a better deal",
          "Box B — it has more chocolates",
          "Box B — 40/9 ≈ 4.4 choc/$ vs Box A 24/6 = 4 choc/$. Box B gives more per dollar.",
          "They are the same — both are reasonable prices"
        ],
        correct: 2,
        why: "Unit rate comparison: Box A = 24 ÷ 6 = 4 chocolates per dollar. Box B = 40 ÷ 9 ≈ 4.44 per dollar. Box B wins. Always calculate the unit rate to compare value."
      },
      {
        situation: "Three friends jump: Alex 4 ft 8 in, Blake 4 ft 11 in, Casey 5 ft 1 in.",
        question: "Who jumped highest, and which place value decides it?",
        choices: [
          "Alex — 4 is the most common number",
          "Casey — 5 feet is greater than 4 feet, so Casey wins at the feet level",
          "Blake — 11 inches is the highest number of inches",
          "Casey — compare feet first: 5 > 4 for Casey vs the others who both have 4 feet"
        ],
        correct: 3,
        why: "Compare feet first: Casey = 5 ft, Alex & Blake = 4 ft. 5 > 4 so Casey wins immediately. The largest place value decides — no need to check inches."
      },
      {
        situation: "You download an app: 1.8 GB. Your friend downloads one: 1.08 GB. Your phone has 1.5 GB free.",
        question: "Which app(s) can you fit on your phone?",
        choices: [
          "Both — 1.8 and 1.08 are both less than 2",
          "Neither — you only have 1.5 GB free and both seem large",
          "Only your friend's app — 1.08 < 1.5, but 1.8 > 1.5, so only the 1.08 GB app fits",
          "Your app — 1.8 rounds to 2 which is close to 1.5"
        ],
        correct: 2,
        why: "Compare precisely: 1.08 < 1.5 ✓ fits. 1.8 > 1.5 ✗ doesn't fit. Decimals require digit-by-digit comparison — the tenths place shows 1.8 > 1.5."
      },
      {
        situation: "Team A won 9 out of 12 games. Team B won 11 out of 15 games.",
        question: "Which team has the better win record?",
        choices: [
          "Team B — 11 wins is more than 9 wins",
          "Team A — 9/12 = 75% vs Team B 11/15 ≈ 73.3%. Team A has the better percentage.",
          "Team B — more games played means a tougher schedule",
          "They are equal — both have similar numbers"
        ],
        correct: 1,
        why: "9 ÷ 12 = 0.75 = 75%. 11 ÷ 15 ≈ 0.733 = 73.3%. 75% > 73.3%. Team A's record is better. Convert to the same unit before comparing."
      },
      {
        situation: "Two buildings: one is 142 feet tall, another is 47 yards tall. Which is taller?",
        question: "You must convert before comparing. Which is taller?",
        choices: [
          "142 feet — larger number wins",
          "47 yards — yards are a bigger unit",
          "They're equal — different units mean they can't be compared",
          "47 yards = 141 feet. So 142 feet is taller by 1 foot."
        ],
        correct: 3,
        why: "1 yard = 3 feet. 47 × 3 = 141 feet. Now compare: 142 ft vs 141 ft. The 142-foot building is taller by 1 foot. Always convert to the same unit first."
      }
    ]
  },

  "m1-l5": {
    title: "Rounding That Makes Sense",
    boss: "The Over-Precisionist",
    bossDesc: "This boss demands meaningless precision in every situation. Prove you know when and how to round numbers wisely.",
    xp: 100,
    moves: [
      {
        situation: "A recipe calls for 2.3333… cups of flour. You're eyeballing it with a measuring cup.",
        question: "What is the most sensible way to measure this for cooking?",
        choices: [
          "Measure exactly 2.3333 cups — precision matters in cooking",
          "Round to 2 and 1/3 cups, or approximately 2.33 cups — close enough for baking",
          "Round down to 2 cups — always round down in recipes",
          "Skip the flour — too complicated"
        ],
        correct: 1,
        why: "Cooking doesn't need infinite precision. 2.33 cups is functionally identical to 2.3333. Round to a practical level based on your measuring tools."
      },
      {
        situation: "You're driving 347 miles. Your friend asks how far it is.",
        question: "Which rounding gives the most useful conversational answer?",
        choices: [
          "'About 300 miles' — round to the nearest hundred",
          "'About 350 miles' — round to the nearest 50",
          "'347 miles' — always give the exact number",
          "'About 400 miles' — round up to be safe"
        ],
        correct: 1,
        why: "Rounding 347 to the nearest 50 gives 350, which is close and easy to communicate. The purpose of rounding is useful approximation — not rounding so far that accuracy is lost."
      },
      {
        situation: "A store has 5,283 items in stock. The manager needs to report this in a weekly summary.",
        question: "Which rounded figure is most appropriate for a summary report?",
        choices: [
          "5,000 — round to the nearest thousand",
          "5,300 — round to the nearest hundred",
          "5,280 — round to the nearest ten",
          "5,283 — always use exact numbers in reports"
        ],
        correct: 1,
        why: "5,283 rounded to the nearest hundred is 5,300 (83 > 50, so round up). For a weekly summary, hundreds-level precision is appropriate — not thousands (too vague) or exact (unnecessary)."
      },
      {
        situation: "You drive 57 miles at 30 mph. You want to know roughly when you'll arrive.",
        question: "After rounding, which estimate is most useful?",
        choices: [
          "Exactly 1 hour 54 minutes — calculate precisely",
          "About 2 hours — 57 ≈ 60 miles, 60 ÷ 30 = 2 hours",
          "About 1 hour — 57 rounds to 60 which is one full hour",
          "About 3 hours — always add buffer time"
        ],
        correct: 1,
        why: "57 ≈ 60. 60 ÷ 30 = 2 hours. Rounding 57 to 60 makes mental math easy while staying accurate. This is the practical value of rounding."
      },
      {
        situation: "A doctor measures a patient's temperature as 98.6°F. The next day it's 100.3°F.",
        question: "Should the doctor round to the nearest degree for their medical record?",
        choices: [
          "Yes — whole numbers are easier to write",
          "No — the difference between 98.6 and 99 matters medically. Precision is critical here.",
          "Yes — 0.3 degrees is insignificant in any context",
          "Round to the nearest 5 degrees for simplicity"
        ],
        correct: 1,
        why: "In medicine, fractions of a degree matter. 100.3°F indicates a fever; 100°F might seem borderline. Context determines when to round — and here, you don't."
      },
      {
        situation: "A classroom has 28 students. You need to split them into groups. The teacher says 'about 5 per group.'",
        question: "You can't have partial students. What does rounding mean here?",
        choices: [
          "Make 5 groups of 5 and ignore the other 3 students",
          "28 ÷ 5 = 5.6, round to 6 groups — you need 6 groups but the last group will be smaller",
          "Round 28 to 30, then 30 ÷ 5 = 6 groups exactly",
          "You cannot solve this without a remainder"
        ],
        correct: 1,
        why: "28 ÷ 5 = 5.6 groups. Since you can't split students, round up to 6 groups. The 6th group will have 3 people. Real-world rounding often means rounding UP to avoid leaving people out."
      },
      {
        situation: "You want to round 3.45 to the nearest tenth.",
        question: "What is the correct result?",
        choices: [
          "3.4 — look at the hundredths (5), but some rules say round down on .5",
          "3.5 — the hundredths digit is 5, so round the tenths up",
          "3.0 — round to the nearest whole number",
          "3.45 — tenths are already exact"
        ],
        correct: 1,
        why: "Rounding rule: look at the digit to the right of your target place. Tenths place is 4. The digit after it (hundredths) is 5. 5 or more → round up. 4 becomes 5. Answer: 3.5."
      },
      {
        situation: "A bridge can hold 40,000 lbs. A truck weighs 39,876 lbs.",
        question: "A driver rounds 39,876 to 'about 40,000' and decides to cross. Is this safe?",
        choices: [
          "Yes — rounding is close enough for practical purposes",
          "No — 39,876 is under 40,000 so it's fine. The issue is the rounding comparison is backwards.",
          "No — 39,876 rounds to 40,000, which equals the bridge limit exactly. Any additional weight or variance could be dangerous.",
          "Yes — rounding up only adds a small margin"
        ],
        correct: 2,
        why: "39,876 rounds to 40,000 — right at the limit. Rounding up to the limit value when real weight might exceed it (fuel, passengers added) is risky. Context matters: safety decisions need exact numbers, not rounded ones."
      },
      {
        situation: "A store marks a price as $19.99. You round it to $20 in your head while budgeting.",
        question: "Why is this rounding strategy smart when shopping?",
        choices: [
          "It's not smart — you should calculate exactly $19.99",
          "It gives a slight overestimate so you always have enough money — rounding up protects you from running short",
          "It rounds incorrectly — $19.99 rounds down to $19",
          "Rounding prices is always inaccurate and should be avoided"
        ],
        correct: 1,
        why: "$19.99 is $0.01 below $20. Rounding up to $20 means you'll always budget a tiny bit extra — you'll never be caught short. Rounding UP for spending is a smart life strategy."
      },
      {
        situation: "A poll says 4,327 out of 10,000 people support a policy. The headline says 'About 43%.'",
        question: "Is this rounding accurate and appropriate?",
        choices: [
          "No — 4,327/10,000 = 43.27%, which should be reported as 43.27%",
          "Yes — 43.27% rounds to 43%, which is accurate enough for a news headline about public opinion",
          "No — the headline should say 'about 40%' for simplicity",
          "Yes — but only if the poll has a margin of error above 5%"
        ],
        correct: 1,
        why: "4,327 ÷ 10,000 = 43.27%. Rounded to the nearest percent = 43%. For a public opinion headline, whole-number percentages are standard and appropriate. The rounding doesn't distort the meaning."
      }
    ]
  },

  "m1-l6": {
    title: "Estimation as a Superpower",
    boss: "The Paralysis Prince",
    bossDesc: "This boss refuses to act without a calculator, freezing all progress. Prove that smart estimation is faster and often good enough.",
    xp: 100,
    moves: [
      {
        situation: "You're at a grocery store with $30. Your cart has 6 items priced at $4.79, $3.25, $5.99, $2.49, $6.75, and $4.10.",
        question: "Using estimation, can you afford it all without a calculator?",
        choices: [
          "No — you need exact prices to know",
          "Yes — round each to $5 and get 6 × $5 = $30. Actual total is under $30 since most items round up.",
          "Round to nearest dollar: $5+$3+$6+$2+$7+$4 = $27. Under $30. Yes, you can.",
          "Both B and C give useful estimates — B gives $30, C gives $27. Either tells you it's close but manageable."
        ],
        correct: 3,
        why: "Estimation works multiple ways. Option C is tighter ($27 estimate for a $27.37 actual total). Both approaches tell you: you can afford it. Estimation is for making quick decisions, not for precision."
      },
      {
        situation: "You need to drive 287 miles. Your car gets about 31 miles per gallon. Gas costs $3.89/gallon.",
        question: "Roughly, how much will you spend on gas?",
        choices: [
          "About $36 — 300 ÷ 30 = 10 gallons × $4 = $40, adjusted down slightly",
          "About $20 — divide 287 by 31 and round down",
          "Exactly $36.02 — you need to calculate precisely",
          "About $50 — always estimate high for safety"
        ],
        correct: 0,
        why: "Estimate: 290 ÷ 30 ≈ 10 gallons. 10 × $4 = $40. The actual is about $37. Rounding 287→300 and 31→30 and $3.89→$4 gives a fast, close answer. Estimation lets you budget quickly."
      },
      {
        situation: "You're tiling a floor that is 14 feet by 11 feet. Tiles cost $2.50 each and cover 1 square foot.",
        question: "Estimate the total cost before measuring exactly.",
        choices: [
          "About $400 — 14 × 11 = 154 sq ft × $2.50 = $385, rounds to $400",
          "About $250 — tiles are $2.50 each and it's a normal room",
          "Can't estimate — need exact measurements first",
          "About $300 — 15 × 10 = 150 sq ft × $2 = $300"
        ],
        correct: 0,
        why: "14 × 11 = 154. 154 × $2.50 = $385. Rounding to $400 gives a solid budget estimate. Option D uses $2 instead of $2.50 and loses $0.50 per tile — a significant underestimate over 150 tiles."
      },
      {
        situation: "A school needs to seat 843 students. Chairs come in boxes of 8.",
        question: "How many boxes should the school order?",
        choices: [
          "843 ÷ 8 = 105.375 — order exactly 105 boxes",
          "About 100 boxes — 800 ÷ 8 = 100, which is close enough",
          "Estimate 840 ÷ 8 = 105. But round UP to 106 boxes to ensure there are enough seats for everyone.",
          "Order 200 boxes to be safe"
        ],
        correct: 2,
        why: "840 ÷ 8 = 105. But 840 < 843. You need 106 boxes (105 × 8 = 840, not enough; 106 × 8 = 848, enough). When estimating for physical supplies, always round UP."
      },
      {
        situation: "Your heart beats about 72 times per minute. Roughly how many times does it beat in a year?",
        question: "Use estimation to find a reasonable answer.",
        choices: [
          "About 37 million times — 70 × 60 × 24 × 365 ≈ 36,792,000",
          "About 3.7 million times",
          "About 370,000 times",
          "About 100 million times"
        ],
        correct: 0,
        why: "70 beats/min × 60 min/hr = 4,200/hr. × 24 hr = 100,800/day. × 365 ≈ 36,800,000. About 37 million. Estimation by building up step-by-step is a powerful skill for large numbers."
      },
      {
        situation: "You see a sweater marked 30% off its original price of $68.",
        question: "Estimate the sale price in your head without a calculator.",
        choices: [
          "About $40 — 30% of $70 = $21, $70 − $21 = $49. That's not $40.",
          "About $48 — 30% of $70 is $21. $70 − $21 = $49 ≈ $48",
          "About $50 — take off roughly one-third of the price",
          "About $35 — half price plus a bit"
        ],
        correct: 1,
        why: "Round $68 → $70. 30% of $70 = $21. $70 − $21 = $49. The actual is $47.60 — close. Estimation using a friendly number ($70 vs $68) gives a fast, accurate enough answer."
      },
      {
        situation: "You have 12 friends coming over. A pizza has 8 slices. Each person eats about 2-3 slices.",
        question: "Estimate how many pizzas to order.",
        choices: [
          "1 pizza — 8 slices ÷ 12 people = not quite 1 slice each, so 1 is enough",
          "About 4 pizzas — 12 people × 2.5 slices = 30 slices ÷ 8 = 3.75, round up to 4",
          "6 pizzas — always double what you think you need",
          "2 pizzas — 16 slices for 12 people is plenty"
        ],
        correct: 1,
        why: "12 × 2.5 = 30 slices needed. 30 ÷ 8 = 3.75 pizzas. Round UP to 4 pizzas. 4 × 8 = 32 slices. Estimation reveals you need to round up since you can't order a fraction of a pizza."
      },
      {
        situation: "You're reading a 324-page book. You read about 22 pages per night. It's 9 PM.",
        question: "Estimate how many nights it will take to finish.",
        choices: [
          "About 15 nights — 324 ÷ 22 = 14.7, round up to 15",
          "About 10 nights — 300 ÷ 30 = 10",
          "About 20 nights — better to overestimate",
          "Exactly 14.7 nights"
        ],
        correct: 0,
        why: "324 ÷ 22 ≈ 15 nights. You can't finish in 0.7 of a night — round up to 15 full nights. Quick estimate: 300 ÷ 20 = 15. Both give 15. Estimation confirms the same answer quickly."
      },
      {
        situation: "A crowd is packed into a field roughly 200 feet × 300 feet. Each person takes up about 4 square feet.",
        question: "Estimate how many people are in the crowd.",
        choices: [
          "About 15,000 people — 200 × 300 = 60,000 sq ft ÷ 4 = 15,000",
          "About 1,500 people — the field is smaller than it looks",
          "About 60,000 people — one per square foot",
          "About 6,000 people — divide by a larger space estimate"
        ],
        correct: 0,
        why: "Area = 200 × 300 = 60,000 sq ft. Each person = 4 sq ft. 60,000 ÷ 4 = 15,000 people. This is how crowd scientists estimate attendance — a real estimation superpower."
      },
      {
        situation: "You earn $12/hour. You worked 37 hours last week.",
        question: "Without a calculator, estimate your gross pay.",
        choices: [
          "About $444 — $12 × 37 = 12 × 40 − 12 × 3 = 480 − 36 = $444",
          "About $400 — 10 × 40 = $400",
          "About $500 — round everything up",
          "About $370 — hours × $10"
        ],
        correct: 0,
        why: "12 × 37 = 12 × 40 − 12 × 3 = 480 − 36 = 444. This is a mental math estimation strategy: break 37 into 40 − 3. The exact answer IS $444, and estimation gets you there cleanly."
      }
    ]
  },

  /* ── GEOMETRY ── */

  "geo-area": {
    title: "Perimeter & Area",
    boss: "The Fence Faker",
    bossDesc: "This boss confuses perimeter with area on every project, wasting materials and money. Prove you know the difference and can calculate both.",
    xp: 100,
    moves: [
      {
        situation: "You're fencing a rectangular backyard that is 20 feet long and 15 feet wide.",
        question: "How much fencing do you need?",
        choices: [
          "300 feet — length × width",
          "70 feet — add all four sides: 20 + 15 + 20 + 15",
          "35 feet — add only length and width",
          "70 square feet — fence is measured in square feet"
        ],
        correct: 1,
        why: "Fencing goes around the edge — that's perimeter. P = 2(l + w) = 2(20 + 15) = 2 × 35 = 70 feet. Area (300 sq ft) would tell you how big the yard is, not how much fence you need."
      },
      {
        situation: "You're buying carpet for a room that is 12 feet long and 9 feet wide.",
        question: "How many square feet of carpet do you need?",
        choices: [
          "42 square feet — perimeter of the room",
          "108 square feet — 12 × 9 = area of the floor",
          "21 square feet — half the perimeter",
          "12 + 9 = 21 square feet"
        ],
        correct: 1,
        why: "Carpet covers the floor — that's area. A = l × w = 12 × 9 = 108 square feet. You'd only need perimeter if you were installing baseboards around the edge."
      },
      {
        situation: "A square park has sides of 50 meters. The city wants to add a walking path around the outside AND grass inside.",
        question: "What formulas give you the path length and grass area?",
        choices: [
          "Path = 4 × 50 = 200 meters (perimeter); Grass = 50 × 50 = 2,500 sq meters (area)",
          "Both use area = 50 × 50 = 2,500 for each",
          "Path = 50 × 50 = 2,500 meters; Grass = 4 × 50 = 200 sq meters",
          "They're the same calculation — just different units"
        ],
        correct: 0,
        why: "Path around the outside = perimeter = 4 × 50 = 200 meters (linear). Grass inside = area = 50² = 2,500 sq meters. Two different measurements for two different purposes."
      },
      {
        situation: "A triangle has a base of 10 feet and a height of 6 feet.",
        question: "What is its area?",
        choices: [
          "60 square feet — base × height",
          "30 square feet — ½ × base × height = ½ × 10 × 6",
          "16 square feet — add base and two sides",
          "8 square feet — divide height by base"
        ],
        correct: 1,
        why: "Triangle area = ½ × base × height = ½ × 10 × 6 = 30 square feet. A triangle is exactly half of a rectangle with the same base and height."
      },
      {
        situation: "You're planting a flower border around a garden that is 8 feet by 5 feet. Plants cost $3 per foot.",
        question: "How much will the border plants cost?",
        choices: [
          "$120 — area is 40 sq ft × $3",
          "$78 — perimeter is 26 feet × $3",
          "$40 — use area and divide by price",
          "$30 — just two sides: 8 + 5 = 13 × $3 — wait, that's only half the perimeter"
        ],
        correct: 1,
        why: "A border goes ALL the way around — perimeter. P = 2(8 + 5) = 2(13) = 26 feet. 26 × $3 = $78. Only using two sides (13 feet) would leave half your garden without plants."
      },
      {
        situation: "A wall is 14 feet wide and 9 feet tall. You need to paint it. Paint covers 100 sq ft per gallon.",
        question: "How many gallons do you need?",
        choices: [
          "1.26 gallons — 14 × 9 = 126 sq ft ÷ 100 = 1.26, so buy 2 gallons",
          "46 gallons — perimeter of the wall",
          "0.46 gallons — add all four sides and divide",
          "1 gallon — close enough"
        ],
        correct: 0,
        why: "Paint covers the wall surface = area. 14 × 9 = 126 sq ft. 126 ÷ 100 = 1.26 gallons. Since you can't buy 0.26 of a gallon, you need to buy 2 gallons. Area determines paint quantity."
      },
      {
        situation: "A room is shaped like an L. It's a 10×10 square with a 4×3 rectangle removed from one corner.",
        question: "What is the floor area of the L-shaped room?",
        choices: [
          "100 square feet — just the big square",
          "88 square feet — 10×10 = 100 minus 4×3 = 12. 100 − 12 = 88",
          "52 square feet — add up only the outer edges",
          "112 square feet — add the two rectangles"
        ],
        correct: 1,
        why: "Break the L into shapes: full square = 10 × 10 = 100. Removed corner = 4 × 3 = 12. Area = 100 − 12 = 88 sq ft. Complex shapes are solved by combining or subtracting simpler ones."
      },
      {
        situation: "You want to put a tile border around a 6×4 foot table. Tiles are 1 foot each and cost $4 each.",
        question: "How many tiles and what is the total cost?",
        choices: [
          "24 tiles for $96 — area of the table top",
          "20 tiles for $80 — perimeter: 2(6+4) = 20 feet of border tiles",
          "10 tiles for $40 — just add 6 + 4",
          "16 tiles for $64 — go around just the long sides twice"
        ],
        correct: 1,
        why: "The border goes around the edge = perimeter. P = 2(6 + 4) = 20 feet. 20 tiles × $4 = $80. Area (24 sq ft) would be for covering the table's surface, not the edge."
      },
      {
        situation: "A circle-shaped pool has a radius of 7 meters. You need to build a fence just outside it. Use π ≈ 3.14.",
        question: "What is the circumference (perimeter) of the circle?",
        choices: [
          "43.96 meters — C = 2πr = 2 × 3.14 × 7",
          "153.86 sq meters — that's the area, not perimeter",
          "14 meters — just the diameter",
          "21.98 meters — πr only, missing the 2"
        ],
        correct: 0,
        why: "Circumference (perimeter of a circle) = 2πr = 2 × 3.14 × 7 = 43.96 meters. Area = πr² = 3.14 × 49 = 153.86 sq m. Know which formula goes with which real-life question."
      },
      {
        situation: "Two gardens: Garden A is 6×8 ft. Garden B is 4×12 ft. They have the same perimeter.",
        question: "Do they have the same area?",
        choices: [
          "Yes — same perimeter means same area",
          "No — Garden A area = 48 sq ft, Garden B area = 48 sq ft. They are actually equal here.",
          "No — Garden A = 48 sq ft, Garden B = 48 sq ft — wait, these ARE equal. But this isn't always the case!",
          "Yes in this case (both 48 sq ft), but equal perimeter does NOT guarantee equal area in general"
        ],
        correct: 3,
        why: "Both have perimeter 28 ft and area 48 sq ft — so both stats are equal here. BUT equal perimeter doesn't always mean equal area: a 1×13 rectangle has perimeter 28 but area only 13 sq ft. The concepts are independent."
      }
    ]
  },

  "geo-circles": {
    title: "Circles — π Unlocked",
    boss: "The Round Avoider",
    bossDesc: "This boss flattens every circle into a square to avoid dealing with π. Prove you can handle the real geometry of circles.",
    xp: 100,
    moves: [
      {
        situation: "A circular pizza has a diameter of 16 inches. You want to know how much crust is on the outside edge.",
        question: "What is the circumference of the pizza? (Use π ≈ 3.14)",
        choices: [
          "50.24 inches — C = πd = 3.14 × 16",
          "25.12 inches — C = πr = 3.14 × 8",
          "200.96 sq inches — that's the area",
          "32 inches — just the diameter times 2"
        ],
        correct: 0,
        why: "Circumference = πd = 3.14 × 16 = 50.24 inches. This is the crust's length all the way around. Diameter goes across the full circle; radius goes from center to edge (d = 2r)."
      },
      {
        situation: "A circular garden has a radius of 5 feet. How much soil do you need to fill it?",
        question: "What is the area of the garden? (Use π ≈ 3.14)",
        choices: [
          "31.4 sq ft — πr = 3.14 × 5",
          "78.5 sq ft — πr² = 3.14 × 25",
          "15.7 sq ft — πr ÷ 2",
          "100 sq ft — diameter squared"
        ],
        correct: 1,
        why: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 sq ft. The radius must be squared — area grows with the square of the radius. Doubling the radius quadruples the area."
      },
      {
        situation: "A wheel has a diameter of 2 feet. It rolls forward one full rotation.",
        question: "How far did it travel?",
        choices: [
          "6.28 feet — one rotation = one circumference = πd = 3.14 × 2",
          "3.14 feet — half the circumference",
          "4 feet — just the diameter doubled",
          "12.56 sq feet — area of the wheel"
        ],
        correct: 0,
        why: "One full rotation = one circumference. C = πd = 3.14 × 2 = 6.28 feet. This is how odometers in cars work — counting wheel rotations and multiplying by circumference."
      },
      {
        situation: "A circular window has a radius of 3 feet. What is the diameter?",
        question: "What is the diameter?",
        choices: [
          "1.5 feet — diameter = radius ÷ 2",
          "9 feet — radius × radius",
          "6 feet — diameter = 2 × radius",
          "3.14 feet — radius × π"
        ],
        correct: 2,
        why: "Diameter = 2 × radius = 2 × 3 = 6 feet. The diameter is always twice the radius. It's the longest straight line you can draw through a circle, passing through the center."
      },
      {
        situation: "You're building a circular fence around a tree. The fence must be 3 feet from the trunk (radius = 3 ft). Fencing costs $8 per foot.",
        question: "Estimate the total cost of the fence. (π ≈ 3.14)",
        choices: [
          "About $75 — C = 2 × 3.14 × 3 = 18.84 ft × $8 ≈ $150... wait, that's not $75",
          "About $150 — C = 2πr = 18.84 ft × $8 = $150.72",
          "About $72 — circumference = 9 × π ≈ 28 feet × $8 = $224... that's wrong",
          "About $50 — just estimate 3 feet × $8 = $24"
        ],
        correct: 1,
        why: "C = 2πr = 2 × 3.14 × 3 = 18.84 feet. 18.84 × $8 ≈ $150.72. You'd budget about $151. Always calculate circumference before multiplying by cost per foot."
      },
      {
        situation: "Circle A has radius 2. Circle B has radius 4. How do their areas compare?",
        question: "Is Circle B's area twice as large, or more?",
        choices: [
          "Twice as large — radius doubled so area doubled",
          "Three times as large",
          "Four times as large — area = πr², so when r doubles, area quadruples (2² vs 4² = 4 vs 16)",
          "The same — both are circles"
        ],
        correct: 2,
        why: "Area A = π × 4 = 12.56. Area B = π × 16 = 50.27. 50.27 ÷ 12.56 = 4. Circle B is 4× larger. Because area uses r², doubling the radius multiplies area by 4 (2² = 4). This surprises most people."
      },
      {
        situation: "A circular running track has a radius of 40 meters. A runner completes 5 laps.",
        question: "How far did the runner run? (π ≈ 3.14)",
        choices: [
          "1,256 meters — one lap = 2πr = 251.2 m × 5 = 1,256 m",
          "628 meters — forgot to multiply by 5",
          "200 meters — just 5 × radius × 2",
          "5,024 meters — used diameter instead of radius"
        ],
        correct: 0,
        why: "One lap circumference = 2 × 3.14 × 40 = 251.2 meters. 5 laps = 5 × 251.2 = 1,256 meters. This is how track distances are determined — radius determines the lap length."
      },
      {
        situation: "A circular mirror has a circumference of 62.8 inches. What is its radius? (Use π ≈ 3.14)",
        question: "Work backwards from circumference to find the radius.",
        choices: [
          "10 inches — C = 2πr → 62.8 = 2 × 3.14 × r → r = 62.8 ÷ 6.28 = 10",
          "20 inches — diameter, not radius",
          "5 inches — divided by 4π instead of 2π",
          "31.4 inches — used C = πr"
        ],
        correct: 0,
        why: "C = 2πr → r = C ÷ (2π) = 62.8 ÷ (2 × 3.14) = 62.8 ÷ 6.28 = 10 inches. Algebra lets you reverse any circle formula. This is exactly what engineers do when given a circumference measurement."
      },
      {
        situation: "A sprinkler waters a circular area with a radius of 15 feet. A second sprinkler has a radius of 20 feet.",
        question: "How much more area does the bigger sprinkler cover? (π ≈ 3.14)",
        choices: [
          "About 691 sq ft more — π(20²) − π(15²) = 3.14(400−225) = 3.14 × 175 = 549.5 sq ft",
          "About 549.5 sq ft more — π × 400 − π × 225 = 1,256 − 706.5 = 549.5",
          "About 25 sq ft more — 20 − 15 = 5 extra feet of radius",
          "About 157 sq ft more — just 5 extra feet times π times 10"
        ],
        correct: 1,
        why: "Area big = 3.14 × 400 = 1,256. Area small = 3.14 × 225 = 706.5. Difference = 549.5 sq ft. Note: 5 extra feet of radius creates much more than 5 times the area — area grows exponentially with radius."
      },
      {
        situation: "A circular clock face has a diameter of 12 inches. What is the area of the clock face? (π ≈ 3.14)",
        question: "Remember: you're given the diameter, but the area formula uses radius.",
        choices: [
          "452.16 sq in — used diameter instead of radius in the formula",
          "37.68 sq in — used circumference formula by mistake",
          "113.04 sq in — r = 6, area = 3.14 × 36 = 113.04",
          "144 sq in — treated it as a square"
        ],
        correct: 2,
        why: "Diameter = 12, so radius = 6. Area = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 sq in. A common mistake is using the diameter in the area formula — always convert to radius first."
      }
    ]
  },

  "geo-coordinate": {
    title: "The Coordinate Plane",
    boss: "The Axis Anarchist",
    bossDesc: "This boss scrambles coordinates, making maps useless and buildings crooked. Prove you can navigate any grid with precision.",
    xp: 100,
    moves: [
      {
        situation: "A treasure map shows the treasure at point (3, 7). You are at the origin (0, 0).",
        question: "What does the coordinate (3, 7) tell you about where to go?",
        choices: [
          "Go 7 steps right and 3 steps up",
          "Go 3 steps right (x-axis) and 7 steps up (y-axis)",
          "Go to row 3, column 7 on the map",
          "Both numbers are interchangeable — go 3 or 7 in any direction"
        ],
        correct: 1,
        why: "Coordinates are always (x, y). X comes first — move right or left. Y comes second — move up or down. (3, 7) means 3 right, 7 up. Order matters: (7, 3) would be a completely different location."
      },
      {
        situation: "A city grid has a coffee shop at (2, 5), a library at (2, −3), and a park at (−4, 5).",
        question: "Which two locations share the same x-coordinate, meaning they're on the same vertical line?",
        choices: [
          "Coffee shop and park — both have y = 5",
          "Coffee shop and library — both have x = 2",
          "Library and park — connected diagonally",
          "All three are on the same line"
        ],
        correct: 1,
        why: "Same x-coordinate = same vertical column. Coffee shop (2, 5) and library (2, −3) both have x = 2 — they're directly above/below each other. Coffee shop and park share y = 5 (same horizontal row, not vertical)."
      },
      {
        situation: "A robot starts at (0, 0) and moves to (4, 3). What is the straight-line distance it traveled?",
        question: "Use the Pythagorean theorem to find the exact distance.",
        choices: [
          "7 units — just add 4 + 3",
          "5 units — √(4² + 3²) = √(16 + 9) = √25 = 5",
          "12 units — 4 × 3 = 12",
          "3.5 units — average of 4 and 3"
        ],
        correct: 1,
        why: "Straight-line distance = √(Δx² + Δy²) = √(16 + 9) = √25 = 5 units. The x and y distances form the legs of a right triangle; the direct path is the hypotenuse. The 3-4-5 right triangle is famous for a reason."
      },
      {
        situation: "A point is in Quadrant II on the coordinate plane. What are the signs of its x and y coordinates?",
        question: "Which option correctly describes Quadrant II?",
        choices: [
          "x positive, y positive — like (3, 5)",
          "x negative, y positive — like (−3, 5)",
          "x negative, y negative — like (−3, −5)",
          "x positive, y negative — like (3, −5)"
        ],
        correct: 1,
        why: "Quadrant II is upper-left: left of the y-axis (x negative) and above the x-axis (y positive). Q1 = (+,+), Q2 = (−,+), Q3 = (−,−), Q4 = (+,−). Know these or you'll navigate backwards."
      },
      {
        situation: "You plot two points: A(1, 2) and B(5, 2). What is the distance between them?",
        question: "How far apart are A and B?",
        choices: [
          "4 units — same y-coordinate, so just subtract x values: 5 − 1 = 4",
          "6 units — add the x values",
          "√8 units — use the distance formula",
          "2 units — subtract y values: 2 − 2 = 0, so distance is 2"
        ],
        correct: 0,
        why: "When two points share the same y-coordinate, they lie on a horizontal line. Distance = |x₂ − x₁| = |5 − 1| = 4. No Pythagorean theorem needed — the path is a straight horizontal line."
      },
      {
        situation: "A square on a coordinate plane has corners at (1,1), (1,5), (5,5), and (5,1).",
        question: "What is the side length and area of this square?",
        choices: [
          "Side = 4, Area = 16 sq units — distance from (1,1) to (1,5) = 4 units, 4² = 16",
          "Side = 5, Area = 25 sq units",
          "Side = 8, Area = 64 sq units — used perimeter instead",
          "Side = 2, Area = 4 sq units"
        ],
        correct: 0,
        why: "From (1,1) to (1,5): same x, y goes from 1 to 5, distance = 4. Same for each side. Area = 4² = 16 square units. The coordinate plane lets you calculate geometric measurements precisely."
      },
      {
        situation: "A delivery driver starts at point A(0, 0) and must pass through B(3, 4) then reach C(6, 0).",
        question: "What is the total distance traveled from A to B to C?",
        choices: [
          "10 units — A to B = 5 units (3-4-5 triangle), B to C = 5 units (3-4-5 triangle). 5 + 5 = 10",
          "6 units — straight line from A to C",
          "12 units — add all coordinates",
          "7 units — the two individual distances"
        ],
        correct: 0,
        why: "A to B: √(3²+4²) = √25 = 5. B to C: from (3,4) to (6,0) = √(3²+4²) = √25 = 5. Total = 10 units. The driver travels 10 units even though A to C directly would only be 6."
      },
      {
        situation: "You're drawing a map and need to find the midpoint between two stores at (2, 8) and (6, 2).",
        question: "What are the coordinates of the midpoint?",
        choices: [
          "(4, 5) — midpoint = ((2+6)/2, (8+2)/2) = (8/2, 10/2) = (4, 5)",
          "(8, 10) — added the coordinates",
          "(2, 3) — subtracted the coordinates",
          "(3, 4) — averaged only the first coordinates"
        ],
        correct: 0,
        why: "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) = ((2+6)/2, (8+2)/2) = (4, 5). This is the exact halfway point between the two locations — useful for finding where to put a shared resource."
      },
      {
        situation: "A point at (−4, −3) is reflected across the y-axis.",
        question: "What are the new coordinates?",
        choices: [
          "(4, −3) — only the x-coordinate changes sign when reflecting across y-axis",
          "(−4, 3) — only the y-coordinate changes sign",
          "(4, 3) — both coordinates change sign",
          "(−4, −3) — nothing changes"
        ],
        correct: 0,
        why: "Reflecting across the y-axis means flipping left-right. Only x changes sign: (−4, −3) → (4, −3). Reflecting across the x-axis flips up-down: only y changes sign. These are mirror-image transformations."
      },
      {
        situation: "A line passes through points (0, 2) and (4, 6). A third point (2, 4) is proposed to also lie on this line.",
        question: "Does (2, 4) lie on the same line as the other two points?",
        choices: [
          "No — you'd need to check with a graph only",
          "Yes — the slope between (0,2) and (4,6) is (6−2)/(4−0) = 1. From (0,2), adding x=2 gives y = 2+2 = 4. So (2,4) is on the line.",
          "No — (2,4) is not exactly between the other points",
          "Yes — all coordinate points lie on some line"
        ],
        correct: 1,
        why: "Slope = rise/run = 4/4 = 1. Equation: y = x + 2. Check (2,4): 4 = 2 + 2 = 4 ✓. The point is on the line. Checking if a point satisfies the line equation is how engineers verify alignment."
      }
    ]
  },

  "geo-polygons": {
    title: "Quadrilaterals & Polygons",
    boss: "The Shape Shifter",
    bossDesc: "This boss mislabels every shape to cause chaos in construction. Prove you know the properties of every polygon.",
    xp: 100,
    moves: [
      {
        situation: "A builder is framing a floor. They need all four corners to be right angles and all sides equal.",
        question: "Which shape are they building?",
        choices: [
          "Rectangle — all right angles but sides can differ",
          "Rhombus — all sides equal but angles can differ",
          "Square — all sides equal AND all angles are 90°",
          "Trapezoid — one pair of parallel sides"
        ],
        correct: 2,
        why: "A square has four equal sides AND four 90° angles. A rectangle has right angles but sides can differ. A rhombus has equal sides but angles aren't necessarily 90°. The builder needs a square."
      },
      {
        situation: "A photographer is laying out a backdrop frame. The opposite sides are equal and parallel, and all angles are 90°, but the width and height are different.",
        question: "What quadrilateral describes this frame?",
        choices: [
          "Square — four right angles",
          "Parallelogram — opposite sides parallel and equal",
          "Rectangle — opposite sides equal and parallel, all angles 90°, but adjacent sides differ",
          "Rhombus — all sides equal"
        ],
        correct: 2,
        why: "A rectangle has all the properties described: four right angles, opposite sides parallel and equal, but adjacent sides (length vs width) can be different. Squares are special rectangles where all sides are also equal."
      },
      {
        situation: "A tile pattern uses a shape with 4 equal sides but the angles are NOT right angles — they're 60° and 120°.",
        question: "What shape is this tile?",
        choices: [
          "Square — equal sides",
          "Rhombus — four equal sides with non-right angles",
          "Rectangle — right angles required",
          "Kite — two pairs of adjacent equal sides"
        ],
        correct: 1,
        why: "A rhombus has four equal sides but its angles don't have to be 90°. If the angles were 90°, it would be a square. This diamond-shaped tile is a rhombus."
      },
      {
        situation: "A road sign is in the shape of a regular hexagon (6 equal sides and equal angles).",
        question: "What is the sum of all interior angles of a hexagon?",
        choices: [
          "360° — same as any polygon",
          "540° — five triangles fit inside",
          "720° — (6 − 2) × 180° = 4 × 180°",
          "1080° — 6 × 180°"
        ],
        correct: 2,
        why: "Sum of interior angles of any polygon = (n − 2) × 180°. For a hexagon: (6 − 2) × 180 = 4 × 180 = 720°. Each angle in a regular hexagon = 720 ÷ 6 = 120°."
      },
      {
        situation: "A bridge support uses a trapezoid shape — one pair of parallel sides. The parallel sides are 12 m and 8 m. The height is 5 m.",
        question: "What is the area of this trapezoid cross-section?",
        choices: [
          "50 sq m — average base × height = (12+8)/2 × 5",
          "60 sq m — add both bases and multiply by height",
          "25 sq m — just multiply one base by height",
          "96 sq m — multiply all three numbers"
        ],
        correct: 0,
        why: "Trapezoid area = ½ × (b₁ + b₂) × h = ½ × (12 + 8) × 5 = ½ × 20 × 5 = 50 sq m. The formula averages the two parallel sides, then multiplies by height. This is used in engineering cross-sections."
      },
      {
        situation: "An architect is designing a floor tile that is a regular pentagon (5 equal sides).",
        question: "What is the measure of each interior angle of a regular pentagon?",
        choices: [
          "108° — (5−2) × 180 = 540° total ÷ 5 = 108° each",
          "90° — same as a square",
          "72° — 360° ÷ 5",
          "120° — same as a hexagon"
        ],
        correct: 0,
        why: "(5 − 2) × 180 = 540° total interior angles. Regular pentagon: 540 ÷ 5 = 108° each. The formula (n−2)×180 works for any polygon. Pentagons tile in some patterns, but not regular ones — that's a geometry fact."
      },
      {
        situation: "A parallelogram has a base of 10 cm and a height of 6 cm (perpendicular height, not side length).",
        question: "What is the area?",
        choices: [
          "60 sq cm — base × perpendicular height",
          "30 sq cm — base × height ÷ 2",
          "32 sq cm — add all sides",
          "100 sq cm — base squared"
        ],
        correct: 0,
        why: "Parallelogram area = base × height (perpendicular height). 10 × 6 = 60 sq cm. This is the same as a rectangle with those dimensions — the parallelogram is like a rectangle that's been 'slid' sideways."
      },
      {
        situation: "A kite shape for a decoration has two pairs of consecutive equal sides: 5 cm, 5 cm, 8 cm, 8 cm.",
        question: "What is the perimeter of this kite?",
        choices: [
          "26 cm — 5 + 5 + 8 + 8",
          "13 cm — add only the unique sides",
          "40 cm — multiply: 5 × 8",
          "80 sq cm — area, not perimeter"
        ],
        correct: 0,
        why: "Perimeter = sum of all sides = 5 + 5 + 8 + 8 = 26 cm. A kite has two pairs of equal adjacent sides. Its perimeter is always the sum of all four individual sides."
      },
      {
        situation: "You need to identify if a shape with vertices at (0,0), (4,0), (4,3), and (0,3) is a square or rectangle.",
        question: "What is it, and how do you know?",
        choices: [
          "Square — it has four right angles",
          "Rectangle — the width is 4 and the height is 3, so adjacent sides are unequal. All angles are 90° but sides differ.",
          "Parallelogram — opposite sides are parallel",
          "Rhombus — all sides are equal"
        ],
        correct: 1,
        why: "Width = 4 (from x=0 to x=4). Height = 3 (from y=0 to y=3). Since 4 ≠ 3, the adjacent sides are unequal — it's a rectangle, not a square. All four angles are 90° (coordinate grid confirms). It's definitely a rectangle."
      },
      {
        situation: "A stop sign is a regular octagon (8 equal sides and angles). Each side is 30 cm.",
        question: "What is the perimeter of the stop sign?",
        choices: [
          "240 cm — 8 × 30",
          "64 cm — perimeter formula for squares",
          "135° — that's one angle, not the perimeter",
          "120 cm — 4 × 30 (only half the sides)"
        ],
        correct: 0,
        why: "Perimeter = n × side = 8 × 30 = 240 cm. Regular polygons make perimeter easy: just multiply the number of sides by the side length. Interior angles of a regular octagon = (8−2)×180 ÷ 8 = 135° each."
      }
    ]
  },

  "geo-triangles": {
    title: "Triangles",
    boss: "The Triangle Terror",
    bossDesc: "This boss builds structures with impossible triangles that collapse. Prove you know every triangle rule before a bridge falls down.",
    xp: 100,
    moves: [
      {
        situation: "A triangle has angles of 55° and 70°. What is the third angle?",
        question: "Use the triangle angle sum rule.",
        choices: [
          "125° — add the two known angles",
          "55° — same as one of the other angles",
          "180° — the total",
          "55° — 180 − 55 − 70 = 55°"
        ],
        correct: 3,
        why: "All angles in a triangle sum to 180°. Third angle = 180 − 55 − 70 = 55°. This triangle is actually isosceles (two 55° angles). The angle sum rule is unbreakable — every triangle has exactly 180°."
      },
      {
        situation: "Can you build a triangle with sides of lengths 3 cm, 4 cm, and 8 cm?",
        question: "Use the Triangle Inequality Theorem to check.",
        choices: [
          "Yes — all three sides are different lengths",
          "No — 3 + 4 = 7, which is less than 8. Any two sides must sum to MORE than the third.",
          "Yes — you just connect them",
          "No — you can only use equal-length sides for triangles"
        ],
        correct: 1,
        why: "Triangle Inequality: the sum of any two sides must be greater than the third. 3 + 4 = 7 < 8. These three lengths cannot form a triangle — the two short sides aren't long enough to reach each other."
      },
      {
        situation: "A right triangle has legs of 6 feet and 8 feet. How long is the hypotenuse?",
        question: "Apply the Pythagorean theorem.",
        choices: [
          "14 feet — just add 6 + 8",
          "48 feet — multiply 6 × 8",
          "10 feet — √(6² + 8²) = √(36 + 64) = √100 = 10",
          "100 feet — forgot to take the square root"
        ],
        correct: 2,
        why: "Pythagorean theorem: a² + b² = c². 36 + 64 = 100. √100 = 10 feet. This is the famous 6-8-10 right triangle (a multiple of 3-4-5). The hypotenuse is always the side opposite the right angle."
      },
      {
        situation: "A builder is checking if a corner is a true right angle. The two walls are 9 ft and 12 ft. He measures the diagonal and gets 15 ft.",
        question: "Is the corner a true right angle?",
        choices: [
          "No — 9 + 12 + 15 is not 180",
          "Yes — 9² + 12² = 81 + 144 = 225 = 15². The Pythagorean theorem confirms it.",
          "No — the walls should be equal length for a right angle",
          "You can't tell without measuring the angle directly"
        ],
        correct: 1,
        why: "9² + 12² = 81 + 144 = 225. √225 = 15. Since the diagonal equals √(9² + 12²), this IS a right angle. The 3-4-5 (9-12-15) check is how builders have verified right angles for centuries."
      },
      {
        situation: "An equilateral triangle has all three sides equal at 10 cm each.",
        question: "What are the angles of an equilateral triangle?",
        choices: [
          "90°, 45°, 45°",
          "60°, 60°, 60° — three equal angles because three equal sides",
          "120°, 30°, 30°",
          "80°, 60°, 40°"
        ],
        correct: 1,
        why: "Equilateral triangle: all sides equal → all angles equal. 180° ÷ 3 = 60° each. An equilateral triangle is also equiangular. This is why equilateral triangles are the strongest natural shape."
      },
      {
        situation: "A triangle has sides 5 cm, 5 cm, and 8 cm.",
        question: "What type of triangle is this?",
        choices: [
          "Scalene — all three sides are different",
          "Equilateral — all sides equal",
          "Isosceles — exactly two sides are equal (5 cm and 5 cm)",
          "Right — it follows the Pythagorean theorem"
        ],
        correct: 2,
        why: "Isosceles triangles have exactly two equal sides. 5 = 5 ≠ 8. Two equal sides → isosceles. The angles opposite the equal sides are also equal. Isosceles triangles appear constantly in architecture and design."
      },
      {
        situation: "A triangle has one angle of 110°. What can you determine about the other angles?",
        question: "What do you know about the other two angles?",
        choices: [
          "They must both be 35° since it's isosceles",
          "They must each be less than 70° and sum to 70° total",
          "They can be anything as long as they sum to 70°. The triangle is obtuse.",
          "They must each be 90° — the 110° fills most of the triangle"
        ],
        correct: 2,
        why: "180° − 110° = 70° left for the other two angles combined. They can be any pair that sums to 70° (like 30°+40° or 10°+60°). Since one angle exceeds 90°, this is an obtuse triangle. You know the sum, not the individual values."
      },
      {
        situation: "The area of a triangle is found using base and height. A triangular sail has a base of 12 feet and a height of 8 feet.",
        question: "What is the area of the sail?",
        choices: [
          "96 sq ft — base × height",
          "48 sq ft — ½ × base × height = ½ × 12 × 8",
          "20 sq ft — add base and height",
          "40 sq ft — base × height ÷ 3"
        ],
        correct: 1,
        why: "Triangle area = ½ × b × h = ½ × 12 × 8 = 48 sq ft. A triangle is always half the rectangle with the same base and height. Sail designers need this to calculate fabric requirements."
      },
      {
        situation: "A surveyor needs to find the height of a tree. She walks 20 feet from the base and looks up at 60° to the top.",
        question: "Using trigonometry: if tan(60°) ≈ 1.73, what is the height of the tree?",
        choices: [
          "34.6 feet — tan(angle) = opposite/adjacent → height = tan(60°) × 20 = 1.73 × 20",
          "11.56 feet — 20 ÷ 1.73",
          "20 feet — the distance walked equals the height",
          "60 feet — multiply angle by distance"
        ],
        correct: 0,
        why: "tan(60°) = height ÷ 20. Height = tan(60°) × 20 = 1.73 × 20 = 34.6 feet. This is exactly how surveyors and engineers measure heights they can't directly reach. Right triangles + trigonometry = measurement superpower."
      },
      {
        situation: "A triangle has angles in the ratio 1:2:3.",
        question: "What are the actual angle measures, and what type of triangle is it?",
        choices: [
          "30°, 60°, 90° — it's a right triangle. Ratio parts sum to 6: 180°÷6 = 30° per part.",
          "45°, 90°, 135° — doesn't fit in a triangle",
          "60°, 60°, 60° — equilateral",
          "20°, 40°, 60° — ratio 1:2:3 with smallest = 20°"
        ],
        correct: 0,
        why: "Ratio 1:2:3 means angles are x, 2x, 3x. Sum = 180°: x + 2x + 3x = 6x = 180°. x = 30°. Angles: 30°, 60°, 90° — a right triangle. The 90° comes from 3 × 30°. This is a very common right triangle in construction."
      }
    ]
  },

  /* ── PRE-ALGEBRA ── */

  "alg-expressions": {
    title: "Expressions",
    boss: "The Unknown Avoider",
    bossDesc: "This boss runs from every variable, refusing to work with unknowns. Prove you can write and evaluate expressions that represent real situations.",
    xp: 100,
    moves: [
      {
        situation: "Apples cost $1.25 each. You want to write an expression for the total cost of buying some apples.",
        question: "Which expression correctly represents the total cost for n apples?",
        choices: [
          "n + 1.25",
          "1.25n — multiply price per apple by number of apples",
          "1.25 ÷ n",
          "n − 1.25"
        ],
        correct: 1,
        why: "Total cost = price per apple × number of apples = 1.25 × n = 1.25n. This is multiplication: each apple adds $1.25. The expression grows proportionally with n."
      },
      {
        situation: "A plumber charges a $75 service fee plus $50 per hour. The job takes h hours.",
        question: "Which expression gives the total cost?",
        choices: [
          "75h + 50",
          "50h + 75 — $50 per hour (50h) plus the flat fee ($75)",
          "75 × 50 × h",
          "75 ÷ h + 50"
        ],
        correct: 1,
        why: "50h represents the hourly charge ($50 × h hours). Add the flat fee: 50h + 75. When h = 2: 50(2) + 75 = 100 + 75 = $175. The expression shows structure of the real cost."
      },
      {
        situation: "You evaluate the expression 3x + 7 when x = 4.",
        question: "What is the value?",
        choices: [
          "34 — 3 × 4 × 7 = 84... wait",
          "19 — 3(4) + 7 = 12 + 7 = 19",
          "14 — (3 + 7) × 4 = 40, that's wrong too",
          "28 — 3 × 4 = 12... no"
        ],
        correct: 1,
        why: "Substitute x = 4: 3(4) + 7 = 12 + 7 = 19. Order of operations: multiplication before addition. First compute 3 × 4 = 12, then add 7."
      },
      {
        situation: "A car rental costs $40 per day plus $0.15 per mile. You rent it for d days and drive m miles.",
        question: "Which expression gives total rental cost?",
        choices: [
          "40 + 0.15 + d + m",
          "40d + 0.15m — days × daily rate + miles × per-mile rate",
          "40d × 0.15m",
          "(40 + 0.15) × (d + m)"
        ],
        correct: 1,
        why: "Daily cost = 40d. Mileage cost = 0.15m. Total = 40d + 0.15m. This is a two-variable expression — both d and m are needed to calculate the final bill. Real billing systems use expressions exactly like this."
      },
      {
        situation: "You simplify the expression: 5x + 3 + 2x − 1",
        question: "What is the simplified form?",
        choices: [
          "9x — ignore constants",
          "7x + 2 — combine like terms: 5x + 2x = 7x and 3 − 1 = 2",
          "10x + 2",
          "7x − 2"
        ],
        correct: 1,
        why: "Combine like terms: x-terms: 5x + 2x = 7x. Constants: 3 + (−1) = 2. Result: 7x + 2. You can only add terms with the same variable — 5x and 3 are NOT like terms."
      },
      {
        situation: "A phone plan charges $30/month flat plus $0.05 per text message t.",
        question: "Write and evaluate the expression for a month with 200 texts.",
        choices: [
          "30 + 0.05 = $30.05",
          "30 + 0.05(200) = 30 + 10 = $40",
          "30 × 0.05 × 200 = $300",
          "0.05(200) = $10 only"
        ],
        correct: 1,
        why: "Expression: 30 + 0.05t. Evaluate at t = 200: 30 + 0.05(200) = 30 + 10 = $40. The flat fee and variable fee are separate terms that get added at the end."
      },
      {
        situation: "You distribute: 4(x + 3)",
        question: "What is the expanded expression?",
        choices: [
          "4x + 3 — only distributed to the first term",
          "4x + 12 — distributive property: 4 × x + 4 × 3",
          "7x — added 4 + 3",
          "4x × 12"
        ],
        correct: 1,
        why: "Distributive property: a(b + c) = ab + ac. 4(x + 3) = 4 × x + 4 × 3 = 4x + 12. Every term inside the parentheses gets multiplied by the outside factor. This is foundational algebra."
      },
      {
        situation: "The perimeter of a rectangle is 2(l + w). The length is 3x and width is x + 2.",
        question: "Which expression gives the perimeter?",
        choices: [
          "2(3x + x + 2) = 2(4x + 2) = 8x + 4",
          "3x + x + 2 = 4x + 2",
          "2 × 3x × (x+2)",
          "6x + 2x + 2 = 8x + 2"
        ],
        correct: 0,
        why: "P = 2(l + w) = 2(3x + x + 2). First simplify inside: 3x + x + 2 = 4x + 2. Then distribute: 2(4x + 2) = 8x + 4. Combine expressions step by step, inside the parentheses first."
      },
      {
        situation: "You factor the expression 6x + 9.",
        question: "What is the factored form?",
        choices: [
          "3(2x + 3) — factor out the GCF of 6 and 9 which is 3",
          "6(x + 3) — factor out 6",
          "9(x + 1) — factor out 9",
          "Cannot be factored"
        ],
        correct: 0,
        why: "GCF of 6 and 9 is 3. Factor: 6x + 9 = 3(2x + 3). Check by distributing: 3 × 2x + 3 × 3 = 6x + 9 ✓. Factoring is the reverse of distributing."
      },
      {
        situation: "Two students write different expressions for the same situation (5 more than twice a number): Student A: 2n + 5. Student B: 5 + 2n.",
        question: "Are both expressions equivalent?",
        choices: [
          "No — order matters in expressions",
          "Yes — addition is commutative: 2n + 5 = 5 + 2n for any value of n",
          "Only if n is positive",
          "No — you should always write the variable term first"
        ],
        correct: 1,
        why: "Addition is commutative: a + b = b + a always. 2n + 5 = 5 + 2n for every value of n. Both expressions represent the same quantity. There's no mathematical preference — though convention puts variable terms first."
      }
    ]
  },

  "alg-percents": {
    title: "Percents",
    boss: "The Percent Phantom",
    bossDesc: "This boss marks everything at 100% off and charges 200% tax. Defeat it by calculating exactly what percents mean in real money situations.",
    xp: 100,
    moves: [
      {
        situation: "A shirt costs $40 and is 25% off. What is the sale price?",
        question: "Calculate the discount and final price.",
        choices: [
          "$25 — $40 − $25 = $15 (wrong: 25% of $40 ≠ $25)",
          "$30 — 25% of $40 = $10. $40 − $10 = $30",
          "$35 — 25% of $40 = $5 off (wrong — 5% would be $2)",
          "$15 — reduced by 75% by mistake"
        ],
        correct: 1,
        why: "25% of $40 = 0.25 × 40 = $10 discount. Sale price = $40 − $10 = $30. Or directly: 100% − 25% = 75% of $40 = 0.75 × 40 = $30. Both methods work."
      },
      {
        situation: "You score 34 out of 40 on a test. What is your percentage score?",
        question: "Convert this fraction to a percent.",
        choices: [
          "75% — 34 ÷ 40 × 100 = 85, not 75",
          "85% — 34 ÷ 40 = 0.85 = 85%",
          "80% — approximate guess",
          "34% — just use the numerator"
        ],
        correct: 1,
        why: "Percent = (part ÷ whole) × 100 = (34 ÷ 40) × 100 = 0.85 × 100 = 85%. Always divide part by whole, then multiply by 100 to convert to percent."
      },
      {
        situation: "A restaurant adds an 18% gratuity to a $65 bill.",
        question: "What is the total amount you pay?",
        choices: [
          "$83 — $65 + $18 = $83 (wrong: 18% of $65 is not $18)",
          "$76.70 — 18% of $65 = $11.70. $65 + $11.70 = $76.70",
          "$78 — estimated too roughly",
          "$118 — added 100% + 18% of original wrong"
        ],
        correct: 1,
        why: "18% of $65 = 0.18 × 65 = $11.70. Total = $65 + $11.70 = $76.70. Or: 118% of $65 = 1.18 × 65 = $76.70. Tip is always added ON TOP of the original bill."
      },
      {
        situation: "A store advertises 'Buy at $80, regular price $100.' What percent discount is this?",
        question: "What percentage did you save?",
        choices: [
          "20% — discount = $20. $20 ÷ $100 × 100 = 20%",
          "80% — the sale price as a percent",
          "25% — $80 is 3/4 of $100",
          "20% — correct, but let's verify: 80/100 = 0.80, so 20% off"
        ],
        correct: 0,
        why: "Discount amount = $100 − $80 = $20. Percent discount = ($20 ÷ $100) × 100 = 20%. The sale price ($80) represents 80% of the original — which confirms a 20% discount."
      },
      {
        situation: "A population grows from 50,000 to 58,000 in a year.",
        question: "What was the percent increase?",
        choices: [
          "8% — the increase is 8,000",
          "16% — (8,000 ÷ 50,000) × 100 = 16%",
          "116% — the new value as a percent",
          "58% — use the new value"
        ],
        correct: 1,
        why: "Percent change = (change ÷ original) × 100. Change = 58,000 − 50,000 = 8,000. 8,000 ÷ 50,000 = 0.16 = 16% increase. Always divide by the ORIGINAL value."
      },
      {
        situation: "Sales tax is 8%. You buy a laptop for $750.",
        question: "What is the total cost including tax?",
        choices: [
          "$758 — $750 + $8",
          "$810 — 8% of $750 = $60. $750 + $60 = $810",
          "$840 — added too much",
          "$800 — rounded incorrectly"
        ],
        correct: 1,
        why: "Tax = 8% of $750 = 0.08 × 750 = $60. Total = $750 + $60 = $810. Or: 108% of $750 = 1.08 × 750 = $810. Tax adds a fraction on top of the original price."
      },
      {
        situation: "Your salary is $4,000/month. You get a 6% raise.",
        question: "What is your new monthly salary?",
        choices: [
          "$4,006 — added 6 dollars",
          "$4,240 — 6% of $4,000 = $240. New salary = $4,000 + $240 = $4,240",
          "$4,060 — added 6%... wrongly as $60",
          "$2,400 — something went wrong"
        ],
        correct: 1,
        why: "6% of $4,000 = 0.06 × 4,000 = $240 raise. New salary = $4,000 + $240 = $4,240. Or: 106% × $4,000 = 1.06 × 4,000 = $4,240. Raise = percent × current salary."
      },
      {
        situation: "30% of students in a class got an A. There are 40 students total.",
        question: "How many students got an A?",
        choices: [
          "3 students — 30 ÷ 40 = something else",
          "12 students — 30% of 40 = 0.30 × 40 = 12",
          "30 students — just the percent number",
          "70 students — the other 70%"
        ],
        correct: 1,
        why: "Part = percent × whole = 0.30 × 40 = 12 students. Percent means 'per hundred' — 30% means 30 out of every 100, so in a class of 40 that's 12 students."
      },
      {
        situation: "A charity raised $7,200, which was 120% of their goal.",
        question: "What was their original fundraising goal?",
        choices: [
          "$6,000 — 7,200 ÷ 1.20 = 6,000",
          "$8,640 — multiplied instead of divided",
          "$7,200 — that's what they raised, not the goal",
          "$5,760 — subtracted 20% instead of dividing"
        ],
        correct: 0,
        why: "If raised amount = 120% of goal, then goal = raised ÷ 1.20 = 7,200 ÷ 1.20 = $6,000. Always divide by the percent (as a decimal) to find the original value when you're given the result."
      },
      {
        situation: "A jacket is discounted 40%, then the discounted price is discounted another 20%.",
        question: "What is the total percent saved from the original price?",
        choices: [
          "60% — 40% + 20% = 60%",
          "52% — 40% off first, then 20% of the remaining 60% = 12% more. Total: 40% + 12% = 52%",
          "20% — only the final discount matters",
          "48% — something else"
        ],
        correct: 1,
        why: "After 40% off: you pay 60% of original. Then 20% off that 60%: pay 80% × 60% = 48% of original. Total discount: 100% − 48% = 52%. Chained discounts don't simply add — you lose less than you'd think."
      }
    ]
  },

  "alg-proportions": {
    title: "Proportions",
    boss: "The Scale Wrecker",
    bossDesc: "This boss builds maps at wrong scales and resizes recipes incorrectly. Prove you can set up and solve proportions for any real situation.",
    xp: 100,
    moves: [
      {
        situation: "A recipe for 4 people uses 3 cups of rice. You're cooking for 10 people.",
        question: "How many cups of rice do you need?",
        choices: [
          "7 cups — added 4 + 3",
          "7.5 cups — 3/4 = x/10 → x = 30/4 = 7.5",
          "12 cups — multiplied by the wrong number",
          "30 cups — didn't set up the proportion"
        ],
        correct: 1,
        why: "Set up proportion: 3 cups/4 people = x cups/10 people. Cross multiply: 4x = 30. x = 7.5 cups. Proportions maintain the same ratio — more people, more rice, in exact proportion."
      },
      {
        situation: "A car travels 150 miles on 5 gallons of gas. How far can it go on 12 gallons?",
        question: "Set up and solve a proportion.",
        choices: [
          "360 miles — 150/5 = x/12 → x = 150 × 12/5 = 360",
          "250 miles — added 5 + 12 = 17... that's not right",
          "90 miles — divided incorrectly",
          "720 miles — doubled the answer"
        ],
        correct: 0,
        why: "150 miles/5 gallons = x miles/12 gallons. 5x = 150 × 12 = 1800. x = 360 miles. The unit rate is 30 miles/gallon × 12 gallons = 360 miles. Proportions are the backbone of unit conversions."
      },
      {
        situation: "On a map, 1 inch represents 50 miles. Two cities are 3.5 inches apart on the map.",
        question: "What is the real distance between the cities?",
        choices: [
          "175 miles — 1 inch/50 miles = 3.5 inches/x → x = 3.5 × 50 = 175",
          "53.5 miles — added 50 + 3.5",
          "14.3 miles — divided 50 by 3.5",
          "350 miles — doubled the answer"
        ],
        correct: 0,
        why: "1/50 = 3.5/x. Cross multiply: x = 50 × 3.5 = 175 miles. Map scale is a proportion: map distance/real distance stays constant. This is exactly how cartographers and GPS systems work."
      },
      {
        situation: "You can type 60 words per minute. A report is 900 words long.",
        question: "How many minutes will it take to type the report?",
        choices: [
          "15 minutes — 60/1 = 900/x → 60x = 900 → x = 15",
          "54,000 minutes — multiplied wrong",
          "30 minutes — used half the typing speed",
          "9 minutes — divided incorrectly"
        ],
        correct: 0,
        why: "60 words/1 minute = 900 words/x minutes. 60x = 900. x = 15 minutes. Unit rate method: 900 ÷ 60 = 15. Both give the same answer. Proportions work for any constant rate."
      },
      {
        situation: "A store sells 4 pounds of apples for $6. You want 10 pounds.",
        question: "What will 10 pounds cost?",
        choices: [
          "$15 — 4/6 = 10/x → 4x = 60 → x = 15",
          "$24 — multiplied wrong",
          "$10 — just the number of pounds",
          "$40 — used the wrong ratio"
        ],
        correct: 0,
        why: "4 lb/$6 = 10 lb/x. Cross multiply: 4x = 60. x = $15. Or unit rate: $6/4 lb = $1.50/lb. 10 × $1.50 = $15. Finding the unit rate first often makes proportion calculations easier."
      },
      {
        situation: "A scale model of a building uses a scale of 1:200. The model is 15 cm tall.",
        question: "How tall is the real building in cm?",
        choices: [
          "3,000 cm — 1/200 = 15/x → x = 3,000 cm (30 meters)",
          "215 cm — added 200 + 15",
          "13.33 cm — divided 200 by 15",
          "2,000 cm — multiplied wrong"
        ],
        correct: 0,
        why: "1/200 = 15/x. x = 15 × 200 = 3,000 cm = 30 meters tall. Architectural scale models use this exact proportion. A 1:200 scale means every 1 cm on the model = 200 cm in real life."
      },
      {
        situation: "If 6 workers can paint a house in 8 days, how many days would 4 workers take?",
        question: "This is an inverse proportion. What happens to days when workers decrease?",
        choices: [
          "6 days — direct proportion: fewer workers, fewer days",
          "12 days — inverse proportion: 6 workers × 8 days = 4 workers × x days → x = 48/4 = 12",
          "2 days — divided by 4",
          "48 days — just multiplied all numbers"
        ],
        correct: 1,
        why: "Inverse proportion: as workers decrease, days increase. Total work = 6 × 8 = 48 worker-days. 4 workers × x = 48. x = 12 days. When one quantity increases and the other decreases proportionally, it's inverse proportion."
      },
      {
        situation: "A store is offering 3 items for $7.50. You want to buy 9 items.",
        question: "How much will 9 items cost?",
        choices: [
          "$22.50 — 3/$7.50 = 9/x → 3x = 67.50 → x = 22.50",
          "$67.50 — cross-multiplied wrong",
          "$24 — estimated roughly",
          "$15 — wrong ratio direction"
        ],
        correct: 0,
        why: "3 items/$7.50 = 9 items/x. 3x = 9 × 7.50 = 67.50. x = $22.50. Or: unit price = $7.50 ÷ 3 = $2.50 per item. 9 × $2.50 = $22.50. The unit rate shortcut is fast and accurate."
      },
      {
        situation: "A shadow of a 6-foot person is 4 feet long. At the same time, a tree casts a 22-foot shadow.",
        question: "How tall is the tree?",
        choices: [
          "33 feet — 6/4 = x/22 → 4x = 132 → x = 33",
          "15 feet — added the shadows",
          "14.7 feet — divided incorrectly",
          "88 feet — multiplied wrong"
        ],
        correct: 0,
        why: "Similar triangles create proportions. Person height/shadow = tree height/shadow. 6/4 = x/22. 4x = 132. x = 33 feet. This is an ancient technique — Thales used it to measure Egyptian pyramids."
      },
      {
        situation: "A mixture uses a 2:3 ratio of water to concentrate. You need 20 total cups of mixture.",
        question: "How many cups of each do you need?",
        choices: [
          "10 water, 10 concentrate — split evenly",
          "8 water, 12 concentrate — total ratio parts: 2+3=5. 20÷5=4. Water: 2×4=8. Concentrate: 3×4=12.",
          "2 water, 3 concentrate — just use the ratio numbers",
          "12 water, 8 concentrate — reversed the ratio"
        ],
        correct: 1,
        why: "Total ratio parts = 2 + 3 = 5. Each part = 20 ÷ 5 = 4 cups. Water = 2 × 4 = 8 cups. Concentrate = 3 × 4 = 12 cups. Check: 8 + 12 = 20 ✓ and 8:12 = 2:3 ✓. Ratio problems require finding the unit value first."
      }
    ]
  },

  /* ── RATIOS ── */

  "rat-ratios": {
    title: "Ratios",
    boss: "The Confusion Mixer",
    bossDesc: "This boss mixes up every ratio, causing batches to fail and teams to collapse. Prove you can read, write, and apply ratios in any situation.",
    xp: 100,
    moves: [
      {
        situation: "A bag of trail mix has 3 cups of nuts and 2 cups of dried fruit.",
        question: "What is the ratio of nuts to dried fruit?",
        choices: [
          "2:3 — fruit to nuts",
          "3:2 — nuts to dried fruit (in the order stated)",
          "5:3 — total mix to nuts",
          "1.5 — just divide 3 by 2"
        ],
        correct: 1,
        why: "Ratio of nuts to dried fruit = 3:2. Ratios express the relationship between two quantities in the ORDER they are named. 3:2 means for every 3 cups of nuts there are 2 cups of fruit."
      },
      {
        situation: "A paint color is mixed in a ratio of 4 parts blue to 1 part white. You need 20 total parts.",
        question: "How many parts of each color do you use?",
        choices: [
          "10 blue, 10 white — split evenly",
          "16 blue, 4 white — total parts = 5. 20÷5=4. Blue: 4×4=16. White: 1×4=4.",
          "4 blue, 16 white — reversed the ratio",
          "20 blue, 1 white — ignored total"
        ],
        correct: 1,
        why: "Total ratio parts = 4 + 1 = 5. Scale factor = 20 ÷ 5 = 4. Blue = 4 × 4 = 16. White = 1 × 4 = 4. Check: 16 + 4 = 20 ✓ and 16:4 = 4:1 ✓. Always find the scale factor first."
      },
      {
        situation: "A basketball player made 18 out of 24 free throw attempts.",
        question: "Write this ratio in simplest form.",
        choices: [
          "18:24 — already written",
          "3:4 — divide both by GCF of 6: 18÷6=3, 24÷6=4",
          "9:12 — divided by 2 only",
          "6:8 — divided by 3 only"
        ],
        correct: 1,
        why: "GCF of 18 and 24 is 6. 18 ÷ 6 = 3, 24 ÷ 6 = 4. Simplest form: 3:4. This means for every 3 successful shots, there were 4 total attempts. Simplified ratios are easier to compare across players."
      },
      {
        situation: "A class has 15 boys and 20 girls. What is the ratio of boys to girls in simplest form?",
        question: "Simplify the ratio 15:20.",
        choices: [
          "15:20 — no simplification",
          "3:4 — GCF of 15 and 20 is 5. 15÷5=3, 20÷5=4",
          "1:2 — divided too far",
          "5:4 — wrong direction"
        ],
        correct: 1,
        why: "GCF(15, 20) = 5. 15 ÷ 5 = 3, 20 ÷ 5 = 4. Ratio = 3:4. This means for every 3 boys, there are 4 girls. The class has more girls, which the 3:4 ratio communicates clearly."
      },
      {
        situation: "A recipe calls for a sugar to flour ratio of 1:3. You use 2 cups of sugar. How much flour do you need?",
        question: "Scale the ratio to find flour amount.",
        choices: [
          "3 cups — ignore the sugar amount",
          "6 cups — if sugar doubled from 1 to 2, flour doubles from 3 to 6",
          "4 cups — added 2 + 2",
          "9 cups — tripled flour for some reason"
        ],
        correct: 1,
        why: "Ratio sugar:flour = 1:3. Sugar = 2 cups = 2× the ratio unit. So flour = 3 × 2 = 6 cups. Scale factor is 2 (because 2 ÷ 1 = 2). Multiply both parts of the ratio by the scale factor."
      },
      {
        situation: "A map scale is 1 cm : 5 km. Two cities are 8 cm apart on the map.",
        question: "What is the actual distance between the cities?",
        choices: [
          "40 km — 8 cm × 5 km/cm = 40 km",
          "13 km — added 8 + 5",
          "1.6 km — divided 8 by 5",
          "80 km — doubled for some reason"
        ],
        correct: 0,
        why: "Ratio: 1 cm : 5 km. 8 cm : x km. x = 8 × 5 = 40 km. This is the map ratio applied 8 times. Map ratios work identically to other ratios — multiply the scale by the map distance."
      },
      {
        situation: "A car's gear ratio is 3:1. This means the engine turns 3 times for every 1 wheel rotation. If the engine turns 450 times, how many times does the wheel rotate?",
        question: "Apply the gear ratio.",
        choices: [
          "1,350 rotations — multiplied instead of divided",
          "150 rotations — 450 ÷ 3 = 150",
          "453 rotations — added 450 + 3",
          "300 rotations — used wrong ratio"
        ],
        correct: 1,
        why: "Engine:Wheel = 3:1. Engine turns 450 → wheels turn 450 ÷ 3 = 150. For every 3 engine turns, 1 wheel rotation. Dividing by 3 gives wheel rotations. Gear ratios determine vehicle speed and power."
      },
      {
        situation: "You mix lemonade with a lemon juice to water ratio of 1:4. You have 3 cups of lemon juice.",
        question: "How many total cups of lemonade will you make?",
        choices: [
          "12 cups — 3 cups lemon × 4 = 12 cups water, but total = 3 + 12 = 15",
          "15 cups — lemon:water = 1:4, total parts = 5. Lemon = 3 (3× scale). Total = 5 × 3 = 15",
          "7 cups — added 3 + 4",
          "4 cups — just the water"
        ],
        correct: 1,
        why: "Ratio 1:4 means 1 part lemon + 4 parts water = 5 total parts. Scale factor = 3 (you have 3 cups lemon = 3 × 1 part). Total = 5 parts × 3 = 15 cups. Or: 3 cups lemon + 12 cups water = 15 cups total."
      },
      {
        situation: "Two quantities are in ratio 5:7. If the smaller quantity is 35, what is the larger?",
        question: "Find the larger quantity.",
        choices: [
          "49 — scale factor: 35 ÷ 5 = 7. Larger: 7 × 7 = 49",
          "42 — added 35 + 7",
          "25 — divided by wrong number",
          "245 — multiplied all numbers"
        ],
        correct: 0,
        why: "Smaller quantity = 5 ratio units = 35. Each unit = 35 ÷ 5 = 7. Larger quantity = 7 ratio units = 7 × 7 = 49. The scale factor is 7 (because 35 = 5 × 7). Multiply the larger ratio number by the same scale factor."
      },
      {
        situation: "A school has a student-to-teacher ratio of 24:1. There are 12 teachers.",
        question: "How many students are there?",
        choices: [
          "288 students — 24 students per teacher × 12 teachers = 288",
          "36 students — added 24 + 12",
          "2 students — divided 24 by 12",
          "24 students — ignored the number of teachers"
        ],
        correct: 0,
        why: "Student:teacher = 24:1. Scale factor = 12 (teachers). Students = 24 × 12 = 288. The ratio 24:1 means 24 students for every 1 teacher. With 12 teachers, multiply both sides by 12: 288:12."
      }
    ]
  }

};
