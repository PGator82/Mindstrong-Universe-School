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

  // More battles added as lessons are built
};
