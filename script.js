// Ensure active tab on page load
document.addEventListener("DOMContentLoaded", () => {
  showTab("task1");
});

// Tab Switching
function showTab(taskId) {
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(taskId).classList.add("active");
  document
    .querySelector(`[onclick="showTab('${taskId}')"]`)
    .classList.add("active");
}

// Task 1: Calculate Discount Percentage
function calculateTask1() {
  const original = parseFloat(
    document.getElementById("original-rate-task1").value
  );
  const discounted = parseFloat(
    document.getElementById("discounted-rate-task1").value
  );
  const result = document.getElementById("result-task1");
  if (
    isNaN(original) ||
    isNaN(discounted) ||
    original <= 0 ||
    discounted < 0 ||
    discounted > original
  ) {
    result.textContent = "Please enter valid rates (Original > Discounted ≥ 0)";
  } else {
    const discount = (((original - discounted) / original) * 100).toFixed(2);
    result.textContent = `Discount: ${discount}%`;
  }
}

function clearTask1() {
  document.getElementById("original-rate-task1").value = "";
  document.getElementById("discounted-rate-task1").value = "";
  document.getElementById("result-task1").textContent = "Discount: --%";
}

// Task 2: Calculate Original Rate
function calculateTask2() {
  const discounted = parseFloat(
    document.getElementById("discounted-rate-task2").value
  );
  const discountPercent = parseFloat(
    document.getElementById("discount-percent-task2").value
  );
  const result = document.getElementById("result-task2");
  if (
    isNaN(discounted) ||
    isNaN(discountPercent) ||
    discounted < 0 ||
    discountPercent < 0 ||
    discountPercent >= 100
  ) {
    result.textContent =
      "Please enter valid inputs (Discounted ≥ 0, 0 ≤ Discount % < 100)";
  } else {
    const original = (discounted / (1 - discountPercent / 100)).toFixed(2);
    result.textContent = `Original Rate: ₹${original}`;
  }
}

function clearTask2() {
  document.getElementById("discounted-rate-task2").value = "";
  document.getElementById("discount-percent-task2").value = "";
  document.getElementById("result-task2").textContent = "Original Rate: ₹--";
}

// Task 3: Calculate Discounted Rate
function calculateTask3() {
  const original = parseFloat(
    document.getElementById("original-rate-task3").value
  );
  const discountPercent = parseFloat(
    document.getElementById("discount-percent-task3").value
  );
  const result = document.getElementById("result-task3");
  if (
    isNaN(original) ||
    isNaN(discountPercent) ||
    original <= 0 ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    result.textContent =
      "Please enter valid inputs (Original > 0, 0 ≤ Discount % ≤ 100)";
  } else {
    const discounted = (original * (1 - discountPercent / 100)).toFixed(2);
    result.textContent = `Discounted Rate: ₹${discounted}`;
  }
}

function clearTask3() {
  document.getElementById("original-rate-task3").value = "";
  document.getElementById("discount-percent-task3").value = "";
  document.getElementById("result-task3").textContent = "Discounted Rate: ₹--";
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
