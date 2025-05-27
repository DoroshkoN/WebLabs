const employees = [];

function addEmployee() {
    const surname = document.getElementById('surname').value;
    const contractDate = new Date(document.getElementById('contractDate').value);
    const contractTerm = parseInt(document.getElementById('contractTerm').value);
    const endDate = new Date(contractDate);
    endDate.setFullYear(endDate.getFullYear() + contractTerm);
    
    employees.push({ surname, contractDate, endDate });
    document.getElementById('employeeForm').reset();
    alert('Сотрудник добавлен!');
}

function checkSeason() {
    const season = document.getElementById('season').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    const seasonMonths = {
        spring: [3, 4, 5],
        summer: [6, 7, 8],
        autumn: [9, 10, 11],
        winter: [12, 1, 2]
    };

    const months = seasonMonths[season];
    employees.forEach(emp => {
        const endMonth = emp.endDate.getMonth() + 1; // +1 because getMonth() is 0-indexed
        if (months.includes(endMonth)) {
            results.innerHTML += `<p>${emp.surname} - контракт заканчивается в ${season}.</p>`;
        }
    });
}

function checkQuarter() {
    const quarter = parseInt(document.getElementById('quarter').value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    const quarterMonths = {
        1: [1, 2, 3],
        2: [4, 5, 6],
        3: [7, 8, 9],
        4: [10, 11, 12]
    };

    const months = quarterMonths[quarter];
    employees.forEach(emp => {
        const endMonth = emp.endDate.getMonth() + 1;
        if (months.includes(endMonth)) {
            results.innerHTML += `<p>${emp.surname} - контракт заканчивается в квартале ${quarter}.</p>`;
        }
    });
}

function checkCurrentContracts() {
    const currentDate = new Date(document.getElementById('currentDate').value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    employees.forEach(emp => {
        if (emp.contractDate <= currentDate && emp.endDate >= currentDate) {
            results.innerHTML += `<p>${emp.surname} - контракт действителен.</p>`;
        }
    });
}

function checkEndedContracts() {
    const endDate = new Date(document.getElementById('endDate').value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    employees.forEach(emp => {
        if (emp.endDate <= endDate) {
            results.innerHTML += `<p>${emp.surname} - контракт завершен.</p>`;
        }
    });
}