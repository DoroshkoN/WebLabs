function calculateHypotenuse() {

    const leg1 = parseFloat(document.getElementById('leg1').value);
    const leg2 = parseFloat(document.getElementById('leg2').value);
    

    if (isNaN(leg1) || isNaN(leg2) || leg1 <= 0 || leg2 <= 0) {
        document.getElementById('result').textContent = "Пожалуйста, введите положительные числа для обоих катетов!";
        return;
    }
    

    const hypotenuse = Math.sqrt(leg1 * leg1 + leg2 * leg2);
    

    document.getElementById('result').textContent = 
        `Гипотенуза треугольника с катетами ${leg1} и ${leg2} равна ${hypotenuse.toFixed(2)}`;
}