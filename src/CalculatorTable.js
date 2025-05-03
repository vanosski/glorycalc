import React, { useState } from 'react';
import UnitRow from './UnitRow';
import { unitData } from './unit-data';

const CalculatorTable = () => {
  const initialUnits = Object.keys(unitData).map(unit => ({
    name: unit,
    level: 0,
    star: 0,
  }));

  const [units, setUnits] = useState(initialUnits);
  const [gloryBalance, setGloryBalance] = useState(0);

  const getMaxStars = (level) => {
    return 10; // Max stars is 10 for level 50
  };

  const calculateRow = (unit, level, star) => {
    const totalLevelCost = level > 0 ? unitData[unit].level_cost.slice(0, level).reduce((a, b) => a + b, 0) : 0;
    const totalStarCost = star > 0 ? unitData[unit].star_cost.slice(0, star).reduce((a, b) => a + b, 0) : 0;
    const totalCost = totalLevelCost + totalStarCost;

    const totalStatIncrease = level > 0 ? unitData[unit].stat_increase.slice(0, level).reduce((a, b) => a + b, 0) : 0;

    let protBlessing = 0;
    let attackBlessing = 0;
    if (star > 0) {
      const blessings = unitData[unit].blessing_increase.slice(0, star);
      const totalBlessing = blessings.reduce((a, b) => a + b, 0);
      if (unitData[unit].blessing_type === "protection" || unitData[unit].blessing_type === "both") {
        protBlessing = totalBlessing;
      }
      if (unitData[unit].blessing_type === "attack" || unitData[unit].blessing_type === "both") {
        attackBlessing = totalBlessing;
      }
    }

    return { totalStatIncrease, totalCost, protBlessing, attackBlessing };
  };

  const handleInputChange = (index, field, value) => {
    const newUnits = [...units];
    newUnits[index][field] = parseInt(value) || 0;

    if (field === 'level') {
      const maxStars = getMaxStars(newUnits[index].level);
      if (newUnits[index].star > maxStars) {
        newUnits[index].star = maxStars;
      }
    }

    setUnits(newUnits);
  };

  const handleClear = () => {
    setUnits(units.map(unit => ({ ...unit, level: 0, star: 0 })));
    setGloryBalance(0);
  };

  const handleMaximize = () => {
    setUnits(units.map(unit => ({
      ...unit,
      level: 50,
      star: getMaxStars(50), // Sets stars to 10 for level 50
    })));
  };

  const totals = units.reduce((acc, unit) => {
    const { totalStatIncrease, totalCost, protBlessing, attackBlessing } = calculateRow(unit.name, unit.level, unit.star);
    acc.totalStatIncrease += totalStatIncrease;
    acc.totalCost += totalCost;
    acc.totalProtBlessing += protBlessing;
    acc.totalAttackBlessing += attackBlessing;
    return acc;
  }, { totalStatIncrease: 0, totalCost: 0, totalProtBlessing: 0, totalAttackBlessing: 0 });

  const balance = gloryBalance - totals.totalCost;

  return (
    <table id="calculator-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Troop Type</th>
          <th>Level</th>
          <th>Star Level</th>
          <th>Total Stats</th>
          <th>Glory</th>
          <th>Protection Blessing</th>
          <th>Attack Blessing</th>
        </tr>
      </thead>
      <tbody>
        {units.map((unit, index) => (
          <UnitRow
            key={unit.name}
            index={index + 1}
            unit={unit.name}
            level={unit.level}
            star={unit.star}
            onChange={(field, value) => handleInputChange(index, field, value)}
            getMaxStars={getMaxStars}
          />
        ))}
      </tbody>
      <tfoot>
        <tr id="totals-row">
          <td colSpan="4">Totals</td>
          <td>{totals.totalStatIncrease.toFixed(2)}%</td>
          <td>{totals.totalCost.toLocaleString()}</td>
          <td>{totals.totalProtBlessing.toFixed(2)}%</td>
          <td>{totals.totalAttackBlessing.toFixed(2)}%</td>
        </tr>
        <tr>
          <td colSpan="4">
            Glory Balance: <input
              type="number"
              id="glory-balance"
              placeholder="0"
              value={gloryBalance}
              onChange={(e) => setGloryBalance(parseInt(e.target.value) || 0)}
            />
          </td>
          <td colSpan="4">Left Over: <span id="result-balance">{balance.toLocaleString()}</span></td>
        </tr>
        <tr>
          <td colSpan="8" style={{ textAlign: 'center' }}>
            <button id="clear-btn" className="btn" onClick={handleClear}>Clear Inputs</button>
            <button id="maximize-btn" className="btn" onClick={handleMaximize} style={{ marginLeft: '10px' }}>Maximize Inputs</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CalculatorTable;