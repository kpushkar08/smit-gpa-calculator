

const branchData = {
    cse: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Digital Design & Comp Org", c:4}, {n:"Data Structures", c:4}, {n:"OOP using C++", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"OOP Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"Design & Analysis of Algo", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Algo Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"AI", c:4}, {n:"Formal Lang & Automata", c:4}, {n:"OS", c:4}, {n:"Computer Networks", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"OS Lab", c:1}, {n:"CN Lab", c:1}, {n:"PBL-III", c:1}, {n:"Industrial Training-I", c:1}, {n:"Quant Aptitude-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Software Engg", c:4}, {n:"Compiler Design", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"SE Lab", c:1}, {n:"Compiler Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant Aptitude-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based Elective", c:3}, {n:"Major Project-I", c:10}, {n:"Industrial Training-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    csds: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Digital Design & Comp Org", c:4}, {n:"Data Structures", c:4}, {n:"Intro to Data Science", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"Data Science Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"Design & Analysis of Algo", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Java Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Machine Learning", c:4}, {n:"Formal Lang & Automata", c:4}, {n:"Big Data Analytics", c:4}, {n:"Computer Networks", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"ML Lab", c:1}, {n:"CN Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant Aptitude-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Deep Learning", c:4}, {n:"NLP", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"DL Lab", c:1}, {n:"DW Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant Aptitude-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based Elective", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    ce: {
        3: [ {n:"Engg Maths-III", c:4}, {n:"Strength of Materials", c:4}, {n:"Fluid Mech & Hydraulics", c:4}, {n:"Building Mat & Concrete", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"Planning Lab", c:1}, {n:"Material Testing Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Geotech Engg", c:4}, {n:"Structural Analysis-I", c:4}, {n:"Design of RC Structures", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Surveying Lab", c:1}, {n:"Fluid Mech Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Structural Analysis-II", c:4}, {n:"Engg Hydrology", c:4}, {n:"Highway Engg", c:4}, {n:"Public Health Engg", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"CASA Lab", c:1}, {n:"Geotech Lab", c:1}, {n:"IT-I", c:1}, {n:"PBL-III", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Construction Mgmt", c:2}, {n:"Steel Structures", c:4}, {n:"Estimating & Costing", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"Env Engg Lab", c:1}, {n:"Geoinfo Lab", c:1}, {n:"Quant-II", c:1}, {n:"Mini Project", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:7}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:12} ]
    },
    csaiml: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Machine Learning", c:4}, {n:"Data Structures", c:4}, {n:"OOP using C++", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"OOP Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"Design & Analysis of Algo", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Algo Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"AI", c:4}, {n:"Python Programming", c:4}, {n:"Operating System", c:4}, {n:"Computer Networks", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"ML Lab", c:1}, {n:"CN Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Software Engg", c:4}, {n:"Data Analytics", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"SE Lab", c:1}, {n:"Data Analytics Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:12} ]
    },
    csiot: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Digital Design & Comp Org", c:4}, {n:"Data Structures", c:4}, {n:"OOP Using C++", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"OOP Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"IoT & Microcontrollers", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"IoT Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"AI", c:4}, {n:"Automata & Compiler", c:4}, {n:"Operating System", c:4}, {n:"Computer Networks", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"OS Lab", c:1}, {n:"CN Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Cyber Security (ML)", c:4}, {n:"IoT Comm Protocols", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"CS Lab", c:1}, {n:"IoT Comm Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    ece: {
        3: [ {n:"Engg Maths-III", c:4}, {n:"Electronic Devices", c:4}, {n:"Digital Electronics", c:4}, {n:"Signals & Systems", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"EDC Lab", c:1}, {n:"Digital Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Engg Maths-IV", c:4}, {n:"Electromagnetic Waves", c:4}, {n:"Analog Electronic Cir", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"AEC Lab", c:1}, {n:"Micro Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Antenna Theory", c:4}, {n:"Analog/Digital Comm", c:4}, {n:"DSP", c:4}, {n:"Embedded System", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"HDL Lab", c:1}, {n:"DSP Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:4}, {n:"Microwave Engg", c:4}, {n:"VLSI Design", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:3}, {n:"Microwave Lab", c:1}, {n:"Comm Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:7}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:12} ]
    },
    vlsi: {
        3: [ {n:"Engg Maths-III", c:4}, {n:"Electronic Devices", c:4}, {n:"Digital Electronics", c:4}, {n:"Signals & Systems", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"EDC Lab", c:1}, {n:"Digital Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Engg Maths-IV", c:4}, {n:"Analog Electronic Cir", c:4}, {n:"Micro/ARM Proc", c:4}, {n:"Open Elective-II", c:4}, {n:"Prog Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"AEC Lab", c:1}, {n:"Micro Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Comm Engg", c:4}, {n:"Microfabrication", c:4}, {n:"Verification & Testing", c:4}, {n:"Embedded System", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"HDL Lab", c:1}, {n:"Python Scripting Lab", c:1}, {n:"PBL-III", c:1}, {n:"Quant-I", c:1}, {n:"IT-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Semiconductor Materials", c:4}, {n:"Micro Electronics/VLSI", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"Comm Lab", c:1}, {n:"ARM SoC Lab", c:1}, {n:"Quant-II", c:1}, {n:"Mini Project", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Research Project-I", c:7}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project", c:12} ]
    },
    eee: {
        3: [ {n:"Engg Maths-III", c:4}, {n:"Circuits & Networks", c:4}, {n:"Measurement & Instr", c:4}, {n:"Electrical Machines-I", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"PSPICE Lab", c:1}, {n:"Analog/Digital Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Engg Maths-IV", c:4}, {n:"Signals & Systems", c:4}, {n:"Electrical Machines-II", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Machines Lab", c:1}, {n:"Instr Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Power Electronics", c:4}, {n:"Linear Control Sys", c:4}, {n:"Power System-I", c:4}, {n:"Digital System Design", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"Adv Prog Lab", c:1}, {n:"Control Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Power System-II", c:4}, {n:"Adv Control Theory", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"PE Drives Lab", c:1}, {n:"Power System Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    it: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Digital Design & Comp Org", c:4}, {n:"Data Structures", c:4}, {n:"OOP using C++", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"OOP Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"Java Programming", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Java Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"AI", c:4}, {n:"Formal Lang & Automata", c:4}, {n:"Computer Networks", c:4}, {n:"Software Engg", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"AI Lab", c:1}, {n:"CN Lab", c:1}, {n:"Quant-I", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Operating System", c:4}, {n:"Web Tech & Services", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"OS Lab", c:1}, {n:"Web Tech Lab", c:1}, {n:"Quant-II", c:1}, {n:"Mini Project", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    me: {
        3: [ {n:"Engg Maths-III", c:4}, {n:"Thermal Engg-I", c:4}, {n:"Mechanics of Solids-I", c:4}, {n:"Manufacturing Process", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"SOM Lab", c:1}, {n:"CAE Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Numerical Techniques", c:4}, {n:"Mechanics of Solids-II", c:4}, {n:"Theory of Machines-I", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"Comp Lab", c:1}, {n:"Mfg Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"Thermal Engg-II", c:4}, {n:"Machine Design-I", c:4}, {n:"Theory of Machines-II", c:4}, {n:"Fluid Mech & Machines", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"Thermal Lab", c:1}, {n:"Fluid Lab", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1}, {n:"Quant-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Heat Transfer", c:4}, {n:"Machine Design-II", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"Dynamics Lab", c:1}, {n:"Heat Transfer Lab", c:1}, {n:"Mini Project", c:1}, {n:"Quant-II", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    },
    cst: {
        3: [ {n:"Discrete Maths", c:4}, {n:"Digital Design & Comp Org", c:4}, {n:"Data Structures", c:4}, {n:"OOP using Java", c:4}, {n:"Prog Elective-I", c:4}, {n:"Open Elective-I", c:4}, {n:"DS Lab", c:1}, {n:"Java Lab", c:1}, {n:"PBL-I", c:1} ],
        4: [ {n:"Prob & Stats", c:4}, {n:"Operating System", c:4}, {n:"DBMS", c:4}, {n:"Prog Elective-II", c:4}, {n:"Open Elective-II", c:4}, {n:"UHV-II", c:3}, {n:"OS Lab", c:1}, {n:"DBMS Lab", c:1}, {n:"PBL-II", c:1} ],
        5: [ {n:"AI", c:4}, {n:"Formal Lang & Automata", c:4}, {n:"Software Engg", c:4}, {n:"Computer Networks", c:4}, {n:"Prog Elective-III", c:3}, {n:"Open Elective-III", c:4}, {n:"AI Lab", c:1}, {n:"CN Lab", c:1}, {n:"Quant-I", c:1}, {n:"PBL-III", c:1}, {n:"IT-I", c:1} ],
        6: [ {n:"Industrial Mgmt", c:2}, {n:"Web Tech & Services", c:4}, {n:"Soft Computing", c:4}, {n:"Prog Elective-IV", c:4}, {n:"Prog Elective-V", c:4}, {n:"Open Elective-IV", c:4}, {n:"Web Tech Lab", c:1}, {n:"Soft Comp Lab", c:1}, {n:"Quant-II", c:1}, {n:"Mini Project", c:1} ],
        7: [ {n:"Open Elective-V", c:4}, {n:"Choice Based", c:3}, {n:"Major Project-I", c:10}, {n:"IT-II", c:1} ],
        8: [ {n:"Open Elective-VI", c:4}, {n:"Major Project-II", c:9} ]
    }
};

function initSems() {
    const branch = document.getElementById('branchSelect').value;
    const sem = document.getElementById('semSelect');
    const cycle = document.getElementById('cycleArea');
    sem.innerHTML = '';
    const limit = (branch === 'common') ? 2 : 8;
    const start = (branch === 'common') ? 1 : 3;

    for (let i = start; i <= limit; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = `Semester ${i}`;
        sem.appendChild(opt);
    }
    cycle.style.display = (branch === 'common') ? 'block' : 'none';
    loadSubjects();
}

function loadSubjects() {
    const branch = document.getElementById('branchSelect').value;
    const sem = document.getElementById('semSelect').value;
    const list = document.getElementById('subjectList');
    list.innerHTML = '';

    let subjects = [];
    if (branch === 'common') {
        subjects = firstYear[document.getElementById('cycleSelect').value];
    } else {
        subjects = (branchData[branch] && branchData[branch][sem]) || [];
    }

   subjects.forEach(s => {
    const row = document.createElement('div');

    row.className =
        'flex items-center justify-between p-4 rounded-xl border ' +
        'border-slate-200 bg-white hover:bg-slate-50 ' +
        'dark:border-slate-800/60 dark:bg-slate-800/10 dark:hover:bg-slate-800/30 ' +
        'transition-all';

    row.innerHTML = `
        <div class="flex-1 pr-4">
            <div class="text-xs font-bold text-slate-900 dark:text-slate-200">${s.n}</div>
            <div class="text-[9px] font-bold text-slate-500 dark:text-slate-600 uppercase mt-0.5 tracking-wider">${s.c} Credits</div>
        </div>

        <select onchange="calc()"
            class="grade-in bg-slate-50 dark:bg-[#0b0f1a] border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1.5 text-[11px] font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none w-20 appearance-none text-center cursor-pointer"
            data-credits="${s.c}">
            <option value="">Grade</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
        </select>
    `;

    list.appendChild(row);
});
    
    calc();
}

function calc() {
    const inputs = document.querySelectorAll('.grade-in');
    let pointsEarned = 0, totalCred = 0;
    inputs.forEach(i => {
        if (i.value) {
            const c = parseFloat(i.dataset.credits);
            pointsEarned += grades[i.value] * c;
            totalCred += c;
        }
    });
    document.getElementById('gpaOut').innerText = totalCred ? (pointsEarned / totalCred).toFixed(2) : "0.00";
}

// Initialize on page load
window.onload = initSems;
