import { j as json } from './index-36410280.js';

const stateCategory = [
  { state: 1, category: "S" },
  { state: 2, category: "S" },
  { state: 3, category: "G" },
  { state: 4, category: "G" },
  { state: 5, category: "S" },
  { state: 6, category: "G" },
  { state: 7, category: "G" },
  { state: 8, category: "G" },
  { state: 9, category: "G" },
  { state: 10, category: "G" },
  { state: 11, category: "N" },
  { state: 12, category: "N" },
  { state: 13, category: "N" },
  { state: 14, category: "N" },
  { state: 15, category: "N" },
  { state: 16, category: "N" },
  { state: 17, category: "N" },
  { state: 18, category: "N" },
  { state: 19, category: "G" },
  { state: 20, category: "G" },
  { state: 21, category: "G" },
  { state: 22, category: "G" },
  { state: 23, category: "G" },
  { state: 24, category: "G" },
  { state: 27, category: "G" },
  { state: 28, category: "G" },
  { state: 29, category: "G" },
  { state: 30, category: "G" },
  { state: 31, category: "I" },
  { state: 32, category: "G" },
  { state: 33, category: "G" },
  { state: 34, category: "G" },
  { state: 35, category: "I" },
  { state: 36, category: "G" },
  { state: 37, category: "G" },
  { state: 38, category: "G" }
];
const states = [
  { value: 35, name: "ANDAMAN and NICOBAR ISLANDS" },
  { value: 28, name: "ANDHRA PRADESH" },
  { value: 12, name: "ARUNACHAL PRADESH" },
  { value: 18, name: "ASSAM" },
  { value: 10, name: "BIHAR" },
  { value: 4, name: "CHANDIGARH" },
  { value: 22, name: "CHHATTISGARH" },
  { value: 30, name: "GOA" },
  { value: 24, name: "GUJARAT" },
  { value: 6, name: "HARYANA" },
  { value: 2, name: "HIMACHAL PRADESH" },
  { value: 1, name: "JAMMU and KASHMIR" },
  { value: 20, name: "JHARKHAND" },
  { value: 29, name: "KARNATAKA" },
  { value: 32, name: "KERALA" },
  { value: 37, name: "LADAKH" },
  { value: 31, name: "LAKSHADWEEP" },
  { value: 23, name: "MADHYA PRADESH" },
  { value: 27, name: "MAHARASHTRA" },
  { value: 14, name: "MANIPUR" },
  { value: 17, name: "MEGHALAYA" },
  { value: 15, name: "MIZORAM" },
  { value: 13, name: "NAGALAND" },
  { value: 7, name: "NCT OF DELHI" },
  { value: 21, name: "ORISSA" },
  { value: 34, name: "PUDUCHERRY" },
  { value: 3, name: "PUNJAB" },
  { value: 8, name: "RAJASTHAN" },
  { value: 11, name: "SIKKIM" },
  { value: 33, name: "TAMIL NADU" },
  { value: 36, name: "TELANGANA" },
  { value: 38, name: "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU" },
  { value: 16, name: "TRIPURA" },
  { value: 9, name: "UTTAR PRADESH" },
  { value: 5, name: "UTTARAKHAND" },
  { value: 19, name: "WEST BENGAL" }
];
const irradiation = [
  { state: 1, irradiation: 1046.26 },
  { state: 2, irradiation: 1046.26 },
  { state: 3, irradiation: 1156.39 },
  { state: 4, irradiation: 1156.39 },
  { state: 5, irradiation: 1046.26 },
  { state: 6, irradiation: 1156.39 },
  { state: 7, irradiation: 1156.39 },
  { state: 8, irradiation: 1266.52 },
  { state: 9, irradiation: 1156.39 },
  { state: 10, irradiation: 1156.39 },
  { state: 11, irradiation: 1046.26 },
  { state: 12, irradiation: 1046.26 },
  { state: 13, irradiation: 1046.26 },
  { state: 14, irradiation: 1046.26 },
  { state: 15, irradiation: 1046.26 },
  { state: 16, irradiation: 1046.26 },
  { state: 17, irradiation: 1046.26 },
  { state: 18, irradiation: 1046.26 },
  { state: 19, irradiation: 1156.39 },
  { state: 20, irradiation: 1156.39 },
  { state: 21, irradiation: 1156.39 },
  { state: 22, irradiation: 1266.52 },
  { state: 23, irradiation: 1266.52 },
  { state: 24, irradiation: 1266.52 },
  { state: 25, irradiation: 1266.52 },
  { state: 26, irradiation: 1266.52 },
  { state: 27, irradiation: 1266.52 },
  { state: 28, irradiation: 1266.52 },
  { state: 29, irradiation: 1266.52 },
  { state: 30, irradiation: 1266.52 },
  { state: 31, irradiation: 1266.52 },
  { state: 32, irradiation: 1266.52 },
  { state: 33, irradiation: 1266.52 },
  { state: 34, irradiation: 1266.52 },
  { state: 35, irradiation: 1156.39 },
  { state: 36, irradiation: 1266.52 }
];
const costData = [
  { category: "G", rangeFrom: 1, rangeTo: 1, cost: 46923 },
  { category: "I", rangeFrom: 1, rangeTo: 1, cost: 51616 },
  { category: "N", rangeFrom: 1, rangeTo: 1, cost: 51616 },
  { category: "S", rangeFrom: 1, rangeTo: 1, cost: 51616 },
  { category: "G", rangeFrom: 1, rangeTo: 2, cost: 43140 },
  { category: "I", rangeFrom: 1, rangeTo: 2, cost: 47447 },
  { category: "N", rangeFrom: 1, rangeTo: 2, cost: 47447 },
  { category: "S", rangeFrom: 1, rangeTo: 2, cost: 47447 },
  { category: "G", rangeFrom: 2, rangeTo: 3, cost: 42020 },
  { category: "I", rangeFrom: 2, rangeTo: 3, cost: 46216 },
  { category: "N", rangeFrom: 2, rangeTo: 3, cost: 46216 },
  { category: "S", rangeFrom: 2, rangeTo: 3, cost: 46216 },
  { category: "G", rangeFrom: 3, rangeTo: 10, cost: 40991 },
  { category: "I", rangeFrom: 3, rangeTo: 10, cost: 45087 },
  { category: "N", rangeFrom: 3, rangeTo: 10, cost: 45087 },
  { category: "S", rangeFrom: 3, rangeTo: 10, cost: 45087 },
  { category: "G", rangeFrom: 10, rangeTo: 100, cost: 38236 },
  { category: "I", rangeFrom: 10, rangeTo: 100, cost: 42056 },
  { category: "N", rangeFrom: 10, rangeTo: 100, cost: 42056 },
  { category: "S", rangeFrom: 10, rangeTo: 100, cost: 42056 },
  { category: "G", rangeFrom: 100, rangeTo: 500, cost: 35886 },
  { category: "I", rangeFrom: 100, rangeTo: 500, cost: 39467 },
  { category: "N", rangeFrom: 100, rangeTo: 500, cost: 39467 },
  { category: "S", rangeFrom: 100, rangeTo: 500, cost: 39467 }
];
async function POST(requestEvent) {
  const body = await requestEvent.request.json();
  let plantSize;
  let outputWithoutSubsidy;
  const stateNum = getStateNumFromName(body.state);
  const category = getStateCategory(stateNum);
  if (body.selectedOption === 0) {
    plantSize = body.area * body.areaPercentage / 1e3;
    if (plantSize > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
    const cost1 = getBenchmark(plantSize, category);
    outputWithoutSubsidy = plantSize * cost1;
  } else if (body.selectedOption === 1) {
    plantSize = body.capacity;
    if (plantSize > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
    const cost2 = getBenchmark(plantSize, category);
    outputWithoutSubsidy = Number(plantSize * cost2);
  } else {
    plantSize = getPlantSizeBudget(body.budget, category);
    if (body.capacity > 500) {
      json(
        { message: "Maximum limit of capacity cannot go beyound 500kW" },
        { status: 204 }
      );
    }
  }
  const benchmark = getBenchmark(plantSize, category);
  const outputIrradiation = getIrradiation(stateNum);
  const generate = outputIrradiation * 36e-4 * 1.1;
  const outputElectricityAnnual = Math.round(generate * plantSize * 300);
  const outputElectricityLifetime = outputElectricityAnnual * 25;
  const a = outputElectricityLifetime * 0.82;
  const co2 = Math.round(a / 1e3);
  const trees = Math.round(a / 625);
  const outputSavingAnnual = Math.round(
    outputElectricityAnnual * body.electricityCost
  );
  const outputSavingMonthly = outputElectricityAnnual / 12 * body.electricityCost;
  const outputSubsidy = getProjectSubsidizedAmount(
    plantSize,
    body.customerType,
    benchmark
  );
  const outputSavingLifetime = outputSavingAnnual * 25;
  return json({
    sate: body.state,
    outputIrradiation,
    generate: parseFloat(Number(generate).toFixed(1)),
    plantSize,
    benchmark,
    outputSubsidy,
    outputElectricityAnnual,
    outputElectricityLifetime,
    electricityCost: body.electricityCost,
    outputSavingMonthly,
    outputSavingAnnual,
    outputSavingLifetime,
    co2,
    trees,
    outputWithoutSubsidy
    // subsidyAmount,
    // subsidyForHeading,
  });
}
function getStateNumFromName(stateName) {
  let num = 0;
  for (let i = 0; i < states.length; i++) {
    if (states[i].name === stateName) {
      num = states[i].value;
      return states[i].value;
    }
  }
  return num;
}
function getBenchmark(plantSize, category) {
  let benchmark = 0;
  for (let i = 0; i < costData.length; i++) {
    if (plantSize == 1) {
      if (costData[i].category == category && plantSize == costData[i].rangeTo) {
        const cost = costData[i].cost;
        benchmark = cost;
      }
    } else {
      if (costData[i].category == category && plantSize > costData[i].rangeFrom && plantSize <= costData[i].rangeTo) {
        const cost = costData[i].cost;
        benchmark = cost;
      }
    }
  }
  return benchmark;
}
function getStateCategory(state) {
  const category = "";
  for (let i = 0; i < stateCategory.length; i++) {
    if (stateCategory[i].state == state) {
      return stateCategory[i].category;
    }
  }
  return category;
}
function getIrradiation(state) {
  let irr = 0;
  for (let i = 0; i < irradiation.length; i++) {
    if (irradiation[i].state == state) {
      irr = irradiation[i].irradiation;
    }
  }
  return irr;
}
function getPlantSizeBudget(budget, category) {
  const capacity_array = [];
  let largest = 0;
  let x = 0;
  for (let i = 0; i < costData.length; i++) {
    if (costData[i].category == category) {
      const cost = costData[i].cost;
      const min_budget = costData[i].rangeFrom * cost;
      const max_budget = costData[i].rangeTo * cost;
      if (budget >= min_budget && budget <= max_budget) {
        const capacity_val = budget / cost;
        capacity_array[x] = capacity_val;
        x = x + 1;
      }
    }
  }
  for (let i = 0; i < capacity_array.length; i++) {
    if (largest < capacity_array[i]) {
      largest = capacity_array[i];
    }
  }
  return largest;
}
function getProjectSubsidizedAmount(plantSize, customerType, benchmark) {
  let projectCost = 0;
  if (customerType === "Residential") {
    if (plantSize <= 3) {
      const subsidy = 40;
      const subsidyAmount = 1 - subsidy / 100;
      projectCost = benchmark * plantSize * subsidyAmount;
    } else if (plantSize > 3 && plantSize <= 10) {
      const subsidy = 40;
      const subsidy2 = 20;
      const subsidyAmount2 = 1 - subsidy2 / 100;
      const plantSizeLeft = plantSize - 3;
      const projectCost2 = Number(benchmark * plantSizeLeft * subsidyAmount2);
      const projectCost1 = Number(benchmark * 3 * subsidy);
      projectCost = projectCost1 + projectCost2;
    } else if (plantSize > 10) {
      const subsidy = 40;
      const subsidy2 = 20;
      const subsidyAmount2 = 1 - subsidy2 / 100;
      const plantSizeLeft = plantSize - 10;
      const projectCost2 = benchmark * 7 * subsidyAmount2;
      const projectCost1 = benchmark * 3 * subsidy;
      const projectCost3 = benchmark * plantSizeLeft;
      projectCost = Number(projectCost1 + projectCost2 * projectCost3);
    }
  } else {
    projectCost = Number(benchmark * plantSize);
  }
  return Math.round(projectCost);
}

export { POST };
//# sourceMappingURL=_server.ts-5f441962.js.map
